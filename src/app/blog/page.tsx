import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on product engineering, frontend architecture, AI-assisted development, and systems.',
};

export default function BlogPage() {
  return (
    <main id='main-content' className='site-shell listing-page'>
      <header className='page-intro'>
        <p className='eyebrow font-mono'>Writing / In progress</p>
        <h1>Notes from building and learning.</h1>
        <p>
          Longer-form writing on product engineering, interface architecture, AI-enabled workflows, and systems is being prepared.
        </p>
      </header>
      {posts.length > 0 ? (
        <ol className='post-list'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <span>{post.title}</span>
                <span className='font-mono'>{post.readingTime}</span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div className='writing-note'>
          <p className='font-mono'>No published notes yet.</p>
          <Link href='/'>Return to the portfolio &#8594;</Link>
        </div>
      )}
    </main>
  );
}
