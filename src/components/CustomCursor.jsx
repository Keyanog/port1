import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const glitch = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  }
  20% {
    transform: translate(-2px, 2px);
    opacity: 0.8;
  }
  40% {
    transform: translate(2px, -2px);
    opacity: 1;
  }
  60% {
    transform: translate(-2px, -2px);
    opacity: 0.8;
  }
  80% {
    transform: translate(2px, 2px);
    opacity: 1;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
`;

const scan = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
`;

const CursorWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: opacity 0.3s ease;
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid transparent;
    background: conic-gradient(
      from 0deg,
      #00ff94 0deg,
      transparent 30deg,
      transparent 60deg,
      #0066ff 90deg,
      transparent 120deg,
      transparent 150deg,
      #00ff94 180deg,
      transparent 210deg,
      transparent 240deg,
      #0066ff 270deg,
      transparent 300deg,
      transparent 330deg,
      #00ff94 360deg
    );
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    animation: ${rotate} 8s linear infinite;
  }

  &::after {
    animation: ${rotate} 8s linear infinite reverse;
    scale: 0.9;
  }
`;

const TrailingDot = styled.div`
  width: 4px;
  height: 4px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: ${props => props.color};
  position: absolute;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 5px ${props => props.color};
`;

const ScanLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 148, 0.2) 50%,
    transparent 100%
  );
  background-size: 100% 200%;
  animation: ${scan} 2s linear infinite;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingDots, setTrailingDots] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trailing dot
      const colors = ['#00ff94', '#0066ff', '#00ffff'];
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        id: Date.now()
      };
      
      setTrailingDots(prev => [...prev.slice(-5), newDot]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <CursorWrapper style={{ opacity: isVisible ? 1 : 0 }}>
      {trailingDots.map((dot, index) => (
        <TrailingDot
          key={dot.id}
          color={dot.color}
          style={{
            left: dot.x,
            top: dot.y,
            transitionDelay: `${index * 0.05}s`
          }}
        />
      ))}
      <CursorRing
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
        }}
      />
    </CursorWrapper>
  );
};

export default CustomCursor; 