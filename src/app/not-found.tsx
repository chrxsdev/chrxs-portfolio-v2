import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main id='main-content' className='site-shell not-found'>
      <p className='eyebrow font-mono'>404 / Route not found</p>
      <h1>This path does not lead anywhere yet.</h1>
      <p>The portfolio is intentionally small. The page you requested may have moved or is still being documented.</p>
      <Link href='/'>Return home &#8594;</Link>
    </main>
  );
}
