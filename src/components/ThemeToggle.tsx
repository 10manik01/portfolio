import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 w-10 h-10 rounded-full border border-border/40 bg-card/20 text-foreground shadow-sm backdrop-blur transition-colors duration-300 hover:bg-card/30 dark:border-border/60 dark:bg-card/40 dark:text-foreground touch-manipulation"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
