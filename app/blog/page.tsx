import React from 'react'
import BlogListPage from '@/components/BlogListPage'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogListPage posts={posts} />
}
