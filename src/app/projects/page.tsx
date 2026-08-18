import type { Metadata } from 'next';
import { ProjectRow } from '@/components/ProjectRow';
import { projects } from '@content/projects';

export const metadata: Metadata = {
  title: 'Selected work',
  description: 'Product and engineering case studies by Cristhian Martinez.',
};

export default function ProjectsPage() {
  return (
    <main id='main-content' className='site-shell listing-page'>
      <header className='page-intro'>
        <p className='eyebrow font-mono'>Selected work</p>
        <h1>Products, constraints, and engineering decisions.</h1>
        <p>
          A growing collection of work focused on how each product was framed and built, not a wall of technology logos.
        </p>
      </header>
      <div className='project-list'>
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
