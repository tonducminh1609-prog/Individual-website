import React from 'react';
import { PortfolioPost } from '../types';
import { PostCard } from './PostCard';
import { Lightbulb, PlusCircle, Compass, FlaskConical, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  lang: 'en' | 'vi';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  lang,
}) => {
  const projectPosts = posts
    .filter((p) => p.section === 'projects')
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Section Header Banner */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-teal-600" />
              {lang === 'vi' ? 'Sản Phẩm & Dự Án Sáng Chế' : 'Products, Innovations & Applied Projects'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              {lang === 'vi' ? 'Sản Phẩm & Dự Án' : 'Products & Projects'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'vi'
                ? 'Dự án liên ngành kết nối hóa học và văn hóa di sản (Invisible Traces), nghiên cứu vật liệu quang xúc tác xử lý nước thải (ZnO-g/C3N4) và vật liệu tổ hợp hấp phụ (HAP/PANI).'
                : 'Interdisciplinary heritage-chemistry initiatives (Invisible Traces), photocatalytic dye degradation materials (ZnO-g/C3N4), and HAP/PANI composite wastewater remediation.'}
            </p>
          </div>

          <button
            onClick={onOpenAddPost}
            className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{lang === 'vi' ? 'Thêm Dự Án / Sản Phẩm' : 'Add Project / Product'}</span>
          </button>
        </div>

        {/* Project Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
            <span className="text-xs text-teal-700 font-mono font-bold block">1. Invisible Traces</span>
            <p className="text-xs text-slate-700 font-semibold mt-1">
              {lang === 'vi' ? 'Sáng lập viên (09/2024 - Hiện tại)' : 'Founder (Sep 2024 - Present)'}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'vi' ? 'Hóa học & Nhiếp ảnh bảo tồn di sản văn hóa' : 'Chemistry & Photography for cultural heritage'}
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
            <span className="text-xs text-teal-700 font-mono font-bold block">2. ZnO-g/C3N4 Photocatalysis</span>
            <p className="text-xs text-slate-700 font-semibold mt-1">
              {lang === 'vi' ? 'Nghiên cứu viên (03/2026 - 06/2026)' : 'Developer (Mar - Jun 2026)'}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'vi' ? 'Xúc tác quang xử lý phẩm nhuộm nước thải (HUST)' : 'Photocatalytic dye degradation in wastewater (HUST)'}
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
            <span className="text-xs text-teal-700 font-mono font-bold block">3. HAP/PANI Composite</span>
            <p className="text-xs text-slate-700 font-semibold mt-1">
              {lang === 'vi' ? 'Nghiên cứu viên (07/2026 - 08/2026)' : 'Developer (Jul - Aug 2026)'}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {lang === 'vi' ? 'Vật liệu tổ hợp hấp phụ thuốc nhuộm (HNUE)' : 'Dye adsorption composite material (HNUE)'}
            </p>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div>
        {projectPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có dự án nào. Bấm "Thêm Dự Án / Sản Phẩm" để cập nhật!' : 'No projects listed yet. Click "Add Project / Product" to create one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectPosts.map((post) => (
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
