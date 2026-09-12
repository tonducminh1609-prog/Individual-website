import React from 'react';
import { PortfolioPost } from '../types';
import { X, Edit3, Trash2, Globe } from 'lucide-react';
import { EditorialArticle } from './EditorialArticle';

interface PostDetailModalProps {
  post: PortfolioPost | null;
  onClose: () => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  lang: 'en' | 'vi';
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  onClose,
  onEditPost,
  onDeletePost,
  lang: initialLang,
}) => {
  const [modalLang, setModalLang] = React.useState<'en' | 'vi'>(initialLang);

  React.useEffect(() => {
    setModalLang(initialLang);
  }, [initialLang]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden my-6 max-h-[94vh] flex flex-col">
        
        {/* Newspaper Top Bar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase bg-teal-950 border border-teal-800 px-2.5 py-0.5 rounded-md">
              {modalLang === 'vi' ? 'BÁO CHÍ & TỔNG QUAN' : 'EDITORIAL ARTICLE'}
            </span>
            <span className="hidden sm:inline-block text-slate-500 text-xs">|</span>
            <span className="hidden sm:inline-block text-slate-300 text-xs">
              {modalLang === 'vi' ? 'Bài đọc 1 phút' : '1-Min Read Story'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Modal Language Switcher */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-xs font-mono">
              <button
                onClick={() => setModalLang('vi')}
                className={`px-2 py-0.5 rounded transition ${
                  modalLang === 'vi' ? 'bg-teal-700 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setModalLang('en')}
                className={`px-2 py-0.5 rounded transition ${
                  modalLang === 'en' ? 'bg-teal-700 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Edit */}
            <button
              onClick={() => {
                onClose();
                onEditPost(post);
              }}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition flex items-center gap-1.5"
              title="Sửa bài viết"
            >
              <Edit3 className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">{modalLang === 'vi' ? 'Sửa bài' : 'Edit'}</span>
            </button>

            {/* Delete */}
            <button
              onClick={() => {
                onClose();
                onDeletePost(post.id);
              }}
              className="px-2.5 py-1 bg-rose-950/60 hover:bg-rose-900 text-rose-200 text-xs font-medium rounded-lg transition flex items-center gap-1.5"
              title="Xóa bài viết"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{modalLang === 'vi' ? 'Xóa' : 'Delete'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full transition ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          <EditorialArticle post={post} lang={modalLang} showControls={true} onEditPost={onEditPost} />
        </div>
      </div>
    </div>
  );
};
