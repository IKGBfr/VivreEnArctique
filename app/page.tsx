import React from 'react'
import HomePage from '@/components/HomePage'
import { getLatestPosts } from '@/lib/mdx'

export default function Page() {
  const posts = getLatestPosts(6)
  return <HomePage posts={posts} />
}
