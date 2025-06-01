import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

const TrailingDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${props => props.color};
  position: absolute;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 5px ${props => props.color};
`;

const CustomCursor = () => {
  const [trailingDots, setTrailingDots] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
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

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
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
    </CursorWrapper>
  );
};

export default CustomCursor; 