import Link from 'next/link';
import { site } from '@/content/site';

const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Focus', href: '/#focus' },
];

export const SiteHeader = () => (
  <header className='site-header'>
    <div className='site-shell header-inner'>
      <Link className='wordmark' href='/' aria-label={`${site.shortName}, home`}>
        CM<span aria-hidden='true'>/</span>
      </Link>
      <nav aria-label='Primary navigation'>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={site.links.github} target='_blank' rel='noreferrer'>
          GitHub <span aria-hidden='true'>&#8599;</span>
        </a>
      </nav>
    </div>
  </header>
);
