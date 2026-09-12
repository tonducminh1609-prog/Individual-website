export type SectionType = 'about' | 'honors' | 'projects' | 'research' | 'activities' | 'volunteer' | 'experience';

export interface PostImage {
  id: string;
  url: string;
  caption?: string;
  isMain?: boolean;
}

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface PortfolioPost {
  id: string;
  section: SectionType;
  // Bilingual Content Fields
  titleEn?: string;
  titleVi?: string;
  subtitleEn?: string;
  subtitleVi?: string;
  roleOrOrganizationEn?: string;
  roleOrOrganizationVi?: string;
  dateRangeEn?: string;
  dateRangeVi?: string;
  locationEn?: string;
  locationVi?: string;
  summaryEn?: string;
  summaryVi?: string;
  contentEn?: string;
  contentVi?: string;
  tagsEn?: string[];
  tagsVi?: string[];
  impactMetricsEn?: ImpactMetric[];
  impactMetricsVi?: ImpactMetric[];

  // Fallbacks / Direct Fields
  title: string;
  subtitle?: string;
  roleOrOrganization?: string;
  dateRange: string;
  location?: string;
  summary: string;
  content: string; // Markdown / multiline article text
  images: PostImage[];
  tags: string[];
  impactMetrics?: ImpactMetric[];
  isHighlighted?: boolean;
  order?: number;
  externalLink?: string;
  createdDate: string;
}

export function getPostTitle(post: PortfolioPost, lang: 'en' | 'vi'): string {
  if (lang === 'vi') return post.titleVi || post.title || post.titleEn || '';
  return post.titleEn || post.title || post.titleVi || '';
}

export function getPostSubtitle(post: PortfolioPost, lang: 'en' | 'vi'): string | undefined {
  if (lang === 'vi') return post.subtitleVi || post.subtitle || post.subtitleEn;
  return post.subtitleEn || post.subtitle || post.subtitleVi;
}

export function getPostRole(post: PortfolioPost, lang: 'en' | 'vi'): string | undefined {
  if (lang === 'vi') return post.roleOrOrganizationVi || post.roleOrOrganization || post.roleOrOrganizationEn;
  return post.roleOrOrganizationEn || post.roleOrOrganization || post.roleOrOrganizationVi;
}

export function getPostDate(post: PortfolioPost, lang: 'en' | 'vi'): string {
  if (lang === 'vi') return post.dateRangeVi || post.dateRange || post.dateRangeEn || '';
  return post.dateRangeEn || post.dateRange || post.dateRangeVi || '';
}

export function getPostLocation(post: PortfolioPost, lang: 'en' | 'vi'): string | undefined {
  if (lang === 'vi') return post.locationVi || post.location || post.locationEn;
  return post.locationEn || post.location || post.locationVi;
}

export function getPostSummary(post: PortfolioPost, lang: 'en' | 'vi'): string {
  if (lang === 'vi') return post.summaryVi || post.summary || post.summaryEn || '';
  return post.summaryEn || post.summary || post.summaryVi || '';
}

export function getPostContent(post: PortfolioPost, lang: 'en' | 'vi'): string {
  if (lang === 'vi') return post.contentVi || post.content || post.contentEn || '';
  return post.contentEn || post.content || post.contentVi || '';
}

export function getPostTags(post: PortfolioPost, lang: 'en' | 'vi'): string[] {
  if (lang === 'vi' && post.tagsVi && post.tagsVi.length > 0) return post.tagsVi;
  if (lang === 'en' && post.tagsEn && post.tagsEn.length > 0) return post.tagsEn;
  return post.tags || post.tagsEn || post.tagsVi || [];
}

export function getPostMetrics(post: PortfolioPost, lang: 'en' | 'vi'): ImpactMetric[] {
  if (lang === 'vi' && post.impactMetricsVi && post.impactMetricsVi.length > 0) return post.impactMetricsVi;
  if (lang === 'en' && post.impactMetricsEn && post.impactMetricsEn.length > 0) return post.impactMetricsEn;
  return post.impactMetrics || post.impactMetricsEn || post.impactMetricsVi || [];
}

export interface StudentProfile {
  name: string;
  fullNameVi: string;
  title: string;
  school: string;
  schoolVi: string;
  class: string;
  gpa?: string;
  satScore?: string;
  toeflIelts?: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  location: string;
  locationVi?: string;
  bioEn: string;
  bioVi: string;
  personalStatement: string;
  personalStatementEn?: string;
  personalStatementVi?: string;
  researchFocus: string[];
  researchFocusVi?: string[];
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    researchgate?: string;
  };
}

export interface Atom3D {
  element: string; // C, H, O, N, S
  x: number;
  y: number;
  z: number;
}

export interface Bond3D {
  from: number;
  to: number;
  order?: number; // 1 = single, 2 = double, 3 = triple
}

export interface Molecule3DData {
  id: string;
  name: string;
  formula: string;
  weight: string;
  description: string;
  relevanceToMinh: string;
  atoms: Atom3D[];
  bonds: Bond3D[];
}
