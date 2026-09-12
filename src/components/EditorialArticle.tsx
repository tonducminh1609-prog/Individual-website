import React, { useState } from 'react';
import { PortfolioPost, PostImage, getPostTitle, getPostSubtitle, getPostRole, getPostDate, getPostLocation, getPostContent, getPostSummary, getPostTags, getPostMetrics } from '../types';
import { calculateReadTime } from '../utils/readingTime';
import { Clock, Calendar, MapPin, Tag, Building, Share2, Copy, Check, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, BookOpen, Quote, Lightbulb, FlaskConical, Type } from 'lucide-react';

interface EditorialArticleProps {
  post: PortfolioPost;
  lang: 'en' | 'vi';
  showControls?: boolean;
  onEditPost?: (post: PortfolioPost) => void;
}

export const EditorialArticle: React.FC<EditorialArticleProps> = ({
  post,
  lang,
  showControls = true,
  onEditPost,
}) => {
  const [copied, setCopied] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [lightboxImg, setLightboxImg] = useState<PostImage | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const postTitle = getPostTitle(post, lang);
  const postSubtitle = getPostSubtitle(post, lang);
  const postRole = getPostRole(post, lang);
  const postDate = getPostDate(post, lang);
  const postLocation = getPostLocation(post, lang);
  const postSummary = getPostSummary(post, lang);
  const postContent = getPostContent(post, lang);
  const postTags = getPostTags(post, lang);
  const postMetrics = getPostMetrics(post, lang);
  const images = post.images || [];

  const readTime = calculateReadTime(postContent || postSummary, lang);

  const handleCopyText = () => {
    const fullText = `${postTitle}\n\n${postSubtitle || ''}\n\n${postSummary}\n\n${postContent}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSectionCategoryName = (section: string) => {
    switch (section) {
      case 'about':
        return lang === 'vi' ? 'Tiêu Điểm Cá Nhân & Di Sản' : 'Personal Spotlight & Heritage';
      case 'honors':
        return lang === 'vi' ? 'Hồ Sơ Thành Tích & Giải Thưởng' : 'Awards & Recognition Dossier';
      case 'projects':
        return lang === 'vi' ? 'Sản Phẩm & Dự Án Sáng Chế' : 'Innovations & Applied Projects';
      case 'research':
        return lang === 'vi' ? 'Công Trình Nghiên Cứu Khoa Học' : 'Scientific Research & Publications';
      case 'activities':
        return lang === 'vi' ? 'Hoạt Động Ngoại Khóa & Lãnh Đạo' : 'Extracurricular & Leadership';
      case 'volunteer':
        return lang === 'vi' ? 'Dự Án Phụng Sự Cộng Đồng' : 'Community Service & Volunteering';
      case 'experience':
        return lang === 'vi' ? 'Kinh Nghiệm Thực Tập & Phòng Lab' : 'Internship & Laboratory Work';
      default:
        return lang === 'vi' ? 'Bài Báo Đặc Biệt' : 'Special Feature';
    }
  };

  // Font size multiplier
  const getFontSizeClasses = () => {
    switch (fontSizeLevel) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-xl leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  /**
   * Custom parser for newspaper editorial markdown
   * Supports:
   * - ![caption | credit](url) -> Newspaper photo figure
   * - > 💡 **...** -> Callout Highlight Box
   * - > 🧪 **...** -> Experimental Science Box
   * - > "..." -> Editorial Pull Quote
   * - ## Subheading -> News Subhead
   * - Normal markdown formatting
   */
  const renderFormattedArticleContent = (content: string) => {
    if (!content) return null;

    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let keyIdx = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <p key={`p-${keyIdx++}`} className="text-slate-700 font-serif sm:font-sans font-normal leading-relaxed text-justify mb-4">
              {renderInlineSpans(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const renderInlineSpans = (text: string) => {
      // Split and parse bold, italic, code
      const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
      return parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={pIdx} className="italic text-slate-800">{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={pIdx} className="px-1.5 py-0.5 bg-slate-100 text-teal-800 font-mono text-xs rounded">{part.slice(1, -1)}</code>;
        }
        return part;
      });
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // 1. Check for inline Markdown Image: ![caption | credit](url)
      const imgMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        flushParagraph();
        const captionRaw = imgMatch[1] || '';
        const imgUrl = imgMatch[2] || '';
        const captionParts = captionRaw.split('|').map((s) => s.trim());
        const caption = captionParts[0] || '';
        const credit = captionParts[1] || (lang === 'vi' ? 'Ảnh: Tôn Đức Minh / Lưu trữ dự án' : 'Photo: Ton Duc Minh / Project Archive');

        elements.push(
          <figure key={`fig-${keyIdx++}`} className="my-6 bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs group">
            <div className="relative overflow-hidden bg-slate-900 aspect-[16/9] flex items-center justify-center">
              <img
                src={imgUrl}
                alt={caption}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 cursor-pointer"
                onClick={() => setLightboxImg({ id: `img-${keyIdx}`, url: imgUrl, caption })}
              />
              <button
                onClick={() => setLightboxImg({ id: `img-${keyIdx}`, url: imgUrl, caption })}
                className="absolute top-3 right-3 p-1.5 bg-slate-900/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition backdrop-blur-xs flex items-center gap-1 text-xs"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Xem ảnh lớn' : 'Enlarge'}</span>
              </button>
            </div>
            {(caption || credit) && (
              <figcaption className="p-3 sm:p-4 bg-slate-50/90 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-600">
                <span className="font-medium text-slate-800 flex items-start gap-1.5">
                  <span className="font-bold text-teal-800 uppercase tracking-wider shrink-0 text-[10px] bg-teal-100/70 px-1.5 py-0.5 rounded">
                    {lang === 'vi' ? 'Hình ảnh' : 'Figure'}
                  </span>
                  {caption}
                </span>
                <span className="text-[11px] text-slate-400 italic shrink-0">
                  {credit}
                </span>
              </figcaption>
            )}
          </figure>
        );
        continue;
      }

      // 2. Check for Subheadings: ## or ###
      if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) {
        flushParagraph();
        const headingText = line.replace(/^#+\s*/, '');
        elements.push(
          <div key={`h-${keyIdx++}`} className="pt-4 pb-2 my-2 border-b border-slate-100">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-teal-600 rounded-full inline-block"></span>
              {headingText}
            </h3>
          </div>
        );
        continue;
      }

      // 3. Check for Callouts / Highlight Box: > 💡 or > 🧪 or > [!NOTE]
      if (line.startsWith('> 💡') || line.startsWith('> 🧪') || line.startsWith('> 📌') || line.startsWith('> ⚠️')) {
        flushParagraph();
        const cleanContent = line.replace(/^>\s*/, '');
        const isScience = line.startsWith('> 🧪');
        elements.push(
          <div
            key={`callout-${keyIdx++}`}
            className={`my-4 p-4 rounded-2xl border ${
              isScience
                ? 'bg-cyan-50/70 border-cyan-200 text-cyan-950'
                : 'bg-amber-50/70 border-amber-200 text-amber-950'
            } shadow-2xs`}
          >
            <div className="flex items-start gap-3">
              {isScience ? (
                <FlaskConical className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
              ) : (
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div className="text-xs sm:text-sm leading-relaxed">
                {renderInlineSpans(cleanContent)}
              </div>
            </div>
          </div>
        );
        continue;
      }

      // 4. Check for Editorial Pull Quote: > "..."
      if (line.startsWith('>')) {
        flushParagraph();
        const quoteText = line.replace(/^>\s*/, '').replace(/^["“”]/, '').replace(/["“”]$/, '');
        elements.push(
          <div key={`quote-${keyIdx++}`} className="my-6 px-6 py-4 bg-slate-50 border-l-4 border-teal-600 rounded-r-2xl relative">
            <Quote className="w-8 h-8 text-teal-200 absolute top-2 right-3 -scale-x-100 opacity-60" />
            <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-snug relative z-10">
              "{quoteText}"
            </p>
            <span className="text-[11px] uppercase tracking-wider font-bold text-teal-800 mt-2 block">
              — {lang === 'vi' ? 'Ghi chú phỏng vấn / Chia sẻ tác giả' : 'Interview Note / Author Statement'}
            </span>
          </div>
        );
        continue;
      }

      // 5. Bullet or numbered lists
      if (line.match(/^(\d+\.|\-|\*)\s+/)) {
        flushParagraph();
        const listContent = line.replace(/^(\d+\.|\-|\*)\s+/, '');
        elements.push(
          <div key={`li-${keyIdx++}`} className="flex items-start gap-2.5 my-1.5 pl-2 text-slate-700 text-sm">
            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 shrink-0"></span>
            <span className="leading-relaxed">{renderInlineSpans(listContent)}</span>
          </div>
        );
        continue;
      }

      // Empty line -> paragraph separator
      if (!line) {
        flushParagraph();
        continue;
      }

      // Regular line -> buffer to paragraph
      currentParagraph.push(line);
    }

    flushParagraph();
    return elements;
  };

  return (
    <article className="bg-white text-slate-900 rounded-3xl overflow-hidden font-sans">
      
      {/* 1. Masthead / Kicker & Controls Bar */}
      <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md">
            {getSectionCategoryName(post.section)}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
            <Clock className="w-3 h-3 text-amber-600" />
            {readTime.badge} ({readTime.words} {lang === 'vi' ? 'từ' : 'words'})
          </span>
          {post.isHighlighted && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3 text-amber-500" />
              {lang === 'vi' ? 'Tiêu điểm' : 'Featured'}
            </span>
          )}
        </div>

        {/* Reader Utility Toolbar */}
        {showControls && (
          <div className="flex items-center gap-2">
            {/* Font size control */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs text-slate-600">
              <button
                onClick={() => setFontSizeLevel('normal')}
                className={`px-2 py-1 rounded font-medium transition ${
                  fontSizeLevel === 'normal' ? 'bg-teal-700 text-white font-bold' : 'hover:bg-slate-100'
                }`}
                title="Cỡ chữ chuẩn (Normal)"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                className={`px-2 py-1 rounded font-medium transition text-sm ${
                  fontSizeLevel === 'large' ? 'bg-teal-700 text-white font-bold' : 'hover:bg-slate-100'
                }`}
                title="Cỡ chữ lớn (Large)"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                className={`px-2 py-1 rounded font-medium transition text-base ${
                  fontSizeLevel === 'xlarge' ? 'bg-teal-700 text-white font-bold' : 'hover:bg-slate-100'
                }`}
                title="Cỡ chữ rất lớn (X-Large)"
              >
                A++
              </button>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg transition flex items-center gap-1 shadow-2xs"
              title="Sao chép toàn bộ bài viết"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? (lang === 'vi' ? 'Đã sao chép' : 'Copied') : (lang === 'vi' ? 'Sao chép bài' : 'Copy')}</span>
            </button>
          </div>
        )}
      </div>

      {/* 2. Main Article Container */}
      <div className="p-6 sm:p-10 space-y-6 max-w-4xl mx-auto">
        
        {/* Article Headline & Dek/Subtitle */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-serif sm:font-sans">
            {postTitle}
          </h1>

          {postSubtitle && (
            <p className="text-sm sm:text-lg text-slate-600 font-medium mt-2.5 leading-snug">
              {postSubtitle}
            </p>
          )}
        </div>

        {/* Byline & Publication Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-slate-200/80 bg-slate-50/40 px-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-teal-600/30 bg-teal-100 flex items-center justify-center shrink-0">
              <span className="font-bold text-teal-800 text-xs">TDM</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">
                  {lang === 'vi' ? 'Tác giả: Tôn Đức Minh' : 'By Ton Duc Minh'}
                </span>
                <span className="text-[10px] text-teal-700 bg-teal-100 font-bold px-1.5 py-0.2 rounded">
                  Hanoi-Ams
                </span>
              </div>
              <span className="text-[11px] text-slate-500 block">
                {postRole || (lang === 'vi' ? 'Chuyên Hóa 1 • THPT Chuyên Hà Nội - Amsterdam' : 'Senior Chemistry • Hanoi - Amsterdam HS')}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium">
            {postDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {postDate}
              </span>
            )}
            {postLocation && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {postLocation}
              </span>
            )}
          </div>
        </div>

        {/* 3. Editorial Sapo / Lead Paragraph (Lời dẫn đầu bài) */}
        {postSummary && (
          <div className="p-4 sm:p-5 bg-teal-900 text-white rounded-2xl shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-700/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-teal-300 block mb-1">
                  {lang === 'vi' ? 'Tóm Tắt Nhanh (1-Min Sapo)' : '1-Min Editorial Lead'}
                </span>
                <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-teal-50">
                  {postSummary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. Primary Hero Photo / Cover Image (if present) */}
        {images.length > 0 && (
          <figure className="my-6 bg-slate-900 rounded-2xl overflow-hidden shadow-md group relative">
            <div className="aspect-[16/9] overflow-hidden flex items-center justify-center">
              <img
                src={images[activeGalleryIndex]?.url || images[0].url}
                alt={images[activeGalleryIndex]?.caption || postTitle}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 cursor-pointer"
                onClick={() => setLightboxImg(images[activeGalleryIndex] || images[0])}
              />
            </div>

            {/* Carousel navigation if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveGalleryIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition backdrop-blur-xs shadow-md"
                  title="Ảnh trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveGalleryIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition backdrop-blur-xs shadow-md"
                  title="Ảnh sau"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Caption */}
            <figcaption className="p-3.5 bg-slate-900/95 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs border-t border-slate-800">
              <span className="text-slate-200">
                <strong className="text-teal-400 mr-2">
                  [Ảnh {activeGalleryIndex + 1}/{images.length}]:
                </strong>
                {images[activeGalleryIndex]?.caption || postTitle}
              </span>
              <button
                onClick={() => setLightboxImg(images[activeGalleryIndex] || images[0])}
                className="text-[11px] text-teal-300 hover:text-teal-200 font-semibold flex items-center gap-1 shrink-0"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                {lang === 'vi' ? 'Xem toàn cảnh' : 'Fullscreen'}
              </button>
            </figcaption>
          </figure>
        )}

        {/* 5. Key Impact Metrics (if present) */}
        {postMetrics && postMetrics.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200/90 rounded-2xl shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-teal-700" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                {lang === 'vi' ? 'Số Liệu Then Chốt / Thông Số Dự Án' : 'Key Metrics & Data'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {postMetrics.map((m, idx) => {
                const isPlaceholder =
                  m.value === '--' ||
                  m.value.startsWith('[') ||
                  m.value.toLowerCase().includes('bổ sung') ||
                  m.value.toLowerCase().includes('updated') ||
                  m.value.toLowerCase().includes('pending');

                return (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/70 text-center flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-500 block line-clamp-1">
                      {m.label}
                    </span>
                    {isPlaceholder ? (
                      <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-dashed border-amber-300 rounded px-1.5 py-0.5 mt-1 block italic">
                        {m.value}
                      </span>
                    ) : (
                      <span className="text-base sm:text-lg font-extrabold text-slate-900 font-mono mt-0.5 block">
                        {m.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 6. Formatted Article Body */}
        <div className={`article-body prose max-w-none text-slate-800 ${getFontSizeClasses()}`}>
          {renderFormattedArticleContent(postContent)}
        </div>

        {/* 7. Tags & Article Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" /> Tags:
            </span>
            {postTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-600 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 px-2.5 py-1 rounded-md transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span className="text-xs text-slate-400 italic">
            {lang === 'vi' ? 'Hồ sơ nghiên cứu Tôn Đức Minh • THPT Chuyên Hà Nội - Amsterdam' : 'Ton Duc Minh Chemistry Portfolio • Hanoi - Amsterdam HS'}
          </span>
        </div>
      </div>

      {/* Lightbox Modal for Photo Zoom */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 p-2 text-slate-300 hover:text-white rounded-full bg-slate-800/80 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg.url}
              alt={lightboxImg.caption || 'Enlarged view'}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            {lightboxImg.caption && (
              <p className="text-white text-xs sm:text-sm font-medium mt-3 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800 text-center max-w-2xl">
                {lightboxImg.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
