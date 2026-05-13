import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePosts } from '../hooks/usePosts';
import { NewsCard } from '../News';

export const Home = () => {
  const { posts } = usePosts();
  const latestPosts = posts.slice(0, 5);

  return (
    <div className="pt-20 pb-20 bg-black/20 min-h-screen">
      {/* Audio Player */}
      <section className="py-4 flex justify-center mb-12">
        <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
          <audio src="/Maendeleojumuishi.mp3" controls autoPlay loop />
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex justify-center px-4 mb-24">
        <div className="w-full max-w-lg bg-blue-900/30 backdrop-blur-xl p-10 rounded-[40px] border border-blue-500/30 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <span className="inline-block px-6 py-2 bg-blue-600/80 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-lg">
            KARIBU SANA
          </span>
          
          <div className="font-display font-black text-white space-y-4">
            <h1 className="text-4xl tracking-tight">HIZI NI</h1>
            <div className="text-5xl text-brand-gold tracking-tighter drop-shadow-lg">ZAMA MPYA</div>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent my-6" />
            <div className="text-2xl font-light tracking-widest text-white/80">Z A</div>
            <div className="text-4xl tracking-tight">MAENDELEO</div>
            <div className="text-4xl tracking-tight text-white/90">JUMUISHI</div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="w-0.5 h-16 bg-gradient-to-b from-brand-gold to-transparent"></div>
             <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] leading-relaxed">
               SOGEZA CHINI KUPATA<br/>HABARI
             </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold text-white">Habari za Hivi Karibuni</h2>
            <Link to="/nakala" className="nav-link flex items-center gap-2 text-white/80">
              Zote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
