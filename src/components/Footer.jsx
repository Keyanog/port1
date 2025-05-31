import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 0 3rem 0;
  background: ${props => props.theme.colors.glass.bg};
  backdrop-filter: blur(${props => props.theme.blur.md});
  border-top: 2px solid;
  border-image: ${props => props.theme.colors.gradients.primary} 1;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(90, 143, 255, 0.15), transparent 70%);
    z-index: -1;
  }
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }
`;

const FooterText = styled(motion.p)`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;

const Heart = styled(motion.span)`
  color: ${props => props.theme.colors.accent.danger};
  display: inline-block;
  margin: 0 0.3rem;
  font-size: 1.2em;
  filter: drop-shadow(0 0 8px rgba(255, 90, 90, 0.5));
`;

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </FooterText>
      <FooterText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ fontSize: '0.9rem', color: props => props.theme.colors.text.muted }}
      >
        
      </FooterText>
    </FooterContent>
  </FooterContainer>
);

export default Footer; 