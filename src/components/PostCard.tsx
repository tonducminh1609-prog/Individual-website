import React, { useState } from 'react';
import { PortfolioPost, getPostTitle, getPostSubtitle, getPostRole, getPostDate, getPostLocation, getPostSummary, getPostTags, getPostMetrics, getPostContent } from '../types';
import { calculateReadTime } from '../utils/readingTime';
import { Calendar, MapPin, Tag, ArrowUpRight, Image as ImageIcon, Trash2, Edit3, Sparkles, Clock, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { EditorialArticle } from './EditorialArticle';

interface PostCardProps {
  post: PortfolioPost;
  onViewPost: (post: PortfolioPost) => void;
  onEditPost: (post: PortfolioPost) => void;
  onDeletePost: (postId: string) => void;
  lang: 'en' | 'vi';
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onViewPost,
  onEditPost,
  onDeletePost,
  lang,
}) => {
  const [isQuickReadExpanded, setIsQuickReadExpanded] = useState(false);

  const mainImage = post.images.find((img) => img.isMain) || post.images[0];
  const postTitle = getPostTitle(post, lang);
  const postSubtitle = getPostSubtitle(post, lang);
  const postRole = getPostRole(post, lang);
  const postDate = getPostDate(post, lang);
  const postLocation = getPostLocation(post, lang);
  const postSummary = getPostSummary(post, lang);
  const postContent = getPostContent(post, lang);
  const postTags = getPostTags(post, lang);
  const postMetrics = getPostMetrics(post, lang);

  const readTime = calculateReadTime(postContent || postSummary, lang);

  return (
    <div className="group bg-white/95 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Highlighted Banner Badge */}
      {post.isHighlighted && (
        <div className="absolute top-0 right-0 bg-teal-700 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-xs z-10">
          <Sparkles className="w-3 h-3 text-amber-300" />
          {lang === 'vi' ? 'Nổi Bật' : 'Featured'}
        </div>
      )}

      <div>
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-slate-500 font-medium mb-2.5">
          {postDate && (
            <span className="flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
              <Calendar className="w-3 h-3 text-slate-400" />
              {postDate}
            </span>
          )}
          
          {/* 1-Min Read Pill Badge */}
          <span className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
            <Clock className="w-3 h-3 text-amber-600" />
            {readTime.badge}
          </span>

          {postRole && (
            <span className="font-semibold text-teal-800 line-clamp-1">
              {postRole}
            </span>
          )}
          {postLocation && (
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3" />
              {postLocation}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onViewPost(post)}
          className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition cursor-pointer leading-snug"
        >
          {postTitle}
        </h3>

        {/* Subtitle */}
        {postSubtitle && (
          <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
            {postSubtitle}
          </p>
        )}

        {/* Main Image Preview (if present) */}
        {mainImage && (
          <div
            onClick={() => onViewPost(post)}
            className="my-3.5 relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 cursor-pointer border border-slate-200/60 group/img"
          >
            <img
              src={mainImage.url}
              alt={mainImage.caption || postTitle}
              className="w-full h-full object-cover group-hover/img:scale-103 transition-transform duration-500"
              loading="lazy"
            />
            {post.images.length > 1 && (
              <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-md flex items-center gap-1">
                <ImageIcon className="w-3 h-3" />
                +{post.images.length - 1} {lang === 'vi' ? 'ảnh' : 'photos'}
              </span>
            )}
            {mainImage.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-2.5 text-white text-[11px] truncate">
                📸 {mainImage.caption}
              </div>
            )}
          </div>
        )}

        {/* Editorial Sapo Summary Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 my-2">
          {postSummary}
        </p>

        {/* Impact Metrics (if present) */}
        {postMetrics && postMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-3 p-2.5 bg-slate-50/80 border border-slate-200/60 rounded-xl">
            {postMetrics.map((metric, idx) => {
              const isPlaceholder =
                metric.value === '--' ||
                metric.value.startsWith('[') ||
                metric.value.toLowerCase().includes('bổ sung') ||
                metric.value.toLowerCase().includes('updated') ||
                metric.value.toLowerCase().includes('pending');

              return (
                <div key={idx} className="text-center flex flex-col justify-between">
                  <span className="block text-[10px] text-slate-500 uppercase font-medium line-clamp-1">
                    {metric.label}
                  </span>
                  {isPlaceholder ? (
                    <span className="block text-[10px] font-medium text-amber-700 bg-amber-50 border border-dashed border-amber-300 rounded px-1.5 py-0.5 mt-1 italic">
                      {metric.value}
                    </span>
                  ) : (
                    <span className="block text-xs font-bold text-slate-800 font-mono mt-0.5">
                      {metric.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Inline Quick-Read Accordion */}
        {isQuickReadExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
            <EditorialArticle post={post} lang={lang} showControls={false} />
          </div>
        )}
      </div>

      {/* Footer: Tags & Actions */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1 max-w-[60%]">
          {postTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
            >
              <Tag className="w-2.5 h-2.5 text-slate-400" />
              #{tag}
            </span>
          ))}
          {postTags.length > 3 && (
            <span className="text-[10px] text-slate-400 font-mono">+{postTags.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Quick Read Inline Toggle */}
          <button
            onClick={() => setIsQuickReadExpanded(!isQuickReadExpanded)}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1 ${
              isQuickReadExpanded
                ? 'bg-slate-200 text-slate-800'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Đọc nhanh tại thẻ"
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-700" />
            <span className="hidden sm:inline">
              {isQuickReadExpanded ? (lang === 'vi' ? 'Thu gọn' : 'Collapse') : (lang === 'vi' ? 'Đọc nhanh' : 'Quick read')}
            </span>
            {isQuickReadExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {/* Edit Button */}
          <button
            onClick={() => onEditPost(post)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
            title={lang === 'vi' ? 'Sửa bài viết' : 'Edit Article'}
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDeletePost(post.id)}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
            title={lang === 'vi' ? 'Xóa bài viết' : 'Delete Article'}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>

          {/* Full Article Modal Button */}
          <button
            onClick={() => onViewPost(post)}
            className="px-2.5 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition font-semibold text-xs flex items-center gap-1 shadow-2xs"
            title={lang === 'vi' ? 'Mở bài báo đầy đủ' : 'Open Full Article'}
          >
            <span>{lang === 'vi' ? 'Bài báo' : 'Article'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
