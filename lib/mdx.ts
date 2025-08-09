import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { Post, PostMeta, FrontMatter } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory)
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const frontMatter = data as FrontMatter
    const stats = readingTime(content)
    
    // Serialize the MDX content
    const mdxSource = await serialize(content, {
      parseFrontmatter: false,
    })
    
    return {
      slug: realSlug,
      title: frontMatter.title,
      date: frontMatter.date,
      excerpt: frontMatter.excerpt,
      content: mdxSource,
      coverImage: frontMatter.coverImage,
      author: frontMatter.author,
      tags: frontMatter.tags || [],
      readingTime: stats.text,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostMetaBySlug(slug: string): PostMeta | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const frontMatter = data as FrontMatter
    const stats = readingTime(content)
    
    return {
      slug: realSlug,
      title: frontMatter.title,
      date: frontMatter.date,
      excerpt: frontMatter.excerpt,
      coverImage: frontMatter.coverImage,
      author: frontMatter.author,
      tags: frontMatter.tags || [],
      readingTime: stats.text,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostMetaBySlug(slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  return posts
}

export function getLatestPosts(count: number = 6): PostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter(post => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}
