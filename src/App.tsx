import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
// import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
// import { NeuralBackground } from './components/NeuralBackground';
import { NavBar } from './components/NavBar';
import { Education } from './components/Education';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* <NeuralBackground /> */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Education />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}