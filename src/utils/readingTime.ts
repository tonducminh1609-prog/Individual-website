export interface ReadTimeInfo {
  words: number;
  minutes: number;
  badge: string;
  label: string;
  status: 'short' | 'perfect' | 'long';
}

/**
 * Calculates word count and reading time for Vietnamese and English text.
 * Standard editorial reading rate: 200 - 220 words per minute.
 */
export function calculateReadTime(text: string = '', lang: 'en' | 'vi' = 'vi'): ReadTimeInfo {
  // Strip markdown image tags, link URLs, and formatting markers for accurate word count
  const cleanText = text
    .replace(/!\[.*?\]\(.*?\)/g, '') // remove ![caption](url)
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // remove [text](url) -> text
    .replace(/[#*`_>~-]/g, ' ') // remove markdown syntax
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) {
    return {
      words: 0,
      minutes: 1,
      badge: lang === 'vi' ? '1 phút đọc' : '1 min read',
      label: lang === 'vi' ? '0 từ • ~1 phút đọc' : '0 words • ~1 min read',
      status: 'short',
    };
  }

  // Count words
  const words = cleanText.split(/\s+/).filter((w) => w.length > 0).length;
  
  // Rate: 200 wpm
  const rawMinutes = words / 200;
  const minutes = Math.max(1, Math.round(rawMinutes) || 1);

  let status: 'short' | 'perfect' | 'long' = 'perfect';
  if (words < 120) {
    status = 'short';
  } else if (words > 360) {
    status = 'long';
  } else {
    status = 'perfect';
  }

  const badge = lang === 'vi' ? `${minutes} phút đọc` : `${minutes} min read`;
  const label = lang === 'vi' ? `${words} từ • ~${minutes} phút đọc` : `${words} words • ~${minutes} min read`;

  return {
    words,
    minutes,
    badge,
    label,
    status,
  };
}
