import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import Lottie from 'react-lottie';
import successAnimation from '@/assets/lottie/success-rocket.json';
import failAnimation from '@/assets/lottie/fail.json';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    // Redirect to home if no status parameter or invalid value
    if (!status || !['true', 'false'].includes(status)) {
      navigate('/');
    }
  }, [status, navigate]);

  if (!status || !['true', 'false'].includes(status)) {
    return null; // Return null while redirecting
  }

  const isSuccess = status === 'true';

  return (
    <section className='min-h-[80%] py-20 px-6 flex justify-center items-center relative z-10'>
      <div className='text-center max-w-lg'>
        {isSuccess ? (
          <>
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
            <p className='text-gray-300 mb-8'>Thank you for reaching out! I'll get back to you as soon as possible.</p>
          </>
        ) : (
          <>
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
            <p className='text-gray-300 mb-8'>
              Sorry, there was an error sending your message. Please try again or contact me directly via email.
            </p>
          </>
        )}
        <Button
          onClick={() => navigate('/')}
          className='bg-gradient-to-r from-minimal-purple to-minimal-blue hover:from-minimal-purple/80 hover:to-minimal-blue/80 text-white border-0 cursor-pointer'
        >
          Return to Home
        </Button>
      </div>
    </section>
  );
};

export default SuccessPage;
