import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import personalInfo from '../data/personal_info.txt?raw';

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2.5rem;
  left: 2.5rem;
  background: linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 24px 0 rgba(26, 255, 139, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 9999;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #5a8fff 0%, #1aff8b 100%);
    transform: scale(1.08);
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 5.5rem;
  left: 2.5rem;
  width: 320px;
  height: 450px;
  background: rgba(24, 26, 32, 0.98);
  border: 2px solid #23263a;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  display: flex;
  flex-direction: column;
  z-index: 9998;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s ease;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  border-bottom: 1.5px solid #23263a;
  background: linear-gradient(90deg, #1aff8b20 0%, #5a8fff20 100%);
  border-radius: 16px 16px 0 0;
`;

const HeaderTitle = styled.div`
  color: #e3e8ff;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #1aff8b;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #b3b8d6;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #ff5a5a;
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #23263a;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #5a8fff;
    border-radius: 3px;
  }
`;

const Message = styled.div`
  max-width: 85%;
  padding: 0.8rem 1rem;
  border-radius: ${props => props.isUser ? '16px 16px 0 16px' : '16px 16px 16px 0'};
  background: ${props => props.isUser ? 'linear-gradient(90deg, #1aff8b 0%, #5a8fff 100%)' : '#23263a'};
  color: ${props => props.isUser ? '#fff' : '#e3e8ff'};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  font-size: 0.95rem;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const InputArea = styled.form`
  padding: 1rem;
  border-top: 1.5px solid #23263a;
  display: flex;
  gap: 0.8rem;
`;

const Input = styled.input`
  flex: 1;
  background: #181a20;
  border: 1.5px solid #23263a;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #e3e8ff;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #5a8fff;
  }
  
  &::placeholder {
    color: #4a4f6d;
  }
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
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(90deg, #5a8fff 0%, #1aff8b 100%);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  color: #5a8fff;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  align-self: flex-start;
`;

const TypingText = styled.span`
  display: inline-block;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: currentColor;
  margin-left: 2px;
  animation: blink 1s infinite;
  opacity: ${props => props.isTyping ? 1 : 0};

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const SecondChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      isUser: false, 
      text: "Hi! I'm Nazif's AI assistant. I can tell you all about Nazif Keyan. Feel free to ask about Nazif or Mr. Keyan!",
      isTyping: false,
      displayedText: "Hi! I'm Nazif's AI assistant. I can tell you all about Nazif Keyan. Feel free to ask about Nazif or Mr. Keyan!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);
  
  const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
  const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const typeMessage = async (messageIndex, text) => {
    let currentText = '';
    const typingSpeed = 30; // milliseconds per character

    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setMessages(prev => prev.map((msg, idx) => 
        idx === messageIndex
          ? { ...msg, displayedText: currentText, isTyping: true }
          : msg
      ));
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }

    setMessages(prev => prev.map((msg, idx) => 
      idx === messageIndex
        ? { ...msg, isTyping: false }
        : msg
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const userMessageObj = { isUser: true, text: userMessage, displayedText: userMessage, isTyping: false };
    setMessages(prev => [...prev, userMessageObj]);
    setIsLoading(true);

    try {
      const response = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant for Nazif Keyan. You should recognize and respond to questions about "Nazif", "Keyan", "Mr. Keyan", or "Nazif Keyan". 

Important name variations to recognize:
- Nazif (first name)
- Keyan (surname/last name)
- Mr. Keyan (formal)
- Nazif Keyan (full name)

You MUST ONLY answer questions based on the following information about Nazif Keyan. If asked about anything not contained in this information, politely explain that you can only provide information about Nazif Keyan based on what you know. Here's the information about Nazif:\n\n${personalInfo}`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "I apologize, but I couldn't process that request.";
      
      const aiMessageObj = { 
        isUser: false, 
        text: aiResponse,
        displayedText: '',
        isTyping: true 
      };
      setMessages(prev => [...prev, aiMessageObj]);
      
      // Start typing animation for the new message
      typeMessage(messages.length + 1, aiResponse);
    } catch (error) {
      const errorMessage = "I'm having trouble connecting right now. Please try again later.";
      const errorMessageObj = { 
        isUser: false, 
        text: errorMessage,
        displayedText: '',
        isTyping: true 
      };
      setMessages(prev => [...prev, errorMessageObj]);
      typeMessage(messages.length + 1, errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle AI Chat">
        <FaRobot />
      </FloatingButton>
      
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          <HeaderTitle>
            <FaRobot /> Ask about Nazif Keyan
          </HeaderTitle>
          <CloseButton onClick={() => setIsOpen(false)}>
            <FaTimes />
          </CloseButton>
        </ChatHeader>
        
        <ChatBody ref={chatBodyRef}>
          {messages.map((message, index) => (
            <Message key={index} isUser={message.isUser}>
              <TypingText>{message.displayedText}</TypingText>
              {!message.isUser && message.isTyping && <Cursor isTyping={true} />}
            </Message>
          ))}
          {isLoading && (
            <TypingIndicator>AI is typing...</TypingIndicator>
          )}
        </ChatBody>
        
        <InputArea onSubmit={handleSubmit}>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Nazif Keyan..."
            disabled={isLoading}
          />
          <SendButton type="submit" disabled={!input.trim() || isLoading}>
            <FaPaperPlane />
          </SendButton>
        </InputArea>
      </ChatWindow>
    </>
  );
};

export default SecondChatbot; 