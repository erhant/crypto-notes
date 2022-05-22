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
        <div className="welcome">
          <h1>Foreword</h1>
          <p>
            All of the content here are from my notes taken during the lectures of{" "}
            <a href="https://sites.google.com/a/ku.edu.tr/comp443/" target="_blank" rel="noreferrer">
              COMP443 - Modern Cryptography
            </a>{" "}
            by Dr. Alptekin Küpçü and the material from the book &quot;Introduction to Modern Cryptography: Principles
            and Protocols, 2nd Edition&quot; by Jonathan Katz & Yehuda Lindell. I had not known cryptography prior to
            the class, and I absolutely loved; so much that I decided to make my notes available online. In doing so, I
            will be re-learning and remembering the material while I transfer them from my notebooks to this site by
            hand.
          </p>
        </div>
        <hr />
        <h1>Contents</h1>
        {documents.length > 0 ? (
          documents.map((d, i) => (
            <div key={i} className="preview">
              {/* order number */}
              <div className="order-no">
                <h1>{d.order}</h1>
              </div>
              {/* preview text */}
              <div className="preview-text">
                <Link href={"/" + d.slug} passHref>
                  <a>
                    <h1>{d.title}</h1>
                  </a>
                </Link>
                <p>{d.desc}</p>
              </div>
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
