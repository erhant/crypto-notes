import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import glob from 'glob';
import {DocumentHeader, DocumentsCategorized, DocumentType} from '../types/document';

const documentsDirectoryName = 'content';
const documentsDirectory = join(process.cwd(), documentsDirectoryName);
const uniqueSluggifier = '___'; // used for recursive directories

/**
 * Generate the slug from path of a file.
 * @param {string} path
 */
function pathToSlug(path: string): string {
  return path.slice(documentsDirectoryName.length + 1).replace(new RegExp('/', 'g'), uniqueSluggifier);
}

/**
 * Convert a slug to path under documents directory.
 * @param {string} slug
 */
function slugToPath(slug: string): string {
  return slug.replace(new RegExp(uniqueSluggifier, 'g'), '/');
}

/**
 * Get paths of all files under documents directory.
 */
function getDocumentPaths(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(documentsDirectoryName + '/**/*.md', (err, files) => {
      if (err) reject(err);
      else resolve(files.map((f: string) => f));
    });
  });
}

/**
 * Get a document by its slug. Converts the slug to path, and then finds the document by path.
 * @see getDocumentByPath
 * @param {string} slug
 */
export async function getDocumentBySlug(slug: string): Promise<DocumentType> {
  return await getDocumentByPath(join(documentsDirectory, slugToPath(slug)));
}

/**
 * Returns the entire document from the given path.
 * @param path document path in file
 * @returns a document
 */
export async function getDocumentByPath(path: string): Promise<DocumentType> {
  // parse the markdown
  const {data, content} = matter(fs.readFileSync(path, 'utf8'));

  return {
    header: data as DocumentHeader,
    slug: pathToSlug(path),
    content,
  };
}

export async function getAllDocumentSlugs(): Promise<string[]> {
  const paths = await getDocumentPaths();
  return paths.map(pathToSlug);
}

/**
 * Get all documents in the path, most likely called from the homepage.
 * @returns a mapping of category name to documents
 */
export async function getAllDocumentHeadersWithSlugs(): Promise<DocumentsCategorized> {
  const paths = await getDocumentPaths();

  // read documents, grouping them by category
  const documents: DocumentsCategorized = {};
  for (let i = 0; i < paths.length; ++i) {
    const doc = await getDocumentByPath(paths[i]);
    if (!documents[doc.header.cat]) {
      documents[doc.header.cat] = [];
    }
    documents[doc.header.cat].push([doc.header, doc.slug]);
  }

  // sort each category
  for (const category in documents) {
    documents[category].sort((p, q) => (p[0].order > q[0].order ? 1 : -1));
  }

  return documents;
}
