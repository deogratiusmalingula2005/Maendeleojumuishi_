import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const NewsCard: React.FC<{ post: Post }> = ({ post }) => (
  <article className="news-card group flex flex-col h-full">
    {post.image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-tz-green text-white text-[10px] font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>
    )}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
      </div>
      <h3 className="text-xl font-bold text-tz-black mb-3 group-hover:text-tz-green transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-neutral-500 mb-6 line-clamp-3 leading-relaxed">
        {post.preview}
      </p>
      <div className="mt-auto pt-4 border-t border-neutral-50 flex justify-between items-center">
        <Link 
          to={`/post/${post.id}`} 
          className="flex items-center gap-2 text-sm font-bold text-tz-green hover:gap-3 transition-all"
        >
          Soma zaidi <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="flex gap-1">
          {post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] text-neutral-400 flex items-center gap-0.5">
              <Tag className="w-2 h-2" /> {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

export const Sidebar = () => (
  <aside className="space-y-8">
    <div className="sidebar-card">
      <h4 className="text-lg font-bold text-tz-black mb-6 border-b border-neutral-100 pb-2">Trending Topics</h4>
      <ul className="space-y-4">
        {['Uongozi wa Vijana', 'Uchumi wa Viwanda', 'Mageuzi ya Elimu', 'Haki za Binadamu', 'Teknolojia Tanzania'].map((topic, i) => (
          <li key={i} className="flex items-center gap-3 group cursor-pointer">
            <span className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-500 group-hover:bg-tz-green group-hover:text-white transition-colors">
              {i + 1}
            </span>
            <span className="text-sm text-neutral-600 group-hover:text-tz-green transition-colors">{topic}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="sidebar-card bg-gradient-to-br from-tz-blue to-tz-black text-white">
      <h4 className="text-lg font-bold mb-4">Jiunge na Harakati</h4>
      <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
        Kuwa wa kwanza kupata habari, sera mpya na ratiba za ziara moja kwa moja kwenye barua pepe yako.
      </p>
      <form className="space-y-3">
        <input 
          type="email" 
          placeholder="Barua pepe yako..." 
          className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-tz-yellow/50"
        />
        <button className="w-full bg-tz-yellow text-tz-black py-2.5 rounded-lg text-sm font-bold hover:bg-tz-yellow/90 transition-colors">
          Jiunge Sasa
        </button>
      </form>
    </div>

    <div className="sidebar-card">
      <h4 className="text-lg font-bold text-tz-black mb-6 border-b border-neutral-100 pb-2">Quick Links</h4>
      <div className="grid grid-cols-2 gap-3">
        {['Sera', 'Hotuba', 'Ziara', 'Rekodi', 'Vision', 'Contact'].map(link => (
          <Link 
            key={link} 
            to={`/${link.toLowerCase()}`}
            className="px-3 py-2 rounded-lg bg-neutral-50 text-xs font-semibold text-neutral-600 hover:bg-tz-green/10 hover:text-tz-green transition-all text-center"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  </aside>
);
