'use client'

import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'
import { PostMeta } from '@/lib/types'
import BlogCard from '@/components/BlogCard/BlogCard'

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #0EA5E9 100%);
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  text-align: center;
`

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  font-weight: 700;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.white};
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.lg};
  }
`

const ContentSection = styled.section`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 ${theme.spacing.md};
    gap: 0.375rem;
    flex-wrap: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.25rem 0.75rem;
  background: ${props => props.active 
    ? 'rgba(102, 126, 234, 0.15)' 
    : 'rgba(255, 255, 255, 0.5)'};
  color: ${props => props.active ? theme.colors.primary : theme.colors.gray};
  border: 1px solid ${props => props.active 
    ? 'rgba(102, 126, 234, 0.3)' 
    : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.025em;

  &:hover {
    background: ${props => props.active 
      ? 'rgba(102, 126, 234, 0.25)' 
      : 'rgba(255, 255, 255, 0.8)'};
    border-color: ${props => props.active 
      ? 'rgba(102, 126, 234, 0.5)' 
      : 'rgba(102, 126, 234, 0.2)'};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
    height: 26px;
    min-width: fit-content;
  }
`

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto ${theme.spacing.xl};
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.base};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.lightGray};
  }
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl};
  grid-column: 1 / -1;
`

const NoResultsTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
`

const NoResultsText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray};
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
`

const StatItem = styled.div`
  text-align: center;
`

const StatNumber = styled.div`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${theme.colors.primary};
`

const StatLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 1px;
`

interface BlogListPageProps {
  posts: PostMeta[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Extract all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  ).sort()

  // Filter posts based on search and selected tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag)
    
    return matchesSearch && matchesTag
  })

  // Calculate stats
  const totalPosts = posts.length
  const totalAuthors = new Set(posts.map(post => post.author)).size
  const totalTags = allTags.length

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tous nos articles
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explorez nos récits, guides et réflexions sur la vie dans le Grand Nord
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <StatsContainer>
          <StatItem>
            <StatNumber>{totalPosts}</StatNumber>
            <StatLabel>Articles</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{totalAuthors}</StatNumber>
            <StatLabel>Auteurs</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{totalTags}</StatNumber>
            <StatLabel>Catégories</StatLabel>
          </StatItem>
        </StatsContainer>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <FilterContainer>
          <FilterButton
            active={!selectedTag}
            onClick={() => setSelectedTag(null)}
          >
            Tous
          </FilterButton>
          {allTags.map(tag => (
            <FilterButton
              key={tag}
              active={selectedTag === tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>

        <BlogGrid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))
          ) : (
            <NoResults>
              <NoResultsTitle>Aucun article trouvé</NoResultsTitle>
              <NoResultsText>
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
              </NoResultsText>
            </NoResults>
          )}
        </BlogGrid>
      </ContentSection>
    </PageContainer>
  )
}
