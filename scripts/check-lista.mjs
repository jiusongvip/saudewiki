#!/usr/bin/env node
/**
 * 校对 docs/lista-100-doencas-brasil.md 与 src/data/diseases.ts 的一致性。
 *
 * 词条库在持续增补，清单里的「待新增」会不断变成「已有」。这个脚本只做一件事：
 * 告诉你有多少条已经补上、哪些行还写着旧状态。
 *
 * 用法：
 *   node scripts/check-lista.mjs
 * 退出码 0 = 状态与词条库一致；1 = 有漂移（清单需要更新）。
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOC = join(root, 'docs/lista-100-doencas-brasil.md');
const DATA = join(root, 'src/data/diseases.ts');

const norm = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** slug -> 规范化后的 name */
const entries = new Map();
{
  const lines = readFileSync(DATA, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s+slug: '([^']+)'/);
    if (!m) continue;
    let name = '';
    for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
      const n = lines[j].match(/^\s+name: '([^']+)'/);
      if (n) {
        name = n[1];
        break;
      }
    }
    entries.set(m[1], norm(name));
  }
}

const md = readFileSync(DOC, 'utf8');
const section = md.split('## 二、清单（100 项）')[1]?.split('## 三、')[0];
if (!section) {
  console.error('未找到「二、清单」章节，文档结构可能被改动。');
  process.exit(2);
}

const rows = section
  .split('\n')
  .filter((l) => /^\|\s*\d+\s*\|/.test(l))
  .map((l) => {
    const cells = l.split('|').map((c) => c.trim());
    return { n: Number(cells[1]), pt: cells[2], status: cells[4] ?? '' };
  });

const slugOf = (row) => {
  const m = row.status.match(/`([^`]+)`/);
  return m ? m[1] : null;
};

const done = rows.filter((r) => r.status.includes('✅'));
const merged = rows.filter((r) => r.status.includes('◐'));
const missing = rows.filter((r) => r.status.includes('➕'));

const covered = new Set();
const broken = [];
for (const r of [...done, ...merged]) {
  const s = slugOf(r);
  if (s && entries.has(s)) covered.add(s);
  else broken.push(`#${r.n} ${r.pt} → ${s ?? '(无 slug)'}`);
}

const drifted = [];
for (const r of missing) {
  const byName = [...entries].find(([, name]) => name === norm(r.pt));
  if (byName) drifted.push(`#${r.n} ${r.pt} → 已存在 ${byName[0]}`);
}

const uncovered = [...entries.keys()].filter((s) => !covered.has(s)).sort();

console.log(`词条库：${entries.size} 条`);
console.log(`清单 100 项：已有 ${done.length} ／ 仅合并条目 ${merged.length} ／ 空缺 ${missing.length}`);
console.log(`清单覆盖到的词条：${covered.size} 条；未进榜的既有词条：${uncovered.length} 条`);
if (uncovered.length) console.log(`  未进榜：${uncovered.join(', ')}`);

if (broken.length) {
  console.log(`\n⚠️  清单引用了不存在的词条（${broken.length}）：`);
  for (const b of broken) console.log(`   ${b}`);
}
if (drifted.length) {
  console.log(`\n⚠️  标为「待新增」但其实已经有了（${drifted.length}）：`);
  for (const d of drifted) console.log(`   ${d}`);
}

const ok = broken.length === 0 && drifted.length === 0;
console.log(ok ? '\n✅ 清单状态与词条库一致。' : '\n❌ 清单需要更新（见上）。');
process.exit(ok ? 0 : 1);
