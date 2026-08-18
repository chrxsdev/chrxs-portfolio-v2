import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Sans } from 'next/font/google';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { site } from '@/content/site';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Software Engineer`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: ['Software Engineer', 'Product Engineering', 'Frontend Architecture', 'TypeScript', 'React'],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: `${site.shortName} | Software Engineer`,
    description: site.description,
    siteName: site.shortName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.shortName} | Software Engineer`,
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${instrumentSans.variable} ${geistMono.variable}`}>
      <body>
        <a className='skip-link' href='#main-content'>
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
