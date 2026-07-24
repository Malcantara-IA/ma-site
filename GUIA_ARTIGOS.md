# Roteiro fácil para publicar Insights

## 1. Escreva a partir do modelo

1. Abra a pasta `posts` no GitHub.
2. Abra o arquivo `_modelo.md`.
3. Copie o conteúdo.
4. Crie um novo arquivo na mesma pasta.
5. Use um nome simples, sem acentos, espaços ou maiúsculas:
   `contrato-de-distribuicao.md`.

O nome do arquivo será o endereço do artigo:
`malcantara.adv.br/insights/contrato-de-distribuicao`.

## 2. Preencha o cabeçalho

```md
---
title: "Título do artigo"
excerpt: "Resumo curto para a página de Insights e para o Google."
date: "2026-07-24"
category: "Contratos empresariais"
author: "Maurício Barbosa Alcântara"
draft: true
---
```

- `title`: título público;
- `excerpt`: resumo de uma ou duas frases;
- `date`: data no formato ano-mês-dia;
- `category`: série ou área do conteúdo;
- `author`: assinatura;
- `draft`: `true` mantém oculto; `false` publica.

## 3. Desenvolva o artigo

Use:

- `##` para seções;
- `###` para subtítulos;
- `**texto**` para negrito;
- `*texto*` para itálico;
- `-` para listas;
- `1.` para sequência numerada;
- `>` para destacar uma tese;
- `[nome do link](https://endereco.com.br)` para fontes.

## 4. Checklist editorial MA

Antes de publicar, confira:

- tese e público-alvo definidos;
- fontes, números, julgados e leis verificados;
- ausência de casos ou dados inventados;
- linguagem informativa, sem promessa de resultado;
- CTA compatível com as regras da OAB;
- ortografia, data e categoria revisadas.

## 5. Publique

1. Altere `draft: true` para `draft: false`.
2. Clique em **Commit changes**.
3. Aguarde a publicação automática do Netlify.

Não é necessário editar páginas, menus ou códigos. O artigo aparecerá
automaticamente em `/insights`, com página própria e metadados para busca e
compartilhamento.
