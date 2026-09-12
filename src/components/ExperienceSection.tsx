import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { Briefcase, PlusCircle, Factory, FlaskConical, ShieldCheck } from 'lucide-react';

interface ExperienceSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const experiencePosts = posts
    .filter((p) => p.section === 'experience')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-teal-600" />
              {lang === 'vi' ? 'Kinh Nghiệm Làm Việc & Thực Tập Kỹ Thuật' : 'Work Experience & Industrial Internships'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Kinh Nghiệm Làm Việc' : 'Work Experience'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Thực tập kỹ thuật tại Công ty CP Supe Phốt phát & Hóa chất Lâm Thao (QC, an toàn hóa chất công nghiệp) và Trợ lý phòng thí nghiệm tại Khoa Hóa học ĐH Bách Khoa Hà Nội (HUST).'
                : 'Technical Internship at Lam Thao Fertilizers and Chemicals JSC (QC analysis, chemical safety protocols) and Lab Assistantship at HUST Chemistry Department.'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Thêm Kinh Nghiệm Làm Việc' : 'Add Work Experience'}</span>
          </button>
        </div>

        {/* 2 Roles Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-start gap-3">
            <div className="p-2 bg-teal-700 text-white rounded-xl">
              <Factory className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                {lang === 'vi' ? '1. Thực Tập Sinh Kỹ Thuật' : '1. Technical Intern'}
              </span>
              <span className="text-xs text-teal-700 font-semibold block">
                Lam Thao Fertilizers & Chemicals JSC
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === 'vi'
                  ? 'Kiểm soát chất lượng (QC) & quy trình an toàn hóa chất công nghiệp'
                  : 'QC analysis & industrial chemical safety protocols'}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-start gap-3">
            <div className="p-2 bg-teal-700 text-white rounded-xl">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                {lang === 'vi' ? '2. Trợ Lý Phòng Thí Nghiệm' : '2. Lab Assistant'}
              </span>
              <span className="text-xs text-teal-700 font-semibold block">
                {lang === 'vi' ? 'Khoa Hóa học, ĐH Bách Khoa Hà Nội (HUST)' : 'Chemistry Department, HUST'}
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === 'vi'
                  ? 'Thực nghiệm quang xúc tác & phân tích phổ UV-Vis động học'
                  : 'Photocatalysis experiments & UV-Vis kinetic analysis'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Posts Grid */}
      <div>
        {experiencePosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có kinh nghiệm làm việc nào. Bấm "Thêm Kinh Nghiệm Làm Việc" để thêm!' : 'No work experience listed yet. Click "Add Work Experience" to upload one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiencePosts.map((post) => (
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
