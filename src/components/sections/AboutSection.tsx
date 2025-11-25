import { Coffee, Music, Pizza } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { RevealOnScroll } from '@/components/react-bits/RevealOnScroll';

interface AboutSectionProps {
  projectsCount: number;
  yearsExperience: string;
}

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }: { value: number | string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 40;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className='text-4xl md:text-5xl font-bold'>
      {Number.isInteger(numericValue) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </div>
  );
};

const funFacts = [
  { icon: Coffee, label: 'Coffee Addict', color: 'text-yellow-500' },
  { icon: Music, label: 'Music (my another passion)', color: 'text-red-500' },
  { icon: Pizza, label: 'Pizza Lover', color: 'text-blue-500' },
];

export const AboutSection = ({ projectsCount, yearsExperience }: AboutSectionProps) => {
  return (
    <section id='about' className='py-36 px-3 sm:px-6 relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Text Content */}
          <div className='mx-auto'>
            <RevealOnScroll>
              <h2 className='text-4xl md:text-left text-center font-bold mb-8 bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
                About Me
              </h2>
            </RevealOnScroll>

            <div className='mx-auto md:w-full w-[90%] space-y-6 text-muted-foreground leading-relaxed'>
              <RevealOnScroll delay={0.1}>
                <p>
                  I'm a Fullstack Developer with 1.5+ years building scalable React.js, TypeScript, and React Native
                  applications with full-stack capabilities in NestJS and Spring Boot. Proven track record delivering
                  high-performance solutions through Agile collaboration, API integration, and delivering
                  high-performance applications.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p>
                  When I'm not coding, you'll find me experimenting trying to connect technology with music or exploring
                  the latest AI features.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className='flex items-center gap-4 pt-4'>
                  <h2 className='text-xl font-bold bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
                    Fun facts
                  </h2>
                </div>
              </RevealOnScroll>

              <motion.div
                className='flex flex-col sm:flex-row gap-4'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
                  },
                }}
              >
                {funFacts.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    className='flex items-center gap-2 text-foreground'
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span>{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <RevealOnScroll direction='right' delay={0.2}>
            <motion.div className='relative' whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <div className='bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-minimal-green/30 transition-colors duration-300'>
                <div className='grid grid-cols-2 gap-8 text-center'>
                  <div className='space-y-2'>
                    <div className='text-minimal-green'>
                      <AnimatedCounter value={projectsCount} suffix='+' />
                    </div>
                    <div className='text-muted-foreground font-medium'>Projects</div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-minimal-lemon'>
                      <AnimatedCounter value={yearsExperience} suffix='+' />
                    </div>
                    <div className='text-muted-foreground font-medium'>Years</div>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className='mt-6 h-0.5 bg-gradient-to-r from-minimal-green via-minimal-lemon to-minimal-green rounded-full opacity-50' />
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
