import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import glob from "glob"

const documentsDirectoryName = "../content"
const documentsDirectory = join(process.cwd(), documentsDirectoryName)
const uniqueSluggifier = "___"

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
 * Get a Document by its slug. Converts the slug to path, and then finds the Document by path.
 * @see getDocumentByPath
 * @param {string} slug
 * @param {string[]} fields
 */
export async function getDocumentBySlug(slug: string, fields: string[] = []) {
  return await getDocumentByPath(join(documentsDirectory, slugToPath(slug)), fields)
}
export async function getDocumentByPath(path: string, fields: string[] = []) {
  const { data, content } = matter(fs.readFileSync(path, "utf8"))
  const items: {
    [key: string]: string
  } = {}

  // ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = pathToSlug(path)
    }
    if (field === "content") {
      items[field] = content
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })
  return items
}

export async function getAlldocuments(fields: string[] = []) {
  const paths = await getDocumentPaths()
  //console.log(paths)

  // read documents
  const documents = []
  for (let i = 0; i < paths.length; ++i) documents.push(await getDocumentByPath(paths[i], fields))

  // sort them
  documents.sort((p, q) => (p.date > q.date ? -1 : 1))
  return documents
}