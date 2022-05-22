import { unified } from "unified"
import remarkParse from "remark-parse" // input
import remarkMath from "remark-math" // math
import remarkRehype from "remark-rehype" // markdown to html
import rehypeKatex from "rehype-katex" // math
import remarkGfm from "remark-gfm" // github-like formatting (tables in particular)
import rehypeStringify from "rehype-stringify" // final output
import rehypeHighlight from "rehype-highlight" // code
import { remarkMermaid } from "remark-mermaidjs" // mermaidjs

export default async function toHTML(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    // @ts-ignore (type error here for some reason)
    .use(remarkMermaid, {
      theme: "neutral",
    })
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown)

  // console.log(result.toString())
  return result.toString()
}
