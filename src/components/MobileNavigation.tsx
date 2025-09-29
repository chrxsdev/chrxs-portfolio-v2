import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import type { MobileNavigationProps } from '@/types/navigation';

export const MobileNavigation = ({ isMobileMenuOpen, onToggleMenu }: MobileNavigationProps) => (
  <nav className='md:hidden fixed top-6 left-6 right-6 z-50'>
    <div className='bg-background/70 backdrop-blur-lg rounded-full px-4 py-2 border border-border'>
      <div className='flex items-center justify-between'>
        <Logo />
        <button
          onClick={onToggleMenu}
          className='text-foreground hover:text-muted-foreground transition-colors p-1'
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? (
            <X className='w-5 h-5' />
          ) : (
            <Menu className='w-5 h-5' />
          )}
        </button>
      </div>
    </div>
  </nav>
);