import styled from '@emotion/styled';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaPaperPlane, FaMicrophone, FaCog, FaPlus, FaEnvelope, FaMapMarkerAlt, FaComments, FaClock, FaShieldAlt, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';

const ContactSection = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
`;

const GlowingBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(90, 143, 255, 0.15), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(177, 108, 255, 0.1), transparent 40%);
  z-index: -1;
  opacity: 0.7;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`;

const BaseSection = styled(motion.div)`
  background: rgba(24, 26, 32, 0.98);
  border: 2px solid #23263a;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: rgba(35, 38, 58, 0.5);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

const ContactInfoSection = styled(BaseSection)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(13, 15, 25, 0.95);
`;

const SecureCommSection = styled(BaseSection)`
  padding-top: 4rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  
  svg {
    color: #1aff8b;
    font-size: 1.4rem;
  }
`;

const HeaderTitle = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  margin: 0;
  font-weight: 500;
`;

const HeaderDescription = styled.p`
  color: #A1A1AA;
  margin: 0.5rem 0 2rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
  }

  svg {
    color: #5a8fff;
    font-size: 1.4rem;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(90, 143, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.2rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`;

const ContactText = styled.p`
  color: #A1A1AA;
  margin: 0.2rem 0 0 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.3rem;
  
  a {
    color: #A1A1AA;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 0.95rem;
    
    &:hover {
      color: #5a8fff;
    }
  }
`;

const MainHeading = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(90deg, #5a8fff 0%, #b16cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const MainDescription = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 1.6;
`;

const TerminalWrapper = styled(motion.div)`
  background: ${props => props.theme.colors.card.bg};
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  font-family: ${props => props.theme.typography.fontFamily.mono};
  color: #b3ffb3;
  position: relative;
  min-height: 320px;
  backdrop-filter: blur(${props => props.theme.blur.md});

  &:hover {
    border-color: ${props => props.theme.colors.card.hover.border};
    box-shadow: ${props => props.theme.colors.card.hover.shadow};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: rgba(35, 38, 58, 0.5);
    border-top-left-radius: ${props => props.theme.borderRadius.lg};
    border-top-right-radius: ${props => props.theme.borderRadius.lg};
    backdrop-filter: blur(${props => props.theme.blur.sm});
  }
`;

const TerminalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 0.5rem;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.div`
  color: #A1A1AA;
  font-size: 0.9rem;
  margin-left: 1rem;
  font-family: ${props => props.theme.typography.fontFamily.mono};
  letter-spacing: 0.5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  background: rgba(35, 38, 58, 0.4);
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  min-height: 200px;
  resize: vertical;
  margin: 1rem 0;
  
  &:focus {
    border-color: #5a8fff;
    box-shadow: 0 0 0 2px rgba(90, 143, 255, 0.2);
  }

  &::placeholder {
    color: rgba(227, 232, 255, 0.5);
  }
`;

const FormInput = styled.input`
  width: 100%;
  background: rgba(35, 38, 58, 0.4);
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:focus {
    border-color: #5a8fff;
    box-shadow: 0 0 0 2px rgba(90, 143, 255, 0.2);
  }

  &::placeholder {
    color: rgba(227, 232, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #4B6EE8, #7C4EF1);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(123, 78, 241, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  color: #fff;
  background: ${props => props.success ? 'rgba(26, 255, 139, 0.2)' : 'rgba(255, 71, 87, 0.2)'};
  border: 1px solid ${props => props.success ? '#1aff8b' : '#ff4757'};
`;

const FloatingDot = styled(motion.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: 0.6;
  pointer-events: none;
  top: 0;
  transform: translateY(100px);
`;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xzzdarrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          _replyto: formState.email,
          _subject: `New message from ${formState.name}`,
          _cc: 'nazif.keyan@gmail.com'
        })
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate floating dots with fixed horizontal positions
  const dots = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    color: ['#5a8fff', '#b16cff', '#1aff8b'][i % 3],
    x: Math.random() * 100,
    duration: 3 + Math.random() * 2
  }));

  return (
    <ContactSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <GlowingBackground />
      {dots.map(dot => (
        <FloatingDot
          key={dot.id}
          color={dot.color}
          style={{
            left: `${dot.x}%`,
          }}
          animate={{
            y: [100, 80, 100],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <MainHeading
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Let's Connect Securely
      </MainHeading>
      
      <MainDescription
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Choose your preferred secure communication channel or send an encrypted message directly through our secure form.
      </MainDescription>

      <ContentWrapper>
        <ContactInfoSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeader>
              <FaShieldAlt />
              <HeaderTitle>Secure Channels</HeaderTitle>
            </SectionHeader>
            <HeaderDescription>
              Direct communication channels are available through multiple secure protocols. Select your preferred method of contact below.
            </HeaderDescription>
          </motion.div>

          <ContactItem 
            as={motion.a} 
            href="mailto:nazif.keyan@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactDetails>
              <ContactLabel>Email Protocol</ContactLabel>
              <ContactText>nazif.keyan@gmail.com</ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem 
            as={motion.a} 
            href="https://www.linkedin.com/in/nazifkeyan/" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <ContactDetails>
              <ContactLabel>LinkedIn Connect</ContactLabel>
              <ContactText>linkedin.com/in/nazifkeyan</ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem 
            as={motion.a} 
            href="https://github.com/Keyanog" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <FaGithub />
            </IconWrapper>
            <ContactDetails>
              <ContactLabel>GitHub Repository</ContactLabel>
              <ContactText>github.com/Keyanog</ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem 
            as={motion.a} 
            href="https://tryhackme.com" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <SiTryhackme />
            </IconWrapper>
            <ContactDetails>
              <ContactLabel>TryHackMe</ContactLabel>
              <ContactText>tryhackme.com/p/nazif</ContactText>
            </ContactDetails>
          </ContactItem>

          <ContactItem 
            as={motion.a} 
            href="https://discord.com/users/1nazif1" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper>
              <FaDiscord />
            </IconWrapper>
            <ContactDetails>
              <ContactLabel>Discord</ContactLabel>
              <ContactText>1nazif1</ContactText>
            </ContactDetails>
          </ContactItem>
        </ContactInfoSection>

        <SecureCommSection>
          <TerminalHeader>
            <TerminalButton color="#ff5f56" />
            <TerminalButton color="#ffbd2e" />
            <TerminalButton color="#27c93f" />
            <TerminalTitle>SECURE-TRANSMISSION://ENCRYPT</TerminalTitle>
          </TerminalHeader>
          
          <form onSubmit={handleFormSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FormInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleFormChange}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <FormInput
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleFormChange}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FormTextarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleFormChange}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </SubmitButton>
            </motion.div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StatusMessage success={submitStatus.success}>
                  {submitStatus.message}
                </StatusMessage>
              </motion.div>
            )}
          </form>
        </SecureCommSection>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact; 