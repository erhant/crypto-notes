import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"
import { getAllDocuments } from "../lib/document"
import DocumentType from "../types/document"

const Home: NextPage<{
  documents: DocumentType[]
}> = ({ documents }) => {
  return (
    <>
      <Head>
        <title>Cryptography Notes</title>
        <meta name="description" content="My notes from the cryptography class." />
      </Head>
      <Layout>
        {documents.length > 0 ? (
          documents.map((d, i) => (
            <div key={i} className="preview">
              <Link href={d.slug} passHref>
                <a>
                  <h1>
                    {d.order} - {d.title}
                  </h1>
                </a>
              </Link>
              <p>{d.desc}</p>
            </div>
          ))
        ) : (
          <></>
        )}
        <h4 style={{ textAlign: "center" }}>more coming soon...</h4>
      </Layout>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const documents: DocumentType[] = await getAllDocuments()

  return {
    props: { documents },
  }
}
