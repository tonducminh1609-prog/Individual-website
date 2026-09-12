import React from 'react';
import { SectionType, StudentProfile } from '../types';
import { Atom, PlusCircle, User, Award, Lightbulb, Microscope, Activity, HeartHandshake, Briefcase, GraduationCap, Eye, Globe } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionType | 'admissions';
  onSelectSection: (sec: SectionType | 'admissions') => void;
  onOpenAddPost: () => void;
  onOpen3DInspector: () => void;
  profile: StudentProfile;
  lang: 'en' | 'vi';
  onToggleLang: () => void;
  bgOpacity: number;
  onChangeBgOpacity: (val: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenAddPost,
  onOpen3DInspector,
  profile,
  lang,
  onToggleLang,
}) => {
  const navItems: { id: SectionType; labelEn: string; labelVi: string; icon: React.ReactNode }[] = [
    { id: 'about', labelEn: 'About Me', labelVi: 'Giới Thiệu', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'honors', labelEn: 'Honors & Awards', labelVi: 'Giải Thưởng', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'projects', labelEn: 'Products & Projects', labelVi: 'Dự Án & Sản Phẩm', icon: <Lightbulb className="w-3.5 h-3.5" /> },
    { id: 'research', labelEn: 'Research', labelVi: 'Nghiên Cứu', icon: <Microscope className="w-3.5 h-3.5" /> },
    { id: 'activities', labelEn: 'ECA', labelVi: 'Hoạt Động Ngoại Khóa', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'volunteer', labelEn: 'Volunteer', labelVi: 'Tình Nguyện', icon: <HeartHandshake className="w-3.5 h-3.5" /> },
    { id: 'experience', labelEn: 'Experience', labelVi: 'Kinh Nghiệm', icon: <Briefcase className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          
          {/* Left: Branding & Student Info */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => onSelectSection('about')}>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-700 to-slate-800 text-white flex items-center justify-center font-extrabold text-base sm:text-lg shadow-sm border border-teal-600/30">
              TM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                  TON DUC MINH
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-[11px] font-semibold">
                  {lang === 'vi' ? 'Chuyên Hóa Học' : 'Chemistry Major'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="truncate max-w-[140px] sm:max-w-xs">{lang === 'vi' ? profile.schoolVi : profile.school}</span>
              </p>
            </div>
          </div>

          {/* Middle: Section Nav Tabs (Desktop / Tablet) */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/80">
            {navItems.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectSection(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className={isActive ? 'text-teal-600' : 'text-slate-400'}>{tab.icon}</span>
                  <span>{lang === 'vi' ? tab.labelVi : tab.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* 3D Molecule Inspector Launcher */}
            <button
              onClick={onOpen3DInspector}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl border border-slate-200 transition"
              title="Open 3D Molecule Inspector"
            >
              <Atom className="w-4 h-4 text-teal-600 animate-pulse" />
              <span className="hidden md:inline">{lang === 'vi' ? 'Mô Hình 3D' : '3D Molecules'}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* Admissions Mode */}
            <button
              onClick={() => onSelectSection(activeSection === 'admissions' ? 'about' : 'admissions')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl transition ${
                activeSection === 'admissions'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
              }`}
              title="US College Admissions View"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'vi' ? 'Hồ Sơ Tuyển Sinh' : 'Admissions Mode'}</span>
            </button>

            {/* Upload / Add Post Button */}
            <button
              onClick={onOpenAddPost}
              className="flex items-center gap-1.5 px-3 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition transform active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'vi' ? 'Up Bài Viết' : 'Add Post'}</span>
              <span className="sm:hidden">+ Post</span>
            </button>
          </div>
        </div>

        {/* Sub-Navigation Bar for Laptops / Mobile */}
        <div className="xl:hidden flex items-center gap-1 py-2 border-t border-slate-200/80 overflow-x-auto no-scrollbar scroll-smooth">
          {navItems.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectSection(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition shrink-0 ${
                  isActive
                    ? 'bg-teal-700 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                <span>{lang === 'vi' ? tab.labelVi : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
