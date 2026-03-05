import fs from "fs"
import path from "path"

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string
  category: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const folders = fs.readdirSync(postsDirectory)
  const posts: BlogPost[] = []

  folders.forEach((folder) => {
    const indexPath = path.join(postsDirectory, folder, "index.md")
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, "utf-8")
      const post = parseMarkdownPost(folder, content)
      if (post) {
        posts.push(post)
      }
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const indexPath = path.join(postsDirectory, slug, "index.md")
  if (!fs.existsSync(indexPath)) {
    return null
  }

  const content = fs.readFileSync(indexPath, "utf-8")
  return parseMarkdownPost(slug, content)
}

function parseMarkdownPost(slug: string, content: string): BlogPost | null {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return null
  }

  const [, frontmatterString, markdown] = match
  const frontmatter = parseFrontmatter(frontmatterString)

  const excerpt = markdown.split("\n").slice(0, 3).join(" ").substring(0, 150) + "..."

  return {
    slug,
    title: frontmatter.title || "Untitled",
    date: frontmatter.date || new Date().toISOString().split("T")[0],
    readTime: frontmatter.readTime || "5 min read",
    excerpt: frontmatter.excerpt || excerpt,
    content: markdown,
    category: frontmatter.category || "Blog",
  }
}

function parseFrontmatter(frontmatterString: string): Record<string, string> {
  const lines = frontmatterString.split("\n")
  const frontmatter: Record<string, string> = {}

  lines.forEach((line) => {
    const [key, ...valueParts] = line.split(":")
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(":").trim().replace(/^["']|["']$/g, "")
    }
  })

  return frontmatter
}
