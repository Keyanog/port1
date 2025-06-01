import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 0;
  background: #0B0F1A;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  color: #A1A1AA;
  line-height: 1.6;
  margin: 0;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #A1A1AA;
  font-size: 1.5rem;
  transition: color 0.3s;
  
  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #2D2D2D;
  text-align: center;
  color: #A1A1AA;
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterSection>
        <Logo to="/">
          Nazif Keyan
        </Logo>
        <Description>
        Advancing the frontiers of web development and computer science to build innovative, scalable solutions for modern digital challenges.
        </Description>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Connect</FooterTitle>
        <SocialLinks>
          <SocialIcon href="https://github.com/Keyanog" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/nazifkeyan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://x.com/_Keyanooo_" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/_notkeyanatall_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://discord.com/users/1nazif1" target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </SocialIcon>
          <SocialIcon href="mailto:nazif.keyan@gmail.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </FooterSection>
    </FooterContent>
    <Copyright>
      © 2025 Nazif Keyan. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer; 