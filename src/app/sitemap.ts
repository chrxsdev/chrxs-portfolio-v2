import type { MetadataRoute } from 'next';
import { projects } from '@content/projects';
import { posts } from '@/content/posts';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/blog`, changeFrequency: 'monthly', priority: 0.5 },
    ...projectRoutes,
    ...postRoutes,
  ];
}
