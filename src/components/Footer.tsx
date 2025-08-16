import { Coffee, Heart, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='py-12 px-6 border-t border-border relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-muted-foreground md:mb-0'>
            Developed with <Heart className='w-4 h-4 inline text-red-500 mb-1' /> and lots of coffee{' '}
            <Coffee className='w-4 h-4 inline text-foreground mb-1' />
          </div>
          <div className='text-muted-foreground mb-4 md:mb-0'>© 2025 chrxs.dev</div>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Star className='w-4 h-4 text-yellow-500' />
            <span>Available for freelance work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
