# MA – Inteligência Jurídica

Website institucional do MA – Inteligência Jurídica, com páginas dedicadas a:

- empresas familiares e governança;
- contratos empresariais;
- tributário e implementação da reforma tributária;
- agronegócio;
- recuperação judicial e reestruturação;
- sucessão patrimonial;
- método de diagnóstico, apresentação institucional, insights e privacidade.

## Desenvolvimento

Requisitos: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

O projeto gera uma exportação estática em `out/`, pronta para publicação no
Netlify. A configuração de build está em `netlify.toml`.

O artigo legado permanece preservado em `posts/` para revisão editorial. Ele
não é publicado automaticamente na seção de Insights.

Para criar e publicar artigos, consulte `GUIA_ARTIGOS.md` e duplique o arquivo
`posts/_modelo.md`. Arquivos com `draft: true` permanecem ocultos; ao alterar
para `draft: false`, o artigo entra automaticamente na listagem e no sitemap.

## Publicação

O domínio oficial é `malcantara.adv.br`. Alterações devem passar por uma branch
de revisão e por um pull request antes de serem incorporadas à branch `main`.
