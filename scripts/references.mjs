#!/usr/bin/env node
// Source library CLI for the Saudewiki disease encyclopedia and derived articles.
//
// The library is the single source of truth for every citation that may appear
// in `references` (see src/types.ts -> Reference). Writers look a source up here
// first instead of searching again, and the gate makes sure no citation reaches
// the data files without being registered here first.
//
//   node scripts/references.mjs search <term>   look up sources by topic/disease/text
//   node scripts/references.mjs add '<json>'    append one validated source
//   node scripts/references.mjs import          pull unregistered urls from src/data
//   node scripts/references.mjs check           validate the library and the data files

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LIB_PATH = join(ROOT, 'skills/_shared/sources/library.json');
const DATA_DIR = join(ROOT, 'src/data');

function loadLib() {
  return JSON.parse(readFileSync(LIB_PATH, 'utf8'));
}

function saveLib(lib) {
  lib.updatedAt = new Date().toISOString().slice(0, 10);
  lib.sources.sort((a, b) => a.id.localeCompare(b.id));
  writeFileSync(LIB_PATH, JSON.stringify(lib, null, 2) + '\n', 'utf8');
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.ts')) out.push(p);
  }
  return out;
}

function pick(block, key) {
  const re = new RegExp(`${key}\\s*:\\s*(['"])([^'"]*)\\1`);
  const m = block.match(re);
  return m ? m[2] : null;
}

// Only citations inside a `references: [...]` array count — other objects with a
// bare `url:` (for example the site url in src/data/site.ts) must be ignored.
function extractRefs(text) {
  const refs = [];
  for (const arr of text.matchAll(/references\s*:\s*\[([\s\S]*?)\]/g)) {
    for (const m of arr[1].matchAll(/\{[^{}]*\}/gs)) {
      const block = m[0];
      const url = pick(block, 'url');
      if (!url || !/^https?:\/\//.test(url)) continue;
      refs.push({ url, label: pick(block, 'label') || '', publisher: pick(block, 'publisher') || '' });
    }
  }
  return refs;
}

function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

function hostAllowed(url, allowed) {
  const h = hostOf(url);
  return !!h && allowed.some((a) => h === a || h.endsWith('.' + a));
}

function slugId(label, url, taken) {
  const base = (label || hostOf(url) + '-' + new URL(url).pathname.split('/').filter(Boolean).pop())
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'source';
  let id = base;
  let n = 2;
  while (taken.has(id)) id = `${base}-${n++}`;
  return id;
}

function dataRefs() {
  const seen = new Map();
  for (const f of walk(DATA_DIR)) {
    for (const r of extractRefs(readFileSync(f, 'utf8'))) {
      if (!seen.has(r.url)) seen.set(r.url, { ...r, file: relative(ROOT, f) });
    }
  }
  return seen;
}

function cmdImport() {
  const lib = loadLib();
  const known = new Set(lib.sources.map((s) => s.url));
  const found = dataRefs();
  let added = 0;
  for (const [url, r] of found) {
    if (known.has(url)) continue;
    const taken = new Set(lib.sources.map((s) => s.id));
    lib.sources.push({
      id: slugId(r.label, url, taken),
      label: r.label,
      url,
      publisher: r.publisher,
      host: hostOf(url),
      lang: 'pt',
      topics: [],
      diseases: [],
      supports: [],
      verifiedAt: null,
      status: 'imported',
    });
    added++;
  }
  saveLib(lib);
  console.log(`import: ${found.size} url referenciadas em src/data, ${added} nova(s) adicionada(s), ${lib.sources.length} no total.`);
}

function cmdCheck() {
  const lib = loadLib();
  const findings = [];
  const ids = new Set();
  const urls = new Set();
  for (const s of lib.sources) {
    if (ids.has(s.id)) findings.push(`id duplicado: ${s.id}`);
    ids.add(s.id);
    if (urls.has(s.url)) findings.push(`url duplicada: ${s.url}`);
    urls.add(s.url);
    if (!hostAllowed(s.url, lib.allowedHosts)) findings.push(`host fora da lista permitida: ${s.url} (${s.id})`);
  }
  const referenced = dataRefs();
  for (const [url, r] of referenced) {
    if (!urls.has(url)) findings.push(`url referenciada mas ausente da biblioteca: ${url} (${r.file})`);
  }
  if (findings.length) {
    console.error(`check:references encontrou ${findings.length} problema(s):`);
    for (const x of findings) console.error(`  - ${x}`);
    process.exit(1);
  }
  console.log(`check:references ok: ${lib.sources.length} fonte(s) na biblioteca, ${referenced.size} url referenciada(s) em src/data.`);
}

function cmdSearch(term) {
  const lib = loadLib();
  const q = term.toLowerCase();
  const hits = lib.sources.filter((s) => JSON.stringify(s).toLowerCase().includes(q));
  if (!hits.length) {
    console.log(`search "${term}": 0 fonte(s).`);
    return;
  }
  for (const s of hits) {
    console.log(`- ${s.id} [${s.status}] ${s.label}`);
    console.log(`  ${s.url}`);
    console.log(`  temas: ${(s.topics || []).join(', ') || '-'} | doenças: ${(s.diseases || []).join(', ') || '-'}`);
    if (s.supports && s.supports.length) {
      for (const line of s.supports) console.log(`    · ${line}`);
    }
  }
  console.log(`search "${term}": ${hits.length} fonte(s).`);
}

function cmdAdd(jsonArg) {
  const lib = loadLib();
  let entry;
  try {
    entry = JSON.parse(jsonArg);
  } catch (err) {
    console.error(`add: JSON inválido — ${err.message}`);
    process.exit(1);
  }
  if (!entry.url || !entry.label) {
    console.error('add: campos obrigatórios ausentes (url, label).');
    process.exit(1);
  }
  if (!hostAllowed(entry.url, lib.allowedHosts)) {
    console.error(`add: host fora da lista permitida — ${entry.url}`);
    process.exit(1);
  }
  if (lib.sources.some((s) => s.url === entry.url)) {
    console.error(`add: url já registrada — ${entry.url}`);
    process.exit(1);
  }
  const taken = new Set(lib.sources.map((s) => s.id));
  lib.sources.push({
    id: entry.id || slugId(entry.label, entry.url, taken),
    label: entry.label,
    url: entry.url,
    publisher: entry.publisher || '',
    host: hostOf(entry.url),
    lang: entry.lang || 'pt',
    topics: entry.topics || [],
    diseases: entry.diseases || [],
    supports: entry.supports || [],
    verifiedAt: entry.verifiedAt || new Date().toISOString().slice(0, 10),
    status: entry.status || 'verified',
  });
  saveLib(lib);
  console.log(`add: fonte registrada — ${entry.url}`);
}

const [cmd, ...rest] = process.argv.slice(2);
switch (cmd) {
  case 'import':
    cmdImport();
    break;
  case 'check':
    cmdCheck();
    break;
  case 'search':
    if (!rest.length) {
      console.error('search: informe um termo de busca.');
      process.exit(1);
    }
    cmdSearch(rest.join(' '));
    break;
  case 'add':
    if (!rest.length) {
      console.error('add: informe um objeto JSON.');
      process.exit(1);
    }
    cmdAdd(rest.join(' '));
    break;
  default:
    console.error('uso: node scripts/references.mjs <search|add|import|check> [...]');
    process.exit(1);
}
