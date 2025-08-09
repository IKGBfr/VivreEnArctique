import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all ${theme.transitions.base};
  border-bottom: ${props => props.scrolled ? `1px solid ${theme.colors.border}` : 'none'};
`

export const NavWrapper = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  }
`

export const Logo = styled.a<{ scrolled: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${props => props.scrolled ? '#0F172A' : theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  letter-spacing: -0.5px;
  text-shadow: ${props => props.scrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)'};

  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xl};
  }
`

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: ${theme.colors.white};
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing.lg};
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform ${theme.transitions.base};
    box-shadow: ${props => props.isOpen ? '-10px 0 30px rgba(0, 0, 0, 0.1)' : 'none'};
  }
`

export const NavLink = styled.a<{ scrolled: boolean }>`
  font-size: ${theme.fontSizes.base};
  color: ${props => props.scrolled ? '#0F172A' : theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  font-weight: 500;
  position: relative;
  text-shadow: ${props => props.scrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)'};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.primary};
    transition: width ${theme.transitions.fast};
  }

  &:hover {
    color: ${theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    color: '#0F172A';
    font-size: ${theme.fontSizes.lg};
  }
`

export const MenuButton = styled.button<{ scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${props => props.scrolled ? '#0F172A' : theme.colors.white};
    margin: 5px 0;
    transition: all ${theme.transitions.fast};
    transform-origin: center;
    filter: ${props => props.scrolled ? 'none' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'};
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(5px, 5px);
      background-color: '#0F172A';
    }
    
    span:nth-of-type(2) {
      opacity: 0;
    }
    
    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -6px);
      background-color: '#0F172A';
    }
  }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
