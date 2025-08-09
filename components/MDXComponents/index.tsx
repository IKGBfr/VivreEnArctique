import React from 'react'
import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import Image from 'next/image'

const StyledH1 = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-top: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`

const StyledH2 = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-top: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`

const StyledH3 = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${theme.colors.dark};
  margin-top: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xl};
  }
`

const StyledP = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.base};
    line-height: 1.7;
  }
`

const StyledUl = styled.ul`
  margin: ${theme.spacing.md} 0;
  padding-left: ${theme.spacing.lg};
  
  li {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray};
    line-height: 1.8;
    margin-bottom: ${theme.spacing.xs};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.base};
    }
  }
`

const StyledOl = styled.ol`
  margin: ${theme.spacing.md} 0;
  padding-left: ${theme.spacing.lg};
  
  li {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray};
    line-height: 1.8;
    margin-bottom: ${theme.spacing.xs};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.base};
    }
  }
`

const StyledBlockquote = styled.blockquote`
  border-left: 4px solid ${theme.colors.primary};
  padding-left: ${theme.spacing.lg};
  margin: ${theme.spacing.lg} 0;
  font-style: italic;
  
  p {
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.dark};
    line-height: 1.6;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.lg};
    }
  }
`

const StyledCode = styled.code`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 2px 6px;
  border-radius: ${theme.radii.sm};
  font-family: ${theme.fonts.mono};
  font-size: 0.9em;
`

const StyledPre = styled.pre`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.radii.lg};
  overflow-x: auto;
  margin: ${theme.spacing.lg} 0;
  
  code {
    background-color: transparent;
    color: inherit;
    padding: 0;
    font-size: ${theme.fontSizes.sm};
  }
`

const StyledHr = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, ${theme.colors.border}, transparent);
  margin: ${theme.spacing.xxl} 0;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${theme.spacing.lg} 0;
  
  th {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.dark};
    font-weight: 600;
    text-align: left;
    padding: ${theme.spacing.sm};
    border-bottom: 2px solid ${theme.colors.primary};
  }
  
  td {
    padding: ${theme.spacing.sm};
    border-bottom: 1px solid ${theme.colors.border};
    color: ${theme.colors.gray};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`

const StyledLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color ${theme.transitions.fast};
  
  &:hover {
    border-bottom-color: ${theme.colors.primary};
  }
`

const ImageWrapper = styled.div`
  margin: ${theme.spacing.xl} 0;
  border-radius: ${theme.radii.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const MDXImage = ({ src, alt, ...props }: any) => {
  if (!src) return null
  
  // Check if it's an external URL
  const isExternal = src.startsWith('http') || src.startsWith('//')
  
  return (
    <ImageWrapper>
      {isExternal ? (
        <img src={src} alt={alt || ''} {...props} />
      ) : (
        <Image
          src={src}
          alt={alt || ''}
          width={1200}
          height={675}
          style={{ width: '100%', height: 'auto' }}
          {...props}
        />
      )}
    </ImageWrapper>
  )
}

const MDXComponents = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  p: StyledP,
  ul: StyledUl,
  ol: StyledOl,
  blockquote: StyledBlockquote,
  code: StyledCode,
  pre: StyledPre,
  hr: StyledHr,
  table: StyledTable,
  a: StyledLink,
  img: MDXImage,
}

export default MDXComponents
