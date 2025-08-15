import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  const renderNavbar = useMemo(() => {
    const isHomePage = pathname === '/';

    return isHomePage ? (
      <>
        <a href={'#about'} className='text-white text-sm hover:text-gray-300 transition-colors'>
          About
        </a>
        <a href={'#experience'} className='text-white text-sm hover:text-gray-300 transition-colors'>
          Experience
        </a>
        <a href={'#projects'} className='text-white text-sm hover:text-gray-300 transition-colors'>
          Projects
        </a>
        <a href={'#contact'} className='text-white text-sm hover:text-gray-300 transition-colors'>
          Contact
        </a>
      </>
    ) : (
      <Link to={'/'} className='text-white hover:text-gray-300 transition-colors'>
        Back to Home
      </Link>
    );
  }, [pathname]);

  return (
    <header>
      <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50'>
        <div className='bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20'>
          <div className='flex items-center space-x-5'>
            <Link to={'/'} className='text-white font-bold text-lg'>
              {'<chrixs/>'}
            </Link>
            <div className='flex space-x-4'>{renderNavbar}</div>
          </div>
        </div>
      </nav>
    </header>
  );
};
