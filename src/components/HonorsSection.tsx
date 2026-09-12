import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { PlusCircle, Trophy, Medal, Sparkles } from 'lucide-react';

interface HonorsSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const HonorsSection: React.FC<HonorsSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const honorsPosts = posts
    .filter((p) => p.section === 'honors')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              {lang === 'vi' ? 'Thành Tích & Giải Thưởng Học Thuật' : 'Academic Honors & International Awards'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Giải Thưởng & Bằng Khen' : 'Honors & Awards'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Tổng hợp các giải thưởng sáng chế quốc tế (JDIE Nhật Bản, ICPC Hàn Quốc, ICAN Canada, AIJAM Thung lũng Silicon) và Olympic Hóa học (ICQ Úc, C3L Cambridge, UKChO Anh, HSG TP Hà Nội).'
                : 'International invention medals (JDIE Japan, ICPC Korea, ICAN Canada, AIJAM USA) and prestigious Chemistry Olympiad honors (RACI ICQ, Cambridge C3L, RSC UKChO, Hanoi City Olympiad).'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Up Bằng Khen / Giải Thưởng' : 'Add Honor Entry'}</span>
          </button>
        </div>

        {/* Highlight Grid of Key Awards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 text-center">
            <span className="text-xs text-amber-800 font-medium block">1. JDIE 2025 Japan</span>
            <span className="text-sm font-extrabold text-amber-950 font-mono mt-0.5 block">
              {lang === 'vi' ? 'Giải Kép (Vàng & Sáng Chế XS)' : 'Double Award (Gold & Grand Award)'}
            </span>
          </div>
          <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 text-center">
            <span className="text-xs text-amber-800 font-medium block">2. ICPC 2026 Korea</span>
            <span className="text-sm font-extrabold text-amber-950 font-mono mt-0.5 block">
              {lang === 'vi' ? 'Huy Chương Vàng' : 'Gold Medal'}
            </span>
          </div>
          <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 text-center">
            <span className="text-xs text-amber-800 font-medium block">3. ICAN 2026 Canada</span>
            <span className="text-sm font-extrabold text-amber-950 font-mono mt-0.5 block">
              {lang === 'vi' ? 'Huy Chương Vàng & Giải ĐB' : 'Gold Medal & Special Award'}
            </span>
          </div>
          <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/80 text-center">
            <span className="text-xs text-amber-800 font-medium block">4. AIJAM 2026 USA</span>
            <span className="text-sm font-extrabold text-amber-950 font-mono mt-0.5 block">
              {lang === 'vi' ? 'Huy Chương Vàng' : 'Gold Award'}
            </span>
          </div>
        </div>
      </div>

      {/* Honors Cards Grid */}
      <div>
        {honorsPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có giải thưởng nào. Hãy bấm "Up Bằng Khen / Giải Thưởng" để thêm!' : 'No honor entries added yet. Click "Add Honor Entry" to upload one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honorsPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onViewPost={onViewPost}
                onEditPost={onEditPost}
                onDeletePost={onDeletePost}
                lang={lang}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
