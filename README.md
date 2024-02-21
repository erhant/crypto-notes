<p align="center">
  <h1 align="center">
    Cryptography Notes
  </h1>
  <p align="center"><i>Notes from several resources on Cryptography & Zero-Knowledge Proofs.</i></p>
</p>

<p align="center"> 
    <a href="crypto.erhant.me" target="_blank">
        <img alt="Workflow: Book Deployment" src="https://github.com/erhant/crypto-notes/actions/workflows/deploy-book.yml/badge.svg?branch=master">
    </a>
</p>

## Setup

We use [mdBook](https://github.com/rust-lang/mdBook) along with several plugins:

- [mdbook-katex](https://github.com/lzanini/mdbook-katex) for math displays.
- [mdbook-mermaid](https://github.com/badboy/mdbook-mermaid) for MermaidJS renders.
- [mdbook-toc](https://github.com/badboy/mdbook-toc) for table of contents.
- [css](./custom.css) is a custom CSS to align Mermaid outputs to center.

## Usage

After setup is complete, you can use the following commands:

```sh
# serve
mdbook serve --open

# build
mdbook build
```

> [!TIP]
>
> You can also these scripts via `make`.

## Contributions

Feel free to open an issue or a pull-request for any fixes or additions!
