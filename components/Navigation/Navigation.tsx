'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  NavContainer,
  NavWrapper,
  Logo,
  NavLinks,
  NavLink,
  MenuButton,
  Overlay,
} from './Navigation.styles'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <NavWrapper>
          <Link href="/" passHref legacyBehavior>
            <Logo scrolled={scrolled}>Vivre en Arctique</Logo>
          </Link>

          <NavLinks isOpen={isOpen}>
            <Link href="/" passHref legacyBehavior>
              <NavLink scrolled={scrolled} onClick={closeMenu}>
                Accueil
              </NavLink>
            </Link>
            <Link href="/blog" passHref legacyBehavior>
              <NavLink scrolled={scrolled} onClick={closeMenu}>
                Articles
              </NavLink>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <NavLink scrolled={scrolled} onClick={closeMenu}>
                À propos
              </NavLink>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <NavLink scrolled={scrolled} onClick={closeMenu}>
                Contact
              </NavLink>
            </Link>
          </NavLinks>

          <MenuButton
            scrolled={scrolled}
            onClick={toggleMenu}
            className={isOpen ? 'active' : ''}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </NavWrapper>
      </NavContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  )
}

export default Navigation
