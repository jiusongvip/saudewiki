#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""通过百度健康疾病目录的数据接口，快速定位疾病医典的真实链接。

用法：
    python3 find_disease.py <疾病名>            # 精确查找，未命中时给出相近条目
    python3 find_disease.py --refresh <疾病名>  # 强制刷新本地索引后再查找
    python3 find_disease.py                     # 仅构建并报告索引规模

接口：
    GET https://jiankang.baidu.com/widescreen/api/entitylist
        ?tabType=1&navType=<1|2|3>&itemType=<分类名>
    navType：1=按类型，2=按部位，3=按科室；tabType=1 为“查疾病”。

脚本枚举目录页的全部分类，构建「疾病名 -> 医典链接」索引。只返回接口真实给出的
链接（形如 https://www.baidu.com/bh/dict/ydxx_<长数字编号>），不猜测、不拼接编号。
"""
import json
import os
import ssl
import sys
import time
import urllib.parse
import urllib.request

API = "https://jiankang.baidu.com/widescreen/api/entitylist"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36")
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".entitylist_cache.json")
CACHE_TTL = 24 * 3600
CTX = ssl._create_unverified_context()


def fetch(nav_type, item_type=None):
    params = {"tabType": "1", "navType": str(nav_type)}
    if item_type:
        params["itemType"] = item_type
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20, context=CTX) as resp:
        return json.loads(resp.read().decode("utf-8"))


def build_index():
    index = {}
    for nav_type in (1, 2, 3):
        base = fetch(nav_type)
        for item in base.get("itemList", []):
            data = fetch(nav_type, item["name"])
            for group in data.get("entityList", {}).values():
                for entry in group:
                    index.setdefault(entry["name"], entry["url"])
    return index


def load_index(refresh=False):
    if not refresh and os.path.exists(CACHE):
        try:
            with open(CACHE, encoding="utf-8") as fh:
                cached = json.load(fh)
            if time.time() - cached.get("built_at", 0) < CACHE_TTL:
                return cached["index"]
        except (ValueError, KeyError):
            pass
    index = build_index()
    try:
        with open(CACHE, "w", encoding="utf-8") as fh:
            json.dump({"built_at": time.time(), "index": index}, fh, ensure_ascii=False)
    except OSError:
        pass
    return index


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

    print("未精确匹配: %s" % target)
    near = [name for name in index if target in name or name in target][:10]
    if near:
        print("相近条目: %s" % "、".join(near))
    print("提示: 索引只覆盖疾病目录里的规范词条；若为俗名或索引缺失，"
          "请改用浏览器在百度搜索该病名、定位医典卡片获取链接。")
    sys.exit(2)


if __name__ == "__main__":
    main()
