import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { BookOpen, PlusCircle, Microscope, FlaskConical, FileCheck } from 'lucide-react';

interface ResearchSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const researchPosts = posts
    .filter((p) => p.section === 'research')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-teal-600" />
              {lang === 'vi' ? 'Nghiên Cứu Khoa Học & Bài Báo Công Bố' : 'Academic Research & Peer-Reviewed Publications'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Nghiên Cứu Khoa Học' : 'Scientific Research'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Công trình nghiên cứu công bố trên tạp chí khoa học SASD về tích tụ kim loại vết trên vi nhựa qua màng sinh học biofilms, và các đề tài xúc tác môi trường tiên tiến.'
                : 'Published research in SASD on biofilm-mediated trace metal accumulation on microplastics in sediment, and ongoing studies in environmental catalysis.'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Thêm Đề Tài Nghiên Cứu' : 'Add Research Entry'}</span>
          </button>
        </div>

        {/* Featured Paper Status Badge */}
        <div className="mt-6 p-4 bg-teal-50/80 border border-teal-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-teal-700 text-white rounded-xl shadow-xs mt-0.5 sm:mt-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-teal-900 block">
                {lang === 'vi' ? 'Bài Báo Khoa Học Đã Công Bố • Tạp Chí SASD' : 'Published Paper • SASD Journal'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                {lang === 'vi'
                  ? 'Nghiên cứu sự tích tụ kim loại vết trên vi nhựa qua trung gian màng sinh học (biofilms) trong mẫu trầm tích và đánh giá rủi ro môi trường'
                  : 'Investigated trace metal accumulation on microplastics mediated by biofilms in sediment samples and assessed associated environmental risks'}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                {lang === 'vi'
                  ? 'Cố vấn hướng dẫn: ThS. Mai Văn Phong, Trường Đại học Bách khoa Hà Nội (HUST)'
                  : 'Mentor: Mai Van Phong, Hanoi University of Science and Technology (HUST)'}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-teal-700 text-white font-mono text-xs font-bold rounded-lg shrink-0">
            {lang === 'vi' ? 'Đã Công Bố SASD' : 'Published in SASD'}
          </span>
        </div>
      </div>

      {/* Posts List */}
      <div>
        {researchPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có đề tài nghiên cứu nào. Bấm "Thêm Đề Tài Nghiên Cứu" để tạo mới!' : 'No research entries found. Click "Add Research Entry" to create one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPosts.map((post) => (
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
