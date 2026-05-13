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
        <div className="relative h-full flex flex-col rounded-[10px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500">
          
          <div className="aspect-video overflow-hidden relative">
            <img 
              src={getHighlightImage(post.category, post.coverImage || post.image)} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute top-2 left-2 z-20">
              <span className="px-3 py-1 bg-brand-gold/20 backdrop-blur-md text-brand-gold text-[10px] font-bold rounded shadow-lg border border-brand-gold/30">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-5 flex-1 flex flex-col relative z-20">
            <div className="flex items-center gap-4 text-[10px] font-bold mb-3 text-white/40">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-brand-gold" />
                <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : post.date}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-display font-semibold text-white mb-2 line-clamp-2 leading-snug">
              {post.title}
            </h3>
            
            <p className="text-white/70 line-clamp-2 flex-1 text-sm leading-relaxed font-light">
              {post.preview || (post.content ? post.content.slice(0, 100) + '...' : '')}
            </p>
            
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider">
                Soma Zaidi 
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
