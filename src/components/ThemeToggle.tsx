import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant='secondary'
      size='icon'
      onClick={toggleTheme}
      className='fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border/50 backdrop-blur-sm cursor-pointer'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className='h-5 w-5 transition-transform duration-300 rotate-0' />
      ) : (
        <Sun className='h-5 w-5 transition-transform duration-300 rotate-0' />
      )}
    </Button>
  );
};
