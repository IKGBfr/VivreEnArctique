'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PostMeta } from '@/lib/types'
import { formatDateShort } from '@/lib/posts'
import {
  CardContainer,
  ImageWrapper,
  CoverImage,
  CardContent,
  TagList,
  Tag,
  Title,
  Excerpt,
  CardFooter,
  MetaInfo,
  Author,
  Date,
  ReadingTime,
  ReadMoreLink,
} from './BlogCard.styles'

interface BlogCardProps {
  post: PostMeta
  index?: number
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut' as const
      }
    }
  }

  return (
    <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
      <CardContainer
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -4 }}
      >
        <ImageWrapper>
          <CoverImage 
            src={post.coverImage} 
            alt={post.title}
            loading="lazy"
          />
        </ImageWrapper>
        
        <CardContent>
          {post.tags && post.tags.length > 0 && (
            <TagList>
              {post.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          )}
          
          <Title>{post.title}</Title>
          <Excerpt>{post.excerpt}</Excerpt>
          
          <CardFooter>
            <MetaInfo>
              <Author>{post.author}</Author>
              <span>•</span>
              <Date>{formatDateShort(post.date)}</Date>
            </MetaInfo>
            <ReadingTime>{post.readingTime}</ReadingTime>
          </CardFooter>
        </CardContent>
      </CardContainer>
    </Link>
  )
}

export default BlogCard
