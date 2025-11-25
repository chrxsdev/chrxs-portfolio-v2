import { Mail, MessageCircle, Send, Calendar } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ASSETS } from '@/constants/sources';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/react-bits/RevealOnScroll';

const infoCards = [
  {
    icon: MessageCircle,
    title: "Let's Chat",
    description: 'Discuss your project ideas and explore possibilities',
    color: 'text-minimal-green',
  },
  {
    icon: Send,
    title: 'Quick Response',
    description: 'I typically respond within 24 hours',
    color: 'text-minimal-lemon',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a free consultation to discuss your needs',
    color: 'text-minimal-lemon',
  },
];

const socialLinks = [
  { href: ASSETS.social.github, icon: GitHubLogoIcon, hoverColor: 'hover:text-minimal-green' },
  { href: ASSETS.social.linkedin, icon: LinkedInLogoIcon, hoverColor: 'hover:text-minimal-lemon', external: true },
  { href: `mailto:${ASSETS.social.email}`, icon: Mail, hoverColor: 'hover:text-minimal-lemon' },
];

export const CallToActionSection = () => {
  return (
    <section id='contact' className='py-32 px-3 sm:px-6 relative z-10'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='relative py-20 z-10'>
          <RevealOnScroll>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r leading-16 from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
              Ready to Build Something Amazing?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className='text-xl text-center text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed'>
              I'm always excited to collaborate on innovative projects that push the boundaries of what's possible.
              Let's turn your vision into reality.
            </p>
          </RevealOnScroll>

          {/* Info Cards with Staggered Animation */}
          <div className='grid md:grid-cols-3 gap-6 mb-12'>
            {infoCards.map((card, index) => (
              <RevealOnScroll key={card.title} delay={0.15 + index * 0.1}>
                <motion.div
                  className='flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border transition-colors duration-300 h-full'
                  whileHover={{
                    y: -6,
                    borderColor: 'rgba(17, 75, 95, 0.3)',
                    boxShadow: '0 20px 40px rgba(17, 75, 95, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <card.icon className={`w-8 h-8 ${card.color} mb-3`} />
                  <h3 className='text-lg font-semibold text-foreground mb-2'>{card.title}</h3>
                  <p className='text-muted-foreground text-sm text-center'>{card.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.5}>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size='lg'
                  asChild
                  className='bg-gradient-to-r from-minimal-green to-minimal-lemon hover:from-minimal-green/90 hover:to-minimal-lemon/90 text-white border-0 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <Link to='/contact'>
                    <Mail className='w-5 h-5 mr-2' />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Social Links */}
          <RevealOnScroll delay={0.6}>
            <div className='flex justify-center gap-6 mt-10'>
              {socialLinks.map(({ href, icon: Icon, hoverColor, external }) => (
                <motion.div
                  key={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Link
                    to={href}
                    className={`text-muted-foreground ${hoverColor} transition-colors`}
                    target={external ? '_blank' : undefined}
                  >
                    <Icon className='w-6 h-6' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
