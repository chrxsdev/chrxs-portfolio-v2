export interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationProps {
  pathname: string;
  onLinkClick?: () => void;
}

export interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  onToggleMenu: () => void;
}

export interface MobileMenuOverlayProps extends NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}