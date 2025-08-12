import { useState } from 'react';
import { Mail, ExternalLink, Coffee, Download, Music, Pizza, MessageCircle, Send, Calendar } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { ASSETS } from '@/constants/sources';
import type { IconName } from '@/types';
import { SkillIcon } from '@/components/SkillIcon';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [, setActiveProject] = useState(0);

  const technologies = [
    { name: 'React', key: 'react', color: 'from-[#5F5AA2] to-[#355691]' },
    { name: 'Next.js', key: 'nextjs', color: 'from-[#413E54] to-[#30232F]' },
    { name: 'JavaScript', key: 'javascript', color: 'from-[#355691] to-[#5F5AA2]' },
    { name: 'TypeScript', key: 'typescript', color: 'from-[#355691] to-[#5F5AA2]' },
    { name: 'Java', key: 'java', color: 'from-[#355691] to-[#5F5AA2]' },
    { name: 'Node.js', key: 'nodejs', color: 'from-[#5F5AA2] to-[#413E54]' },
    { name: 'NestJS', key: 'nestjs', color: 'from-[#5F5AA2] to-[#413E54]' },
    { name: 'Express.js', key: 'express', color: 'from-[#5F5AA2] to-[#413E54]' },
    { name: 'Spring Boot', key: 'spring', color: 'from-[#413E54] to-[#355691]' },
    { name: 'PostgreSQL', key: 'postgresql', color: 'from-[#413E54] to-[#355691]' },
    { name: 'MySQL', key: 'mysql', color: 'from-[#413E54] to-[#355691]' },
    { name: 'MongoDB', key: 'mongodb', color: 'from-[#5F5AA2] to-[#30232F]' },
    { name: 'AWS', key: 'aws', color: 'from-[#413E54] to-[#5F5AA2]' },
    { name: 'Firebase', key: 'firebase', color: 'from-[#413E54] to-[#5F5AA2]' },
    { name: 'Docker', key: 'docker', color: 'from-[#5F5AA2] to-[#355691]' },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'TechCorp',
      period: '2022 - Present',
      location: 'San Francisco, CA',
    },
    {
      title: 'Lead Frontend Developer',
      company: 'InnovateLab',
      period: '2020 - 2022',
      location: 'Remote',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      location: 'New York, NY',
    },
    {
      title: 'Frontend Developer',
      company: 'DigitalAgency',
      period: '2018 - 2019',
      location: 'Los Angeles, CA',
    },
  ];

  const projects = [
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural networks with real-time training data',
      image: '/placeholder.svg?height=300&width=500',
      tech: ['Three.js', 'React', 'WebGL', 'TensorFlow.js'],
      color: 'from-[#5F5AA2] to-[#355691]',
      github: 'https://github.com',
      live: 'https://neural-viz.com',
    },
    {
      title: 'Quantum Code Editor',
      description: 'Revolutionary code editor with AI-powered suggestions and quantum computing support',
      image: '/placeholder.svg?height=300&width=500',
      tech: ['Electron', 'Monaco Editor', 'AI/ML', 'Rust'],
      color: 'from-[#355691] to-[#413E54]',
      github: 'https://github.com',
      live: 'https://quantum-editor.com',
    },
    {
      title: 'Holographic Dashboard',
      description: 'AR/VR dashboard for data visualization with gesture controls',
      image: '/placeholder.svg?height=300&width=500',
      tech: ['WebXR', 'A-Frame', 'D3.js', 'WebRTC'],
      color: 'from-[#413E54] to-[#3F4045]',
      github: 'https://github.com',
      live: 'https://holo-dash.com',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center relative z-10 px-6'>
        <div className={`text-center transition-all duration-2000`}>
          <div className='mb-8 relative'>
            <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#5F5AA2] to-[#355691] p-1 animate-pulse'>
              <div className='w-full h-full rounded-full overflow-hidden bg-black'>
                <img
                  src={ASSETS.profile}
                  alt='Developer Avatar'
                  width={128}
                  height={128}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='absolute -top-2 -right-2 w-8 h-8 bg-[#355691] rounded-full flex items-center justify-center animate-bounce'>
              <div className='w-3 h-3 bg-white rounded-full' />
            </div>
          </div>

          <h1 className='text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            chrxs
          </h1>

          <div className='text-xl md:text-2xl text-gray-300 mb-8 font-light'>
            <span className='inline-block animate-pulse'>{'>'}</span>
            <span className='ml-2'>Software Fullstack Developer</span>
          </div>

          <p className='text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed'>
            I build impossible things with code, turning wild ideas into digital reality.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-[#5F5AA2] to-[#355691] hover:from-[#5F5AA2]/80 hover:to-[#355691]/80 text-white border-0 px-8 py-3 rounded-full cursor-pointer'
              onClick={() => console.log('here option to download CV')}
            >
              <Download className='w-4 h-4 mr-2' />
              Download CV
            </Button>
          </div>

          <div className='flex justify-center gap-6 mt-12'>
            <Link
              to={ASSETS.social.github}
              target='_blank'
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <GitHubLogoIcon width={22} height={22} />
            </Link>
            <Link
              to={ASSETS.social.linkedin}
              target='_blank'
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <LinkedInLogoIcon width={22} height={22} />
            </Link>
            <Link
              to={`mailto:${ASSETS.social.email}`}
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <Mail className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-36 px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
                About Me
              </h2>
              <div className='space-y-6 text-gray-300 leading-relaxed'>
                <p>
                  I'm a creative developer who lives at the intersection of art and technology. With 1.5+ years building
                  scalable React.js, TypeScript, and React Native applications with full-stack capabilities in NestJS
                  and Spring Boot. Proven track record delivering high-performance solutions through Agile
                  collaboration, API integration, and delivering high-performance applications.
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting trying to connect technology with music or exploring
                  the latest AI features.
                </p>
                <div className='flex items-center gap-4 pt-4'>
                  <h2 className='text-xl font-bold bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
                    Fun facts:
                  </h2>
                  <div className='flex items-center gap-2'>
                    <Coffee className='w-5 h-5 text-yellow-500' />
                    <span>Coffee Addict</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Music className='w-5 h-5 text-red-500' />
                    <span>Beatmaker</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Pizza className='w-5 h-5 text-blue-500' />
                    <span>Pizza Lover</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-r from-[#5F5AA2]/20 to-[#355691]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10'>
                <div className='grid grid-cols-2 gap-6 text-center'>
                  <div>
                    <div className='text-3xl font-bold text-[#5F5AA2]'>5+</div>
                    <div className='text-gray-400'>Projects</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-[#355691]'>1.5+</div>
                    <div className='text-gray-400'>Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-32 px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            Skills & Expertise
          </h2>

          {/* Technology Circles */}
          <div className='flex flex-wrap justify-center gap-6 mb-16 p-4'>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`group relative w-28 h-28 rounded-full bg-gradient-to-br ${tech.color} p-0.5 hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                <div className='w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center backdrop-blur-sm'>
                  <SkillIcon name={tech.key as IconName} />
                  <div className='text-xs text-white font-medium text-center leading-tight'>{tech.name}</div>
                </div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-32 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            Experience
          </h2>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5F5AA2] to-[#355691]'></div>

            <div className='space-y-12'>
              {experiences.map((exp, index) => (
                <div key={index} className='relative flex items-start gap-8'>
                  {/* Company Logo */}
                  <div className='relative z-10 flex-shrink-0'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#5F5AA2] to-[#355691] p-0.5'>
                      <div className='w-full h-full rounded-full overflow-hidden bg-white'>
                        <img
                          src={`/placeholder.svg?height=64&width=64&text=${exp.company}`}
                          alt={`${exp.company} logo`}
                          width={64}
                          height={64}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                    {/* Timeline Dot */}
                    <div className='absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#5F5AA2] rounded-full border-4 border-black'></div>
                  </div>

                  {/* Experience Card */}
                  <div className='flex-1 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group'>
                    <h3 className='text-xl font-semibold text-white mb-2'>{exp.title}</h3>
                    <div className='flex flex-row justify-between'>
                      <div className='flex flex-1 items-center gap-3 text-gray-400'>
                        <span className='font-medium text-[#5F5AA2] text-lg'>{exp.company}</span>
                        <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                        <span>{exp.location}</span>
                      </div>
                      <div className='inline-flex items-center px-3 rounded-full bg-[#5F5AA2]/20 border border-[#5F5AA2]/30'>
                        <span className='text-sm text-[#5F5AA2] font-medium'>{exp.period}</span>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className='h-0.5 bg-gradient-to-r from-[#5F5AA2] to-[#355691] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End Dot */}
            <div className='absolute left-6 bottom-0 w-6 h-6 bg-gradient-to-br from-[#5F5AA2] to-[#355691] rounded-full border-4 border-black flex items-center justify-center'>
              <div className='w-2 h-2 bg-white rounded-full'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-32 px-6 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            Featured Projects
          </h2>

          <div className='grid lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className='group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105'
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className='aspect-video overflow-hidden'>
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    width={500}
                    height={300}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className='p-6 relative z-10'>
                  {' '}
                  {/* Added relative z-10 here */}
                  <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
                  <p className='text-gray-400 mb-4 text-sm leading-relaxed'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant='secondary' className='bg-white/10 text-white border-0 text-xs'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-3'>
                    <Button size='sm' variant='ghost' asChild className='text-white hover:bg-white/10 p-2'>
                      <a href={project.github} target='_blank'>
                        <GitHubLogoIcon className='w-4 h-4' />
                      </a>
                    </Button>
                    <Button size='sm' variant='ghost' asChild className='text-white hover:bg-white/10 p-2'>
                      <a href={project.live} target='_blank'>
                        <ExternalLink className='w-4 h-4' />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id='contact' className='py-32 px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='relative py-20 z-10'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r leading-16 from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
              Ready to Build Something Amazing?
            </h2>

            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
              I'm always excited to collaborate on innovative projects that push the boundaries of what's possible.
              Let's turn your vision into reality.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mb-10'>
              <div className='flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <MessageCircle className='w-8 h-8 text-[#5F5AA2] mb-3' />
                <h3 className='text-lg font-semibold text-white mb-2'>Let's Chat</h3>
                <p className='text-gray-400 text-sm text-center'>
                  Discuss your project ideas and explore possibilities
                </p>
              </div>

              <div className='flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <Send className='w-8 h-8 text-[#355691] mb-3' />
                <h3 className='text-lg font-semibold text-white mb-2'>Quick Response</h3>
                <p className='text-gray-400 text-sm text-center'>I typically respond within 24 hours</p>
              </div>

              <div className='flex flex-col items-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'>
                <Calendar className='w-8 h-8 text-[#413E54] mb-3' />
                <h3 className='text-lg font-semibold text-white mb-2'>Schedule a Call</h3>
                <p className='text-gray-400 text-sm text-center'>Book a free consultation to discuss your needs</p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                asChild
                className='bg-gradient-to-r from-[#5F5AA2] to-[#355691] hover:from-[#5F5AA2]/80 hover:to-[#355691]/80 text-white border-0 px-8 py-3 rounded-full'
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
                className='text-gray-400 hover:text-[#5F5AA2] transition-colors'
                target='_blank'
              >
                <GitHubLogoIcon className='w-6 h-6' />
              </Link>
              <Link
                to={ASSETS.social.linkedin}
                className='text-gray-400 hover:text-[#355691] transition-colors'
                target='_blank'
              >
                <LinkedInLogoIcon className='w-6 h-6' />
              </Link>
              <Link
                to={`mailto:${ASSETS.social.email}`}
                className='text-gray-400 hover:text-[#413E54] transition-colors'
              >
                <Mail className='w-6 h-6' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
