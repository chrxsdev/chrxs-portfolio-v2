import { ExternalLink } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/react-bits/RevealOnScroll'
import type { Project } from '@/types'

interface ProjectsSectionProps {
  projects: Project[] | null
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <RevealOnScroll delay={index * 0.1} distance={60}>
      <motion.div
        className='group relative bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-border transition-colors duration-300 h-full'
        whileHover={{ 
          y: -8,
          boxShadow: '0 25px 50px rgba(17, 75, 95, 0.2)'
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image Container with Hover Overlay */}
        <div className='relative aspect-video overflow-hidden'>
          <img
            src={project.cover_img}
            alt={project.project_name}
            width={500}
            height={300}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          
          {/* Hover Overlay with Action Icons - Only covers bottom 20% */}
          <div className='absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-minimal-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center gap-4 pb-3'>
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background hover:scale-110 transition-all duration-200 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100'
                aria-label='View on GitHub'
              >
                <GitHubLogoIcon className='w-5 h-5' />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-minimal-lemon/90 backdrop-blur-sm flex items-center justify-center text-minimal-green hover:bg-minimal-lemon hover:scale-110 transition-all duration-200 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-150'
                aria-label='View Live Demo'
              >
                <ExternalLink className='w-5 h-5' />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className='p-6'>
          <h3 className='text-xl font-bold mb-2 text-foreground group-hover:text-minimal-green transition-colors duration-300'>
            {project.project_name}
          </h3>
          <p className='text-muted-foreground mb-4 text-sm leading-relaxed'>
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className='flex flex-wrap gap-1.5'>
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant='secondary'
                className='bg-muted/80 text-foreground border-0 text-[10px] px-2 py-0.5 hover:bg-minimal-green/20 hover:text-minimal-green transition-colors'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-minimal-green to-minimal-lemon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
      </motion.div>
    </RevealOnScroll>
  )
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id='projects' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-7xl mx-auto'>
        <RevealOnScroll>
          <h2 className='text-4xl font-bold text-center mb-20 bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
            Projects
          </h2>
        </RevealOnScroll>

        {/* Staggered Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {projects ? (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className='col-span-full text-center text-muted-foreground py-12'>
              No projects found...
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
