import type { ComponentType } from 'react';
import type { PostMetadata } from '@/types/content';

export interface Post extends PostMetadata {
  load: () => Promise<{ default: ComponentType }>;
}

// Register local MDX files here when writing is published.
export const posts: Post[] = [];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
