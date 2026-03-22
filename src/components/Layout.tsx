import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Logo = ({ showText = true }: { showText?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-tz-green rounded-full opacity-20 animate-pulse"></div>
      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-tz-green">
        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="4" className="text-tz-green" />
        <circle cx="50" cy="50" r="15" className="fill-tz-yellow" />
        <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="4" className="text-tz-blue" />
      </svg>
    </div>
    {showText && (
      <span className="font-display font-bold text-xl tracking-tight text-white md:text-tz-black md:group-scrolled:text-tz-black">
        Maendeleo <span className="text-tz-green">Jumuishi</span>
      </span>
    )}
  </div>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Nyumbani', path: '/' },
    { name: 'Kiuchumi', path: '/kiuchumi' },
    { name: 'Kisiasa', path: '/kisiasa' },
    { name: 'Kijamii', path: '/kijamii' },
    { name: 'Diplomatic', path: '/diplomatic' },
    { name: 'Sera', path: '/sera' },
    { name: 'Nakala', path: '/nakala' },
    { name: 'Contacts', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-tz-green font-bold' 
                    : scrolled ? 'text-neutral-600 hover:text-tz-green' : 'text-white hover:text-tz-yellow'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative ml-4">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${scrolled ? 'text-neutral-400' : 'text-white/70'}`} />
              <input 
                type="text" 
                placeholder="Tafuta..." 
                className={`pl-10 pr-4 py-1.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-tz-green/20 w-40 transition-all ${
                  scrolled ? 'bg-neutral-100 border-transparent' : 'bg-white/10 border-white/20 text-white placeholder-white/50'
                }`}
              />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-neutral-600' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-100 absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-semibold py-2 border-b border-neutral-50 ${
                  location.pathname === item.path ? 'text-tz-green' : 'text-neutral-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Tafuta..." 
                className="w-full pl-10 pr-4 py-3 bg-neutral-100 border-transparent rounded-xl text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-white border-t border-neutral-100 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="pt-8 border-t border-neutral-50">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()}. Designed by <span className="text-tz-green font-bold">Deogratius Malingula</span>
        </p>
      </div>
    </div>
  </footer>
);

export const Marquee = () => (
  <div className="bg-tz-black text-tz-yellow py-3 overflow-hidden border-b border-tz-yellow/20 relative z-40">
    <div className="animate-marquee whitespace-nowrap">
      <span className="mx-12 text-sm font-display font-medium italic uppercase tracking-[0.2em]">
        "Ninaamini katika zama mpya za maendeleo jumuishi" — Maendeleo Jumuishi Platform
      </span>
      <span className="mx-12 text-sm font-display font-medium italic uppercase tracking-[0.2em]">
        "Ninaamini katika zama mpya za maendeleo jumuishi" — Maendeleo Jumuishi Platform
      </span>
      <span className="mx-12 text-sm font-display font-medium italic uppercase tracking-[0.2em]">
        "Ninaamini katika zama mpya za maendeleo jumuishi" — Maendeleo Jumuishi Platform
      </span>
    </div>
  </div>
);
