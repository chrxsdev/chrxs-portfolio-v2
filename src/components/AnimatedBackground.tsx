import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='fixed inset-0 z-0'>
      <div
        className='absolute w-96 h-96 bg-gradient-to-r from-[#5F5AA2]/20 to-[#355691]/20 rounded-full blur-3xl transition-all duration-1000 ease-out'
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,90,162,0.1),transparent_50%)]' />
    </div>
  );
};
