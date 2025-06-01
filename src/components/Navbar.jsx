import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(13, 15, 25, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(90, 143, 255, 0.1);
`;

const NavContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  position: relative;
  padding: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #5a8fff, #1aff8b);
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.1;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #5a8fff 0%, #1aff8b 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    20% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const LogoText = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(90deg, #5a8fff 0%, #1aff8b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  position: relative;

  &::after {
    content: 'NAZIF KEYAN';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #5a8fff 0%, #1aff8b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    opacity: 0.3;
    animation: glitch 3s infinite;
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #A1A1AA;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #5a8fff;
  }
`;

const Navbar = ({ mode, setMode }) => {
  return (
    <NavContainer>
      <NavContent>
        <LogoContainer to="/">
          <LogoIcon>
            <FaShieldAlt />
          </LogoIcon>
          <LogoText>NAZIF KEYAN</LogoText>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/#resources">Resources</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar; 