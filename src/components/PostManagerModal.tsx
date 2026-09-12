import React, { useEffect, useState, useRef } from 'react';
import { ImpactMetric, PortfolioPost, PostImage, SectionType } from '../types';
import { calculateReadTime } from '../utils/readingTime';
import { EditorialArticle } from './EditorialArticle';
import {
  X,
  Upload,
  Plus,
  Trash2,
  Image as ImageIcon,
  Sparkles,
  Check,
  Tag,
  Clock,
  BookOpen,
  Quote,
  Lightbulb,
  FlaskConical,
  Eye,
  Edit3,
  Globe,
  HelpCircle,
  Link,
  Star,
  CheckCircle2,
  Sliders,
  FileText,
  Camera,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';

interface PostManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePost: (post: PortfolioPost) => void;
  editingPost?: PortfolioPost | null;
  defaultSection?: SectionType;
  lang: 'en' | 'vi';
}

type EditorViewMode = 'text' | 'images' | 'metrics' | 'preview';

export const PostManagerModal: React.FC<PostManagerModalProps> = ({
  isOpen,
  onClose,
  onSavePost,
  editingPost,
  defaultSection = 'about',
  lang: initialLang,
}) => {
  // Main view navigation: 'text' (Viết chữ), 'images' (Chèn ảnh), 'metrics' (Thông số), 'preview' (Xem trước)
  const [viewMode, setViewMode] = useState<EditorViewMode>('text');
  const [contentLang, setContentLang] = useState<'vi' | 'en'>('vi');
  const [section, setSection] = useState<SectionType>(defaultSection);

  // Vietnamese Content State
  const [titleVi, setTitleVi] = useState('');
  const [subtitleVi, setSubtitleVi] = useState('');
  const [roleVi, setRoleVi] = useState('');
  const [dateRangeVi, setDateRangeVi] = useState('');
  const [locationVi, setLocationVi] = useState('');
  const [summaryVi, setSummaryVi] = useState('');
  const [contentVi, setContentVi] = useState('');
  const [tagsInputVi, setTagsInputVi] = useState('');

  // English Content State
  const [titleEn, setTitleEn] = useState('');
  const [subtitleEn, setSubtitleEn] = useState('');
  const [roleEn, setRoleEn] = useState('');
  const [dateRangeEn, setDateRangeEn] = useState('');
  const [locationEn, setLocationEn] = useState('');
  const [summaryEn, setSummaryEn] = useState('');
  const [contentEn, setContentEn] = useState('');
  const [tagsInputEn, setTagsInputEn] = useState('');

  // Shared metadata
  const [images, setImages] = useState<PostImage[]>([]);
  const [impactMetricsVi, setImpactMetricsVi] = useState<ImpactMetric[]>([]);
  const [impactMetricsEn, setImpactMetricsEn] = useState<ImpactMetric[]>([]);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Temporary inputs for image & metric insertion
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [imageCaptionInput, setImageCaptionInput] = useState('');
  const [insertedNotification, setInsertedNotification] = useState<string | null>(null);

  // Metric inputs
  const [metricLabelVi, setMetricLabelVi] = useState('');
  const [metricValueVi, setMetricValueVi] = useState('');

  // Refs for textareas to insert markdown at cursor
  const textareaViRef = useRef<HTMLTextAreaElement>(null);
  const textareaEnRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editingPost) {
      setSection(editingPost.section);

      setTitleVi(editingPost.titleVi || editingPost.title || '');
      setSubtitleVi(editingPost.subtitleVi || editingPost.subtitle || '');
      setRoleVi(editingPost.roleOrOrganizationVi || editingPost.roleOrOrganization || '');
      setDateRangeVi(editingPost.dateRangeVi || editingPost.dateRange || '');
      setLocationVi(editingPost.locationVi || editingPost.location || '');
      setSummaryVi(editingPost.summaryVi || editingPost.summary || '');
      setContentVi(editingPost.contentVi || editingPost.content || '');
      setTagsInputVi(editingPost.tagsVi ? editingPost.tagsVi.join(', ') : (editingPost.tags ? editingPost.tags.join(', ') : ''));

      setTitleEn(editingPost.titleEn || editingPost.title || '');
      setSubtitleEn(editingPost.subtitleEn || editingPost.subtitle || '');
      setRoleEn(editingPost.roleOrOrganizationEn || editingPost.roleOrOrganization || '');
      setDateRangeEn(editingPost.dateRangeEn || editingPost.dateRange || '');
      setLocationEn(editingPost.locationEn || editingPost.location || '');
      setSummaryEn(editingPost.summaryEn || editingPost.summary || '');
      setContentEn(editingPost.contentEn || editingPost.content || '');
      setTagsInputEn(editingPost.tagsEn ? editingPost.tagsEn.join(', ') : (editingPost.tags ? editingPost.tags.join(', ') : ''));

      setImages(editingPost.images || []);
      setImpactMetricsVi(editingPost.impactMetricsVi || editingPost.impactMetrics || []);
      setImpactMetricsEn(editingPost.impactMetricsEn || editingPost.impactMetrics || []);
      setIsHighlighted(!!editingPost.isHighlighted);
    } else {
      setSection(defaultSection);

      setTitleVi('');
      setSubtitleVi('');
      setRoleVi('');
      setDateRangeVi('2024 - Hiện tại');
      setLocationVi('Hà Nội, Việt Nam');
      setSummaryVi('');
      setContentVi('');
      setTagsInputVi('HoaHoc, HaNoiAms, NghienCuu');

      setTitleEn('');
      setSubtitleEn('');
      setRoleEn('');
      setDateRangeEn('2024 - Present');
      setLocationEn('Hanoi, Vietnam');
      setSummaryEn('');
      setContentEn('');
      setTagsInputEn('Chemistry, HanoiAmsterdam, Research');

      setImages([]);
      setImpactMetricsVi([]);
      setImpactMetricsEn([]);
      setIsHighlighted(false);
    }
  }, [editingPost, defaultSection, isOpen]);

  if (!isOpen) return null;

  const currentContent = contentLang === 'en' ? contentEn : contentVi;
  const currentReadTime = calculateReadTime(currentContent, contentLang);

  // Helper to insert snippet into text
  const insertSnippet = (snippet: string, notificationText?: string) => {
    const isEn = contentLang === 'en';
    const textarea = isEn ? textareaEnRef.current : textareaViRef.current;
    const currentText = isEn ? contentEn : contentVi;
    const setter = isEn ? setContentEn : setContentVi;

    if (!textarea) {
      setter(currentText + '\n\n' + snippet);
    } else {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText = currentText.substring(0, start) + snippet + currentText.substring(end);
      setter(newText);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + snippet.length, start + snippet.length);
      }, 50);
    }

    if (notificationText) {
      setInsertedNotification(notificationText);
      setTimeout(() => setInsertedNotification(null), 3000);
    }
  };

  // Upload local images from device
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList: File[] = Array.from(files);
    fileList.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newImage: PostImage = {
            id: 'img-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
            url: event.target.result as string,
            caption: file.name.replace(/\.[^/.]+$/, ''),
            isMain: images.length === 0,
          };
          setImages((prev) => [...prev, newImage]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    const newImg: PostImage = {
      id: 'img-' + Date.now(),
      url: imageUrlInput.trim(),
      caption: imageCaptionInput.trim() || undefined,
      isMain: images.length === 0,
    };
    setImages([...images, newImg]);
    setImageUrlInput('');
    setImageCaptionInput('');
  };

  const handleInsertImageToArticle = (img: PostImage) => {
    const caption = img.caption || (contentLang === 'vi' ? 'Hình ảnh tư liệu thực nghiệm' : 'Project documentation photo');
    const credit = contentLang === 'vi' ? 'Ảnh: Tôn Đức Minh / Lưu trữ dự án' : 'Photo: Ton Duc Minh / Project Archive';
    const mdTag = `\n\n![${caption} | ${credit}](${img.url})\n\n`;
    insertSnippet(mdTag, contentLang === 'vi' ? `Đã chèn "${caption}" vào bài viết!` : `Inserted "${caption}" into article!`);
  };

  const handleRemoveImage = (id: string) => {
    const updated = images.filter((img) => img.id !== id);
    if (updated.length > 0 && !updated.some((img) => img.isMain)) {
      updated[0].isMain = true;
    }
    setImages(updated);
  };

  const handleSetMainImage = (id: string) => {
    setImages(
      images.map((img) => ({
        ...img,
        isMain: img.id === id,
      }))
    );
  };

  const handleAddMetricVi = () => {
    if (!metricLabelVi.trim() || !metricValueVi.trim()) return;
    setImpactMetricsVi([...impactMetricsVi, { label: metricLabelVi.trim(), value: metricValueVi.trim() }]);
    setMetricLabelVi('');
    setMetricValueVi('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleVi.trim() && !titleEn.trim()) {
      alert(contentLang === 'en' ? 'Please enter an article headline!' : 'Vui lòng nhập tiêu đề bài báo!');
      setViewMode('text');
      return;
    }

    const parsedTagsVi = tagsInputVi
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    const parsedTagsEn = tagsInputEn
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    const mainTitle = titleVi.trim() || titleEn.trim();
    const mainSummary = summaryVi.trim() || summaryEn.trim() || titleVi.trim();
    const mainContent = contentVi.trim() || contentEn.trim() || mainSummary;

    const postData: PortfolioPost = {
      id: editingPost ? editingPost.id : 'post-' + Date.now(),
      section,
      title: mainTitle,
      subtitle: subtitleVi.trim() || subtitleEn.trim() || undefined,
      roleOrOrganization: roleVi.trim() || roleEn.trim() || undefined,
      dateRange: dateRangeVi.trim() || dateRangeEn.trim() || '2024 - Hiện tại',
      location: locationVi.trim() || locationEn.trim() || 'Hà Nội, Việt Nam',
      summary: mainSummary,
      content: mainContent,

      // Bilingual fields
      titleVi: titleVi.trim() || titleEn.trim(),
      titleEn: titleEn.trim() || titleVi.trim(),
      subtitleVi: subtitleVi.trim() || undefined,
      subtitleEn: subtitleEn.trim() || undefined,
      roleOrOrganizationVi: roleVi.trim() || undefined,
      roleOrOrganizationEn: roleEn.trim() || undefined,
      dateRangeVi: dateRangeVi.trim() || '2024 - Hiện tại',
      dateRangeEn: dateRangeEn.trim() || '2024 - Present',
      locationVi: locationVi.trim() || 'Hà Nội, Việt Nam',
      locationEn: locationEn.trim() || 'Hanoi, Vietnam',
      summaryVi: summaryVi.trim() || summaryEn.trim(),
      summaryEn: summaryEn.trim() || summaryVi.trim(),
      contentVi: contentVi.trim() || contentEn.trim(),
      contentEn: contentEn.trim() || contentVi.trim(),
      tagsVi: parsedTagsVi.length > 0 ? parsedTagsVi : ['HoaHoc', 'HaNoiAms'],
      tagsEn: parsedTagsEn.length > 0 ? parsedTagsEn : ['Chemistry', 'HanoiAmsterdam'],
      impactMetricsVi: impactMetricsVi.length > 0 ? impactMetricsVi : undefined,
      impactMetricsEn: impactMetricsEn.length > 0 ? impactMetricsEn : undefined,

      images,
      tags: parsedTagsVi.length > 0 ? parsedTagsVi : (parsedTagsEn.length > 0 ? parsedTagsEn : ['Chemistry']),
      impactMetrics: impactMetricsVi.length > 0 ? impactMetricsVi : impactMetricsEn,
      isHighlighted,
      createdDate: editingPost ? editingPost.createdDate : new Date().toISOString().split('T')[0],
    };

    onSavePost(postData);
    onClose();
  };

  // Preview Post Object for Live Preview Tab
  const previewPostObj: PortfolioPost = {
    id: 'preview',
    section,
    title: titleVi || titleEn || 'Tiêu đề bài viết',
    titleVi: titleVi || 'Tiêu đề bài viết',
    titleEn: titleEn || 'Article Headline',
    subtitleVi,
    subtitleEn,
    roleOrOrganization: roleVi || roleEn || undefined,
    roleOrOrganizationVi: roleVi,
    roleOrOrganizationEn: roleEn,
    dateRange: dateRangeVi || dateRangeEn || '2024 - Hiện tại',
    dateRangeVi: dateRangeVi || '2024 - Hiện tại',
    dateRangeEn: dateRangeEn || '2024 - Present',
    location: locationVi || locationEn || 'Hà Nội, Việt Nam',
    locationVi: locationVi || 'Hà Nội, Việt Nam',
    locationEn: locationEn || 'Hanoi, Vietnam',
    summary: summaryVi || summaryEn || 'Tóm tắt bài báo...',
    summaryVi: summaryVi || 'Tóm tắt bài báo...',
    summaryEn: summaryEn || 'Article summary...',
    content: contentVi || contentEn || 'Nội dung bài báo...',
    contentVi: contentVi || 'Nội dung bài báo...',
    contentEn: contentEn || 'Article body text...',
    images,
    tags: tagsInputVi ? tagsInputVi.split(',').map((t) => t.trim()) : ['Chemistry'],
    tagsVi: tagsInputVi ? tagsInputVi.split(',').map((t) => t.trim()) : ['HoaHoc'],
    tagsEn: tagsInputEn ? tagsInputEn.split(',').map((t) => t.trim()) : ['Chemistry'],
    impactMetricsVi,
    impactMetricsEn,
    isHighlighted,
    createdDate: '2026-08-20',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden my-4 max-h-[94vh] flex flex-col">
        
        {/* 1. Modal Header & Primary Section Tabs */}
        <div className="px-5 sm:px-7 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800/80 border border-teal-600 flex items-center justify-center text-white shrink-0">
              {viewMode === 'text' ? (
                <FileText className="w-5 h-5" />
              ) : viewMode === 'images' ? (
                <Camera className="w-5 h-5" />
              ) : viewMode === 'metrics' ? (
                <Sliders className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight flex items-center gap-2">
                {editingPost ? (contentLang === 'en' ? 'Edit Article & Photos' : 'Chỉnh Sửa Bài Viết & Hình Ảnh') : (contentLang === 'en' ? 'Compose New Article & Photos' : 'Soạn Bài Báo 1 Phút & Chèn Ảnh')}
              </h2>
              <p className="text-xs text-slate-400">
                {contentLang === 'en'
                  ? 'Separate dedicated workspaces for text writing, photo placement & live preview'
                  : 'Thiết kế phân khu riêng biệt: Chỗ viết chữ riêng, Chỗ chèn ảnh riêng, cực kỳ dễ làm'}
              </p>
            </div>
          </div>

          {/* Language Toggle & Close Button */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-xl p-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => setContentLang('vi')}
                className={`px-3 py-1 rounded-lg transition font-bold ${
                  contentLang === 'vi' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tiếng Việt
              </button>
              <button
                type="button"
                onClick={() => setContentLang('en')}
                className={`px-3 py-1 rounded-lg transition font-bold ${
                  contentLang === 'en' ? 'bg-teal-700 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800/80 transition"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Workspace Navigation Bar (Chỗ Viết Chữ - Chỗ Chèn Ảnh - Thông Số - Xem Trước) */}
        <div className="bg-slate-100/90 px-5 sm:px-7 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Tab 1: Chỗ Viết Chữ */}
            <button
              type="button"
              onClick={() => setViewMode('text')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                viewMode === 'text'
                  ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/90'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{contentLang === 'en' ? '1. Write Text & Story' : '1. Chỗ Viết Bài & Sapo'}</span>
            </button>

            {/* Tab 2: Chỗ Chèn Ảnh */}
            <button
              type="button"
              onClick={() => setViewMode('images')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 relative ${
                viewMode === 'images'
                  ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/90'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{contentLang === 'en' ? '2. Photos & Captions' : '2. Chỗ Quản Lý & Chèn Ảnh'}</span>
              {images.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 font-mono text-[10px] font-extrabold flex items-center justify-center">
                  {images.length}
                </span>
              )}
            </button>

            {/* Tab 3: Thông Số & Chuyên Mục */}
            <button
              type="button"
              onClick={() => setViewMode('metrics')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                viewMode === 'metrics'
                  ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/90'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>{contentLang === 'en' ? '3. Details & Section' : '3. Chuyên Mục & Số Liệu'}</span>
            </button>

            {/* Tab 4: Xem Trước */}
            <button
              type="button"
              onClick={() => setViewMode('preview')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                viewMode === 'preview'
                  ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-600/20'
                  : 'bg-white text-amber-800 hover:bg-amber-50 border border-amber-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{contentLang === 'en' ? '4. Live Preview' : '4. Xem Trước Bài Báo'}</span>
            </button>
          </div>

          {/* Quick Word Count & Reading Time Badge */}
          <div className="hidden sm:flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border ${
                currentReadTime.status === 'perfect'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}
            >
              <Clock className="w-3 h-3 text-emerald-600" />
              {currentReadTime.label}
            </span>
          </div>
        </div>

        {/* Notification Toast when an image or snippet is inserted */}
        {insertedNotification && (
          <div className="bg-emerald-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between shadow-xs animate-fade-in">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              {insertedNotification}
            </span>
            <button onClick={() => setInsertedNotification(null)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>
        )}

        {/* 3. Main Workspace Area */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 bg-slate-50/60">
          <form id="post-form" onSubmit={handleFormSubmit}>
            
            {/* ========================================================================= */}
            {/* KHU VỰC 1: CHỖ VIẾT NỘI DUNG VĂN BẢN (TEXT & STORY ZONE) */}
            {/* ========================================================================= */}
            {viewMode === 'text' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Banner Guide */}
                <div className="p-3.5 bg-teal-50 border border-teal-200/90 rounded-2xl flex items-center justify-between gap-3 text-xs text-teal-900">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-teal-700 text-white rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span>
                      <strong>Khu Vực Viết Chữ:</strong> Bạn chỉ cần tập trung gõ tiêu đề, lời dẫn sapo và nội dung bài viết tại đây. Ảnh sẽ được quản lý ở tab <strong>"2. Chỗ Quản Lý & Chèn Ảnh"</strong>!
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setViewMode('images')}
                    className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl transition flex items-center gap-1 shrink-0 text-[11px]"
                  >
                    <span>Sang Chỗ Chèn Ảnh</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Block 1: Tiêu Đề & Lời Dẫn Sapo */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    {contentLang === 'en' ? 'Article Headline & Sapo Lead' : 'Tiêu Đề & Lời Dẫn Mở Đầu (Sapo)'}
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {contentLang === 'en' ? 'Article Headline (Title) *' : 'Tiêu đề bài báo (Headline) *'}
                    </label>
                    <input
                      type="text"
                      value={contentLang === 'en' ? titleEn : titleVi}
                      onChange={(e) => (contentLang === 'en' ? setTitleEn(e.target.value) : setTitleVi(e.target.value))}
                      placeholder={contentLang === 'en' ? 'e.g. Invisible Traces — Decoding Heritage Chemistry...' : 'VD: Invisible Traces — Giải mã vẻ đẹp hóa học trong sắc nhuộm làng nghề truyền thống...'}
                      className="w-full text-base sm:text-lg font-bold bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-teal-600 focus:bg-white transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {contentLang === 'en' ? 'Subtitle / Dek' : 'Tiêu đề phụ / Dek (Dòng tóm lược dưới tiêu đề)'}
                    </label>
                    <input
                      type="text"
                      value={contentLang === 'en' ? subtitleEn : subtitleVi}
                      onChange={(e) => (contentLang === 'en' ? setSubtitleEn(e.target.value) : setSubtitleVi(e.target.value))}
                      placeholder={contentLang === 'en' ? 'Secondary hook or context...' : 'VD: Hành trình kết hợp nhiếp ảnh macro và hóa học xanh để bảo tồn di sản Việt Nam'}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-teal-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>{contentLang === 'en' ? '1-Minute Editorial Sapo (Lead Paragraph)' : 'Lời dẫn Sapo báo chí (Đoạn mở đầu nổi bật)'}</span>
                      <span className="text-[11px] font-normal text-slate-400">Khuyên dùng: 2-3 câu súc tích</span>
                    </label>
                    <textarea
                      rows={2}
                      value={contentLang === 'en' ? summaryEn : summaryVi}
                      onChange={(e) => (contentLang === 'en' ? setSummaryEn(e.target.value) : setSummaryVi(e.target.value))}
                      placeholder={contentLang === 'en' ? 'A concise 2-3 sentence overview that hooks the reader...' : 'Đoạn sapo ngắn 2-3 câu nêu bật bối cảnh và kết quả quan trọng nhất của bài báo...'}
                      className="w-full text-xs sm:text-sm font-serif italic bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-800 focus:outline-teal-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Block 2: Thân Bài Báo 1 Phút */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                      {contentLang === 'en' ? '1-Minute Read Body Text' : 'Nội Dung Bài Báo (Thân Bài 1 Phút)'}
                    </h3>

                    {/* Quick Formatting Tools */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => insertSnippet('\n\n## Tiêu đề phân đoạn mới\n', 'Đã thêm Tiêu đề phân đoạn')}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1"
                        title="Chèn tiêu đề phân đoạn"
                      >
                        <span className="font-bold text-teal-700">H2</span>
                        <span>+ Tiêu đề đoạn</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => insertSnippet('\n\n> "Trích dẫn câu nói hoặc thông điệp cốt lõi..."\n', 'Đã thêm Khung Trích Dẫn')}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 border border-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1"
                        title="Chèn trích dẫn"
                      >
                        <Quote className="w-3 h-3 text-teal-600" />
                        <span>+ Trích dẫn</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => insertSnippet('\n\n> 💡 **Điểm nhấn 1 phút:** Tóm tắt 1 câu điểm sáng lớn nhất.\n', 'Đã thêm Hộp Điểm Nhấn')}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-amber-50 hover:text-amber-900 border border-slate-200 rounded-lg text-xs font-medium transition flex items-center gap-1"
                        title="Chèn hộp điểm nhấn"
                      >
                        <Lightbulb className="w-3 h-3 text-amber-600" />
                        <span>+ Hộp Điểm nhấn</span>
                      </button>
                    </div>
                  </div>

                  <textarea
                    ref={contentLang === 'en' ? textareaEnRef : textareaViRef}
                    rows={12}
                    value={contentLang === 'en' ? contentEn : contentVi}
                    onChange={(e) => (contentLang === 'en' ? setContentEn(e.target.value) : setContentVi(e.target.value))}
                    placeholder={
                      contentLang === 'en'
                        ? 'Write your 1-minute article text here. You can structure it into paragraphs: background, methodology, and outcome...'
                        : 'Viết nội dung bài báo 1 phút tại đây. Bạn có thể chia bài viết thành 2-3 phân đoạn: Bối cảnh, Quá trình thực hiện & Kết quả đạt được...'
                    }
                    className="w-full text-xs sm:text-sm font-sans leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:outline-teal-600 focus:bg-white transition"
                  />

                  {/* Navigation Helper to Image Tab */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {images.length > 0
                        ? `Đã có ${images.length} ảnh trong bài. Bạn có thể sang tab "2. Chỗ Quản Lý & Chèn Ảnh" để chèn thêm ảnh vào văn bản!`
                        : 'Chưa có ảnh nào. Hãy chuyển sang tab "2. Chỗ Quản Lý & Chèn Ảnh" để tải ảnh lên!'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setViewMode('images')}
                      className="text-teal-700 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Quản lý ảnh</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* KHU VỰC 2: CHỖ QUẢN LÝ & CHÈN HÌNH ẢNH (DEDICATED PHOTO & MEDIA ZONE) */}
            {/* ========================================================================= */}
            {viewMode === 'images' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Banner Guide */}
                <div className="p-4 bg-teal-900 text-white rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-800 text-teal-300 rounded-xl shrink-0 mt-0.5">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {contentLang === 'en' ? 'Dedicated Photo Manager' : 'Chỗ Quản Lý & Chèn Hình Ảnh Riêng Biệt'}
                      </h4>
                      <p className="text-xs text-teal-100/90 leading-relaxed mt-0.5">
                        {contentLang === 'en'
                          ? 'Upload photos from your computer or paste image links. You can designate a Cover Photo and click "Insert into Text" to place figures directly into your article.'
                          : 'Tải ảnh từ máy tính hoặc dán link ảnh. Bạn có thể chọn Ảnh bìa (Cover) và bấm nút "Chèn vào bài viết" để đặt ảnh vào giữa bài báo rất dễ dàng.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Upload & Add Image Methods Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Upload className="w-4 h-4 text-teal-700" />
                    {contentLang === 'en' ? 'Add New Images to Article' : 'Thêm Hình Ảnh Mới Vào Bài Viết'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Method 1: Upload from Computer */}
                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-center hover:border-teal-600 transition group cursor-pointer relative">
                      <Upload className="w-8 h-8 text-teal-700 group-hover:scale-110 transition duration-300 mb-2" />
                      <span className="text-xs font-bold text-slate-800 block">
                        {contentLang === 'en' ? 'Upload from your device' : 'Tải ảnh từ máy tính của bạn'}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Hỗ trợ ảnh PNG, JPG, JPEG, WebP
                      </span>
                      <label className="mt-3 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{contentLang === 'en' ? 'Choose Image Files' : 'Chọn tệp hình ảnh'}</span>
                        <input type="file" multiple accept="image/*" onChange={handleFileUpload} className="hidden" />
                      </label>
                    </div>

                    {/* Method 2: Paste URL */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-xs font-bold text-slate-800 block mb-1">
                          {contentLang === 'en' ? 'Or Paste Image Link (URL)' : 'Hoặc Dán Đường Dẫn Link Ảnh (URL)'}
                        </span>
                        <span className="text-[11px] text-slate-500 block mb-2.5">
                          Dán link ảnh từ Unsplash, Imgur, Cloud hoặc Website
                        </span>
                      </div>

                      <div className="space-y-2">
                        <input
                          type="url"
                          value={imageUrlInput}
                          onChange={(e) => setImageUrlInput(e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-teal-600"
                        />
                        <input
                          type="text"
                          value={imageCaptionInput}
                          onChange={(e) => setImageCaptionInput(e.target.value)}
                          placeholder={contentLang === 'en' ? 'Image caption (e.g. Lab experiment)...' : 'Chú thích ảnh (VD: Thí nghiệm tạo màng nano)...'}
                          className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-teal-600"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleAddImageUrl}
                        className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{contentLang === 'en' ? 'Add Photo via URL' : 'Thêm Ảnh Qua Link URL'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Images List / Gallery Manager */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-teal-700" />
                      {contentLang === 'en' ? 'Photos in this Article' : 'Danh Sách Hình Ảnh Trong Bài Báo'} ({images.length})
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      Bấm "Chèn vào bài" để đặt ảnh vào giữa nội dung văn bản
                    </span>
                  </div>

                  {images.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {images.map((img, idx) => (
                        <div
                          key={img.id || idx}
                          className={`rounded-2xl border p-3.5 bg-slate-50 flex flex-col justify-between space-y-3 transition hover:shadow-md ${
                            img.isMain ? 'border-teal-600 ring-2 ring-teal-600/20 bg-teal-50/20' : 'border-slate-200'
                          }`}
                        >
                          {/* Image Preview & Cover Tag */}
                          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 relative group shadow-2xs">
                            <img src={img.url} alt={img.caption || 'Thumbnail'} className="w-full h-full object-cover" />
                            {img.isMain && (
                              <span className="absolute top-2 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                                <Star className="w-2.5 h-2.5 text-amber-300" /> {contentLang === 'en' ? 'Cover Photo' : 'Ảnh bìa chính'}
                              </span>
                            )}
                          </div>

                          {/* Caption Input */}
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                              {contentLang === 'en' ? 'Photo Caption (Figure note):' : 'Chú thích ảnh báo chí:'}
                            </label>
                            <input
                              type="text"
                              value={img.caption || ''}
                              onChange={(e) => {
                                const newCaption = e.target.value;
                                setImages(images.map((item) => (item.id === img.id ? { ...item, caption: newCaption } : item)));
                              }}
                              placeholder="Nhập lời chú thích ảnh..."
                              className="w-full text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-teal-600"
                            />
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-1.5">
                            {/* Insert to Article Button */}
                            <button
                              type="button"
                              onClick={() => handleInsertImageToArticle(img)}
                              className="px-2.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition flex items-center gap-1 shadow-2xs"
                              title="Chèn ảnh này vào nội dung bài báo"
                            >
                              <Plus className="w-3 h-3" />
                              <span>{contentLang === 'en' ? 'Insert into Text' : 'Chèn vào bài'}</span>
                            </button>

                            <div className="flex items-center gap-1">
                              {!img.isMain && (
                                <button
                                  type="button"
                                  onClick={() => handleSetMainImage(img.id)}
                                  className="text-[11px] text-slate-600 hover:text-teal-700 bg-white border border-slate-200 px-2 py-1 rounded-lg transition"
                                  title="Đặt ảnh này làm ảnh đại diện"
                                >
                                  {contentLang === 'en' ? 'Make Cover' : 'Đặt làm bìa'}
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(img.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                                title="Xóa ảnh"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                      <Camera className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-600">Chưa có hình ảnh nào trong bài</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Hãy chọn tệp từ máy tính hoặc dán link URL ở phía trên để thêm ảnh tư liệu, thí nghiệm hoặc làng nghề!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* KHU VỰC 3: CHUYÊN MỤC, THÔNG SỐ & DỮ LIỆU (METRICS & SECTION ZONE) */}
            {/* ========================================================================= */}
            {viewMode === 'metrics' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Section & Metadata Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Sliders className="w-4 h-4 text-teal-700" />
                    {contentLang === 'en' ? 'Portfolio Section & Metadata' : 'Chuyên Mục Hiển Thị & Thông Tin Tổ Chức'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {contentLang === 'en' ? 'Portfolio Section *' : 'Chuyên mục hiển thị trên Portfolio *'}
                      </label>
                      <select
                        value={section}
                        onChange={(e) => setSection(e.target.value as SectionType)}
                        className="w-full text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-teal-600"
                      >
                        <option value="about">Tiêu Điểm Cá Nhân & Di Sản (About / Spotlight)</option>
                        <option value="honors">Hồ Sơ Giải Thưởng & Thành Tích (Honors & Awards)</option>
                        <option value="projects">Sản Phẩm & Dự Án Sáng Chế (Products & Projects)</option>
                        <option value="research">Công Trình Nghiên Cứu Khoa Học (Research)</option>
                        <option value="activities">Hoạt Động Ngoại Khóa & Lãnh Đạo (ECA)</option>
                        <option value="volunteer">Dự Án Phụng Sự Cộng Đồng (Volunteer)</option>
                        <option value="experience">Kinh Nghiệm Thực Tập & Phòng Lab (Experience)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {contentLang === 'en' ? 'Role / Organization' : 'Vai trò / Đơn vị thực hiện'}
                      </label>
                      <input
                        type="text"
                        value={contentLang === 'en' ? roleEn : roleVi}
                        onChange={(e) => (contentLang === 'en' ? setRoleEn(e.target.value) : setRoleVi(e.target.value))}
                        placeholder={contentLang === 'en' ? 'e.g. Lead Researcher / Founder' : 'VD: Trưởng nhóm nghiên cứu / Sáng lập viên'}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {contentLang === 'en' ? 'Timeline / Date Range' : 'Thời gian / Niên khóa thực hiện'}
                      </label>
                      <input
                        type="text"
                        value={contentLang === 'en' ? dateRangeEn : dateRangeVi}
                        onChange={(e) => (contentLang === 'en' ? setDateRangeEn(e.target.value) : setDateRangeVi(e.target.value))}
                        placeholder={contentLang === 'en' ? 'e.g. 09/2024 - Present' : 'VD: 09/2024 - Hiện tại'}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {contentLang === 'en' ? 'Location' : 'Địa điểm thực hiện'}
                      </label>
                      <input
                        type="text"
                        value={contentLang === 'en' ? locationEn : locationVi}
                        onChange={(e) => (contentLang === 'en' ? setLocationEn(e.target.value) : setLocationVi(e.target.value))}
                        placeholder={contentLang === 'en' ? 'e.g. Hanoi, Vietnam' : 'VD: Hà Nội, Việt Nam'}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-teal-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Metrics Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                    <Sparkles className="w-4 h-4 text-teal-700" />
                    {contentLang === 'en' ? 'Key Impact Metrics & Statistics' : 'Số Liệu Then Chốt / Thông Số Dự Án'}
                  </h3>

                  {/* Add metric inputs */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="text"
                      value={metricLabelVi}
                      onChange={(e) => setMetricLabelVi(e.target.value)}
                      placeholder="Tên chỉ số (VD: Hiệu suất quang xúc tác)..."
                      className="w-full sm:flex-1 text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800"
                    />
                    <input
                      type="text"
                      value={metricValueVi}
                      onChange={(e) => setMetricValueVi(e.target.value)}
                      placeholder="Giá trị (VD: > 92% hoặc 450+ học sinh)..."
                      className="w-full sm:w-64 text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleAddMetricVi}
                      className="w-full sm:w-auto px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition shrink-0"
                    >
                      + Thêm số liệu
                    </button>
                  </div>

                  {/* Existing metrics */}
                  {impactMetricsVi.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {impactMetricsVi.map((m, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl relative group">
                          <button
                            type="button"
                            onClick={() => setImpactMetricsVi(impactMetricsVi.filter((_, i) => i !== idx))}
                            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-rose-600 rounded opacity-0 group-hover:opacity-100 transition"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                          <span className="block text-[10px] text-slate-500 uppercase font-bold truncate">
                            {m.label}
                          </span>
                          <span className="block text-sm font-extrabold text-slate-900 font-mono mt-0.5 truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags & Highlight Toggle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Thẻ Tags ({contentLang === 'en' ? 'English' : 'Tiếng Việt'})
                    </label>
                    <input
                      type="text"
                      value={contentLang === 'en' ? tagsInputEn : tagsInputVi}
                      onChange={(e) => (contentLang === 'en' ? setTagsInputEn(e.target.value) : setTagsInputVi(e.target.value))}
                      placeholder="HoaHoc, HaNoiAms, InvisibleTraces..."
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 focus:outline-teal-600"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 self-end">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {contentLang === 'en' ? 'Highlight on Home Banner' : 'Đánh dấu bài viết Nổi Bật (Featured)'}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        Hiển thị huy hiệu nổi bật trên thẻ bài viết
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isHighlighted}
                      onChange={(e) => setIsHighlighted(e.target.checked)}
                      className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* KHU VỰC 4: XEM TRƯỚC BÀI BÁO THỰC TẾ (LIVE PREVIEW ZONE) */}
            {/* ========================================================================= */}
            {viewMode === 'preview' && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <strong>Chế độ xem trước:</strong> Giao diện thực tế của bài báo với đầy đủ ảnh, trích dẫn và lời dẫn sapo.
                  </span>
                  <span className="font-mono font-bold">
                    {currentReadTime.words} từ • {currentReadTime.badge}
                  </span>
                </div>
                
                <EditorialArticle post={previewPostObj} lang={contentLang} showControls={true} />
              </div>
            )}

            {/* Bottom Form Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {viewMode !== 'text' && (
                  <button
                    type="button"
                    onClick={() => setViewMode('text')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Quay lại Viết Chữ</span>
                  </button>
                )}
                {viewMode !== 'images' && (
                  <button
                    type="button"
                    onClick={() => setViewMode('images')}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition flex items-center gap-1"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Quản lý Ảnh ({images.length})</span>
                  </button>
                )}
                {viewMode !== 'preview' && (
                  <button
                    type="button"
                    onClick={() => setViewMode('preview')}
                    className="px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-semibold rounded-xl transition flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Xem trước</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition"
                >
                  {contentLang === 'en' ? 'Cancel' : 'Hủy bỏ'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{editingPost ? (contentLang === 'en' ? 'Save Changes' : 'Lưu Thay Đổi') : (contentLang === 'en' ? 'Publish Article' : 'Đăng Bài Viết')}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
