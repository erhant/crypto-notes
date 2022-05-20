import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import glob from "glob"

const postsDirectoryName = "content"
const postsDirectory = join(process.cwd(), postsDirectoryName)
const uniqueSluggifier = "___"

/**
 * Generate the slug from path of a file.
 * @param {string} path
 */
function pathToSlug(path: string): string {
  return path.slice(postsDirectoryName.length + 1).replace(new RegExp("/", "g"), uniqueSluggifier)
}

/**
 * Convert a slug to path under posts directory.
 * @param {string} slug
 */
function slugToPath(slug: string): string {
  return slug.replace(new RegExp(uniqueSluggifier, "g"), "/")
}

/**
 * Get paths of all files under posts directory.
 */
function getPostPaths(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(postsDirectoryName + "/**/*.md", (err, files) => {
      if (err) reject(err)
      else resolve(files.map((f: string) => f))
    })
  })
}

/**
 * Get a post by its slug. Converts the slug to path, and then finds the post by path.
 * @see getPostByPath
 * @param {string} slug
 * @param {string[]} fields
 */
export async function getPostBySlug(slug: string, fields: string[] = []) {
  return await getPostByPath(join(postsDirectory, slugToPath(slug)), fields)
}
export async function getPostByPath(path: string, fields: string[] = []) {
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

export async function getAllPosts(fields: string[] = []) {
  const paths = await getPostPaths()
  //console.log(paths)

  // read posts
  const posts = []
  for (let i = 0; i < paths.length; ++i) posts.push(await getPostByPath(paths[i], fields))
  
  // sort them
  //posts.sort((p, q) => (p.date > q.date ? -1 : 1))
  console.log(posts)
  return posts
}