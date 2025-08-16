import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  const renderNavbar = useMemo(() => {
    const isHomePage = pathname === '/';

    return isHomePage ? (
      <>
        <a href={'#about'} className='text-foreground text-sm hover:text-muted-foreground transition-colors'>
          About
        </a>
        <a href={'#experience'} className='text-foreground text-sm hover:text-muted-foreground transition-colors'>
          Experience
        </a>
        <a href={'#projects'} className='text-foreground text-sm hover:text-muted-foreground transition-colors'>
          Projects
        </a>
        <a href={'#contact'} className='text-foreground text-sm hover:text-muted-foreground transition-colors'>
          Contact
        </a>
      </>
    ) : (
      <Link to={'/'} className='text-foreground hover:text-muted-foreground transition-colors'>
        Home
      </Link>
    );
  }, [pathname]);

  return (
    <header>
      <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50'>
        <div className='bg-background/70 backdrop-blur-lg rounded-full px-4 py-2 border border-border'>
          <div className='flex items-center space-x-5'>
            <Link to={'/'} className='text-foreground font-bold text-lg'>
              {'<chrixs/>'}
            </Link>
            <div className='flex space-x-4'>{renderNavbar}</div>
          </div>
        </div>
      </nav>
    </header>
  );
};
