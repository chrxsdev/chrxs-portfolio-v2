import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DesktopNavigation } from '@/components/DesktopNavigation';
import { MobileNavigation } from '@/components/MobileNavigation';
import { MobileMenuOverlay } from '@/components/MobileMenuOverlay';

export const Header = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <DesktopNavigation 
        pathname={pathname} 
        onLinkClick={closeMobileMenu} 
      />
      <MobileNavigation 
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
      />
      <MobileMenuOverlay 
        pathname={pathname}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </header>
  );
};
