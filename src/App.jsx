import { useState } from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LearningResources from './components/LearningResources'
import FutureGoals from './components/FutureGoals'
// import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import theme from './theme'
import SecondChatbot from './components/SecondChatbot'
import ParticleBackground from './components/ParticleBackground'
import Projects from './components/Projects'
import CustomCursor from './components/CustomCursor'

function App() {
  const [mode, setMode] = useState('dark')

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html, body, #root {
            min-height: 100vh;
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
            background-color: #181a20;
            color: #e3e8ff;
            transition: background 0.5s, color 0.5s;
            position: relative;
          }
          body {
            /* Dot grid background */
            background-image:
              linear-gradient(rgba(60,65,80,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(60,65,80,0.18) 1px, transparent 1px),
              linear-gradient(rgba(60,65,80,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(60,65,80,0.08) 1px, transparent 1px);
            background-size: 48px 48px, 48px 48px, 12px 12px, 12px 12px;
            background-position: 0 0, 0 0, 0 0, 0 0;
            background-color: #181a20;
          }
          ::selection {
            background: #536eff;
            color: #fff;
          }
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
            background: #23263a;
          }
          ::-webkit-scrollbar-thumb {
            background: #23263a;
            border-radius: 8px;
          }
        `}
      />
      <ParticleBackground />
      <CustomCursor />
      <Navbar mode={mode} setMode={setMode} />
      <main>
        <Hero />
        <About />
        <LearningResources />
        <FutureGoals />
        {/* <Skills /> */}
        <Contact />
        <Projects />
      </main>
      <Footer />
      <SecondChatbot />
    </ThemeProvider>
  )
}

export default App
