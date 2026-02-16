export interface ArticleSection {
  title: string;
  content: string;
}

/**
 * Parses HTML content and splits it into sections by h2 headings.
 * Each section contains the h2 title and all content until the next h2.
 */
export function parseArticleSections(html: string): ArticleSection[] {
  if (!html?.trim()) return [];

  const parts = html.split(/(?=<h2)/i);
  const sections: ArticleSection[] = [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    if (match) {
      const title = match[1].replace(/<[^>]+>/g, '').trim();
      const content = trimmed.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();
      if (title && content) {
        sections.push({ title, content });
      }
    }
  }

  if (sections.length === 0 && html.trim()) {
    return [{ title: '', content: html.trim() }];
  }
  return sections;
}
