import { useEffect, useState } from 'react';
import { Loader, Mail, MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ASSETS } from '@/constants/sources';
import { postContactInformation } from '@/api/experience.api';
import successAnimation from '@/assets/lottie/success-rocket.json';
import failAnimation from '@/assets/lottie/fail.json';

const contactFormSchema = z.object({
  fullname: z.string().min(1, 'Full name is required').max(20, 'Full name must be at most 20 characters'),
  email: z.email('Invalid email format'),
  project: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(80, 'Message must be at most 80 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactFailed, setContactFailed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await postContactInformation({
        fullname: data.fullname,
        email: data.email,
        message: data.message,
        project_type: data.project ?? 'ND',
      });

      if (response.ok) {
        setContactSuccess(true);
        return;
      }
      setContactFailed(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setContactFailed(true);
    }
  };

  const renderContactProcess = () => {
    return (
      <div className='text-center mx-auto max-w-lg'>
        {contactSuccess && (
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full flex justify-center'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: successAnimation,
                  rendererSettings: {
                    scaleMode: 'contain',
                  },
                }}
                height={400}
                width={500}
              />
            </div>
            <p className='text-muted-foreground mb-8'>Thank you for reaching out! I'll get back to you as soon as possible.</p>
          </div>
        )}
        {contactFailed && (
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full flex justify-center'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: failAnimation,
                  rendererSettings: {
                    scaleMode: 'contain',
                  },
                }}
                height={400}
                width={500}
              />
            </div>
            <p className='text-muted-foreground mb-8'>
              Sorry, there was an error sending your message. Please try again or contact me directly via email.
            </p>
          </div>
        )}
        <Button
          onClick={() => navigate('/')}
          className='bg-gradient-to-r from-minimal-green to-minimal-lemon hover:from-minimal-green/80 hover:to-minimal-lemon/80 text-white border-0 cursor-pointer'
        >
          Return to Home
        </Button>
      </div>
    );
  };

  const renderContactForm = () => {
    return (
      <div className='w-full px-4 md:px-4'>
        <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-minimal-green to-minimal-lemon bg-clip-text text-transparent'>
          Let's Create Something Amazing
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='min-w-full'>
            <h3 className='text-2xl font-semibold mb-6 text-foreground'>Ready to collaborate?</h3>
            <p className='text-muted-foreground mb-8 leading-relaxed'>
              I'm always excited to work on innovative projects that push the boundaries of what's possible. Let's turn
              your vision into reality.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border'>
                <Mail className='w-6 h-6 text-minimal-green' />
                <div>
                  <div className='text-foreground font-medium'>Email</div>
                  <a href={`mailto:${ASSETS.social.email}`} className='text-muted-foreground'>
                    {ASSETS.social.email}
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border'>
                <LinkedInLogoIcon color='#5F5AA2' width={23} height={23} />
                <div>
                  <div className='text-foreground font-medium'>LinkedIn</div>
                  <a className='text-muted-foreground' href={ASSETS.social.linkedin} target='_blank' rel='noopener noreferrer'>
                    {ASSETS.social.linkedin.split('/').pop()}
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border'>
                <GitHubLogoIcon className='w-6 h-6 text-minimal-green' />
                <div>
                  <div className='text-foreground font-medium'>GitHub</div>
                  <a className='text-muted-foreground' href={ASSETS.social.github} target='_blank' rel='noopener noreferrer'>
                    {ASSETS.social.github.split('/').pop()}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border'>
            <div className='flex items-center gap-3 mb-6'>
              <MessageCircle className='w-6 h-6 text-minimal-green' />
              <h3 className='text-2xl font-bold text-foreground'>Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid grid-cols-1 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName' className='text-foreground'>
                    Fullname *
                  </Label>
                  <Input
                    id='firstName'
                    {...register('fullname')}
                    placeholder='Your cool name here'
                    className={`bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-minimal-green ${
                      errors.fullname ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.fullname && <p className='text-red-500 text-sm mt-1'>{errors.fullname.message}</p>}
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-foreground'>
                  Email *
                </Label>
                <Input
                  id='email'
                  type='text'
                  {...register('email')}
                  placeholder='noregrets@email.com'
                  className={`bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-minimal-green ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='project' className='text-foreground'>
                  Project Type
                </Label>
                <Input
                  id='project'
                  {...register('project')}
                  placeholder='Web App, Mobile App, AI Project...'
                  className='bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-minimal-green'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message' className='text-foreground'>
                  Message *
                </Label>
                <Textarea
                  id='message'
                  {...register('message')}
                  placeholder='Tell me about your vision, job offer or any specific requirements...'
                  className={`min-h-[120px] bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-minimal-green ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                />
                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>}
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-minimal-green to-minimal-lemon hover:from-minimal-green/80 hover:to-minimal-lemon/80 text-white border-0 py-3 disabled:opacity-50 cursor-pointer'
              >
                {isSubmitting ? (
                  <>
                    <Loader className='w-4 h-4 mr-2 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4 mr-2' />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className='mt-6 pt-6 border-t border-border'>
              <p className='text-muted-foreground text-sm text-center'>
                Prefer a quick chat? Feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-lvw'>
      <section className='py-20 md:px-6 px-4 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          {!contactSuccess && !contactFailed ? renderContactForm() : renderContactProcess()}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
