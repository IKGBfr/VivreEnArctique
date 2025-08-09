import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  author: string
  tags?: string[]
  readingTime: string
  content: MDXRemoteSerializeResult
}

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  author: string
  tags: string[]
  readingTime: string
}

export interface FrontMatter {
  title: string
  date: string
  excerpt: string
  coverImage: string
  author: string
  tags: string[]
}
