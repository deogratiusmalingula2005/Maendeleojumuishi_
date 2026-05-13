import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from './Footer';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group relative">
    <img src="/Logo.png" alt="Logo" className="w-12 h-12 object-contain" />
    <div className="flex flex-col">
      <span className="text-xl font-display font-black text-white leading-none tracking-tight">MAENDELEO</span>
      <span className="text-[11px] font-bold text-white/80 tracking-[0.3em] leading-none mt-1.5 opacity-80">JUMUISHI</span>
    </div>
  </Link>
);

export const NAV_ITEMS = [
  { name: 'Nyumbani', path: '/' },
  { name: 'Kisiasa', path: '/kisiasa' },
  { name: 'Kijamii', path: '/kijamii' },
  { name: 'Sera na Hoja', path: '/seranahojapage' },
  { name: 'Hotuba', path: '/hotuba' },
  { name: 'Mikakati', path: '/mikakati' },
  { name: 'Videos', path: '/videos' },
  { name: 'Miradi ya jamii', path: '/miradi' },
  { name: 'Maktaba', path: '/maktaba' },
  { name: 'Mawasiliano', path: '/contact' },
  { name: 'Mengineyo', path: '/mengineyo' },
  { name: 'CCM', path: '/ccm' },
];

const Marquee = () => (
  <div className="w-full overflow-hidden z-40 bg-transparent py-1">
    <div className="mx-auto w-[95%] px-6">
      <div className="animate-marquee-gold flex whitespace-nowrap gap-16 hover:[animation-play-state:paused]">
        <span className="text-brand-gold font-bold text-xs tracking-widest drop-shadow-md">
          Ninaamini katika zama mpya za maendeleo jumuishi🇹🇿
        </span>
      </div>
    </div>
  </div>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-2xl bg-blue-900/40 border-b border-blue-500/20 shadow-[0_10px_30px_rgba(30,58,138,0.3)] transition-all duration-500 hover:bg-blue-900/50">
      <Marquee />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border-t border-white/5">
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.slice(0, 6).map((item, index) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="relative px-3 py-2 text-[11px] font-bold text-white/70 hover:text-brand-gold transition-all duration-300 group"
            >
              <span className="relative z-10">{item.name.toUpperCase()}</span>
              <motion.div 
                className="absolute inset-0 bg-white/5 rounded-full -z-0 opacity-0 group-hover:opacity-100"
                layoutId="nav-bg"
              />
              {location.pathname === item.path && (
                <motion.div className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold" layoutId="nav-underline" />
              )}
            </Link>
          ))}
        </nav>

        <button 
          className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-blue-950/90 backdrop-blur-xl border-t border-blue-500/20 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-display font-medium text-white/80 hover:text-brand-gold transition-colors ${location.pathname === item.path ? 'text-brand-gold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { default as Footer } from './Footer';



