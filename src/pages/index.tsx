import { useEffect, useState } from 'react'
import { Mail, Download, Loader } from 'lucide-react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import { ASSETS } from '@/constants/sources'
import type { ResumeResponse } from '@/types'
import { getResumeInfo } from '@/api/experience.api'
import { useFile } from '@/hooks/useFile'
import SplitText from '@/components/react-bits/SplitText'

// Import the new section components
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import TextType from '@/components/react-bits/TextType'

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  },
}

const HomePage = () => {
  const [resumeData, setResumeData] = useState<ResumeResponse>({} as ResumeResponse)

  const { downloadFile, isLoading } = useFile()

  useEffect(() => {
    const fetchData = async () => {
      const { experience, skills, projects } = await getResumeInfo()
      setResumeData({ experience, skills, projects })
    }
    fetchData()
  }, [])

  const downloadResume = async (fileUrl: string) => {
    await downloadFile(fileUrl)
  }

  return (
    <>
      {/* Hero Section */}
      <section className='flex min-h-screen justify-center items-center relative z-10 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='w-full max-w-4xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='text-center'>
            {/* Avatar with animated gradient ring */}
            <motion.div
              className='mb-8 relative inline-block'
              variants={itemVariants}
            >
              <motion.div
                className='w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-minimal-green to-minimal-lemon p-1'
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(17, 75, 95, 0.3)',
                    '0 0 40px rgba(136, 212, 152, 0.4)',
                    '0 0 20px rgba(17, 75, 95, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className='w-full h-full rounded-full overflow-hidden bg-black'>
                  <img
                    src={ASSETS.profile}
                    alt='Developer Avatar'
                    width={128}
                    height={128}
                    className='w-full h-full object-cover'
                  />
                </div>
              </motion.div>
              
              {/* Status indicator */}
              <motion.div
                className='absolute -top-1 -right-1 w-8 h-8 bg-minimal-lemon rounded-full flex items-center justify-center'
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className='w-3 h-3 bg-white rounded-full' />
              </motion.div>
            </motion.div>

            {/* Typing animation title */}
            <motion.div variants={itemVariants}>
              <TextType
                text={['<h1> hello world! </h1>', "i'm chrxs.dev", 'let\'s connect!']}
                className='text-2xl sm:text-6xl md:text-6xl font-black mb-2 break-words w-[90%]'
                cursorClassName='text-foreground'
                textColors={['text-foreground']}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter='_'
                deletingSpeed={150}
              />
            </motion.div>

            {/* Subtitle with split text animation */}
            <motion.div
              className='text-lg sm:text-xl md:text-2xl text-muted-foreground font-light flex justify-center items-center flex-wrap'
              variants={itemVariants}
            >
              <motion.span
                className='inline-block'
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {'>'}
              </motion.span>
              <SplitText
                text='Software Engineer'
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
            </motion.div>

            {/* Tagline */}
            <motion.p
              className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-2'
              variants={itemVariants}
            >
              I turn ideas into digital reality.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center px-2'
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-minimal-green to-minimal-lemon hover:from-minimal-green/90 hover:to-minimal-lemon/90 text-white border-0 px-6 sm:px-8 py-3 rounded-full cursor-pointer w-full sm:w-auto max-w-xs shadow-lg hover:shadow-xl transition-shadow duration-300'
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
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className='flex justify-center gap-4 sm:gap-6 mt-12 px-2'
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.8 },
                },
              }}
            >
              {[
                { href: ASSETS.social.github, icon: GitHubLogoIcon, label: 'GitHub' },
                { href: ASSETS.social.linkedin, icon: LinkedInLogoIcon, label: 'LinkedIn' },
                { href: `mailto:${ASSETS.social.email}`, icon: Mail, label: 'Email', isLucide: true },
              ].map(({ href, icon: Icon, label, isLucide }) => (
                <motion.div key={label} variants={socialVariants}>
                  <motion.div
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      className='w-12 h-12 bg-background/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-muted border border-border transition-colors hover:border-minimal-green/50'
                      aria-label={label}
                    >
                      {isLucide ? (
                        <Icon className='w-6 h-6 text-foreground' />
                      ) : (
                        <Icon width={22} height={22} className='text-foreground' />
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection projectsCount={5} yearsExperience='2' />

      {/* Skills Section */}
      <SkillsSection skills={resumeData.skills} />

      {/* Experience Section */}
      <ExperienceSection experience={resumeData.experience} />

      {/* Projects Section */}
      <ProjectsSection projects={resumeData.projects} />

      {/* Call to Action Section */}
      <CallToActionSection />
    </>
  )
}

export default HomePage
