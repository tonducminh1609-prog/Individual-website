import React, { useState } from 'react';
import { PortfolioPost, StudentProfile } from '../types';
import { PostCard } from './PostCard';
import { GraduationCap, Award, BookOpen, Mail, MapPin, Sparkles, Atom, FileText, ExternalLink, ShieldCheck, Edit3, Check, X, Dumbbell, Music, Camera, Activity, Trophy, Heart } from 'lucide-react';

interface AboutSectionProps {
  profile: StudentProfile;
  posts: PortfolioPost[];
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  onOpenAddPost: () => void;
  onOpen3DInspector: () => void;
  onUpdateProfile: (updated: StudentProfile) => void;
  lang: 'en' | 'vi';
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  posts,
  onViewPost,
  onEditPost,
  onDeletePost,
  onOpenAddPost,
  onOpen3DInspector,
  onUpdateProfile,
  lang,
}) => {
  const aboutPosts = posts.filter((p) => p.section === 'about');

  // Editable Mission Statement
  const [isEditingStatement, setIsEditingStatement] = useState(false);
  const currentStatement = lang === 'vi'
    ? (profile.personalStatementVi || profile.personalStatement)
    : (profile.personalStatementEn || profile.personalStatement);

  const [statementText, setStatementText] = useState(currentStatement);

  React.useEffect(() => {
    setStatementText(lang === 'vi' ? (profile.personalStatementVi || profile.personalStatement) : (profile.personalStatementEn || profile.personalStatement));
  }, [lang, profile]);

  const handleSaveStatement = () => {
    if (lang === 'vi') {
      onUpdateProfile({
        ...profile,
        personalStatementVi: statementText,
        personalStatement: statementText,
      });
    } else {
      onUpdateProfile({
        ...profile,
        personalStatementEn: statementText,
        personalStatement: statementText,
      });
    }
    setIsEditingStatement(false);
  };

  const handleCancelStatement = () => {
    setStatementText(currentStatement);
    setIsEditingStatement(false);
  };

  const avatarSrc = profile.avatarUrl || "/student_avatar.jpg";
  const researchFocusList = (lang === 'vi' && profile.researchFocusVi && profile.researchFocusVi.length > 0)
    ? profile.researchFocusVi
    : profile.researchFocus;

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Hero Profile Card */}
      <div className="bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        
        {/* Background Subtle Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-50 to-slate-100 rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Avatar & Name Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-3xl font-extrabold shadow-md border-2 border-white ring-4 ring-slate-100/80 overflow-hidden relative">
                <img
                  src={avatarSrc}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-teal-600 text-white p-1.5 rounded-lg shadow-sm" title="Verified Candidate">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'vi' ? profile.fullNameVi : profile.name}
                </h2>
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-teal-200">
                  {profile.class}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-600 flex items-center gap-1.5 mb-2">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>{lang === 'vi' ? profile.schoolVi : profile.school}</span>
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1 text-teal-700 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Academic Badge */}
          <div className="w-full md:w-auto bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
              12H1
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                {lang === 'vi' ? 'THPT Chuyên' : 'Gifted High School'}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {lang === 'vi' ? 'Hà Nội - Amsterdam' : 'Hanoi - Amsterdam'}
              </span>
            </div>
          </div>
        </div>

        {/* Bio & Personal Statement */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                {lang === 'vi' ? 'Sứ mệnh & Định hướng US College' : 'US College Mission Statement'}
              </h3>
              {!isEditingStatement && (
                <button
                  onClick={() => setIsEditingStatement(true)}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 bg-teal-50 hover:bg-teal-100 px-2.5 py-1 rounded-lg border border-teal-200 transition"
                  title="Edit Mission Statement"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Sửa' : 'Edit'}</span>
                </button>
              )}
            </div>

            {isEditingStatement ? (
              <div className="space-y-3 bg-slate-50 p-3.5 rounded-2xl border border-teal-200">
                <textarea
                  value={statementText}
                  onChange={(e) => setStatementText(e.target.value)}
                  rows={4}
                  className="w-full text-sm text-slate-800 bg-white border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 font-normal leading-relaxed"
                  placeholder={lang === 'vi' ? 'Nhập nội dung Sứ mệnh & Định hướng US College...' : 'Enter US College Mission Statement...'}
                />
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={handleCancelStatement}
                    className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 transition"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Hủy' : 'Cancel'}</span>
                  </button>
                  <button
                    onClick={handleSaveStatement}
                    className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1 shadow-xs transition"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Lưu nội dung' : 'Save Statement'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {currentStatement}
              </p>
            )}
          </div>

          {/* Research Focus Chips */}
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 block">
              {lang === 'vi' ? 'Lĩnh vực Nghiên cứu Chính' : 'Primary Research Focus'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {researchFocusList.map((focus, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                >
                  • {focus}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Chemistry Interactive Callout Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-xl border border-teal-500/30">
              <Atom className="w-6 h-6 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'vi' ? 'Phân Tử Hóa Học 3D Tương Tác' : '3D Chemistry Molecular Canvas'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'vi'
                  ? 'Xem cấu trúc 3D của Benzene, Caffeine, Aspirin và ứng dụng trong nghiên cứu của Tôn Đức Minh.'
                  : 'Inspect 3D structures of Benzene, Caffeine, & Aspirin used in Minh’s research.'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpen3DInspector}
            className="w-full sm:w-auto px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>{lang === 'vi' ? 'Mở Mô Hình 3D' : 'Inspect 3D Model'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sports & Talents Overview Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sports & Athletics - Blank / Placeholder as requested */}
        <div className="bg-slate-50/70 border border-dashed border-slate-300 rounded-2xl p-4.5 shadow-2xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-200/80 text-slate-500 flex items-center justify-center shrink-0">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {lang === 'vi' ? 'Thể Thao & Thể Lực' : 'Sports & Athletics'}
              </h4>
              <span className="text-[10px] font-medium bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                {lang === 'vi' ? 'Chưa cập nhật' : 'Empty'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-normal italic">
              {lang === 'vi'
                ? 'Mục để trống — bạn có thể bấm "+ Thêm Năng Khiếu / Thể Thao" bên dưới để cập nhật khi có.'
                : 'Left blank — click "+ Add Sport / Talent" below whenever you are ready.'}
            </p>
          </div>
        </div>

        {/* Musical Talent - Blank / Placeholder as requested */}
        <div className="bg-slate-50/70 border border-dashed border-slate-300 rounded-2xl p-4.5 shadow-2xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-200/80 text-slate-500 flex items-center justify-center shrink-0">
            <Music className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {lang === 'vi' ? 'Năng Khiếu & Nghệ Thuật' : 'Talents & Arts'}
              </h4>
              <span className="text-[10px] font-medium bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                {lang === 'vi' ? 'Chưa cập nhật' : 'Empty'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-normal italic">
              {lang === 'vi'
                ? 'Mục để trống — bạn có thể bấm "+ Thêm Năng Khiếu / Thể Thao" bên dưới để cập nhật khi có.'
                : 'Left blank — click "+ Add Sport / Talent" below whenever you are ready.'}
            </p>
          </div>
        </div>

        {/* Creative Interests & Photography - Kept intact */}
        <div className="bg-white border border-teal-200 rounded-2xl p-4.5 shadow-xs flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
            <Camera className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {lang === 'vi' ? 'Sở Thích & Sáng Tạo' : 'Creative Interests'}
              </h4>
              <span className="text-[10px] font-semibold bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                {lang === 'vi' ? 'Đã có' : 'Active'}
              </span>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              {lang === 'vi'
                ? 'Nhiếp ảnh macro khoa học, thiên nhiên và ghi lại khoảnh khắc đời sống học sinh Chuyên Hóa Ams.'
                : 'Scientific macro photography, nature, and capturing high school student life at Ams.'}
            </p>
          </div>
        </div>
      </div>

      {/* Sports & Talents Feed Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              {lang === 'vi' ? 'Thể Thao, Năng Khiếu & Sở Thích' : 'Sports, Talents & Personal Interests'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'vi'
                ? 'Các hoạt động thể thao, năng khiếu nghệ thuật, âm nhạc và sở thích phát triển toàn diện thể chất và tinh thần sáng tạo'
                : 'Athletics, musical performance, creative talents, and personal interests fostering holistic well-being and dynamic balance'}
            </p>
          </div>
          <button
            onClick={onOpenAddPost}
            className="text-xs font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-200 transition"
          >
            + {lang === 'vi' ? 'Thêm Năng Khiếu / Thể Thao' : 'Add Sport / Talent'}
          </button>
        </div>

        {aboutPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
            {lang === 'vi' ? 'Chưa có mục nào trong Thể Thao & Năng Khiếu. Bấm "Thêm Năng Khiếu / Thể Thao" để thêm mới!' : 'No sports or talents added yet. Click "Add Sport / Talent" to upload one!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutPosts.map((post) => (
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

