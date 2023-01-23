import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {getDocumentBySlug, getAllDocumentSlugs} from '../lib/document';
import Head from 'next/head';
import toHTML from '../lib/markdown';
import {DocumentType} from '../types/document';
import {NextPage} from 'next';
import Layout from '../components/layout';

const Document: NextPage<{
  document: DocumentType;
}> = ({document}) => {
  const router = useRouter();

  if (!router.isFallback && !document?.slug) {
    return <ErrorPage statusCode={404} />;
  } else {
    return router.isFallback ? (
      <p style={{textAlign: 'center'}}>Loading…</p>
    ) : (
      <>
        <Head>
          <title>{document.header.title}</title>
          <meta name="description" content={document.header.desc} key="desc" />
        </Head>
        <Layout>
          <>
            <article>
              <div className="markdown" dangerouslySetInnerHTML={{__html: document.content}} />
            </article>
          </>
        </Layout>
      </>
    );
  }
};
export default Document;

// static props to parse markdown and render it as HTML
export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const document = await getDocumentBySlug(params.slug);
  const content = await toHTML(document.content || '');

  return {
    props: {
      document: {
        ...document,
        content,
      },
    },
  };
}

// static paths to map slug to URL
export async function getStaticPaths() {
  const slugs = await getAllDocumentSlugs();

  return {
    paths: slugs.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
