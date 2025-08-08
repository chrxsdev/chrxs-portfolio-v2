import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const AppLayout = () => {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden relative'>
      {/* Animated Background */}
      <AnimatedBackground />
      <section className='grid grid-rows-[auto_1fr_auto] min-h-[100dvh]'>
        <Header />

        <main className='mt-20'>
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default AppLayout;
