import { Link } from '@/router';

export const Header = () => {
  return (
    <header>
      <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50'>
        <div className='bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20'>
          <div className='flex items-center space-x-10'>
            <Link to={'/'} className='text-white font-bold text-lg'>
              {'<chrixs />'}
            </Link>
            <div className='flex space-x-3'>
              <Link to={'/'} className='text-white/80 hover:text-white transition-colors text-sm'>
                Home
              </Link>
              <Link to={'/contact'} className='text-white/80 hover:text-white transition-colors text-sm'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
