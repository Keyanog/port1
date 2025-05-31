import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLock, FaCode, FaServer, FaShieldAlt, FaBug, FaDesktop, FaMobile, FaDatabase } from 'react-icons/fa';

const ProjectSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
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
  z-index: 0;
  opacity: 0.7;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #5a8fff 0%, #b16cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.card.bg};
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(${props => props.theme.blur.md});

  &:hover {
    border-color: ${props => props.theme.colors.card.hover.border};
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%);
  }
`;

const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1aff8b20 0%, #5a8fff20 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #5a8fff;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(90, 143, 255, 0.1);
  color: #5a8fff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5a8fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #b16cff;
  }
`;

const Projects = () => {
  const projects = [
    {
      icon: <FaShieldAlt />,
      title: "SecureAuth System",
      description: "Advanced authentication system with biometric verification and JWT implementation for enhanced security.",
      tech: ["React", "Node.js", "JWT", "Biometrics API"],
      github: "https://github.com/Keyanog/secure-auth",
      demo: "https://secure-auth-demo.com"
    },
    {
      icon: <FaCode />,
      title: "E-Learning Platform",
      description: "Modern e-learning platform with real-time collaboration, video streaming, and interactive quizzes.",
      tech: ["Next.js", "TypeScript", "WebRTC", "Tailwind CSS"],
      github: "https://github.com/Keyanog/edu-platform",
      demo: "https://edu-platform-demo.com"
    },
    {
      icon: <FaBug />,
      title: "Vulnerability Scanner",
      description: "Automated security testing tool that identifies potential vulnerabilities in web applications.",
      tech: ["Python", "SQLMap", "OWASP", "Docker"],
      github: "https://github.com/Keyanog/vuln-scanner",
      demo: "https://vuln-scanner-demo.com"
    },
    {
      icon: <FaMobile />,
      title: "Food Delivery App",
      description: "Full-stack food delivery application with real-time order tracking and payment integration.",
      tech: ["React Native", "Firebase", "Stripe", "Google Maps"],
      github: "https://github.com/Keyanog/food-delivery",
      demo: "https://food-delivery-demo.com"
    },
    {
      icon: <FaServer />,
      title: "Cloud Security Monitor",
      description: "Real-time monitoring system for cloud infrastructure with automated threat detection.",
      tech: ["AWS", "Node.js", "React", "MongoDB"],
      github: "https://github.com/Keyanog/cloud-monitor",
      demo: "https://cloud-monitor-demo.com"
    },
    {
      icon: <FaDesktop />,
      title: "Social Media Dashboard",
      description: "Comprehensive social media management dashboard with analytics and scheduling features.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/Keyanog/social-dashboard",
      demo: "https://social-dashboard-demo.com"
    }
  ];

  return (
    <ProjectSection id="projects">
      <GlowingBackground />
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of web development and cybersecurity innovations
        </SectionSubtitle>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaLock /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </ProjectSection>
  );
};

export default Projects; 