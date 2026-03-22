import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data';
import { Sidebar } from '../components/News';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

export const PostDetail = () => {
  const { id } = useParams();
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Makala haikupatikana</h2>
        <Link to="/" className="text-tz-green hover:underline mt-4 inline-block">Rudi Mwanzo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Rudi Mwanzo
          </Link>

          <article className="glass-card overflow-hidden">
            {post.image && (
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-8 border-b border-neutral-100 pb-6">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-2"><User className="w-4 h-4" /> Admin</span>
                <span className="px-3 py-1 rounded-full bg-tz-green/10 text-tz-green font-bold text-xs uppercase">{post.category}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-display font-bold text-tz-black mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-wrap justify-between items-center gap-6">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-500 text-xs font-medium">
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-tz-blue font-bold hover:bg-tz-blue/5 px-4 py-2 rounded-lg transition-all">
                  <Share2 className="w-4 h-4" /> Sambaza Makala
                </button>
              </div>
            </div>
          </article>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};
