import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const NewsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="group block">
      <div className="glass-card h-full flex flex-col">
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-tz-green text-white text-xs font-bold rounded-full shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
          <h3 className="text-xl font-display font-bold text-tz-black mb-4 group-hover:text-tz-green transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-neutral-600 line-clamp-3 mb-8 flex-1">
            {post.preview}
          </p>
          <div className="flex items-center gap-2 text-tz-green font-bold text-sm group/link">
            Soma Zaidi 
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};
