import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaLock, FaGlobe, FaReact, FaExternalLinkAlt } from 'react-icons/fa';

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 7rem 2rem;
  
  @media (max-width: 1200px) {
    padding: 7rem 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.7rem;
`;

const Subtitle = styled.p`
  color: #b3b8d6;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
`;

const FeaturedTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 1200px) {
    gap: 2.5rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(24, 26, 32, 0.98);
  border: 2px solid #23263a;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-width: 0;
  transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s, border-color 0.25s;
  will-change: transform, box-shadow, border-color;
  &:hover {
    transform: translateY(-8px) scale(1.035);
    box-shadow: 0 12px 40px 0 rgba(90, 143, 255, 0.25), 0 2px 16px 0 rgba(177, 108, 255, 0.12);
    border-color: #5a8fff;
    z-index: 2;
  }
`;

const CardHeader = styled.div`
  background: ${({ color }) => color || '#23263a'};
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardIcon = styled.div`
  font-size: 2.2rem;
  color: ${({ color }) => color || '#fff'};
`;

const CardBody = styled.div`
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h4`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
`;

const CardAuthor = styled.div`
  color: #b3b8d6;
  font-size: 0.98rem;
  margin-bottom: 0.7rem;
`;

const CardDesc = styled.p`
  color: #b3b8d6;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LevelBadge = styled.span`
  background: ${({ color }) => color || '#23263a'};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.3rem 1rem;
`;

const ExploreBtn = styled.a`
  background: transparent;
  color: #fff;
  border: 1.5px solid #23263a;
  border-radius: 10px;
  padding: 0.45rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    background: #23263a;
    color: #5a8fff;
    border-color: #5a8fff;
  }
`;

const resources = [
  // Cybersecurity
  {
    icon: <FaBook />, color: '#162447',
    title: "The Web Application Hacker's Handbook",
    author: 'by Dafydd Stuttard & Marcus Pinto',
    desc: "Comprehensive guide to finding and exploiting security flaws in web applications. This book is considered the 'bible' for web application security.",
    level: 'Intermediate',
    levelColor: '#bfa600',
    link: 'https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470',
  },
  {
    icon: <FaCode />, color: '#3a1a1a',
    title: 'TryHackMe',
    desc: 'Learn cybersecurity through hands-on exercises and challenges with rooms dedicated to specific topics and skills.',
    level: 'Beginner',
    levelColor: '#1aff8b',
    link: 'https://tryhackme.com/',
  },
  {
    icon: <FaCode />, color: '#1a3a1a',
    title: 'HackTheBox',
    desc: 'Online platform to test and advance your skills in penetration testing and cybersecurity.',
    level: 'Intermediate',
    levelColor: '#bfa600',
    link: 'https://www.hackthebox.com/',
  },
  {
    icon: <FaBook />, color: '#162447',
    title: 'Cybersecurity Career Pathways',
    desc: 'Comprehensive guide to various career paths in cybersecurity, required skills, and how to start.',
    level: 'Beginner',
    levelColor: '#1aff8b',
    link: 'https://www.cyberseek.org/pathway.html',
  },
  // Web Dev
  {
    icon: <FaGlobe />, color: '#1a1a3a',
    title: 'freeCodeCamp',
    desc: 'A free, open-source platform to learn web development interactively, from HTML/CSS to JavaScript and APIs.',
    level: 'Beginner',
    levelColor: '#1aff8b',
    link: 'https://www.freecodecamp.org/',
  },
  {
    icon: <FaCode />, color: '#1a1a3a',
    title: 'MDN Web Docs',
    desc: 'The best documentation and learning resource for HTML, CSS, and JavaScript, maintained by Mozilla.',
    level: 'All Levels',
    levelColor: '#5a8fff',
    link: 'https://developer.mozilla.org/',
  },
  {
    icon: <FaCode />, color: '#1a1a3a',
    title: 'JavaScript.info',
    desc: 'A modern tutorial covering everything about JavaScript from the basics to advanced topics.',
    level: 'All Levels',
    levelColor: '#5a8fff',
    link: 'https://javascript.info/',
  },
  {
    icon: <FaReact />, color: '#162447',
    title: 'React Docs',
    desc: 'Official documentation for React, including guides, API reference, and best practices.',
    level: 'All Levels',
    levelColor: '#5a8fff',
    link: 'https://react.dev/',
  },
];

const LearningResources = () => (
  <Section id="resources">
    <Title>Learning Resources</Title>
    <Subtitle>Curated collection of resources that have helped me develop cybersecurity and web development skills.</Subtitle>
    <FeaturedTitle><FaBook /> Featured Resources</FeaturedTitle>
    <Grid>
      {resources.map((res, i) => (
        <Card
          key={res.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <CardHeader color={res.color}>
            <CardIcon color={res.levelColor}>{res.icon}</CardIcon>
          </CardHeader>
          <CardBody>
            <CardTitle>{res.title}</CardTitle>
            {res.author && <CardAuthor>{res.author}</CardAuthor>}
            <CardDesc>{res.desc}</CardDesc>
            <CardFooter>
              <LevelBadge color={res.levelColor}>{res.level}</LevelBadge>
              <ExploreBtn href={res.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Explore
              </ExploreBtn>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default LearningResources; 