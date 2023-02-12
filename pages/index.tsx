import type {NextPage} from 'next';
import Head from 'next/head';
import DocumentPreview from '../components/document-preview';
import Layout from '../components/layout';
import {getAllDocumentHeadersWithSlugs} from '../lib/document';
import {DocumentsCategorized} from '../types/document';

const categoryInfo: {[category: string]: {title: string; desc: string; order: number}} = {
  'modern-cryptography': {
    // https://sites.google.com/a/ku.edu.tr/comp443/
    title: 'Modern Cryptography',
    desc:
      'All of the content here are from my notes taken during the lectures of COMP443 - Modern Cryptography by ' +
      'Dr. Alptekin Küpçü, the material from the book "Introduction to Modern Cryptography: Principles and ' +
      'Protocols, 2nd Edition" by Jonathan Katz & Yehuda Lindell, and several of Dan Boneh\'s cryptography lectures. ',
    order: 4,
  },
  zkhack: {
    // https://zkhack.dev/
    title: 'Zero-Knowledge: ZKHACK Modules',
    desc: 'My notes from ZKHACK modules.',
    order: 3,
  },
  'number-theory': {
    // https://www.youtube.com/watch?v=EzE6it9kAsI&list=PL8yHsr3EFj53L8sMbzIhhXSAOpuZ1Fov8
    title: 'Number Theory',
    desc: 'These are notes taken from "Introduction to Number Theory" open lectures by Prof. Richard Borcherds in his YouTube channel.',
    order: 2,
  },
  zklearning: {
    // https://zk-learning.org/
    title: 'Zero-Knowledge: ZKP MOOC Spring 2023',
    desc:
      'Summary of ZKP MOOC Spring 2023 lectures, which are a series of lectures given by Dr. Dan Boneh, Dr. Shafi Goldwasser, ' +
      'Dr. Dawn Song, Dr. Justin Thaler and Dr. Yupeng Zhang. This course covers fundamental techniques to build ZKP protocols, ' +
      'tools to implement ZKP for different computations, and different applications of ZKP in blockchain and other areas',
    order: 1,
  },
};

const Home: NextPage<{
  documentsCategorized: DocumentsCategorized;
}> = ({documentsCategorized}) => {
  // map document categories to a sorted array of category names
  const categories = Object.keys(documentsCategorized).sort((a, b) => categoryInfo[a].order - categoryInfo[b].order);
  return (
    <>
      <Head>
        <title>Cryptonotes</title>
        <meta name="description" content="My Cryptography notes." />
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
