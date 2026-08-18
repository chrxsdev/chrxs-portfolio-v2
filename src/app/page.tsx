import Image from 'next/image';
import Link from 'next/link';
import { ProjectRow } from '@/components/ProjectRow';
import { SectionHeading } from '@/components/SectionHeading';
import { featuredProjects } from '@content/projects';
import { coreTechnologies, experience, focusAreas, site } from '@/content/site';

export default function HomePage() {
  return (
    <main id='main-content'>
      <section className='site-shell hero' aria-labelledby='hero-title'>
        <div className='hero-copy reveal-item' style={{ '--item-index': 0 } as React.CSSProperties}>
          <p className='eyebrow font-mono'>Software Engineer / {site.location}</p>
          <h1 id='hero-title'>
            I build products with a frontend foundation and a systems point of view.
          </h1>
          <p className='hero-intro'>{site.description}</p>
          <div className='hero-links' aria-label='Profile links'>
            <a href={site.links.github} target='_blank' rel='noreferrer'>
              GitHub <span aria-hidden='true'>&#8599;</span>
            </a>
            <a href={site.links.linkedin} target='_blank' rel='noreferrer'>
              LinkedIn <span aria-hidden='true'>&#8599;</span>
            </a>
            <a href={site.links.resume} target='_blank' rel='noreferrer'>
              Resume <span aria-hidden='true'>&#8599;</span>
            </a>
          </div>
        </div>
        <figure className='portrait reveal-item' style={{ '--item-index': 1 } as React.CSSProperties}>
          <Image
            src='/profile.png'
            alt='Portrait of Cristhian Martinez'
            width={2400}
            height={3000}
            priority
            sizes='(max-width: 767px) 100vw, 34vw'
          />
          <figcaption className='font-mono'>CM / Product-minded engineering</figcaption>
        </figure>
      </section>

      <section className='site-shell section-block' id='work' aria-labelledby='work-title'>
        <SectionHeading
          index='01'
          label='Selected work'
          title='Products before technology.'
          description='A small set of projects presented through the problem, the engineering choices, and the resulting product.'
        />
        <div className='project-list'>
          {featuredProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className='section-note'>
          <p>Additional work is being documented as focused engineering case studies.</p>
          <Link href='/projects'>View all documented work &#8594;</Link>
        </div>
      </section>

      <section className='site-shell section-block' id='experience' aria-labelledby='experience-title'>
        <SectionHeading
          index='02'
          label='Experience'
          title='Building across the product surface.'
          description='A concise view of current professional work. The full chronology remains in the resume.'
        />
        <ol className='experience-list'>
          {experience.map((item) => (
            <li key={item.company}>
              <div className='experience-marker' aria-hidden='true' />
              <div>
                <p className='experience-company'>{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <p>{item.summary}</p>
              <div className='experience-meta font-mono'>
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className='site-shell section-block focus-section' id='focus' aria-labelledby='focus-title'>
        <SectionHeading
          index='03'
          label='Focus'
          title='The areas I am moving deeper into.'
          description='React and TypeScript remain core tools, while the work increasingly spans product decisions, AI-enabled workflows, infrastructure, and system design.'
        />
        <div className='focus-grid'>
          <ol className='focus-list'>
            {focusAreas.map((area, index) => (
              <li key={area}>
                <span className='font-mono'>{String(index + 1).padStart(2, '0')}</span>
                {area}
              </li>
            ))}
          </ol>
          <aside className='core-stack' aria-label='Core technologies'>
            <p className='font-mono'>Core technologies</p>
            <p>{coreTechnologies.join(' · ')}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
