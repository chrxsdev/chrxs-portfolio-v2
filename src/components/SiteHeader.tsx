'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/content/site';

const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Focus', href: '/#focus' },
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className='site-header'>
      <div className='site-shell header-inner'>
        <Link className='wordmark' href='/' aria-label={`${site.shortName}, home`} onClick={closeMenu}>
          chrxs<span>.dev</span>
        </Link>
        <nav className='desktop-navigation' aria-label='Primary navigation'>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={site.links.github} target='_blank' rel='noreferrer'>
            GitHub <span aria-hidden='true'>&#8599;</span>
          </a>
        </nav>
        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type='button'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navigation'
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>
      </div>
      <nav
        id='mobile-navigation'
        className='site-shell mobile-navigation'
        aria-label='Mobile navigation'
        hidden={!isMenuOpen}
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a href={site.links.github} target='_blank' rel='noreferrer' onClick={closeMenu}>
          GitHub <span aria-hidden='true'>&#8599;</span>
        </a>
      </nav>
    </header>
  );
};
