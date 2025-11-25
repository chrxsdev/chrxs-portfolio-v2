import { SkillIcon } from '@/components/SkillIcon'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/react-bits/RevealOnScroll'
import type { IconName, Skills } from '@/types'

interface SkillsSectionProps {
  skills: Skills[] | null
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id='skills' className='py-24 px-3 sm:px-6 relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <RevealOnScroll>
          <h2 className='text-4xl font-bold md:text-left text-center mb-16 bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
            Skills
          </h2>
        </RevealOnScroll>

        {/* Technology Circles with Staggered Animation */}
        <motion.div
          className='flex flex-wrap justify-center gap-6 mb-16 p-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills ? (
            skills.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(17, 75, 95, 0.3)'
                }}
                className='group relative w-28 h-28 rounded-full bg-gradient-to-br from-minimal-green to-minimal-lemon p-0.5 cursor-pointer transition-shadow duration-300'
              >
                <div className='w-full h-full rounded-full bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center'>
                  <SkillIcon name={tech.skill as IconName} />
                  <div className='text-xs text-foreground font-medium text-center leading-6'>{tech.description}</div>
                </div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.div>
            ))
          ) : (
            <div className='flex items-center justify-center w-full h-full text-muted-foreground'>No skills found...</div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
