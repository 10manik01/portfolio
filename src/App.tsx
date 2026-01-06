import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { NavBar } from './components/NavBar';
import { Education } from './components/Education';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <NavBar />
      {/* <div className="relative z-10"> */}
      <Hero />
      <About />
      <Projects />
      <Education />
      <TechStack />
      <Contact />
      {/* </div> */}
    </div>
  );
}