import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ASSETS } from '@/constants/sources';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className='py-20 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
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
                  <Mail className='w-6 h-6 text-[#5F5AA2]' />
                  <div>
                    <div className='text-white font-medium'>Email</div>
                    <div className='text-gray-400'>{ASSETS.social.email}</div>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <LinkedInLogoIcon color='#5F5AA2' width={23} height={23} />
                  <div>
                    <div className='text-white font-medium'>LinkedIn</div>
                    <div className='text-gray-400'>{ASSETS.social.linkedin.split('/').pop()}</div>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <GitHubLogoIcon className='w-6 h-6 text-[#5F5AA2]' />
                  <div>
                    <div className='text-white font-medium'>GitHub</div>
                    <div className='text-gray-400'>{ASSETS.social.github.split('/').pop()}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10'>
              <div className='flex items-center gap-3 mb-6'>
                <MessageCircle className='w-6 h-6 text-[#5F5AA2]' />
                <h3 className='text-2xl font-bold text-white'>Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName' className='text-white'>
                      Fullname *
                    </Label>
                    <Input
                      id='firstName'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder='John Doe'
                      className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-white'>
                    Email *
                  </Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='project' className='text-white'>
                    Project Type
                  </Label>
                  <Input
                    id='project'
                    name='project'
                    value={formData.project}
                    onChange={handleChange}
                    placeholder='Web App, Mobile App, AI Project...'
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-white'>
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your vision, job offer or any specific requirements...'
                    className='min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-gradient-to-r from-[#5F5AA2] to-[#355691] hover:from-[#5F5AA2]/80 hover:to-[#355691]/80 text-white border-0 py-3'
                >
                  <Send className='w-4 h-4 mr-2' />
                  Send Message
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
