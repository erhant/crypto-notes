# Cryptography Notes

> Notes from several resources, based on Cryptography, Zero-Knowledge Proofs and Number Theory.

## Usage

Just `yarn` to setup the packages, and then `yarn dev` to run a development build.

## How it works

You write Markdown documents under the `content` folder, and these are automatically parsed by the code to be transformed into HTML.

- Math notation is displayed with [KaTeX](https://katex.org/) via [remark-math](https://github.com/remarkjs/remark-math/) and [rehype-katex](https://www.npmjs.com/package/rehype-katex).
- Code is highlighted with [highlight.js](https://highlightjs.org/) via [rehype-highlight](https://github.com/rehypejs/rehype-highlight).
- [mermaid-js](https://mermaid-js.github.io/mermaid/#/) is converted to SVG images via [remark-mermaidjs](https://github.com/remcohaszing/remark-mermaidjs).
- Tables, footnotes and such are converted to their HTML correspondents via [remark-gfm](https://unifiedjs.com/explore/package/remark-gfm/).

Each article must bear the following gray-matter:

```yaml
---
title: 'Title of the article'
desc: 'Short description about this article.'
order: 1 # order it appears in the category
cat: 'Category name'
---
```

The slug of the document will be derived from it's path under `content` folder. For example, `content/math/addition.md` will turn into `/math___addition.html`.
