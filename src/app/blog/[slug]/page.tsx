import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts } from '@/content/posts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => posts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.description } : {};
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { default: Article } = await post.load();

  return (
    <main id='main-content' className='site-shell article-page'>
      <header>
        <p className='eyebrow font-mono'>
          {post.publishedAt} / {post.readingTime}
        </p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </header>
      <article className='prose'>
        <Article />
      </article>
    </main>
  );
}
