import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const getHighlightImage = (category: string, fallback: string) => {
  switch (category) {
    case 'CCM': return '/CCM.jpg';
    case 'Kijamii': return '/Kijamii.jpg';
    case 'Kisiasa':
    case 'Sera na Hoja': return '/Kisiasa.jpg';
    default: return fallback;
  }
};

export const NewsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          opacity: { duration: 0.5 }
      }}
      // Hover effects - 3D Tilt
      whileHover={{ scale: 1.03, y: -10, rotateX: 5, rotateY: -5 }}
      className="h-full group perspective"
    >
      <Link to={`/post/${post.id}`} className="relative block h-full p-[1.5px] rounded-xl overflow-hidden transform-style-3d bg-gradient-to-br from-brand-gold/80 to-yellow-900/40 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500">
        
        {/* Card Body - Premium Transparent Background */}
        <div className="relative h-full flex flex-col rounded-xl overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-amber-600/50 shadow-xl">
          
          <div className="aspect-video overflow-hidden relative">
            <img 
              src={getHighlightImage(post.category, post.coverImage || post.image)} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            
            <div className="absolute top-3 left-3 z-20">
              <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-500 text-[10px] font-bold rounded-full border border-amber-500/30">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col relative z-20">
            <div className="flex items-center gap-4 text-xs font-medium mb-3 text-slate-500 tracking-wide uppercase">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : post.date}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-display font-semibold text-slate-100 mb-3 line-clamp-2 leading-tight tracking-tight">
              {post.title}
            </h3>
            
            <p className="text-slate-400 line-clamp-3 mb-6 text-sm leading-relaxed font-sans font-normal">
              {post.preview || (post.content ? post.content.slice(0, 100) + '...' : '')}
            </p>
            
            <div className="mt-auto pt-2">
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C8A44D] to-[#8B6B1F] text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-full shadow-[0_4px_15px_rgba(200,164,77,0.3)] hover:from-[#F2D27A] hover:to-[#C8A44D] hover:shadow-[0_0_25px_rgba(242,210,122,0.5)] transition-all duration-500 ease-out transform hover:-translate-y-1">
                Soma Zaidi 
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
