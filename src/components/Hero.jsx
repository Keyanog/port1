import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const FloatingDot = styled(motion.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: 0.6;
  pointer-events: none;
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
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
  @media (max-width: 900px) {
    padding: 0 1.5rem;
  }
`;

const GradientHeadline = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(90deg, #5a8fff 0%, #b16cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const Tagline = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const TerminalWrapper = styled(motion.div)`
  background: ${props => props.theme.colors.card.bg};
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto 3rem auto;
  text-align: left;
  font-family: ${props => props.theme.typography.fontFamily.mono};
  color: #b3ffb3;
  position: relative;
  min-height: 320px;
  overflow-y: auto;
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
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-left: 1rem;
`;

const TerminalContent = styled.div`
  margin-top: 1rem;
`;

const TerminalInput = styled.input`
  background: transparent;
  border: none;
  color: #b3ffb3;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  width: 90%;
`;

const TerminalPrompt = styled.span`
  color: #7fff7f;
  &::before {
    content: '>';
    margin-right: 0.5rem;
  }
`;

const TerminalOutput = styled(motion.div)`
  color: #b3ffb3;
  margin: 0.5rem 0;
  line-height: 1.4;
`;

const TerminalHelp = styled(motion.div)`
  color: #7fff7f;
  margin: 0.5rem 0;
  line-height: 1.4;
`;

const ChatWrapper = styled(motion.div)`
  background: ${props => props.theme.colors.card.bg};
  border: 1.5px solid ${props => props.theme.colors.card.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: 1.5rem;
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(${props => props.theme.blur.md});
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1.5px solid ${props => props.theme.colors.card.border};
`;

const ChatTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ChatMessage = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 12px;
  max-width: 85%;
  ${props => props.isUser ? `
    background: linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%);
    color: #fff;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
  ` : `
    background: #23263a;
    color: #e3e8ff;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
  `}
`;

const ChatInput = styled.input`
  width: 100%;
  background: #181a20;
  border: 1.5px solid #23263a;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #5a8fff;
  }
`;

const ChatForm = styled.form`
  display: flex;
  gap: 0.8rem;
`;

const SendButton = styled.button`
  background: linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const initialTerminal = [
  { type: 'header', text: 'Welcome to CyberX Terminal v1.0.3' },
  { type: 'help', text: "+ Type 'help' for available commands\n" },
];

const commands = {
  help: {
    output: `Available commands:\n  whoami   - Display who you are\n  contact  - Get my contact information\n  github   - Visit my GitHub profile\n  insta    - Visit my Instagram profile\n  clear    - Clear terminal\n  help     - Show available commands`,
  },
  whoami: {
    output: 'Nazif Keyan, CS Student & Cybersecurity Enthusiast',
  },
  contact: {
    output: 'Email: nazif.keyan@gmail.com',
  },
  github: {
    output: 'GitHub: https://github.com/Keyanog',
  },
  insta: {
    output: 'Instagram: https://instagram.com/_notkeyanatall_',
  },
  clear: {
    output: '',
    clear: true,
  },
};

const Hero = () => {
  const [terminal, setTerminal] = useState(initialTerminal);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  // Chatbot state
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { user: false, text: 'Hi! I am your AI assistant. Ask me anything about web development or cybersecurity.' }
  ]);
  const chatApiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  const chatApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [terminal]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    if (commands[command]) {
      if (commands[command].clear) {
        setTerminal(initialTerminal);
      } else {
        setTerminal((prev) => [
          ...prev,
          { type: 'prompt', text: `> ${cmd}` },
          { type: 'output', text: commands[command].output },
        ]);
      }
    } else {
      setTerminal((prev) => [
        ...prev,
        { type: 'prompt', text: `> ${cmd}` },
        { type: 'output', text: 'Command not found. Type help.' },
      ]);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    handleCommand(input);
    setInput('');
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = { user: true, text: chatInput };
    setChatMessages((msgs) => [...msgs, userMsg]);
    setChatInput('');
    setChatLoading(true);
    try {
      const response = await fetch(chatApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${chatApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for web development and cybersecurity.' },
            ...chatMessages.map(m => ({ role: m.user ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: userMsg.text }
          ],
        }),
      });
      const data = await response.json();
      let botText = 'Sorry, I could not process that.';
      if (data.choices && data.choices[0]?.message?.content) {
        botText = data.choices[0].message.content;
      }
      setChatMessages((msgs) => [...msgs, { user: false, text: botText }]);
    } catch (err) {
      setChatMessages((msgs) => [...msgs, { user: false, text: 'Error connecting to AI service.' }]);
    }
    setChatLoading(false);
  };

  // Generate floating dots
  const dots = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    color: ['#5a8fff', '#b16cff', '#1aff8b'][i % 3],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 2
  }));

  return (
    <HeroSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <GlowingBackground />
      {dots.map(dot => (
        <FloatingDot
          key={dot.id}
          color={dot.color}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <ContentWrapper>
        <GradientHeadline>Access Authorized. Welcome to My Portfolio.</GradientHeadline>
        <Tagline>
          Exploring the intersection of web development and cybersecurity
        </Tagline>

        <TerminalWrapper>
          <TerminalHeader>
            <TerminalButton color="#ff5f56" />
            <TerminalButton color="#ffbd2e" />
            <TerminalButton color="#27c93f" />
            <TerminalTitle>Terminal</TerminalTitle>
          </TerminalHeader>
          
          <TerminalContent>
            {terminal.map((item, index) => {
              if (item.type === 'header') {
                return <TerminalOutput key={index}>{item.text}</TerminalOutput>;
              }
              if (item.type === 'help') {
                return <TerminalHelp key={index}>{item.text}</TerminalHelp>;
              }
              if (item.type === 'prompt') {
                return <TerminalPrompt key={index}>{item.text}</TerminalPrompt>;
              }
              return <TerminalOutput key={index}>{item.text}</TerminalOutput>;
            })}
            <form onSubmit={handleInput}>
              <TerminalPrompt>
                <TerminalInput
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  spellCheck="false"
                  autoComplete="off"
                />
              </TerminalPrompt>
            </form>
          </TerminalContent>
        </TerminalWrapper>

        <ChatWrapper>
          <ChatHeader>
            <FaRobot style={{ color: '#5a8fff' }} />
            <ChatTitle>AI Assistant</ChatTitle>
          </ChatHeader>
          <ChatMessages ref={chatBoxRef}>
            {chatMessages.map((msg, i) => (
              <ChatMessage key={i} isUser={msg.user}>{msg.text}</ChatMessage>
            ))}
            {chatLoading && <ChatMessage>Thinking...</ChatMessage>}
          </ChatMessages>
          <ChatForm onSubmit={handleChatSubmit}>
            <ChatInput
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={chatLoading}
            />
            <SendButton type="submit" disabled={chatLoading || !chatInput.trim()}>
              <FaPaperPlane />
            </SendButton>
          </ChatForm>
        </ChatWrapper>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 