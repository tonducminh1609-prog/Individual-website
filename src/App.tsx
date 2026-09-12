/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PortfolioPost, SectionType, StudentProfile } from './types';
import { getStoredPosts, getStoredProfile, saveStoredPosts, saveStoredProfile, resetToInitialData } from './utils/storage';
import { MoleculeBackground3D } from './components/MoleculeBackground3D';
import { MoleculeInspectorModal } from './components/MoleculeInspectorModal';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { HonorsSection } from './components/HonorsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { VolunteerSection } from './components/VolunteerSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AdmissionsSummaryView } from './components/AdmissionsSummaryView';
import { PostManagerModal } from './components/PostManagerModal';
import { PostDetailModal } from './components/PostDetailModal';
import { RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType | 'admissions'>('about');
  const [posts, setPosts] = useState<PortfolioPost[]>([]);
  const [profile, setProfile] = useState<StudentProfile>(getStoredProfile());
  const [lang, setLang] = useState<'en' | 'vi'>('en');

  // Modals & Inspectors
  const [is3DInspectorOpen, setIs3DInspectorOpen] = useState(false);
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PortfolioPost | null>(null);
  const [selectedPostDetail, setSelectedPostDetail] = useState<PortfolioPost | null>(null);

  // Background Opacity & Toast Notification
  const [bgOpacity, setBgOpacity] = useState(0.85);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setPosts(getStoredPosts());
    setProfile(getStoredProfile());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSavePost = (savedPost: PortfolioPost) => {
    let updatedPosts: PortfolioPost[];
    const exists = posts.some((p) => p.id === savedPost.id);
    if (exists) {
      updatedPosts = posts.map((p) => (p.id === savedPost.id ? savedPost : p));
      showToast(lang === 'vi' ? 'Đã cập nhật bài viết thành công!' : 'Article updated successfully!');
    } else {
      updatedPosts = [savedPost, ...posts];
      showToast(lang === 'vi' ? 'Đã up bài viết và hình ảnh mới thành công!' : 'New article & images uploaded!');
    }

    setPosts(updatedPosts);
    saveStoredPosts(updatedPosts);
    setEditingPost(null);
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm(lang === 'vi' ? 'Bạn có chắc chắn muốn xóa bài viết này?' : 'Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter((p) => p.id !== postId);
      setPosts(updatedPosts);
      saveStoredPosts(updatedPosts);
      showToast(lang === 'vi' ? 'Đã xóa bài viết!' : 'Article deleted!');
    }
  };

  const handleResetData = () => {
    if (window.confirm(lang === 'vi' ? 'Khôi phục dữ liệu mẫu ban đầu của Tôn Đức Minh?' : 'Reset portfolio to initial demo data?')) {
      const { posts: initPosts, profile: initProf } = resetToInitialData();
      setPosts(initPosts);
      setProfile(initProf);
      showToast(lang === 'vi' ? 'Đã khôi phục dữ liệu mẫu!' : 'Demo data restored!');
    }
  };

  const handleUpdateProfile = (updatedProfile: StudentProfile) => {
    setProfile(updatedProfile);
    saveStoredProfile(updatedProfile);
    showToast(lang === 'vi' ? 'Đã cập nhật thông tin cá nhân!' : 'Profile updated successfully!');
  };

  return (
    <div className="min-h-screen relative bg-[#f3f4f6] text-slate-800 flex flex-col selection:bg-teal-600 selection:text-white">
      
      {/* 3D Chemical Molecules Background Canvas */}
      <MoleculeBackground3D
        interactive={true}
        opacity={bgOpacity}
        speedMultiplier={1.0}
      />

      {/* Main Sticky Header */}
      <Header
        activeSection={activeSection}
        onSelectSection={(sec) => setActiveSection(sec)}
        onOpenAddPost={() => {
          setEditingPost(null);
          setIsAddPostOpen(true);
        }}
        onOpen3DInspector={() => setIs3DInspectorOpen(true)}
        profile={profile}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'vi' : 'en')}
        bgOpacity={bgOpacity}
        onChangeBgOpacity={(val) => setBgOpacity(val)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Active Section Renderer */}
        {activeSection === 'about' && (
          <AboutSection
            profile={profile}
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            onOpen3DInspector={() => setIs3DInspectorOpen(true)}
            onUpdateProfile={handleUpdateProfile}
            lang={lang}
          />
        )}

        {activeSection === 'honors' && (
          <HonorsSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'projects' && (
          <ProjectsSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'research' && (
          <ResearchSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'activities' && (
          <ActivitiesSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'volunteer' && (
          <VolunteerSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'experience' && (
          <ExperienceSection
            posts={posts}
            onViewPost={(post) => setSelectedPostDetail(post)}
            onEditPost={(post) => {
              setEditingPost(post);
              setIsAddPostOpen(true);
            }}
            onDeletePost={handleDeletePost}
            onOpenAddPost={() => {
              setEditingPost(null);
              setIsAddPostOpen(true);
            }}
            lang={lang}
          />
        )}

        {activeSection === 'admissions' && (
          <AdmissionsSummaryView
            profile={profile}
            posts={posts}
            onSelectSection={(sec) => setActiveSection(sec)}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 border-t border-slate-200 py-6 mt-12 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-800">
              TON DUC MINH — Chemistry Portfolio • THPT Chuyên Hà Nội - Amsterdam
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Personal College Portfolio for US Admissions Committees
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetData}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition flex items-center gap-1.5 text-[11px]"
              title="Reset sample posts"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Demo Data</span>
            </button>

            <button
              onClick={() => setIs3DInspectorOpen(true)}
              className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 rounded-lg transition font-medium text-[11px] flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>3D Molecule Viewer</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-teal-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 3D Molecule Inspector Modal */}
      <MoleculeInspectorModal
        isOpen={is3DInspectorOpen}
        onClose={() => setIs3DInspectorOpen(false)}
        initialMoleculeId="benzene"
      />

      {/* Upload & Edit Post Manager Modal */}
      <PostManagerModal
        isOpen={isAddPostOpen}
        onClose={() => {
          setIsAddPostOpen(false);
          setEditingPost(null);
        }}
        onSavePost={handleSavePost}
        editingPost={editingPost}
        defaultSection={activeSection === 'admissions' ? 'about' : activeSection}
        lang={lang}
      />

      {/* Article Detail View Modal */}
      <PostDetailModal
        post={selectedPostDetail}
        onClose={() => setSelectedPostDetail(null)}
        onEditPost={(post) => {
          setEditingPost(post);
          setIsAddPostOpen(true);
        }}
        onDeletePost={handleDeletePost}
        lang={lang}
      />
    </div>
  );
}
