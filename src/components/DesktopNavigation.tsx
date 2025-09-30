import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { navigationItems } from '@/constants/navigation';
import type { NavigationProps } from '@/types/navigation';

export const DesktopNavigation = ({ pathname, onLinkClick }: NavigationProps) => {
  const isHomePage = pathname === '/';

  return (
    <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block'>
      <div className='bg-background/70 backdrop-blur-lg rounded-full px-4 py-2 border border-border'>
        <div className='flex items-center space-x-5'>
          <Logo />
          <div className='flex space-x-4'>
            {isHomePage ? (
              <>
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-foreground text-sm hover:text-muted-foreground transition-colors'
                    onClick={onLinkClick}
                  >
                    {item.name}
                  </a>
                ))}
              </>
            ) : (
              <Link 
                to={'/'} 
                className='text-foreground hover:text-muted-foreground transition-colors'
                onClick={onLinkClick}
              >
                Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};