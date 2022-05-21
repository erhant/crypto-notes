import { unified } from "unified"
import remarkParse from "remark-parse" // input
import remarkMath from "remark-math" // math
import remarkRehype from "remark-rehype" // markdown to html
import rehypeKatex from "rehype-katex" // math
import rehypeStringify from "rehype-stringify" // final output
import rehypeHighlight from "rehype-highlight" // code
import { remarkMermaid } from "remark-mermaidjs"

export default async function toHTML(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkMermaid) // NOTE: type error here?
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown)

  // console.log(result.toString())
  return result.toString()
}
