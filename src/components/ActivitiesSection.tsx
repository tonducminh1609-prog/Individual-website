import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { Activity, PlusCircle, Users, Sparkles, Heart } from 'lucide-react';

interface ActivitiesSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const activityPosts = posts
    .filter((p) => p.section === 'activities')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-teal-600" />
              {lang === 'vi' ? 'Hoạt Động Ngoại Khóa & Lãnh Đạo (ECA)' : 'Extracurricular Activities & Leadership (ECA)'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Hoạt Động Ngoại Khóa (ECA)' : 'Extracurricular Activities (ECA)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Sáng lập và điều hành các dự án giáo dục STEM (CodeFuture Vietnam), hỗ trợ sức khỏe tinh thần người cao tuổi (Dưỡng Tâm), truyền thông di sản trên TikTok, diễn giả High School Help Kit và CLB Thiên văn Amstronomy.'
                : 'Founding and leading STEM initiatives (CodeFuture Vietnam), elder care mental health projects (Duong Tam), heritage TikTok outreach, High School Help Kit speaking, and Amstronomy Club.'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Thêm Hoạt Động Ngoại Khóa' : 'Add ECA Entry'}</span>
          </button>
        </div>

        {/* 5 ECA Key Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-center">
            <span className="text-[11px] text-teal-700 font-bold block">1. CodeFuture VN</span>
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {lang === 'vi' ? 'Đồng Sáng Lập' : 'Co-Founder'}
            </span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-center">
            <span className="text-[11px] text-teal-700 font-bold block">
              {lang === 'vi' ? '2. Dưỡng Tâm' : '2. Duong Tam'}
            </span>
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {lang === 'vi' ? 'Vận Hành & MC' : 'Head of Ops & MC'}
            </span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-center">
            <span className="text-[11px] text-teal-700 font-bold block">
              {lang === 'vi' ? '3. TikTok Làng Nghề' : '3. Craft TikTok'}
            </span>
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {lang === 'vi' ? 'Đồng Sáng Lập' : 'Co-Founder / Creator'}
            </span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-center">
            <span className="text-[11px] text-teal-700 font-bold block">4. HSHK</span>
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {lang === 'vi' ? 'Diễn Giả' : 'Guest Speaker'}
            </span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 text-center col-span-2 sm:col-span-1">
            <span className="text-[11px] text-teal-700 font-bold block">5. Amstronomy Club</span>
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {lang === 'vi' ? 'Ban Nhân Sự' : 'HR Member'}
            </span>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div>
        {activityPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có hoạt động ngoại khóa nào. Bấm "Thêm Hoạt Động Ngoại Khóa" để tạo mới!' : 'No activities listed yet. Click "Add ECA Entry" to upload one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activityPosts.map((post) => (
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
