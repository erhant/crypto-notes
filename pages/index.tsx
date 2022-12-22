import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import DocumentView from "../components/document-view"
import Layout from "../components/layout"
import { getAllDocuments } from "../lib/document"
import DocumentType from "../types/document"
import constants from "../constants"

const Home: NextPage<{
  documents: DocumentType[]
}> = ({ documents }) => {
  // split the docs with respect to their order number, which is hacky but pretty simple :)
  const cryptoDocs: DocumentType[] = documents.filter((d) => d.order < constants.CRYPTO_NOTES_LIMIT)
  const snarkDocs: DocumentType[] = documents
    .filter((d) => constants.CRYPTO_NOTES_LIMIT <= d.order && d.order < constants.ZK_NOTES_LIMIT)
    .map((d) => ({
      ...d,
      order: d.order - constants.CRYPTO_NOTES_LIMIT,
    }))
  const numberTheoryDocs: DocumentType[] = documents
    .filter((d) => constants.ZK_NOTES_LIMIT <= d.order)
    .map((d) => ({
      ...d,
      order: d.order - constants.ZK_NOTES_LIMIT,
    }))

  return (
    <>
      <Head>
        <title>Cryptography Notes</title>
        <meta name="description" content="My notes from the cryptography class." />
      </Head>
      <Layout>
        {/* general cryptography notes */}
        {cryptoDocs.length > 0 ? (
          <>
            <h1>General Cryptography</h1>
            <hr />
            <p className="foreword">
              All of the content here are from my notes taken during the lectures of{" "}
              <a href="https://sites.google.com/a/ku.edu.tr/comp443/" target="_blank" rel="noreferrer">
                COMP443 - Modern Cryptography
              </a>{" "}
              by Dr. Alptekin Küpçü, the material from the book &quot;Introduction to Modern Cryptography: Principles
              and Protocols, 2nd Edition&quot; by Jonathan Katz & Yehuda Lindell, and several of Dan Boneh&apos;s
              cryptography lectures.
            </p>
            {cryptoDocs.map((d, i) => (
              <DocumentView key={i} document={d} />
            ))}
          </>
        ) : (
          <></>
        )}

        {/* zk snarks, starks etc. notes */}
        {snarkDocs.length > 0 ? (
          <>
            <h1>Zero-Knowledge Proofs</h1>
            <hr />
            <p className="foreword">
              These notes are taken from the modules provided by{" "}
              <a href="https://zkhack.dev/" target="_blank" rel="noreferrer">
                ZKHACK
              </a>{" "}
              . Check them out!
            </p>
            {snarkDocs.map((d, i) => (
              <DocumentView key={i} document={d} />
            ))}
          </>
        ) : (
          <></>
        )}

        {/* number theory notes */}
        {numberTheoryDocs.length > 0 ? (
          <>
            <h1>Introduction to Number Theory</h1>
            <hr />
            <p className="foreword">These are notes from lectures by Dr. Richard Borcherds in his YouTube channel.</p>
            {numberTheoryDocs.map((d, i) => (
              <DocumentView key={i} document={d} />
            ))}
          </>
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
