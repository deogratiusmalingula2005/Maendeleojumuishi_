import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { POSTS, POLICIES } from '../data';
import { NewsCard, Sidebar } from '../components/News';

export const Home = () => {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1920" 
            alt="Tanzania Landscape" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tz-black/80 via-tz-black/40 to-tz-black/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-tz-blue/20 text-tz-blue text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                Uongozi wa Kisasa
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                Karibu katika zama mpya za <span className="tz-gradient-text">maendeleo Jumuishi</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
                Tunaamini katika uongozi unaojali kila mwananchi. Maendeleo ni jukwaa la kimkakati linalolenga kujenga Tanzania imara kupitia sera bora na mipango madhubuti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/sera" className="flex items-center justify-center gap-2 bg-tz-green text-white px-8 py-4 rounded-2xl font-bold hover:bg-tz-green/90 transition-all shadow-xl shadow-tz-green/20">
                  Angalia Sera <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/hotuba" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                  Soma Hotuba
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-card p-8">
              <div className="flex justify-between items-center mb-8 border-b border-neutral-100 pb-4">
                <h2 className="text-2xl font-display font-bold text-tz-black">Habari na Makala za Hivi Karibuni</h2>
                <Link to="/hotuba" className="text-sm font-bold text-tz-blue hover:underline flex items-center gap-1">
                  Zote <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {POSTS.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Key Policies Preview */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold text-tz-black mb-8">Sera Muhimu</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {POLICIES.slice(0, 4).map((policy) => (
                  <div key={policy.id} className="p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-md transition-all">
                    <h3 className="font-bold text-tz-black mb-2">{policy.title}</h3>
                    <p className="text-xs text-neutral-500 mb-4 line-clamp-2">{policy.description}</p>
                    <Link to="/sera" className="text-xs font-bold text-tz-green hover:underline">Soma zaidi</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </section>
    </div>
  );
};
