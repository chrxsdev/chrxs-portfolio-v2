import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@content/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
    },
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main id='main-content' className='site-shell case-study'>
      <Link className='back-link font-mono' href='/#work'>
        &#8592; Selected work
      </Link>
      <header className='case-study-header'>
        <p className='eyebrow font-mono'>{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <ul className='technology-list' aria-label='Technologies used'>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </header>

      <figure className='case-study-thumbnail'>
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          priority
          sizes='(max-width: 720px) 100vw, 80vw'
        />
      </figure>

      <div className='case-study-grid'>
        <aside className='case-study-links'>
          <p className='font-mono'>Project links</p>
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target='_blank' rel='noreferrer'>
              {link.label} <span aria-hidden='true'>&#8599;</span>
            </a>
          ))}
        </aside>
        <article className='case-study-content'>
          <section>
            <p className='case-label font-mono'>Context</p>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className='case-label font-mono'>Product</p>
            <h2>What was built</h2>
            <p>{project.product}</p>
          </section>
          <section>
            <p className='case-label font-mono'>Decisions</p>
            <h2>Engineering choices</h2>
            <ul>
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className='case-label font-mono'>Architecture</p>
            <h2>System shape</h2>
            <ul>
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className='case-label font-mono'>Constraints</p>
            <h2>What shaped the work</h2>
            <ul>
              {project.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className='case-label font-mono'>Outcome</p>
            <h2>Result</h2>
            <p>{project.outcome}</p>
          </section>
        </article>
      </div>
    </main>
  );
}
