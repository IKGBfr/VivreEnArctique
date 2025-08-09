import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export const GridContainer = styled.section`
  width: 100%;
  padding: ${theme.spacing.xxl} 0;
`

export const GridWrapper = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }
`

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.dark};
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  font-weight: 700;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`

export const SectionSubtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.base};
    margin-bottom: ${theme.spacing.xl};
  }
`

export const Grid = styled.div`
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

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${theme.spacing.xxl};
`

export const EmptyStateIcon = styled.div`
  font-size: ${theme.fontSizes['5xl']};
  margin-bottom: ${theme.spacing.md};
  opacity: 0.5;
`

export const EmptyStateTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
`

export const EmptyStateText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray};
`

export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.xl};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  text-decoration: none;
  border-radius: ${theme.radii.lg};
  transition: all ${theme.transitions.base};

  &:hover {
    background-color: ${theme.colors.dark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  &::after {
    content: '→';
    transition: transform ${theme.transitions.fast};
  }

  &:hover::after {
    transform: translateX(4px);
  }
`

export const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.xxl};
`
