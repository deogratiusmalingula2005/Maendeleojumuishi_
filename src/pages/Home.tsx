import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { POSTS } from '../data';
import { NewsCard } from '../components/News';

export const Home = () => {
  const latestPosts = POSTS.slice(0, 5);

  return (
    <div className="bg-paper pt-64">

      {/* Latest News Section */}
      <section className="py-24 relative overflow-hidden">
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
