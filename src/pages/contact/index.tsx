import { useEffect } from 'react';
import { Loader, Mail, MessageCircle, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ASSETS } from '@/constants/sources';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { postContactInformation } from '@/api/experience.api';

const contactFormSchema = z.object({
  fullname: z.string().min(1, 'Full name is required').max(20, 'Full name must be at most 20 characters'),
  email: z.email('Invalid email format'),
  project: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(80, 'Message must be at most 80 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
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

      navigate(`/contact/success?status=${response.ok}`);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <section className='py-20 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-minimal-purple to-minimal-blue bg-clip-text text-transparent'>
            Let's Create Something Amazing
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-semibold mb-6 text-white'>Ready to collaborate?</h3>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                I'm always excited to work on innovative projects that push the boundaries of what's possible. Let's
                turn your vision into reality.
              </p>

              <div className='space-y-4'>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <Mail className='w-6 h-6 text-minimal-purple' />
                  <div>
                    <div className='text-white font-medium'>Email</div>
                    <a href={`mailto:${ASSETS.social.email}`} className='text-gray-400'>
                      {ASSETS.social.email}
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <LinkedInLogoIcon color='#5F5AA2' width={23} height={23} />
                  <div>
                    <div className='text-white font-medium'>LinkedIn</div>
                    <a
                      className='text-gray-400'
                      href={ASSETS.social.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {ASSETS.social.linkedin.split('/').pop()}
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <GitHubLogoIcon className='w-6 h-6 text-minimal-purple' />
                  <div>
                    <div className='text-white font-medium'>GitHub</div>
                    <a className='text-gray-400' href={ASSETS.social.github} target='_blank' rel='noopener noreferrer'>
                      {ASSETS.social.github.split('/').pop()}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10'>
              <div className='flex items-center gap-3 mb-6'>
                <MessageCircle className='w-6 h-6 text-minimal-purple' />
                <h3 className='text-2xl font-bold text-white'>Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName' className='text-white'>
                      Fullname *
                    </Label>
                    <Input
                      id='firstName'
                      {...register('fullname')}
                      placeholder='Your cool name here'
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-minimal-purple ${
                        errors.fullname ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.fullname && <p className='text-red-500 text-sm mt-1'>{errors.fullname.message}</p>}
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-white'>
                    Email *
                  </Label>
                  <Input
                    id='email'
                    type='text'
                    {...register('email')}
                    placeholder='noregrets@email.com'
                    className={`bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-minimal-purple ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='project' className='text-white'>
                    Project Type
                  </Label>
                  <Input
                    id='project'
                    {...register('project')}
                    placeholder='Web App, Mobile App, AI Project...'
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-minimal-purple'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-white'>
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    {...register('message')}
                    placeholder='Tell me about your vision, job offer or any specific requirements...'
                    className={`min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-minimal-purple ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>}
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-minimal-purple to-minimal-blue hover:from-minimal-purple/80 hover:to-minimal-blue/80 text-white border-0 py-3 disabled:opacity-50 cursor-pointer'
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

              <div className='mt-6 pt-6 border-t border-white/10'>
                <p className='text-gray-400 text-sm text-center'>
                  Prefer a quick chat? Feel free to reach out directly via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
