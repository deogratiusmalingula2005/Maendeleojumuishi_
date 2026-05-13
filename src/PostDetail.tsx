import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePostById } from '../hooks/usePostById';
import { usePosts } from '../hooks/usePosts';
import { NewsCard } from '../components/News';
import { Quiz } from '../components/Quiz';
import { SocialGallery } from '../components/SocialGallery';
import { Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import FallingDecorations from '../components/FallingDecorations';

export const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading } = usePostById(id);
  const { posts } = usePosts();
  const [showDecorations, setShowDecorations] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading) return <div>Loading...</div>;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Habari Haijapatikana</h2>
          <Link to="/" className="text-emerald-500 font-bold hover:underline">Rudi Nyumbani</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`bg-black/80 min-h-screen text-white pt-20 ${post.font}`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-[101]"
        style={{ scaleX }}
      />
      {showDecorations && <FallingDecorations onComplete={() => setShowDecorations(false)} duration={10000} />}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-2 md:px-8 py-16"
      >
      {/* Article Header */}
      <header className="pb-16 mb-16 border-b border-emerald-500/20 px-2">
        <div className="max-w-4xl mx-auto text-center">
            <Link to={`/category/${post.category.toLowerCase()}`} className="inline-block px-6 py-2 bg-emerald-900/40 text-emerald-300 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-8 border border-emerald-500/20 hover:bg-emerald-800/60 transition-colors">
              {post.category}
            </Link>
          <h1 className="text-3xl md:text-7xl font-display font-black text-white mb-10 leading-[1.05] tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
             <div className="flex items-center gap-3 bg-white/5 px-3 md:px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-brand-navy font-bold text-xs">{post.author.charAt(0)}</div>
                <span className="text-emerald-200/90 text-[10px] md:text-xs font-bold uppercase tracking-widest">{post.author}</span>
             </div>
             <div className="flex items-center gap-3 bg-white/5 px-3 md:px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                 <Calendar className="w-3.5 h-3.5 text-brand-gold"/>
                 <span className="text-emerald-200/90 text-[10px] md:text-xs font-bold uppercase tracking-widest">{post.createdAt.slice(0,10)}</span>
             </div>
             <div className="flex items-center gap-3 bg-white/5 px-3 md:px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                 <Clock className="w-3.5 h-3.5 text-brand-gold"/>
                 <span className="text-emerald-200/90 text-[10px] md:text-xs font-bold uppercase tracking-widest">6 MIN READ</span>
             </div>
          </div>
        </div>
      </header>
      
      <div className="bg-black/40 backdrop-blur-xl p-4 md:p-16 rounded-[20px] md:rounded-[40px] border border-white/5 shadow-2xl">
        
        {/* Article Content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pb-8"
        >
          <div className="w-full mx-auto">
                <div className="mb-8 md:mb-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={post.coverImage || post.image} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-[300px] md:max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-20 text-[9px] md:text-[10px] text-emerald-100/70 uppercase tracking-widest font-bold w-full text-center">
                    Picha: Archive / 2026
                  </div>
                </div>

                <div className="post-content text-lg md:text-xl text-neutral-200 leading-relaxed font-light tracking-wide space-y-6 md:space-y-10">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-3xl md:text-5xl font-black text-white mt-10 md:mt-16 mb-6 md:mb-8 tracking-tight" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-2xl md:text-4xl font-bold text-white mt-8 md:mt-12 mb-4 md:mb-6 tracking-tight border-l-4 border-brand-gold pl-4 md:pl-6" {...props} />,
                      p: ({node, ...props}) => <p className="mb-6 md:mb-8" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 md:pl-8 mb-6 md:mb-8 space-y-2 md:space-y-3 text-neutral-300" {...props} />,
                      li: ({node, ...props}) => <li className="pl-1" {...props} />,
                      strong: ({node, ...props}) => <strong className="bg-brand-gold text-brand-navy px-1.5 py-0.5 rounded font-bold" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-emerald-500 pl-4 md:pl-8 py-4 md:py-6 italic text-emerald-50 bg-gradient-to-r from-emerald-950/30 to-transparent rounded-r-3xl my-6 md:my-10 shadow-lg" {...props} />,
                    }}
                  >{post.content}</ReactMarkdown>
                  {post.category === 'Mengineyo' && post.mediaLinks && <SocialGallery urls={post.mediaLinks} />}
                </div>

                {post.category !== 'CCM' && post.quiz && (
                  <div className="mt-12 md:mt-20 bg-gradient-to-br from-emerald-950/50 to-black/50 rounded-2xl md:rounded-3xl border border-emerald-500/30 p-6 md:p-10 shadow-inner">
                    <Quiz questions={post.quiz} topic={post.title} />
                  </div>
                )}
      </div>
      </motion.div>
      </div>

              {/* Tags & Share */}
              <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6"
              >
                <div className="flex gap-3">
                  {post.tags && post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-5 py-2.5 bg-white/5 rounded-full text-[11px] font-bold text-white uppercase tracking-widest border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 bg-black/40 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Shiriki:</span>
                  <div className="flex gap-4">
                    <Share2 className="w-4 h-4 text-emerald-500 hover:text-white cursor-pointer transition-colors" />
                    <Bookmark className="w-4 h-4 text-emerald-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              <div className="mt-20">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-bold text-white">Maudhui yanayohusiana</h3>
                  <div className="h-1 w-20 bg-brand-gold mx-auto mt-4 rounded-full" />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 bg-black/20 p-10 rounded-[30px] border border-white/5"
                >
                  {posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2).map(p => (
                    <NewsCard key={p.id} post={p} />
                  ))}
                </motion.div>
              </div>
        </motion.div>
      </motion.div>
   );
};
