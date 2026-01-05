import { useEffect, useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from 'public/profile.jpg';

const links = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'projects', label: 'Projects' },
  // { href: 'experience', label: 'Experience' },
  { href: 'education', label: 'Education' },
  { href: 'tech', label: 'Skills' },
  { href: 'contact', label: 'Contact' }
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = links.map(link => ({
        id: link.href,
        element: document.getElementById(link.href)
      })).filter(item => item.element);

      const scrollPosition = window.scrollY + 120;
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && scrollPosition >= section.element.offsetTop) {
          currentSection = section.id;
          break;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isScrolled 
            ? 'px-4 py-2 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-auto' 
            : 'px-6 py-4 bg-transparent w-full max-w-6xl'
          }
        `}
      >
        {/* LEFT: Logo / Profile */}
        <button 
          onClick={() => scrollToSection('home')}
          className="relative z-10 flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md hover:scale-110 transition-transform duration-300">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </button>

        {/* CENTER: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 mx-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                active === link.href ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {active === link.href && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-50/80 rounded-full -z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT: GitHub Link */}
        <div className="flex items-center gap-4">
         <a 
  href="https://github.com/10manik01" 
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full 
             shadow-md shadow-blue-200/50 transition-all duration-300 ease-out
             hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-300/60 active:scale-95"
>
  <Github size={18} />
  <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
</a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-3xl md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-6 py-4 rounded-2xl text-base font-bold transition-all text-left ${
                      active === link.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                {/* Mobile GitHub Link */}
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-2xl font-bold"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}