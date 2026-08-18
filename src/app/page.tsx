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
          <p className='eyebrow font-mono'>Software Engineer</p>
          <h1 id='hero-title'>
            I turn <span>product ideas</span> into reliable software.
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
        </figure>
        <aside className='hero-proof reveal-item' style={{ '--item-index': 2 } as React.CSSProperties} aria-label='Professional profile'>
          <p>
            <strong>2+ years</strong>
            <span>shipping production software</span>
          </p>
          <p>
            <strong>Fintech</strong>
            <span>current product domain</span>
          </p>
          <p>
            <strong>React + TypeScript</strong>
            <span>core engineering foundation</span>
          </p>
        </aside>
      </section>

      <section className='site-shell section-block' id='work' aria-labelledby='work-title'>
        <SectionHeading
          title='Selected work.'
          description='Products framed through the problem, the engineering decisions, and the result.'
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
          title='Experience, in brief.'
          description='Frontend ownership, full-stack delivery, backend performance, and cloud operations across four product teams.'
        />
        <ol className='experience-list'>
          {experience.map((item) => (
            <li key={item.company}>
              <p className='experience-period font-mono'>{item.period}</p>
              <div>
                <p className='experience-company'>{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <p>{item.summary}</p>
              <p className='experience-location font-mono'>{item.location}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className='site-shell section-block focus-section' id='focus' aria-labelledby='focus-title'>
        <SectionHeading
          title='Where the work is heading.'
          description='A frontend foundation expanding into product decisions, AI-enabled development, infrastructure, and system design.'
        />
        <div className='focus-grid'>
          <ul className='focus-list'>
            {focusAreas.map((area) => (
              <li key={area}>
                {area}
              </li>
            ))}
          </ul>
          <aside className='core-stack' aria-label='Core technologies'>
            <p className='font-mono'>Core technologies</p>
            <p>{coreTechnologies.join(' / ')}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
