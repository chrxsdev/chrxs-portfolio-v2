import { formatDate } from '@/lib/date';
import type { Experience } from '@/types';

interface ExperienceSectionProps {
  experience: Experience[] | null;
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <section id='experience' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
          Experience
        </h2>

        <div className='relative'>
          {/* Timeline Line */}
          {experience && (
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-minimal-purple to-minimal-blue'></div>
          )}

          <div className='space-y-12'>
            {experience ? (
              experience.map((exp, index) => (
                <div key={index} className='relative flex items-start gap-8'>
                  {/* Company Logo */}
                  <div className='relative z-10 flex-shrink-0 mt-4'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-minimal-purple to-minimal-blue p-0.5'>
                      <div className='w-full h-full rounded-full overflow-hidden bg-white'>
                        <img
                          src={exp.company_logo_url}
                          alt={`${exp.company} logo`}
                          width={64}
                          height={64}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                    {/* Timeline Dot */}
                    <div className='absolute -right-5 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-minimal-purple rounded-full border-4 border-background'></div>
                  </div>

                  {/* Experience Card */}
                  <div className='flex-1 bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border hover:bg-card/50 hover:border-minimal-purple/30 transition-all duration-300 group'>
                    <div className='flex flex-col space-y-1'>
                      <h3 className='text-xl font-semibold text-foreground'>{exp.position}</h3>
                      <div className='font-medium text-minimal-purple text-lg'>{exp.company}</div>
                      <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                        <div className='text-sm text-muted-foreground'>
                          {exp.location} | {exp.mode ? 'Remote' : 'On-site'}
                        </div>
                        <div className='inline-flex px-3 py-1 mt-3 md:mt-0 rounded-full bg-minimal-purple/20 border border-minimal-purple/30 w-fit'>
                          <span className='text-sm text-minimal-purple font-medium'>
                            {formatDate(exp.from)} - {exp.current_job ? 'Present' : formatDate(exp.to)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className='relative h-1 mt-4 bg-border rounded-full overflow-hidden'>
                      <div className='absolute inset-0 bg-gradient-to-r from-minimal-purple to-minimal-blue w-0 group-hover:w-full rounded-full progress-animation'></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center text-muted-foreground'>No experience found...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
