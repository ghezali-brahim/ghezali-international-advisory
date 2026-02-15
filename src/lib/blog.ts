import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image: string;
  readTime?: string;
  tags?: string[];
  content: string;
  featured?: boolean;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '');
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOG_DIR)) return [];
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
    const posts: BlogPost[] = files.map((filename) => {
      const fullPath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || getSlugFromFilename(filename);
      return {
        slug,
        title: (data.title as string) || 'Sans titre',
        description: (data.description as string) || '',
        date: (data.date as string) || '',
        category: (data.category as string) || 'Article',
        author: (data.author as string) || 'Ghezali International Advisory',
        image: (data.image as string) || '',
        readTime: data.readTime as string | undefined,
        tags: Array.isArray(data.tags) ? data.tags : [],
        content,
        featured: Boolean(data.featured),
      };
    });
    return posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
