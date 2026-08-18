import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/content';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow = ({ project, index }: ProjectRowProps) => (
  <article className='project-row reveal-item' style={{ '--item-index': index } as React.CSSProperties}>
    <div className='project-number font-mono'>{String(index + 1).padStart(2, '0')}</div>
    <Link className='project-thumbnail' href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden='true'>
      <Image
        src={project.thumbnail.src}
        alt=''
        width={project.thumbnail.width}
        height={project.thumbnail.height}
        sizes='(max-width: 720px) calc(100vw - 4.5rem), 13rem'
      />
    </Link>
    <div className='project-body'>
      <p className='project-category font-mono'>{project.category}</p>
      <h3>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className='project-summary'>{project.summary}</p>
      <ul className='technology-list' aria-label={`${project.title} technologies`}>
        {project.technologies.slice(0, 5).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
    <Link className='project-link font-mono' href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
      Case study <span aria-hidden='true'>&#8594;</span>
    </Link>
  </article>
);
