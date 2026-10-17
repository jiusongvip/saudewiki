#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""通过百度健康疾病目录的数据接口，快速定位疾病医典的真实链接。

用法：
    python3 find_disease.py <疾病名>            # 精确查找（含俗名/缩写别名解析），未命中时给出相近条目
    python3 find_disease.py --refresh <疾病名>  # 强制刷新本地索引后再查找
    python3 find_disease.py                     # 仅构建并报告索引规模

接口：
    GET https://jiankang.baidu.com/widescreen/api/entitylist
        ?tabType=1&navType=<1|2|3>&itemType=<分类名>
    navType：1=按类型，2=按部位，3=按科室；tabType=1 为“查疾病”。

脚本枚举目录页的全部分类（55 个请求，多线程并发并带重试），构建「疾病名 -> 医典链接」
索引。只返回接口真实给出的链接（形如 https://www.baidu.com/bh/dict/ydxx_<长数字编号>），
不猜测、不拼接编号。

覆盖说明：接口每个分类返回的词条是封顶的（例如「呼吸内科」只回 62 条、无分页字段），
因此部分常见词条（如「慢性阻塞性肺病」「发热」）结构性缺失；命中不了时只能改用浏览器
在百度搜索兜底，脚本会直接打印搜索直达链接。
"""
import json
import os
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

API = "https://jiankang.baidu.com/widescreen/api/entitylist"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36")
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".entitylist_cache.json")
CACHE_TTL = 24 * 3600
CTX = ssl._create_unverified_context()

# 并发与超时：单请求正常 0.4 至 3.7 秒，端点偶发超时，故给短超时 + 少量重试。
WORKERS = 8
FETCH_TIMEOUT = 8
FETCH_ATTEMPTS = 3

# 俗名 / 缩写 -> 医典规范词条名。按顺序取第一个在索引里存在的候选；
# 都不存在时仍按未命中处理（例如「发热」本身也不在封顶的索引里）。
ALIASES = {
    "感冒": ["上呼吸道感染"],
    "乙肝": ["慢性乙型病毒性肝炎", "慢性乙型肝炎", "乙型病毒性肝炎"],
    "丙肝": ["丙型病毒性肝炎"],
    "冠心病": ["冠状动脉粥样硬化性心脏病"],
    "发烧": ["发热"],
}


def fetch(nav_type, item_type=None):
    params = {"tabType": "1", "navType": str(nav_type)}
    if item_type:
        params["itemType"] = item_type
    url = API + "?" + urllib.parse.urlencode(params)
    last_err = None
    for attempt in range(FETCH_ATTEMPTS):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=FETCH_TIMEOUT, context=CTX) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except (urllib.error.URLError, TimeoutError, OSError, ValueError) as err:
            last_err = err
            if attempt < FETCH_ATTEMPTS - 1:
                time.sleep(0.4 * (attempt + 1))
    raise last_err


def try_fetch(nav_type, item_type=None):
    """返回 (data, None) 或 (None, error)：让单个分类的失败不中断整轮构建。"""
    try:
        return fetch(nav_type, item_type), None
    except Exception as err:  # noqa: BLE001 - 兜底网络异常，交由调用方汇总
        return None, err


def build_index():
    """并发抓取全部分类，返回 (index, failures)。"""
    index = {}
    failures = []
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        bases = list(pool.map(lambda nav: try_fetch(nav), (1, 2, 3)))
        jobs = []
        for nav, (base, err) in zip((1, 2, 3), bases):
            if err or base is None:
                failures.append(("navType=%d" % nav, err))
                continue
            for item in base.get("itemList", []):
                jobs.append((nav, item["name"]))
        futures = {pool.submit(try_fetch, nav, name): (nav, name) for nav, name in jobs}
        for fut in as_completed(futures):
            nav, name = futures[fut]
            data, err = fut.result()
            if err or data is None:
                failures.append((name, err))
                continue
            for group in data.get("entityList", {}).values():
                for entry in group:
                    index.setdefault(entry["name"], entry["url"])
    return index, failures


def load_index(refresh=False):
    stale = None
    if os.path.exists(CACHE):
        try:
            with open(CACHE, encoding="utf-8") as fh:
                cached = json.load(fh)
            if cached.get("index"):
                stale = cached["index"]
            if not refresh and stale and time.time() - cached.get("built_at", 0) < CACHE_TTL:
                return stale
        except (ValueError, KeyError, OSError):
            pass
    try:
        index, failures = build_index()
    except Exception as err:  # noqa: BLE001 - 构建整体失败时回退陈旧缓存
        if stale:
            print("提示: 索引构建失败(%s)，改用本地缓存副本。" % err, file=sys.stderr)
            return stale
        raise
    if not index:
        if stale:
            print("提示: 索引构建结果为空，改用本地缓存副本。", file=sys.stderr)
            return stale
        return index
    if failures:
        print("提示: 本次有 %d 个分类抓取失败，暂不写缓存以便下次重试。" % len(failures),
              file=sys.stderr)
        return index
    try:
        with open(CACHE, "w", encoding="utf-8") as fh:
            json.dump({"built_at": time.time(), "index": index}, fh, ensure_ascii=False)
    except OSError:
        pass
    return index


def resolve_alias(target, index):
    for canonical in ALIASES.get(target, []):
        if canonical in index:
            return canonical
    return None


def main():
    args = sys.argv[1:]
    refresh = "--refresh" in args
    args = [a for a in args if a != "--refresh"]
    index = load_index(refresh)

    if not args:
        print("索引条目总数: %d" % len(index))
        return

    target = args[0]
    if target in index:
        print("找到: %s" % target)
        print("链接: %s" % index[target])
        return

    alias = resolve_alias(target, index)
    if alias:
        print("别名解析: %s -> %s" % (target, alias))
        print("链接: %s" % index[alias])
        return

    print("未精确匹配: %s" % target)
    near = [name for name in index if target in name or name in target][:10]
    if near:
        print("相近条目: %s" % "、".join(near))
    print("百度搜索直达: https://www.baidu.com/s?wd=%s" % urllib.parse.quote(target))
    print("提示: 索引只覆盖疾病目录里的规范词条；若为俗名或索引缺失，"
          "请用浏览器打开上面的百度搜索链接，从上到下扫描结果页定位医典卡片。")
    sys.exit(2)


if __name__ == "__main__":
    main()
