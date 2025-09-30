import { Link } from 'react-router-dom';
import { navigationItems } from '@/constants/navigation';
import type { MobileMenuOverlayProps } from '@/types/navigation';

export const MobileMenuOverlay = ({ pathname, isOpen, onClose }: MobileMenuOverlayProps) => {
  if (!isOpen) return null;

  const isHomePage = pathname === '/';

  return (
    <div className='fixed inset-0 z-40 md:hidden'>
      <div 
        className='absolute inset-0 bg-minimal-purple/80 backdrop-blur-sm'
        onClick={onClose}
      />
      <div className='relative z-50 flex flex-col items-center justify-center min-h-screen space-y-8'>
        {isHomePage ? (
          <>
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-white text-2xl font-medium hover:text-white/80 transition-colors'
                onClick={onClose}
              >
                {item.name}
              </a>
            ))}
          </>
        ) : (
          <Link 
            to={'/'} 
            className='text-white text-2xl font-medium hover:text-white/80 transition-colors'
            onClick={onClose}
          >
            Home
          </Link>
        )}
      </div>
    </div>
  );
};