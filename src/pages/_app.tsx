import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeContext, useThemeState } from '@/hooks/useTheme';

const AppLayout = () => {
  const themeState = useThemeState();

  return (
    <ThemeContext.Provider value={themeState}>
      <div className='min-h-screen bg-background text-foreground overflow-hidden relative transition-colors duration-300'>
        {/* Animated Background */}
        <AnimatedBackground />
        <section className='grid grid-rows-[auto_1fr_auto] min-h-[100dvh]'>
          <Header />

          <main className='mt-16 md:mt-20 lg:mt-20 md:px-4 lg:px-2'>
            <Outlet />
          </main>

          <Footer />
        </section>
        
        {/* Floating Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default AppLayout;
