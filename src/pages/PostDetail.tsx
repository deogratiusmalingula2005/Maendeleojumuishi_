import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data';
import { NewsCard } from '../components/News';
import { Calendar, Clock, Users, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Habari Haijapatikana</h2>
          <Link to="/" className="text-tz-green font-bold hover:underline">Rudi Nyumbani</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-transparent pt-64 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/0 backdrop-blur-md rounded-[40px] shadow-2xl border border-white/20 p-8 md:p-16 my-12">
      {/* Article Header */}
      <header className="py-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link to={`/category/${post.category.toLowerCase()}`} className="inline-block px-4 py-1 bg-tz-green/10 text-tz-green text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
            {post.category}
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-tz-black mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-neutral-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-tz-black">Deogratius Malingula</p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Mhariri Mkuu</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-auto">
              <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 6 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 lg:col-start-1">
              <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-neutral-50 p-4 text-[10px] text-neutral-400 uppercase tracking-widest font-bold border-t border-neutral-100">
                  Picha: Maendeleo Jumuishi Archive / 2026
                </div>
              </div>

              <div className="post-content">
                <p className="text-xl font-medium text-tz-black leading-relaxed mb-10 italic">
                  {post.preview}
                </p>
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Tags & Share */}
              <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-8">
                <div className="flex gap-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-neutral-50 rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-widest hover:bg-neutral-100 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Shiriki:</span>
                  <div className="flex gap-4">
                    <button className="p-3 rounded-full bg-neutral-50 hover:bg-tz-green hover:text-white transition-all">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 rounded-full bg-neutral-50 hover:bg-tz-green hover:text-white transition-all">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-24">
                <div className="section-header">
                  <h3 className="section-title">Habari Zinazohusiana</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2).map(p => (
                    <NewsCard key={p.id} post={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};
