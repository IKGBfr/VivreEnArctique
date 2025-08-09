import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.article)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 200px;
  }
`

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.slow};

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`

export const CardContent = styled.div`
  padding: ${theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};
`

export const Tag = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.secondary};
  padding: 2px 8px;
  border-radius: ${theme.radii.full};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.3;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Excerpt = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
  flex: 1;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.sm};
  border-top: 1px solid ${theme.colors.border};
`

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.lightGray};
`

export const Author = styled.span`
  font-weight: 500;
  color: ${theme.colors.gray};
`

export const Date = styled.time`
  color: ${theme.colors.lightGray};
`

export const ReadingTime = styled.span`
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.sm};
`

export const ReadMoreLink = styled.a`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap ${theme.transitions.fast};

  &:hover {
    gap: 8px;
  }

  &::after {
    content: '→';
    transition: transform ${theme.transitions.fast};
  }

  &:hover::after {
    transform: translateX(2px);
  }
`
