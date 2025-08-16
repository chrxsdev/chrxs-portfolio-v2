import { Coffee, Music, Pizza } from 'lucide-react';

interface AboutSectionProps {
  projectsCount: number;
  yearsExperience: string;
}

export const AboutSection = ({ projectsCount, yearsExperience }: AboutSectionProps) => {
  return (
    <section id='about' className='py-36 px-6 relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <div>
            <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
              About Me
            </h2>
            <div className='space-y-6 text-muted-foreground leading-relaxed'>
              <p>
                I'm a creative developer who lives at the intersection of art and technology. With 1.5+ years building
                scalable React.js, TypeScript, and React Native applications with full-stack capabilities in NestJS
                and Spring Boot. Proven track record delivering high-performance solutions through Agile
                collaboration, API integration, and delivering high-performance applications.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting trying to connect technology with music or exploring
                the latest AI features.
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <h2 className='text-xl font-bold bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
                  Fun facts:
                </h2>
                <div className='flex items-center gap-2 text-foreground'>
                  <Coffee className='w-5 h-5 text-yellow-500' />
                  <span>Coffee Addict</span>
                </div>
                <div className='flex items-center gap-2 text-foreground'>
                  <Music className='w-5 h-5 text-red-500' />
                  <span>Beatmaker</span>
                </div>
                <div className='flex items-center gap-2 text-foreground'>
                  <Pizza className='w-5 h-5 text-blue-500' />
                  <span>Pizza Lover</span>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border'>
              <div className='grid grid-cols-2 gap-6 text-center'>
                <div>
                  <div className='text-3xl font-bold text-minimal-purple'>{projectsCount}+</div>
                  <div className='text-muted-foreground'>Projects</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-minimal-blue'>{yearsExperience}+</div>
                  <div className='text-muted-foreground'>Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
