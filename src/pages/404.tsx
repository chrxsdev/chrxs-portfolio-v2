import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import failAnimation from '@/assets/lottie/fail.json';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className='py-20 px-6 relative z-10'>
      <div className='text-center mx-auto max-w-lg'>
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
        <p className='text-gray-300 mb-8'>Sorry, the page you are looking for does not exist.</p>
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

export default NotFound;
