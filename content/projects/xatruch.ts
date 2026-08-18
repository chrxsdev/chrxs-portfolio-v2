import type { Project } from '@/types/content';

export const xatruch = {
  slug: 'xatruch-booking-platform',
  title: 'Xatruch booking platform',
  category: 'Full-stack product',
  summary:
    'A web application and REST API for managing barbershop services and customer bookings.',
  problem:
    'Booking and service information needs one consistent workflow for customers and the people operating the barbershop.',
  product:
    'Xatruch separates the customer-facing React application from a Java REST API, keeping product presentation and business operations independently maintainable.',
  decisions: [
    'Split the client and API into focused repositories with an explicit HTTP boundary.',
    'Used TypeScript on the client to model interface states and request contracts.',
    'Kept booking and service behavior in the Java API instead of coupling it to the browser.',
  ],
  architecture: [
    'React and TypeScript web client',
    'Java REST API',
    'Resource-oriented client-to-server communication',
  ],
  constraints: [
    'Customer booking interactions need to remain clear on narrow screens.',
    'Client and API changes need stable contracts to evolve independently.',
  ],
  outcome:
    'A two-part product foundation covering the booking interface and the service-management API behind it.',
  technologies: ['React', 'TypeScript', 'Java', 'REST APIs'],
  thumbnail: {
    src: '/xatruch-mockup.png',
    alt: 'Xatruch barbershop landing page shown in a browser mockup',
    width: 960,
    height: 720,
  },
  links: [
    { label: 'View client', href: 'https://github.com/chrxsdev/xatruch-barbershop-client' },
    { label: 'View API', href: 'https://github.com/chrxsdev/xatruch-barbershop-rest-api' },
  ],
  featured: true,
} satisfies Project;
