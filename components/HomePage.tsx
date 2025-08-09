'use client'

import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'

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
  opacity: 0.4;
  transform: scale(1.1);
  transition: transform 20s ease-out;
  
  &:hover {
    transform: scale(1.05);
  }
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  z-index: 1;
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: ${theme.spacing.lg};
  max-width: 900px;
`

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 8vw, 6rem);
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: -2px;
  line-height: 1.1;
`

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xxl};
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes['2xl']};
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 30px;
    background: linear-gradient(to bottom, transparent, ${theme.colors.white});
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }

  animation: bounce 3s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-8px);
    }
    60% {
      transform: translateX(-50%) translateY(-4px);
    }
  }
`

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const SnowflakeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`

const Snowflake = styled(motion.div)<{ delay: number; duration: number; size: number }>`
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  user-select: none;
  pointer-events: none;
  font-size: ${props => props.size}px;
  animation: fall ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;

  @keyframes fall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`

export default function HomePage() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  // Génération des flocons de neige
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 20,
    size: 8 + Math.random() * 8
  }))

  return (
    <HeroSection>
      <ParallaxContainer>
        <HeroBackground />
        <HeroOverlay />
        
        <SnowflakeContainer>
          {snowflakes.map((flake) => (
            <Snowflake
              key={flake.id}
              delay={flake.delay}
              duration={flake.duration}
              size={flake.size}
              style={{ left: `${flake.left}%` }}
            >
              ❄
            </Snowflake>
          ))}
        </SnowflakeContainer>
      </ParallaxContainer>

      <HeroContent
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Vivre en Arctique
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          Explorez la beauté sauvage du Grand Nord à travers nos récits, 
          photographies et conseils pour découvrir l'Arctique dans toute sa splendeur
        </HeroSubtitle>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        ↓
      </ScrollIndicator>
    </HeroSection>
  )
}
