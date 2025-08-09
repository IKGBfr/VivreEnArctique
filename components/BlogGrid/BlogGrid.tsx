'use client'

import React from 'react'
import Link from 'next/link'
import { PostMeta } from '@/lib/types'
import BlogCard from '@/components/BlogCard/BlogCard'
import {
  GridContainer,
  GridWrapper,
  SectionTitle,
  SectionSubtitle,
  Grid,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateText,
  ViewAllLink,
  ViewAllContainer,
} from './BlogGrid.styles'

interface BlogGridProps {
  posts: PostMeta[]
  title?: string
  subtitle?: string
  showViewAll?: boolean
}

const BlogGrid: React.FC<BlogGridProps> = ({ 
  posts, 
  title = "Derniers articles",
  subtitle = "Découvrez nos récits et aventures dans le Grand Nord",
  showViewAll = true 
}) => {
  if (!posts || posts.length === 0) {
    return (
      <GridContainer>
        <GridWrapper>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
          <Grid>
            <EmptyState>
              <EmptyStateIcon>❄️</EmptyStateIcon>
              <EmptyStateTitle>Aucun article pour le moment</EmptyStateTitle>
              <EmptyStateText>
                Revenez bientôt pour découvrir nos premières aventures arctiques !
              </EmptyStateText>
            </EmptyState>
          </Grid>
        </GridWrapper>
      </GridContainer>
    )
  }

  return (
    <GridContainer>
      <GridWrapper>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        <Grid>
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </Grid>
        {showViewAll && posts.length >= 6 && (
          <ViewAllContainer>
            <Link href="/blog" passHref legacyBehavior>
              <ViewAllLink>
                Voir tous les articles
              </ViewAllLink>
            </Link>
          </ViewAllContainer>
        )}
      </GridWrapper>
    </GridContainer>
  )
}

export default BlogGrid
