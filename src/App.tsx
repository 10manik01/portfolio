import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
// import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { ChatbotWidget } from './components/ChatbotWidget';
import { ThemeToggle } from './components/ThemeToggle';
import { Menu } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((currentOpen) => !currentOpen);
  };

  return (
    <div className="bg-background page-grid min-h-screen text-foreground font-sans selection:bg-blue-100 selection:text-blue-900 antialiased transition-colors duration-300">
      
      {/* Mobile Header */}
      <div className={`${sidebarOpen ? 'hidden' : 'block'} lg:hidden px-4 py-2.5 divider-bottom-red page-grid sticky top-0 bg-background/90 backdrop-blur-xl z-50`}>
        <div className="mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-[1.05rem] font-black tracking-tight leading-none text-foreground">Manik Syangtan</h1>
            <p className="mt-1 max-w-[190px] text-[10px] font-bold uppercase tracking-[0.16em] leading-[1.25] text-red-600">
              Elex, Comm. and Info Engineer
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleSidebar}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card/70 text-foreground shadow-sm transition-colors hover:bg-muted touch-manipulation"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-86px)] lg:min-h-screen">
        
        {/* Left Panel: Fixed Sidebar */}
        <div className={`lg:block ${sidebarOpen ? 'block' : 'hidden'} lg:w-[380px] xl:w-[420px] flex-shrink-0`}>
          {sidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
          <div className={`lg:sticky lg:top-0 lg:h-screen ${sidebarOpen ? 'fixed inset-y-0 left-0 z-50 w-[min(78vw,19rem)] border-r border-border/30 bg-background/95 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.7)] backdrop-blur-2xl sm:w-[min(82vw,20rem)] lg:relative lg:inset-auto lg:w-auto lg:border-r-0 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none' : ''} overflow-y-auto lg:overflow-hidden divider-right-red bg-transparent`}>
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>

        {/* Right Panel: Scrollable Content Areas */}
        <main className="flex-1 w-full lg:min-w-0 pb-24 sm:pb-32">
          {/* We increase top padding on the first element to give breathing room */}
          <div className="pt-4 sm:pt-8 lg:pt-0">
            <Hero />
            <About />
            {/* <Experience /> */}
            <Projects />
            <Education />
            <TechStack />
            <Contact />
          </div>
        </main>
      </div>

      <ChatbotWidget />
    </div>
  );
}
