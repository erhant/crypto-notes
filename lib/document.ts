import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import glob from "glob"
import DocumentType from "../types/document"
import { assert } from "console"

const documentsDirectoryName = "content"
const documentsDirectory = join(process.cwd(), documentsDirectoryName)
const uniqueSluggifier = "___"

const dummyDocumentGrayMatter: DocumentType = {
  title: "",
  desc: "",
  order: 0,
  content: "",
  slug: "",
}
/**
 * Generate the slug from path of a file.
 * @param {string} path
 */
function pathToSlug(path: string): string {
  return path.slice(documentsDirectoryName.length + 1).replace(new RegExp("/", "g"), uniqueSluggifier)
}

/**
 * Convert a slug to path under documents directory.
 * @param {string} slug
 */
function slugToPath(slug: string): string {
  return slug.replace(new RegExp(uniqueSluggifier, "g"), "/")
}

/**
 * Get paths of all files under documents directory.
 */
function getDocumentPaths(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(documentsDirectoryName + "/**/*.md", (err, files) => {
      if (err) reject(err)
      else resolve(files.map((f: string) => f))
    })
  })
}

/**
 * Get a document by its slug. Converts the slug to path, and then finds the document by path.
 * @see getDocumentByPath
 * @param {string} slug
 */
export async function getDocumentBySlug(slug: string): Promise<DocumentType> {
  return await getDocumentByPath(join(documentsDirectory, slugToPath(slug)))
}
export async function getDocumentByPath(path: string): Promise<DocumentType> {
  const { data, content } = matter(fs.readFileSync(path, "utf8"))

  // assert data has specified fields

  // assert(
  //   Object.keys(dummyDocumentGrayMatter).every((key) => {
  //     Object.hasOwn(data, key)
  //   }, `Gray-matter of ${path} is missing some fields.`)
  // )

  return {
    ...data,
    slug: pathToSlug(path),
    content,
  } as DocumentType
}

export async function getAllDocuments() {
  const paths = await getDocumentPaths()

  // read documents
  const documents = []
  for (let i = 0; i < paths.length; ++i) documents.push(await getDocumentByPath(paths[i]))

  // sort them
  documents.sort((p, q) => (p.order > q.order ? 1 : -1))

  return documents
}
