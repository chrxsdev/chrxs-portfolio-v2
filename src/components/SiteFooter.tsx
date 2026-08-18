import { site } from '@/content/site';

export const SiteFooter = () => (
  <footer className='site-footer'>
    <div className='site-shell footer-inner'>
      <p>
        <span className='font-mono'>CM/</span> Software Engineer
      </p>
      <div className='footer-links'>
        <a href={site.links.github} target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <a href={site.links.linkedin} target='_blank' rel='noreferrer'>
          LinkedIn
        </a>
      </div>
      <p className='font-mono'>&copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);
