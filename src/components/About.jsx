import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { FaPython, FaCloud, FaRobot, FaNetworkWired, FaUserShield, FaSearch, FaLock, FaBug, FaServer, FaReact, FaDatabase, FaUserFriends, FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  box-sizing: border-box;
  padding: 7rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(90, 143, 255, 0.15), transparent 70%),
                radial-gradient(circle at 80% 70%, rgba(177, 108, 255, 0.1), transparent 50%);
    z-index: -1;
    opacity: 0.7;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  padding: 0 2rem;
  
  @media (max-width: 1200px) {
    padding: 0 1.5rem;
    gap: 2.5rem;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0 1.5rem;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  
  @media (max-width: 900px) {
    gap: 4rem;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.card.bg};
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 1.75rem;
  width: 100%;
  transition: ${props => props.theme.animation.transition};
  will-change: transform, box-shadow, border-color;
  backdrop-filter: blur(${props => props.theme.blur.md});

  &:hover {
    transform: translateY(-8px) scale(1.035);
    box-shadow: ${props => props.theme.colors.card.hover.shadow};
    border-color: ${props => props.theme.colors.card.hover.border};
    z-index: 2;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: 0.5rem;
  background: ${props => props.theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
`;

const Bio = styled.p`
  color: ${props => props.theme.colors.text.primary};
  font-size: 0.9rem;
  margin-bottom: 0;
  line-height: 1.6;
`;

const SkillsContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0;
  margin-top: 5rem;
`;

const SkillsTitle = styled.h3`
  color: #e3e8ff;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #23263a;
  color: #b3c7f9;
  border-radius: 16px;
  padding: 0.35rem 1rem 0.35rem 0.8rem;
  font-size: 1rem;
  font-weight: 500;
`;

const RadarCard = styled(Card)`
  background: rgba(30,32,48,0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const RadarTitle = styled.h3`
  color: #b3c7f9;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const SkillStats = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #b3c7f9;
  font-size: 0.85rem;
  background: #23263a;
  border-radius: 8px;
  padding: 0.25rem 0.6rem;
`;

const FocusSection = styled.section`
  margin-top: 6rem;
`;

const FocusTitle = styled.h2`
  color: #1aff8b;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  margin-left: 0.5rem;
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem 2.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FocusCard = styled(motion.div)`
  background: rgba(24, 26, 32, 0.98);
  border: 2px solid #23263a;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  padding: 2rem 2.2rem 1.5rem 2.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
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

const FocusIcon = styled.div`
  background: #181a20;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  color: #5a8fff;
  margin-bottom: 1.2rem;
`;

const FocusHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FocusTitleCard = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.2rem 0;
`;

const FocusStatus = styled.span`
  background: #1a2b4c;
  color: #5a8fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.3rem 1rem;
  margin-left: 1rem;
`;

const FocusDesc = styled.p`
  color: #b3b8d6;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;

const FocusProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background: #23263a;
  border-radius: 6px;
  margin-bottom: 1.1rem;
  overflow: hidden;
`;

const FocusProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #5a8fff 0%, #b16cff 100%);
  border-radius: 6px;
  transition: width 1.2s cubic-bezier(.4,0,.2,1);
`;

const FocusLevel = styled.span`
  background: #23263a;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
`;

const FocusFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b8d6;
  font-size: 1rem;
`;

const about = {
  subtitle: 'A glimpse into my background and approach',
  bio: `I'm a passionate web developer and cybersecurity enthusiast. I love building modern, performant web applications with a focus on clean code, great UX, and robust security. My journey started with curiosity for how the web works, and quickly grew into a drive to create and secure digital experiences.\n\nI believe in a security-first approach to software development, ensuring that every project I work on is not only functional and beautiful, but also resilient against threats. Whether it's designing a new UI, building APIs, or researching the latest in cybersecurity, I enjoy solving problems and learning new things every day.\n\nMy work combines technical expertise in web technologies (React, Node.js, CSS, and more) with a deep understanding of cybersecurity principles, so I can deliver solutions that are both innovative and secure.`
};

const skills = [
  { label: 'SIEM', icon: FaServer },
  { label: 'Cloud Security', icon: FaCloud },
  { label: 'AI Automation', icon: FaRobot },
  { label: 'Web Development', icon: FaUserShield },
  { label: 'React', icon: FaReact },
  { label: 'MongoDB', icon: FaDatabase },
  { label: 'Network Security', icon: FaNetworkWired },
  { label: 'User Research', icon: FaSearch },
  { label: 'Security Auditing', icon: FaLock },
  { label: 'Ethical Hacking', icon: FaBug },
];

const radarData = {
  labels: [
    'Python',
    'SIEM',
    'Cloud Security',
    'Penetration Testing',
    'Network Security',
    'AI Automation',
    'Security Auditing',
    'React',
    'MongoDB',
  ],
  datasets: [
    {
      label: 'Proficiency',
      data: [35, 70, 75, 65, 68, 85, 60, 92, 88],
      backgroundColor: 'rgba(83, 110, 255, 0.3)',
      borderColor: '#536eff',
      pointBackgroundColor: '#b3c7f9',
      pointBorderColor: '#536eff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#536eff',
      borderWidth: 2,
    },
  ],
};

const radarOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  layout: {
    padding: 32,
  },
  scales: {
    r: {
      angleLines: { color: '#23263a' },
      grid: { color: '#23263a' },
      pointLabels: {
        color: '#b3c7f9',
        font: { size: 12 },
        padding: 16,
      },
      ticks: { color: '#7b8bbd', backdropColor: 'transparent', stepSize: 20, display: false },
      min: 0,
      max: 100,
    },
  },
};

const skillStats = [
  { label: 'Python', value: '35%', icon: FaPython },
  { label: 'React', value: '92%', icon: FaReact },
  { label: 'MongoDB', value: '88%', icon: FaDatabase },
  { label: 'Cloud Security', value: '75%', icon: FaCloud },
  { label: 'Security Auditing', value: '60%', icon: FaLock },
  { label: 'AI Automation', value: '85%', icon: FaRobot },
  { label: 'SIEM', value: '70%', icon: FaServer },
  { label: 'Penetration Testing', value: '65%', icon: FaBug },
  { label: 'Network Security', value: '68%', icon: FaNetworkWired },
];

const focusItems = [
  {
    icon: <FaReact />,
    title: 'React & Frontend Engineering',
    desc: 'Building modern, performant UIs with React, hooks, and component-driven design.',
    progress: 80,
    status: 'In Progress',
    level: 'Advanced',
  },
  {
    icon: <FaDatabase />,
    title: 'MongoDB & Databases',
    desc: 'Designing and managing NoSQL databases, focusing on scalable data models and queries.',
    progress: 70,
    status: 'In Progress',
    level: 'Intermediate',
  },
  {
    icon: <FaServer />,
    title: 'APIs & Backend',
    desc: 'Developing RESTful APIs and backend logic with Node.js and Express.',
    progress: 65,
    status: 'In Progress',
    level: 'Intermediate',
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX & Design Systems',
    desc: 'Crafting beautiful, accessible interfaces and reusable design systems.',
    progress: 75,
    status: 'In Progress',
    level: 'Intermediate',
  },
];

const About = () => (
  <AboutSection id="about">
    <Container>
      <Card
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ maxWidth: '450px', margin: '0 auto' }}
      >
        <Title>About Me</Title>
        <Subtitle>{about.subtitle}</Subtitle>
        <Bio>{about.bio}</Bio>
      </Card>
      <RadarCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ maxWidth: '450px', margin: '0 auto' }}
      >
        <RadarTitle>Technical Proficiency Matrix</RadarTitle>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ width: '100%', maxWidth: '350px', margin: '0.5rem 0' }}
        >
          <Radar data={radarData} options={radarOptions} />
        </motion.div>
        <SkillStats>
          {skillStats.slice(0, 6).map(({ label, value, icon: Icon }, i) => (
            <Stat
              key={label}
              as={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon /> {label} <span style={{ marginLeft: 'auto', fontWeight: 700 }}>{value}</span>
            </Stat>
          ))}
        </SkillStats>
      </RadarCard>
    </Container>
    <FocusSection>
      <FocusTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Current Focus
      </FocusTitle>
      <FocusGrid>
        {focusItems.map((item, i) => (
          <FocusCard
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <FocusHeader>
              <FocusIcon>{item.icon}</FocusIcon>
              <FocusStatus>{item.status}</FocusStatus>
            </FocusHeader>
            <FocusTitleCard>{item.title}</FocusTitleCard>
            <FocusDesc>{item.desc}</FocusDesc>
            <FocusProgressBar>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #5a8fff 0%, #b16cff 100%)',
                  borderRadius: '6px'
                }}
              />
            </FocusProgressBar>
            <FocusFooter>
              <FocusLevel>{item.level}</FocusLevel>
              <span>Present</span>
            </FocusFooter>
          </FocusCard>
        ))}
      </FocusGrid>
    </FocusSection>
  </AboutSection>
);

export default About; 