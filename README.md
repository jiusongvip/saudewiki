# Saudewiki

Plataforma gratuita de informação em saúde em português (pt-BR), voltada ao público brasileiro.
Organizada em três pilares que se ligam entre si: **enciclopédia de doenças**, **artigos** e **temas de saúde**.

Site estático (Astro), com cada rota gerada como HTML real no momento do build — sem renderização no cliente.

---

## Comandos

```bash
npm install       # instala dependências
npm run dev       # servidor de desenvolvimento
npm run build     # gera o site estático em dist/
npm run preview   # serve o dist/ localmente
npm run check     # checagem de tipos (astro check)
```

---

## Estrutura

```
src/
  types.ts                  # contrato de conteúdo: Disease, Article, Topic, ReviewStatus
  data/
    site.ts                 # identidade do site (nome, domínio, locale) — placeholder
    diseases.ts             # entradas da enciclopédia
    articles.ts             # artigos
    topics.ts               # temas
  lib/
    content.ts              # ÚNICO ponto de leitura dos dados + gate de status editorial
  layouts/
    BaseLayout.astro        # head, SEO, JSON-LD (@graph), navegação, rodapé
  components/
    Nav.astro  Footer.astro  SearchBox.astro  Breadcrumbs.astro
    DiseaseCard.astro  ArticleCard.astro  TopicCard.astro
    Toc.astro  ReviewMeta.astro  PlaceholderNotice.astro  ReferenceList.astro
  pages/
    index.astro                       → /
    doencas/index.astro               → /doencas/
    doencas/[slug].astro              → /doencas/dengue/
    artigos/index.astro               → /artigos/
    artigos/[slug].astro              → /artigos/<slug>/
    temas/index.astro                 → /temas/
    temas/[slug].astro                → /temas/<slug>/
    busca.astro                       → /busca/?q=  (noindex)
    sobre.astro  politica-editorial.astro
    politica-de-privacidade.astro  contato.astro
    404.astro
```

---

## Regras que o código já garante

**1. Rascunho não existe no build.**
`src/lib/content.ts` é o único módulo que lê `src/data/*`. Ele exporta apenas o que não está em `draft`.
Um rascunho, portanto, não entra em lista, não gera rota, não pode ser linkado e não aparece no sitemap.

**2. Página de busca não é indexada.**
`/busca/` é renderizada no cliente a partir de um índice embutido no build. Ela tem `robots: noindex, follow`
e é excluída do sitemap. Todo conteúdo pesquisável tem endereço próprio.

**3. Nenhuma credencial médica inventada.**
`reviewer: null` renderiza "revisão médica: ainda não realizada". O `@graph` não emite `reviewedBy`.
Enquanto não houver revisor nomeado, as páginas exibem o aviso de material de demonstração.

**4. Links internos só apontam para o que existe.**
`resolveDiseases()` / `resolveArticles()` / `resolveTopics()` descartam slugs inexistentes silenciosamente,
em vez de gerar links quebrados.

**5. Datas são formatadas sem `Intl`.**
`formatDatePtBr()` usa operações de string puras. O ICU do Node (build) e o do navegador podem divergir, o que
faria o texto pré-renderizado diferir do texto renderizado no cliente.

---

## Verificação (2026-10-13)

`npm run build` → 24 páginas, exit 0. Gate de pré-voo do workspace sobre `dist/`:

| Verificação | Resultado |
| :--- | :--- |
| em-dash / en-dash | CLEAN (24 páginas) |
| 1 `<h1>` por página, canonical, JSON-LD | ok |
| title ≤ 60, description 100–165 | ok |
| links internos resolvem em `dist/` | ok |
| FAQPage schema == `<details>` visíveis | ok (3 páginas) |
| entidade JSON-LD == marca do site | ok |
| hooks `data-*` soltos | nenhum |
| artefatos de dev no HTML de produção | 0 |

Comprovado também: `gripe` e `mitos-e-verdades-sobre-dengue` (`draft`) **não existem em `dist/`**, e `/busca/`
está `noindex` e fora do sitemap.

Contraste: todos os pares texto/fundo passam AA. **Pendência de acessibilidade em aberto:** `--color-line`
mede 1.23:1 (canvas) / 1.28:1 (surface) — abaixo do piso 3:1 da WCAG 1.4.11, que se aplica à borda de um
controle interativo (a borda do campo de busca e do botão de menu no mobile usam esse token). A correção
recomendada é separar o token: manter `--color-line` para réguas decorativas e criar `--color-control` para
bordas de controle. Não aplicada ainda porque muda a aparência do site.

---

## Pendências antes de publicar

- [ ] Confirmar **nome da marca** e **domínio** — hoje `Saudewiki` / `https://www.saudewiki.com` são placeholders.
      Ao trocar, atualizar `src/data/site.ts` **e** `astro.config.mjs` juntos.
- [ ] **Verificar cada URL de referência** contra a página oficial correspondente. Referência que não sustenta a
      frase a que está atada é pior do que referência nenhuma.
- [ ] Definir a **estratégia de E-E-A-T** (autoria, revisão, fontes) — é o maior risco do projeto, maior que
      qualquer escolha técnica. Conteúdo de saúde é YMYL: o Google aplica o critério mais rígido da busca.
- [ ] **Decidir sobre `--color-control`** (ver seção de verificação acima).
- [ ] Substituir o conteúdo de demonstração por texto revisado.
- [ ] Confirmar se haverá análise de audiência; se sim, atualizar a política de privacidade **antes** de ativar.
- [ ] Adicionar `public/_headers` e `_redirects` quando o host for definido.

---

## Estado do conteúdo

Todo o conteúdo atual está em `needs_review` e marcado com `isPlaceholder: true`. Existe também uma entrada
`draft` (`gripe`, `mitos-e-verdades-sobre-dengue`) mantida de propósito, sem link nenhum, para comprovar que o
filtro de status funciona.
