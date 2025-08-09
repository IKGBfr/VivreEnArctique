'use client'

import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import BlogGrid from '@/components/BlogGrid/BlogGrid'
import { theme } from '@/styles/theme'
import { PostMeta } from '@/lib/types'

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #0EA5E9 100%);
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1920&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${theme.spacing.lg};
  max-width: 800px;
`

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['4xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.lg};
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes['2xl']};
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`

const FeaturesSection = styled.section`
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  background-color: ${theme.colors.white};
`

const FeaturesContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: ${theme.spacing.xl};
`

const FeatureIcon = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: ${theme.spacing.md};
`

const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.dark};
  margin-bottom: ${theme.spacing.sm};
`

const FeatureDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.gray};
  line-height: 1.6;
`

interface HomePageProps {
  posts: PostMeta[]
}

export default function HomePage({ posts }: HomePageProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <HeroSection>
        <HeroBackground />
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vivre en Arctique
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explorez la beauté sauvage du Grand Nord à travers nos récits, 
            photographies et conseils pour découvrir l'Arctique
          </HeroSubtitle>
        </HeroContent>
        <ScrollIndicator
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          ↓
        </ScrollIndicator>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContainer>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🏔️</FeatureIcon>
              <FeatureTitle>Paysages époustouflants</FeatureTitle>
              <FeatureDescription>
                Découvrez des panoramas glacés à couper le souffle et des étendues infinies de blanc immaculé
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🐻‍❄️</FeatureIcon>
              <FeatureTitle>Faune arctique</FeatureTitle>
              <FeatureDescription>
                Rencontrez les habitants du Grand Nord : ours polaires, phoques, morses et bien d'autres
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🌌</FeatureIcon>
              <FeatureTitle>Aurores boréales</FeatureTitle>
              <FeatureDescription>
                Admirez le spectacle magique des lumières dansantes dans le ciel polaire
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🛷</FeatureIcon>
              <FeatureTitle>Culture inuit</FeatureTitle>
              <FeatureDescription>
                Plongez dans les traditions millénaires des peuples autochtones de l'Arctique
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>❄️</FeatureIcon>
              <FeatureTitle>Survie extrême</FeatureTitle>
              <FeatureDescription>
                Apprenez les techniques de survie dans les conditions les plus extrêmes de la planète
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>🌡️</FeatureIcon>
              <FeatureTitle>Changement climatique</FeatureTitle>
              <FeatureDescription>
                Comprenez l'impact du réchauffement sur l'écosystème arctique fragile
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>

      <BlogGrid posts={posts} />
    </>
  )
}
