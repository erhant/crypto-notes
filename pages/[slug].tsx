import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { getDocumentBySlug, getAllDocuments } from "../lib/document"
import Head from "next/head"
import toHTML from "../lib/markdown"
import DocumentType from "../types/document"
import styles from "../styles/markdown.module.scss"
import { NextPage } from "next"

const Document: NextPage<{
  document: DocumentType
}> = ({ document }) => {
  const router = useRouter()

  if (!router.isFallback && !document?.slug) {
    return <ErrorPage statusCode={404} />
  } else {
    return router.isFallback ? (
      <h1>Loading…</h1>
    ) : (
      <div>
        <Head>
          <title>{document.title}</title>
          <meta name="description" content={document.desc} key="desc" />
          {/* Math rendering */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"></link>
          {/* Code higlighting */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-light.min.css"
          ></link>
        </Head>
        <article>
          <div className={styles["markdown"]} dangerouslySetInnerHTML={{ __html: document.content }} />
        </article>
      </div>
    )
  }
}

export default Document

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const document = await getDocumentBySlug(params.slug)
  const content = await toHTML(document.content || "")

  return {
    props: {
      document: {
        ...document,
        slug: params.slug,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllDocuments()

  return {
    paths: posts.map((document) => {
      return {
        params: {
          slug: document.slug,
        },
      }
    }),
    fallback: false,
  }
}
