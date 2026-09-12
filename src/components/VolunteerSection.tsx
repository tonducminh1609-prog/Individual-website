import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { HeartHandshake, PlusCircle, Heart, Users, MapPin } from 'lucide-react';

interface VolunteerSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const volunteerPosts = posts
    .filter((p) => p.section === 'volunteer')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-teal-600" />
              {lang === 'vi' ? 'Hoạt Động Tình Nguyện & Phụng Sự Cộng Đồng' : 'Community Service & Volunteer Initiatives'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Tình Nguyện Cộng Đồng' : 'Volunteer & Community Service'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Các chương trình thiện nguyện nhân ái: C.A.R.E kết nối du học sinh, hỗ trợ bệnh nhi Bệnh viện Nhi Trung ương, tình nguyện vùng cao Đông Ấm 2025 (Tuyên Quang) và Làng trẻ em SOS Hải Phòng.'
                : 'Community outreach initiatives: C.A.R.E Vietnam-Singapore, National Children’s Hospital support, Warm Winter 2025 in Lao Chai (Tuyen Quang), and SOS Children’s Village Hai Phong.'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Thêm Hoạt Động Tình Nguyện' : 'Add Volunteer Entry'}</span>
          </button>
        </div>

        {/* 4 Volunteer Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-200/70 text-center">
            <span className="text-xs text-rose-800 font-bold block">1. C.A.R.E Initiative</span>
            <span className="text-[11px] text-slate-600 mt-0.5 block">
              {lang === 'vi' ? '11/2024 (VN & Singapore)' : 'Nov 2024 (VN & Singapore)'}
            </span>
          </div>
          <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-200/70 text-center">
            <span className="text-xs text-rose-800 font-bold block">
              {lang === 'vi' ? '2. BV Nhi Trung ương' : "2. Children's Hospital"}
            </span>
            <span className="text-[11px] text-slate-600 mt-0.5 block">
              {lang === 'vi' ? 'Hỗ trợ bệnh nhi khiếm thính' : 'Pediatric hearing surgery aid'}
            </span>
          </div>
          <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-200/70 text-center">
            <span className="text-xs text-rose-800 font-bold block">
              {lang === 'vi' ? '3. Đông Ấm 2025' : '3. Warm Winter 2025'}
            </span>
            <span className="text-[11px] text-slate-600 mt-0.5 block">
              {lang === 'vi' ? 'Xã Lao Chải, Tuyên Quang' : 'Lao Chai, Tuyen Quang'}
            </span>
          </div>
          <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-200/70 text-center">
            <span className="text-xs text-rose-800 font-bold block">
              {lang === 'vi' ? '4. Làng Trẻ SOS' : '4. SOS Children’s Village'}
            </span>
            <span className="text-[11px] text-slate-600 mt-0.5 block">
              {lang === 'vi' ? 'SOS Hải Phòng (05/2026)' : 'SOS Hai Phong (May 2026)'}
            </span>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div>
        {volunteerPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có hoạt động tình nguyện nào. Bấm "Thêm Hoạt Động Tình Nguyện" để thêm!' : 'No volunteer entries added yet. Click "Add Volunteer Entry" to create one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerPosts.map((post) => (
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
