import { Mail, MessageCircle, Send, Calendar } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ASSETS } from '@/constants/sources';

export const CallToActionSection = () => {
  return (
    <section id='contact' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='relative py-20 z-10'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r leading-16 from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
            Ready to Build Something Amazing?
          </h2>

          <p className='text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed'>
            I'm always excited to collaborate on innovative projects that push the boundaries of what's possible.
            Let's turn your vision into reality.
          </p>

          <div className='grid md:grid-cols-3 gap-6 mb-10'>
            <div className='flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:bg-card/50 transition-all duration-300'>
              <MessageCircle className='w-8 h-8 text-minimal-purple mb-3' />
              <h3 className='text-lg font-semibold text-foreground mb-2'>Let's Chat</h3>
              <p className='text-muted-foreground text-sm text-center'>
                Discuss your project ideas and explore possibilities
              </p>
            </div>

            <div className='flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:bg-card/50 transition-all duration-300'>
              <Send className='w-8 h-8 text-minimal-blue mb-3' />
              <h3 className='text-lg font-semibold text-foreground mb-2'>Quick Response</h3>
              <p className='text-muted-foreground text-sm text-center'>I typically respond within 24 hours</p>
            </div>

            <div className='flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:bg-card/50 transition-all duration-300'>
              <Calendar className='w-8 h-8 text-minimal-blue mb-3' />
              <h3 className='text-lg font-semibold text-foreground mb-2'>Schedule a Call</h3>
              <p className='text-muted-foreground text-sm text-center'>Book a free consultation to discuss your needs</p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              asChild
              className='bg-gradient-to-r from-minimal-purple to-minimal-blue hover:from-minimal-purple/80 hover:to-minimal-blue/80 text-white border-0 px-8 py-3 rounded-full'
            >
              <Link to='/contact'>
                <Mail className='w-5 h-5 mr-2' />
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className='flex justify-center gap-6 mt-8'>
            <Link
              to={ASSETS.social.github}
              className='text-muted-foreground hover:text-minimal-purple transition-colors'
              target='_blank'
            >
              <GitHubLogoIcon className='w-6 h-6' />
            </Link>
            <Link
              to={ASSETS.social.linkedin}
              className='text-muted-foreground hover:text-minimal-blue transition-colors'
              target='_blank'
            >
              <LinkedInLogoIcon className='w-6 h-6' />
            </Link>
            <Link
              to={`mailto:${ASSETS.social.email}`}
              className='text-muted-foreground hover:text-minimal-blue transition-colors'
            >
              <Mail className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
