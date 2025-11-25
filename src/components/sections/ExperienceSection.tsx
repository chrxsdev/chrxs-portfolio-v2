import { formatDate } from '@/lib/date'
import type { Experience } from '@/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { RevealOnScroll } from '../react-bits/RevealOnScroll'

interface ExperienceSectionProps {
  experience: Experience[] | null
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })
  
  // Animate the timeline line height based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id='experience' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-5xl mx-auto'>
        <RevealOnScroll>
          <h2 className='text-4xl font-bold text-center mb-20 bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
            Experience
          </h2>
        </RevealOnScroll>

        <div ref={containerRef} className='relative'>
          {/* Timeline Background Line (static, muted) */}
          {experience && (
            <div className='absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/50' />
          )}
          
          {/* Timeline Animated Line (fills as you scroll) */}
          {experience && (
            <motion.div
              className='absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-minimal-green to-minimal-lemon origin-top'
              style={{ height: lineHeight }}
            />
          )}

          <div className='space-y-16 md:space-y-24'>
            {experience ? (
              experience.map((exp, index) => (
                <RevealOnScroll
                  key={exp.id}
                  delay={index * 0.1}
                  direction='up'
                  distance={50}
                >
                  <div className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Node */}
                    <div className='absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-6 z-20'>
                      <motion.div
                        className={`w-4 h-4 rounded-full border-4 border-background ${
                          exp.current_job
                            ? 'bg-minimal-lemon shadow-[0_0_12px_rgba(136,212,152,0.6)]'
                            : 'bg-minimal-green'
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                      />
                    </div>

                    {/* Company Logo - Mobile: left side, Desktop: alternating */}
                    <div className={`flex-shrink-0 ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? 'md:flex md:justify-end' : 'md:flex md:justify-start'
                    }`}>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-minimal-green to-minimal-lemon p-0.5 shadow-lg'>
                        <div className='w-full h-full rounded-full overflow-hidden bg-background'>
                          <img
                            src={exp.company_logo_url}
                            alt={`${exp.company} logo`}
                            width={64}
                            height={64}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? '' : ''
                    }`}>
                      <motion.div
                        className={`bg-card/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 group cursor-default ${
                          exp.current_job
                            ? 'border-minimal-lemon/40 shadow-[0_0_30px_rgba(136,212,152,0.1)]'
                            : 'border-border hover:border-minimal-green/30'
                        }`}
                        whileHover={{ 
                          y: -4,
                          boxShadow: '0 20px 40px rgba(17, 75, 95, 0.15)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Current Job Badge */}
                        {exp.current_job && (
                          <div className='inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-minimal-lemon/20 border border-minimal-lemon/30'>
                            <span className='relative flex h-2 w-2'>
                              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-minimal-lemon opacity-75'></span>
                              <span className='relative inline-flex rounded-full h-2 w-2 bg-minimal-lemon'></span>
                            </span>
                            <span className='text-xs font-medium text-minimal-lemon'>Current Role</span>
                          </div>
                        )}

                        <div className='flex flex-col space-y-2'>
                          <h3 className='text-xl font-semibold text-foreground group-hover:text-minimal-green transition-colors duration-300'>
                            {exp.position}
                          </h3>
                          <div className='font-medium text-minimal-green text-lg'>{exp.company}</div>
                          
                          <div className='flex flex-col gap-2 mt-2'>
                            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                              </svg>
                              <span>{exp.location}</span>
                              <span className='px-2 py-0.5 rounded-md bg-muted text-xs'>
                                {exp.mode ? 'Remote' : 'On-site'}
                              </span>
                            </div>
                            
                            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                              </svg>
                              <span>
                                {formatDate(exp.from)} — {exp.current_job ? 'Present' : formatDate(exp.to)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative accent line */}
                        <div className='relative h-0.5 mt-5 bg-border/50 rounded-full overflow-hidden'>
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-r from-minimal-green to-minimal-lemon rounded-full'
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                            style={{ transformOrigin: 'left' }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))
            ) : (
              <div className='text-center text-muted-foreground py-12'>No experience found...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
