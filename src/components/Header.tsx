import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  const NavBar = useMemo(() => {
    const isHomePage = pathname === '/';

    return isHomePage ? (
      <>
        <a href={'#about'} className='text-white hover:text-gray-300 transition-colors'>
          About
        </a>
        <a href={'#skills'} className='text-white hover:text-gray-300 transition-colors'>
          Skills
        </a>
        <a href={'#experience'} className='text-white hover:text-gray-300 transition-colors'>
          Experience
        </a>
        <a href={'#projects'} className='text-white hover:text-gray-300 transition-colors'>
          Projects
        </a>
        <a href={'#contact'} className='text-white hover:text-gray-300 transition-colors'>
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
        <div className='bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20'>
          <div className='flex items-center space-x-10'>
            <Link to={'/'} className='text-white font-bold text-lg'>
              {'<chrixs />'}
            </Link>
            <div className='flex space-x-6'>{NavBar}</div>
          </div>
        </div>
      </nav>
    </header>
  );
};
