import { useEffect, useState } from 'react';
import { Mail, Download, Loader } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import { ASSETS } from '@/constants/sources';
import type { ResumeResponse } from '@/types';
import { getResumeInfo } from '@/api/experience.api';
import { useFile } from '@/hooks/useFile';
import SplitText from '@/components/react-bits/SplitText';

// Import the new section components
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';

const HomePage = () => {
  const [resumeData, setResumeData] = useState<ResumeResponse>({} as ResumeResponse);

  const { downloadFile, isLoading } = useFile();

  useEffect(() => {
    const fetchData = async () => {
      const { experience, skills, projects } = await getResumeInfo();
      setResumeData({ experience, skills, projects });
    };
    fetchData();
  }, []);

  const downloadResume = async (fileUrl: string) => {
    await downloadFile(fileUrl);
  };

  return (
    <>
      {/* Hero Section */}
      <section className='flex min-h-screen justify-center items-center relative z-10 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-4xl mx-auto'>
          <div className={`text-center transition-all duration-2000`}>
            <div className='mb-8 relative'>
              <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-minimal-purple to-minimal-blue p-1 animate-pulse'>
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
            <div className='absolute -top-2 -right-2 w-8 h-8 bg-minimal-blue rounded-full flex items-center justify-center animate-bounce'>
              <div className='w-3 h-3 bg-white rounded-full' />
            </div>
          </div>

          <h1 className='text-4xl sm:text-6xl md:text-8xl font-black mb-2 bg-gradient-to-r from-foreground via-minimal-purple to-minimal-blue bg-clip-text text-transparent break-words'>
            chrxs
          </h1>

          <div className='text-lg sm:text-xl md:text-2xl text-muted-foreground font-light flex justify-center items-center flex-wrap'>
            <span className='inline-block animate-pulse'>{'>'}</span>
            <SplitText
              text='Software Developer'
              className='ml-2 leading-14'
              delay={70}
              duration={2}
              ease='elastic.out(1,0.3)'
              splitType='words'
              from={{ color: '#5f5aa2', opacity: 0, y: 40 }}
              to={{ color: 'inherit', opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin='-100px'
              textAlign='center'
            />
          </div>

          <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-2'>
            I turn ideas into digital reality.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center px-2'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-minimal-purple to-minimal-blue hover:from-minimal-purple/80 hover:to-minimal-blue/80 text-white border-0 px-6 sm:px-8 py-3 rounded-full cursor-pointer w-full sm:w-auto max-w-xs'
              onClick={() => downloadResume(ASSETS.resume.en)}
            >
              {isLoading ? (
                <>
                  <Loader className='w-4 h-4 mr-2 animate-spin' />
                  Processing...
                </>
              ) : (
                <>
                  <Download className='w-4 h-4 mr-2' />
                  Download CV
                </>
              )}
            </Button>
          </div>

          <div className='flex justify-center gap-4 sm:gap-6 mt-12 px-2'>
            <Link
              to={ASSETS.social.github}
              target='_blank'
              className='w-12 h-12 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-muted border border-border transition-colors'
            >
              <GitHubLogoIcon width={22} height={22} className='text-foreground' />
            </Link>
            <Link
              to={ASSETS.social.linkedin}
              target='_blank'
              className='w-12 h-12 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-muted border border-border transition-colors'
            >
              <LinkedInLogoIcon width={22} height={22} className='text-foreground' />
            </Link>
            <Link
              to={`mailto:${ASSETS.social.email}`}
              className='w-12 h-12 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-muted border border-border transition-colors'
            >
              <Mail className='w-6 h-6 text-foreground' />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection projectsCount={5} yearsExperience='1.5' />

      {/* Skills Section */}
      <SkillsSection skills={resumeData.skills} />

      {/* Experience Section */}
      <ExperienceSection experience={resumeData.experience} />

      {/* Projects Section */}
      <ProjectsSection projects={resumeData.projects} />

      {/* Call to Action Section */}
      <CallToActionSection />
    </>
  );
};

export default HomePage;
