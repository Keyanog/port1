import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaCodeBranch, FaBrain, FaPython, FaShieldAlt, FaReact, FaCode } from 'react-icons/fa';

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 7rem 2rem;
  
  @media (max-width: 1200px) {
    padding: 7rem 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #5a8fff;
  margin-bottom: 2.5rem;
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
  position: relative;
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
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.7rem;
`;

const CardIcon = styled.div`
  background: #23263a;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  color: #a084fa;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const CardDesc = styled.p`
  color: #b3b8d6;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const Badge = styled.span`
  background: #7c3aed;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.3rem 1.1rem;
  margin-left: 1rem;
`;

const LevelBadge = styled.span`
  background: #23263a;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
`;

const FooterBadge = styled.span`
  color: #b3b8d6;
  font-size: 1rem;
  margin-left: auto;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const PathLink = styled.a`
  display: block;
  text-align: right;
  color: #5a8fff;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 2.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #b16cff;
  }
`;

const goals = [
  // Cybersecurity
  {
    icon: <FaShieldAlt />,
    title: 'Secure Development Practices',
    desc: 'Planning to learn secure coding practices and DevSecOps principles',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaPython />,
    title: 'Advanced Python for Security',
    desc: 'Future goal to develop advanced security tools and implement machine learning for threat detection using Python',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaStar />,
    title: 'Advanced Threat Hunting',
    desc: 'Future goal to develop skills in proactive threat detection and hunting methodologies',
    level: 'Expert',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaBrain />,
    title: 'Critical Thinking & Adaptability',
    desc: 'Developing advanced problem-solving skills, adaptability to new technologies, and time management for security operations',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  // Web Dev
  {
    icon: <FaCodeBranch />,
    title: 'Fullstack TypeScript',
    desc: 'Mastering TypeScript for both frontend and backend development (React, Node.js)',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaReact />,
    title: 'React Performance Optimization',
    desc: 'Learning advanced React patterns and performance optimization techniques',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaGraduationCap />,
    title: 'UI/UX Mastery',
    desc: 'Deepening understanding of user experience, accessibility, and design systems',
    level: 'Advanced',
    badge: 'Planned',
    footer: 'Future',
  },
  {
    icon: <FaCode />,
    title: 'Open Source Contribution',
    desc: 'Contributing to open source web development and security projects',
    level: 'Intermediate',
    badge: 'Planned',
    footer: 'Future',
  },
];

const FutureGoals = () => (
  <Section id="future-goals">
    <Title>Future Goals</Title>
    <Grid>
      {goals.map((goal, i) => (
        <Card
          key={goal.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <CardIcon>{goal.icon}</CardIcon>
            <CardTitle>{goal.title}</CardTitle>
            <Badge>{goal.badge}</Badge>
          </CardHeader>
          <CardDesc>{goal.desc}</CardDesc>
          <CardFooter>
            <LevelBadge>{goal.level}</LevelBadge>
            <FooterBadge>{goal.footer}</FooterBadge>
          </CardFooter>
        </Card>
      ))}
    </Grid>
    <PathLink href="#">View Full Learning Path</PathLink>
  </Section>
);

export default FutureGoals; 