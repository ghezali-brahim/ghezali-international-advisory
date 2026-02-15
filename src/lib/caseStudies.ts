import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content', 'case-studies');

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  country?: string;
  sector?: string;
  premium: boolean;
  date?: string;
  content: string;
  image?: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '');
}

export function getAllCaseStudies(): CaseStudy[] {
  try {
    if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
    const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith('.md'));
    const studies: CaseStudy[] = files.map((filename) => {
      const fullPath = path.join(CASE_STUDIES_DIR, filename);
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || getSlugFromFilename(filename);
      return {
        slug,
        title: (data.title as string) || 'Sans titre',
        summary: (data.summary as string) || (data.description as string) || '',
        country: data.country as string | undefined,
        sector: data.sector as string | undefined,
        premium: Boolean(data.premium),
        date: data.date as string | undefined,
        content,
        image: data.image as string | undefined,
      };
    });
    return studies.sort((a, b) => {
      const dA = a.date || '';
      const dB = b.date || '';
      return dB.localeCompare(dA);
    });
  } catch {
    return [];
  }
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const studies = getAllCaseStudies();
  return studies.find((s) => s.slug === slug) ?? null;
}

export function getPremiumCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((s) => s.premium);
}

export function getAllCaseStudySlugs(): string[] {
  return getAllCaseStudies().map((s) => s.slug);
}
