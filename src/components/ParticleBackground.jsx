import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const float1 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, 25px) rotate(90deg); }
  50% { transform: translate(100px, 0) rotate(180deg); }
  75% { transform: translate(50px, -25px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-75px, 50px) rotate(120deg); }
  66% { transform: translate(75px, 50px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const float3 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-50px, -50px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const float4 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-30px, 60px) rotate(90deg); }
  50% { transform: translate(60px, 30px) rotate(180deg); }
  75% { transform: translate(30px, -60px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const float5 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(40px, -40px) rotate(120deg); }
  66% { transform: translate(-40px, 40px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  pointer-events: none;
  mix-blend-mode: screen;
  
  &.electron {
    background: #5a8fff;
    box-shadow: 0 0 10px #5a8fff;
  }
  
  &.proton {
    background: #ff5a5a;
    box-shadow: 0 0 10px #ff5a5a;
  }
  
  &.neutron {
    background: #1aff8b;
    box-shadow: 0 0 10px #1aff8b;
  }
  
  &.tiny {
    width: 8px;
    height: 8px;
  }
  
  &.small {
    width: 12px;
    height: 12px;
  }
  
  &.medium {
    width: 16px;
    height: 16px;
  }
  
  &.particle1 { animation: ${float1} 12s infinite linear; }
  &.particle2 { animation: ${float2} 15s infinite linear; }
  &.particle3 { animation: ${float3} 10s infinite linear; }
  &.particle4 { animation: ${float4} 18s infinite linear; }
  &.particle5 { animation: ${float5} 14s infinite linear; }
  
  &.pulse {
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

const Trail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
  filter: blur(8px);
  opacity: 0.2;
`;

const ParticleBackground = () => {
  // Helper function to generate random position
  const randomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`
  });

  // Generate particles with random positions
  const generateParticles = (type, count) => {
    return Array.from({ length: count }, (_, index) => {
      const size = ['tiny', 'small', 'medium'][Math.floor(Math.random() * 3)];
      const animationClass = `particle${Math.floor(Math.random() * 5) + 1}`;
      const delay = `-${Math.random() * 20}s`;
      const position = randomPosition();
      
      return (
        <Particle
          key={`${type}-${index}`}
          className={`${type} ${size} ${animationClass} pulse`}
          style={{
            ...position,
            animationDelay: delay
          }}
        >
          <Trail />
        </Particle>
      );
    });
  };

  return (
    <Container>
      {generateParticles('electron', 15)}
      {generateParticles('proton', 15)}
      {generateParticles('neutron', 10)}
    </Container>
  );
};

export default ParticleBackground; 