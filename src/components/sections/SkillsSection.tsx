import { SkillIcon } from '@/components/SkillIcon';
import type { IconName, Skills } from '@/types';

interface SkillsSectionProps {
  skills: Skills[] | null;
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id='skills' className='py-20 px-3 sm:px-6 relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold md:text-left text-center mb-16 bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
          Skills
        </h2>

        {/* Technology Circles */}
        <div className='flex flex-wrap justify-center gap-6 mb-16 p-4'>
          {skills ? (
            skills.map((tech) => (
              <div
                key={tech.id}
                className={`group relative w-28 h-28 rounded-full bg-gradient-to-br from-minimal-purple to-minimal-blue p-0.5 hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                <div className='w-full h-full rounded-full bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center'>
                  <SkillIcon name={tech.skill as IconName} />
                  <div className='text-xs text-foreground font-medium text-center leading-6'>{tech.description}</div>
                </div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            ))
          ) : (
            <div className='flex items-center justify-center w-full h-full text-muted-foreground'>No skills found...</div>
          )}
        </div>
      </div>
    </section>
  );
};
