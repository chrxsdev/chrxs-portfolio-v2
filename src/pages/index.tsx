import { useState, useEffect } from 'react';
import { Mail, ExternalLink, Code, Palette, Zap, Coffee, Heart, Star, ArrowRight, Download } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@/router';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [, setActiveProject] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-[#5F5AA2] to-[#355691]' },
    { name: 'Next.js', icon: '▲', color: 'from-[#413E54] to-[#30232F]' },
    { name: 'TypeScript', icon: 'TS', color: 'from-[#355691] to-[#5F5AA2]' },
    { name: 'Node.js', icon: '🟢', color: 'from-[#5F5AA2] to-[#413E54]' },
    { name: 'Python', icon: '🐍', color: 'from-[#355691] to-[#3F4045]' },
    { name: 'AWS', icon: '☁️', color: 'from-[#413E54] to-[#5F5AA2]' },
    { name: 'Docker', icon: '🐳', color: 'from-[#5F5AA2] to-[#355691]' },
    { name: 'GraphQL', icon: '◆', color: 'from-[#355691] to-[#413E54]' },
    { name: 'MongoDB', icon: '🍃', color: 'from-[#5F5AA2] to-[#30232F]' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-[#413E54] to-[#355691]' },
    { name: 'Redis', icon: '◊', color: 'from-[#355691] to-[#5F5AA2]' },
    { name: 'Kubernetes', icon: '⎈', color: 'from-[#5F5AA2] to-[#3F4045]' },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'TechCorp',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      techStack: ['⚛️', 'TS', '🟢', '☁️', '🐘'],
    },
    {
      title: 'Lead Frontend Developer',
      company: 'InnovateLab',
      period: '2020 - 2022',
      location: 'Remote',
      techStack: ['▲', '⚛️', 'TS', '◆', '🍃'],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      location: 'New York, NY',
      techStack: ['⚛️', '🟢', '🐍', '🐳', '◊'],
    },
    {
      title: 'Frontend Developer',
      company: 'DigitalAgency',
      period: '2018 - 2019',
      location: 'Los Angeles, CA',
      techStack: ['⚛️', 'TS', '🟢', '🍃'],
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
    <div className='min-h-screen bg-black text-white overflow-hidden relative'>
      {/* Animated Background */}
      <div className='fixed inset-0 z-0'>
        <div
          className='absolute w-96 h-96 bg-gradient-to-r from-[#5F5AA2]/20 to-[#355691]/20 rounded-full blur-3xl transition-all duration-1000 ease-out'
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,90,162,0.1),transparent_50%)]' />
      </div>

      {/* Floating Navigation */}
      <nav className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50'>
        <div className='bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20'>
          <div className='flex items-center space-x-20'>
            <a href='#' className='text-white font-bold text-lg'>
              {'<chrixs />'}
            </a>
            <div className='flex space-x-6'>
              <Link to={'/'} className='text-white/80 hover:text-white transition-colors text-sm'>
                Home
              </Link>
              <Link to={'/contact'} className='text-white/80 hover:text-white transition-colors text-sm'>
                Contact
              </Link>
              <Link to={'/blog'} className='text-white/80 hover:text-white transition-colors text-sm'>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center relative z-10 px-6'>
        <div
          className={`text-center transition-all duration-2000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='mb-8 relative'>
            <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#5F5AA2] to-[#355691] p-1 animate-pulse'>
              <div className='w-full h-full rounded-full overflow-hidden bg-black'>
                <img
                  src='/placeholder.svg?height=128&width=128'
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
            MAYA PATEL
          </h1>

          <div className='text-xl md:text-2xl text-gray-300 mb-8 font-light'>
            <span className='inline-block animate-pulse'>{'>'}</span>
            <span className='ml-2'>Creative Developer & Digital Architect</span>
          </div>

          <p className='text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed'>
            I build impossible things with code, turning wild ideas into digital reality. Specializing in AI, 3D
            experiences, and the future of human-computer interaction.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-[#5F5AA2] to-[#355691] hover:from-[#5F5AA2]/80 hover:to-[#355691]/80 text-white border-0 px-8 py-3 rounded-full'
              onClick={() => console.log('clicked')}
            >
              <Download className='w-4 h-4 mr-2' />
              Download Resume
            </Button>
          </div>

          <div className='flex justify-center gap-6 mt-12'>
            <a
              href='#'
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <GitHubLogoIcon width={22} height={22} />
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <LinkedInLogoIcon width={22} height={22} />
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
                About Me
              </h2>
              <div className='space-y-6 text-gray-300 leading-relaxed'>
                <p>
                  I'm a creative developer who lives at the intersection of art and technology. With 6+ years of
                  experience, I've built everything from AI-powered applications to immersive 3D experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting with generative art, contributing to open source
                  projects, or exploring the latest in quantum computing.
                </p>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='flex items-center gap-2'>
                    <Coffee className='w-5 h-5 text-yellow-500' />
                    <span>Coffee Enthusiast</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Heart className='w-5 h-5 text-red-500' />
                    <span>Open Source</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Zap className='w-5 h-5 text-blue-500' />
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-r from-[#5F5AA2]/20 to-[#355691]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10'>
                <div className='grid grid-cols-2 gap-6 text-center'>
                  <div>
                    <div className='text-3xl font-bold text-[#5F5AA2]'>50+</div>
                    <div className='text-gray-400'>Projects</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-[#355691]'>6+</div>
                    <div className='text-gray-400'>Years</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-[#413E54]'>100k+</div>
                    <div className='text-gray-400'>Users</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-[#5F5AA2]'>15+</div>
                    <div className='text-gray-400'>Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            Skills & Expertise
          </h2>

          {/* Technology Circles */}
          <div className='flex flex-wrap justify-center gap-6 mb-16'>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`group relative w-24 h-24 rounded-full bg-gradient-to-br ${tech.color} p-0.5 hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                <div className='w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center backdrop-blur-sm'>
                  <div className='text-2xl mb-1'>{tech.icon}</div>
                  <div className='text-xs text-white font-medium text-center leading-tight'>{tech.name}</div>
                </div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
            ))}
          </div>

          <div className='mt-16 grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-gradient-to-br from-[#5F5AA2]/20 to-transparent rounded-xl border border-[#5F5AA2]/30'>
              <Code className='w-12 h-12 mx-auto mb-4 text-[#5F5AA2]' />
              <h3 className='text-xl font-semibold mb-2'>Full Stack Development</h3>
              <p className='text-gray-400'>End-to-end application development with modern frameworks</p>
            </div>
            <div className='text-center p-6 bg-gradient-to-br from-[#355691]/20 to-transparent rounded-xl border border-[#355691]/30'>
              <Palette className='w-12 h-12 mx-auto mb-4 text-[#355691]' />
              <h3 className='text-xl font-semibold mb-2'>Creative Design</h3>
              <p className='text-gray-400'>UI/UX design with a focus on innovative user experiences</p>
            </div>
            <div className='text-center p-6 bg-gradient-to-br from-[#413E54]/20 to-transparent rounded-xl border border-[#413E54]/30'>
              <Zap className='w-12 h-12 mx-auto mb-4 text-[#413E54]' />
              <h3 className='text-xl font-semibold mb-2'>Emerging Tech</h3>
              <p className='text-gray-400'>AI, AR/VR, and cutting-edge technology integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-20 px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#5F5AA2] to-[#355691] bg-clip-text text-transparent'>
            Experience
          </h2>

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-white mb-1'>{exp.title}</h3>
                    <div className='flex items-center gap-4 text-gray-400 mb-2'>
                      <span className='font-medium text-[#5F5AA2]'>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className='text-sm text-gray-500'>{exp.period}</div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-sm text-gray-400 mr-2'>Tech Stack:</span>
                    <div className='flex gap-2'>
                      {exp.techStack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className='w-8 h-8 rounded-full bg-gradient-to-br from-[#5F5AA2]/30 to-[#355691]/30 flex items-center justify-center text-sm border border-white/20'
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-6 relative z-10'>
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
                    <Button size='sm' asChild className='ml-auto bg-white/10 hover:bg-white/20 text-white border-0'>
                      <a href={project.live} target='_blank'>
                        {' '}
                        {/* Linking to live demo for "View Details" */}
                        View Details
                        <ArrowRight className='w-4 h-4 ml-1' />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-6 relative z-10'>
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
                    <div className='text-gray-400'>maya@creativecode.dev</div>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <LinkedInLogoIcon />
                  <div>
                    <div className='text-white font-medium'>LinkedIn</div>
                    <div className='text-gray-400'>@mayapatel-dev</div>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10'>
                  <GitHubLogoIcon className='w-6 h-6 text-[#413E54]' />
                  <div>
                    <div className='text-white font-medium'>GitHub</div>
                    <div className='text-gray-400'>@maya-creative</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10'>
              <form className='space-y-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName' className='text-white'>
                      First name
                    </Label>
                    <Input
                      id='firstName'
                      placeholder='John'
                      className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName' className='text-white'>
                      Last name
                    </Label>
                    <Input
                      id='lastName'
                      placeholder='Doe'
                      className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-white'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
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
                    placeholder='Web App, Mobile App, AI Project...'
                    className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-white'>
                    Message
                  </Label>
                  <Textarea
                    id='message'
                    placeholder='Tell me about your vision...'
                    className='min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#5F5AA2]'
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full bg-gradient-to-r from-[#5F5AA2] to-[#355691] hover:from-[#5F5AA2]/80 hover:to-[#355691]/80 text-white border-0 py-3'
                >
                  Send Message
                  <ArrowRight className='w-4 h-4 ml-2' />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 px-6 border-t border-white/10 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-400 mb-4 md:mb-0'>
              © 2024 Maya Patel. Crafted with <Heart className='w-4 h-4 inline text-red-500' /> and lots of coffee.
            </div>
            <div className='flex items-center gap-2 text-gray-400'>
              <Star className='w-4 h-4 text-yellow-500' />
              <span>Available for freelance work</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
