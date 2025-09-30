import { ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import type { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[] | null;
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id='projects' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
          Side Projects
        </h2>

        <AnimatedContent
          distance={150}
          direction='vertical'
          reverse={false}
          duration={1.2}
          ease='bounce.out'
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className='flex flex-wrap justify-center gap-8'>
            {projects ? (
              projects.map((project) => (
                <div
                  key={project.id}
                  className='group relative bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-border/60 transition-all duration-500 hover:scale-105 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-md'
                >
                  <div className='aspect-video overflow-hidden'>
                    <img
                      src={project.cover_img}
                      alt={project.project_name}
                      width={500}
                      height={300}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>

                  <div className='absolute inset-0 bg-gradient-to-t from-minimal-purple to-minimal-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300' />

                  <div className='p-6 relative z-10'>
                    <h3 className='text-xl font-bold mb-2 text-foreground'>{project.project_name}</h3>
                    <p className='text-muted-foreground mb-4 text-sm leading-relaxed'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant='secondary' className='bg-muted text-foreground border-0 text-xs'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-2 justify-end relative z-10 p-4'>
                    {project.github && (
                      <Button size='sm' variant='ghost' asChild className='text-foreground hover:bg-muted p-2'>
                        <a href={project.github} target='_blank'>
                          <GitHubLogoIcon className='w-4 h-4' /> Github
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size='sm' variant='ghost' asChild className='text-foreground hover:bg-muted p-2'>
                        <a href={project.demo} target='_blank'>
                          <ExternalLink className='w-4 h-4' /> Demo Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center text-muted-foreground'>No projects found...</div>
            )}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
