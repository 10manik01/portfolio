import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpenText, Github, Linkedin, Mail, MapPin, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { blogPath } from '../lib/site';
import { useTheme } from '../lib/theme';

const profileImage = import.meta.env.BASE_URL + 'images/fw.png';
const sectionLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  // { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'education', label: 'Education' },
  { href: 'tech', label: 'Tech Stack' },
  { href: 'contact', label: 'Contact' }
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const [active, setActive] = useState('home');
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = 'home';

      for (let i = sectionLinks.length - 1; i >= 0; i--) {
        const item = sectionLinks[i];
        const element = document.getElementById(item.href);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = item.href;
          break;
        }
      }

      setActive(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (onClose) onClose();
    }
  };

  return (
    <aside className="relative flex h-full flex-col px-4 py-6 selection:bg-blue-100 sm:px-10 sm:py-8 xl:px-14">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted touch-manipulation lg:hidden"
          aria-label="Close navigation menu"
        >
          <X size={18} />
        </button>
      )}

      <div className="flex-1">
        <div className="mb-7 sm:mb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 130 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="ring-effect relative mb-4 h-20 w-20 overflow-hidden rounded-full border border-border/50 bg-card p-1 shadow-sm will-change-transform sm:mb-5 sm:h-28 sm:w-28"
              >
                <img src={profileImage} alt="Manik Syangtan" className="relative h-full w-full rounded-full object-cover" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-2.5 text-[1.45rem] font-black leading-none tracking-tight text-foreground sm:text-[2rem]"
              >
                Manik Syangtan
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted sm:mb-4 sm:text-sm"
              >
                <span className="text-red-600">Elex, Comm. and Info</span> <span className="text-red-600">Engineer</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-0 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:mb-6 sm:text-xs"
              >
                <MapPin size={12} strokeWidth={2.5} />
                <span>Hetauda, Nepal</span>
              </motion.div>
            </div>

            <div className="mt-0 flex items-center justify-end gap-2 px-0 py-0 sm:mt-2 sm:justify-end">
              <div className="ml-auto flex items-center justify-end gap-2 text-right sm:w-auto sm:justify-end">
                <span className="text-right text-[10px] font-bold uppercase tracking-[0.22em] text-muted sm:hidden">
                  Theme
                </span>
                <span className="hidden text-xs font-semibold uppercase tracking-wider text-muted sm:block">
                  {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5 sm:gap-3">
          {sectionLinks.map((link, index) => {
            const isActive = active === link.href;

            return (
              <motion.button
                type="button"
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                onClick={() => scrollToSection(link.href)}
                className={`group flex w-full items-center px-0 py-2 text-left text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-500 touch-manipulation sm:w-max sm:px-0 sm:py-0 sm:text-[12px] ${
                  isActive ? 'text-green-500' : 'text-muted hover:text-foreground'
                }`}
              >
                <div className={`mr-3 flex h-[2px] items-center overflow-hidden bg-muted/60 transition-all duration-500 ease-out sm:mr-4 ${isActive ? 'w-8 bg-foreground opacity-100 sm:w-10' : 'w-3 opacity-60 group-hover:w-4 group-hover:opacity-100 sm:w-0 sm:opacity-0'}`} />
                <span className={`transition-transform duration-500 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                  {link.label}
                </span>
              </motion.button>
            );
          })}

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + sectionLinks.length * 0.05 }}
            className="mt-3 rounded-[1.15rem] border border-red-500/20 bg-card/50 px-3.5 py-2 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.5)] sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none"
          >
            <a
              href={blogPath}
              aria-label="Open blog"
              className="group inline-flex w-full items-center justify-between gap-3 px-0 py-2 text-red-600 transition-all duration-300 sm:w-auto sm:justify-start sm:px-3.5 sm:py-2"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#008cba] bg-[#008cba] text-[rgb(255,255,255)] transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9 dark:border-[#008cba] dark:bg-[#008cba] dark:text-[rgb(255,255,255)]">
                <BookOpenText size={16} strokeWidth={2.1} />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-red-600 group-hover:text-red-500">
                  Open Blog
                </span>
                <span className="mt-1 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-green-600 dark:text-green-400">
                  Articles
                </span>
              </div>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="flex-shrink-0 text-[#008cba] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#008cba]"
              />
            </a>
          </motion.div>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-7 flex items-center gap-3 pt-5 divider-top-red sm:mt-10 sm:gap-5 sm:pt-6"
      >
        <a href="https://github.com/10manik01" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center text-[rgba(100,116,139,0.78)] transition-colors duration-300 hover:!text-foreground hover:-translate-y-1 transform dark:text-[rgba(226,232,240,0.72)] sm:h-auto sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent">
          <Github size={20} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/maniksyangtan/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center text-[rgba(100,116,139,0.78)] transition-colors duration-300 hover:!text-blue-600 hover:-translate-y-1 transform dark:text-[rgba(226,232,240,0.72)] sm:h-auto sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent">
          <Linkedin size={20} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:maniksyangtan01@gmail.com" className="inline-flex h-9 w-9 items-center justify-center text-[rgba(100,116,139,0.78)] transition-colors duration-300 hover:!text-red-500 hover:-translate-y-1 transform dark:text-[rgba(226,232,240,0.72)] sm:h-auto sm:w-auto sm:rounded-none sm:border-0 sm:bg-transparent">
          <Mail size={20} />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>
    </aside>
  );
}
