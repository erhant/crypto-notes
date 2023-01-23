import type {NextPage} from 'next';
import Head from 'next/head';
import DocumentPreview from '../components/document-preview';
import Layout from '../components/layout';
import {getAllDocumentHeadersWithSlugs} from '../lib/document';
import {DocumentsCategorized} from '../types/document';

const categoryInfo: {[category: string]: {title: string; desc: string}} = {
  'modern-cryptography': {
    // https://sites.google.com/a/ku.edu.tr/comp443/
    title: 'Modern Cryptography',
    desc:
      'All of the content here are from my notes taken during the lectures of COMP443 - Modern Cryptography by ' +
      'Dr. Alptekin Küpçü, the material from the book "Introduction to Modern Cryptography: Principles and ' +
      'Protocols, 2nd Edition" by Jonathan Katz & Yehuda Lindell, and several of Dan Boneh\'s cryptography lectures. ',
  },
  zkhack: {
    // https://zkhack.dev/
    title: 'Zero-Knowledge Proofs',
    desc: 'My notes from ZKHACK modules. ',
  },
  'number-theory': {
    // https://www.youtube.com/watch?v=EzE6it9kAsI&list=PL8yHsr3EFj53L8sMbzIhhXSAOpuZ1Fov8
    title: 'Number Theory',
    desc: 'These are notes taken from "Introduction to Number Theory" open lectures by Prof. Richard Borcherds in his YouTube channel.',
  },
  zklearning: {
    // https://zk-learning.org/
    title: 'Zero-Knowledge Proofs MOOC - Spring 2023',
    desc: 'My notes from ZKHACK modules. ',
  },
};

const Home: NextPage<{
  documentsCategorized: DocumentsCategorized;
}> = ({documentsCategorized}) => {
  const categories = Object.keys(documentsCategorized);
  return (
    <>
      <Head>
        <title>Cryptography Notes</title>
        <meta name="description" content="My notes from the cryptography class." />
      </Head>
      <Layout>
        {categories.map(category => {
          const documents = documentsCategorized[category];
          const info = categoryInfo[category];
          return (
            <div key={category}>
              <h1>{info.title}</h1>
              <hr />
              <p className="foreword">{info.desc}</p>
              {documents.map((d, i) => (
                <DocumentPreview key={i} header={d[0]} slug={d[1]} />
              ))}
            </div>
          );
        })}
        {/* <h4 style={{textAlign: 'center'}}>more coming soon...</h4> */}
      </Layout>
    </>
  );
};

export default Home;

// read document headers
export const getStaticProps = async () => {
  const documentsCategorized: DocumentsCategorized = await getAllDocumentHeadersWithSlugs();

  return {
    props: {documentsCategorized},
  };
};
