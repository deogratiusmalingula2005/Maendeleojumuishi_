import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { POSTS } from '../data';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="w-12 h-12 bg-tz-green/60 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-tz-green/20">
      <span className="text-white font-black text-2xl tracking-tighter">M</span>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-display font-black text-tz-black leading-none tracking-tight">MAENDELEO</span>
      <span className="text-[11px] font-bold text-tz-green tracking-[0.3em] leading-none mt-1.5 opacity-80">JUMUISHI</span>
    </div>
  </Link>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Nyumbani', path: '/' },
    { name: 'Kiuchumi', path: '/kiuchumi' },
    { name: 'Kisiasa', path: '/kisiasa' },
    { name: 'Kijamii', path: '/kijamii' },
    { name: 'Sera', path: '/sera' },
    { name: 'Mikakati', path: '/mikakati' },
    { name: 'Mengineyo', path: '/mengineyo' },
    { name: 'Mawasiliano', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/60 backdrop-blur-xl shadow-lg' : 'bg-white/30 backdrop-blur-lg'
      }`}
    >
      {/* Top Row: Navigation Links (Visible on all devices) */}
      <div className={`border-b border-neutral-100 bg-white transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-start lg:justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-extrabold transition-all duration-300 rounded-xl uppercase tracking-[0.1em] whitespace-nowrap shadow-sm hover:shadow-md active:scale-95 ${
                  location.pathname === item.path 
                    ? 'bg-tz-green/80 text-white shadow-tz-green/20' 
                    : 'bg-white/20 text-tz-black hover:bg-white/40 border border-white/10 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Row: Logo & Brand */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between lg:justify-center items-center relative transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}>
        <div className={`transition-transform duration-500 origin-center ${
          isScrolled ? 'scale-90' : 'scale-110'
        }`}>
          <Logo />
        </div>

        {/* Mobile Menu Toggle (Keep for extra links if needed) */}
        <button 
          className="lg:hidden p-2 rounded-xl transition-colors text-tz-black hover:bg-neutral-100 absolute right-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 bg-white z-[110] flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-neutral-100">
              <Logo />
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-3 rounded-2xl bg-neutral-50 text-tz-black hover:bg-neutral-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 px-8 py-12 space-y-6 overflow-y-auto">
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em] mb-8">Kurasa Kuu</p>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-4xl font-display font-bold transition-colors ${
                      location.pathname === item.path ? 'text-tz-green' : 'text-tz-black hover:text-tz-green'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-10 bg-neutral-50 flex flex-col items-center gap-8">
              <div className="flex gap-8">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <Icon key={i} className="w-6 h-6 text-neutral-400 hover:text-tz-green cursor-pointer transition-colors" />
                ))}
              </div>
              <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">© 2026 MAENDELEO JUMUISHI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Patriotic Marquee */}
      <div className="w-full bg-tz-black overflow-hidden py-3 border-y border-white/5 relative marquee-glow">
        {/* Premium Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-tz-green/10 via-tz-blue/10 to-tz-yellow/10 opacity-40"></div>
        
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee-patriotic flex items-center gap-12 px-6" style={{ animationDuration: '25s' }}>
            <span className="text-white font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-yellow font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-green font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-blue font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="animate-marquee-patriotic flex items-center gap-12 px-6" style={{ animationDuration: '25s' }} aria-hidden="true">
            <span className="text-white font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-yellow font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-green font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
            <span className="text-tz-blue font-black text-sm md:text-base tracking-widest uppercase text-neon-tz">
              🇹🇿 Ninaamini katika zama mpya za maendeleo Jumuishi 🇹🇿
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-tz-black/60 backdrop-blur-xl text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-4">
          <div className="mb-8">
            <Logo />
          </div>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Kujenga Tanzania ya kesho kupitia uongozi bora, uwazi, na maendeleo jumuishi kwa kila mwananchi.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-tz-green hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-tz-yellow mb-8">Kurasa</h4>
          <ul className="space-y-4">
            {['Kiuchumi', 'Kisiasa', 'Kijamii', 'Sera', 'Mikakati', 'Mengineyo'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase() === 'sera' ? 'sera' : item.toLowerCase() === 'mikakati' ? 'mikakati' : item.toLowerCase()}`} className="text-white/60 hover:text-tz-green transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-widest text-tz-yellow mb-8">Msaada</h4>
          <ul className="space-y-4">
            {['Dira Yetu', 'Sera Zetu', 'Wasiliana Nasi', 'Msaada'].map((item) => (
              <li key={item}>
                <Link to="/contact" className="text-white/60 hover:text-tz-green transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-tz-yellow mb-8">Wasiliana Nasi</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/60">
              <Mail className="w-5 h-5 text-tz-green" />
              <span>info@maendeleojumuishi.or.tz</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Phone className="w-5 h-5 text-tz-green" />
              <span>+255 123 456 789</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <MapPin className="w-5 h-5 text-tz-green" />
              <span>Dodoma, Tanzania</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} MAENDELEO JUMUISHI. Haki zote zimehifadhiwa.
        </p>
        <div className="flex gap-8 text-sm text-white/40">
          <Link to="#" className="hover:text-white transition-colors">Vigezo na Masharti</Link>
          <Link to="#" className="hover:text-white transition-colors">Sera ya Faragha</Link>
        </div>
      </div>
    </div>
  </footer>
);

