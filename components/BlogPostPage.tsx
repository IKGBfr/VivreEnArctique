'use client'

import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import { theme } from '@/styles/theme'
import { Post } from '@/lib/types'
import MDXComponents from '@/components/MDXComponents'

const ArticleContainer = styled.article`
  min-height: 100vh;
  padding-top: 80px;
`

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #0EA5E9 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 300px;
  }
`

const HeroImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${theme.spacing.lg};
  max-width: 900px;
`

const ArticleTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['3xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`

const ArticleMeta = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  opacity: 0.95;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
    font-size: ${theme.fontSizes.xs};
  }
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`

const ContentSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`

const MDXContent = styled(motion.div)`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  line-height: 1.8;
  color: ${theme.colors.dark};

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.dark};
    margin-top: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.md};
    font-weight: 700;
  }

  h1 {
    font-size: ${theme.fontSizes['3xl']};
  }

  h2 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h3 {
    font-size: ${theme.fontSizes.xl};
  }

  p {
    margin-bottom: ${theme.spacing.lg};
  }

  ul, ol {
    margin-bottom: ${theme.spacing.lg};
    padding-left: ${theme.spacing.xl};
  }

  li {
    margin-bottom: ${theme.spacing.sm};
  }

  blockquote {
    border-left: 4px solid ${theme.colors.primary};
    padding-left: ${theme.spacing.lg};
    margin: ${theme.spacing.xl} 0;
    font-style: italic;
    color: ${theme.colors.gray};
  }

  code {
    background-color: ${theme.colors.secondary};
    padding: 2px 6px;
    border-radius: ${theme.radii.sm};
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    padding: ${theme.spacing.lg};
    border-radius: ${theme.radii.lg};
    overflow-x: auto;
    margin: ${theme.spacing.xl} 0;

    code {
      background-color: transparent;
      padding: 0;
      color: inherit;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${theme.radii.lg};
    margin: ${theme.spacing.xl} 0;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.dark};
      text-decoration: underline;
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${theme.colors.border};
    margin: ${theme.spacing.xxl} 0;
  }

  strong {
    font-weight: 700;
    color: ${theme.colors.dark};
  }

  em {
    font-style: italic;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.base};
    
    h1 {
      font-size: ${theme.fontSizes['2xl']};
    }

    h2 {
      font-size: ${theme.fontSizes.xl};
    }

    h3 {
      font-size: ${theme.fontSizes.lg};
    }
  }
`

const TagsSection = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border};
`

const Tag = styled(Link)`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  border-radius: ${theme.radii.full};
  font-size: ${theme.fontSizes.sm};
  text-decoration: none;
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.radii.lg};
  text-decoration: none;
  font-weight: 600;
  transition: all ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`

interface BlogPostPageProps {
  post: Post
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <ArticleContainer>
      <HeroSection>
        <HeroImage src={post.coverImage} />
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArticleTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {post.title}
          </ArticleTitle>
          <ArticleMeta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MetaItem>
              📅 {formatDate(post.date)}
            </MetaItem>
            <MetaItem>
              ✍️ {post.author}
            </MetaItem>
            <MetaItem>
              ⏱️ {post.readingTime}
            </MetaItem>
          </ArticleMeta>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <BackButton href="/blog">
          ← Retour aux articles
        </BackButton>
        
        <MDXContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MDXRemote {...post.content} components={MDXComponents} />
        </MDXContent>

        {post.tags && post.tags.length > 0 && (
          <TagsSection>
            {post.tags.map(tag => (
              <Tag key={tag} href={`/blog?tag=${tag}`}>
                #{tag}
              </Tag>
            ))}
          </TagsSection>
        )}
      </ContentSection>
    </ArticleContainer>
  )
}
