import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { POSTS } from '../data';
import { NewsCard } from '../components/News';

export const Home = () => {
  const latestPosts = POSTS.slice(0, 5);

  return (
    <div className="bg-transparent pt-64">
      
      {/* YouTube Music Player */}
      <section className="py-4 flex justify-center">
        <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/7zZyGkGN7Sw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Hero Heading Section */}
      <section className="py-12 md:py-20 bg-transparent relative overflow-hidden border-b border-neutral-100 shadow-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-tz-green/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-tz-green via-tz-yellow to-tz-blue opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/80 backdrop-blur-xl p-12 md:p-24 rounded-[60px] border border-white/20 shadow-2xl"
          >
            <span className="inline-block px-6 py-2 bg-neutral-50 border border-neutral-100 rounded-full text-[10px] font-black text-tz-yellow uppercase tracking-[0.4em] mb-12">
              KARIBU SANA
            </span>
            
            <h1 className="text-6xl md:text-[8rem] font-serif font-black text-tz-black tracking-tighter leading-[0.82] uppercase mb-16">
              Hizi ni <br />
              <span className="text-tz-green italic relative">
                Zama Mpya
                <svg className="absolute -bottom-4 left-0 w-full h-8 text-tz-yellow/40 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span> <br />
              <span className="text-2xl md:text-4xl block my-8 text-tz-black font-bold tracking-[0.6em] font-sans">za</span>
              <span className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-tz-black to-tz-black">
                Maendeleo Jumuishi
              </span>
            </h1>

            <div className="flex flex-col items-center gap-6">
              <div className="w-1 h-24 bg-gradient-to-b from-tz-green to-transparent"></div>
              <p className="text-xs font-black text-tz-black uppercase tracking-[0.3em]">Sogeza Chini Kupata Habari</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 relative overflow-hidden bg-transparent">
        <div className="dot-pattern absolute inset-0 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-header">
            <div>
              <h2 className="section-title">Habari za Hivi Karibuni</h2>
              <p className="text-neutral-500 mt-2">Pata taarifa za hivi karibuni kuhusu harakati zetu.</p>
            </div>
            <Link to="/nakala" className="flex items-center gap-2 text-tz-green font-bold hover:gap-4 transition-all">
              Zote <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NewsCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
