import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from './Layout';

const Footer = () => {
    return (
        <footer className="relative bg-black/60 backdrop-blur-3xl text-neutral-200 py-20 px-6 border-t border-white/10 overflow-hidden">
            {/* Cinematic Background Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative max-w-4xl mx-auto space-y-16">
                
                {/* Logo + Mission */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-emerald-500/30 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-3 mb-4">
                        <div className="bg-white p-1 rounded-xl shadow-lg shadow-brand-gold/20 mr-3">
                            <img src="/Logo.png" alt="Logo" className="w-10 h-10 object-contain" fetchpriority="high" />
                        </div>
                        <h2 className="text-xl font-black text-white tracking-tight">MAENDELEO <span className='text-brand-gold'>JUMUISHI</span></h2>
                    </div>
                    <p className="relative text-neutral-300 leading-relaxed text-sm font-light tracking-wide">
                        Ninaposema kuwa ninaamini katika zama mpya za maendeleo jumuishi, ninamaanisha kuwa ni maendeleo yanayojengwa juu ya usawa wa fursa, ushiriki wa wananchi katika maamuzi, na matumizi bora ya rasilimali, maarifa na teknolojia. <span className='text-brand-gold font-bold'>Maendeleo sio tu faida kwa wachache pekee,</span> bali ni yanayojumuisha ustawi wa pamoja unaolenga kuinua maisha ya jamii nzima kwa njia endelevu na yenye haki.
                    </p>
                </motion.div>

                {/* Kurasa */}
                <div>
                    <h3 className="text-brand-gold font-bold mb-8 tracking-[0.2em] text-xs uppercase flex items-center gap-4">
                        <span className="h-px bg-white/20 flex-1"></span>
                        Kurasa
                        <span className="h-px bg-white/20 flex-1"></span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {NAV_ITEMS.map((item, index) => {
                                const getColorClasses = (index: number) => {
                                    const variants = [
                                        'bg-emerald-950/30 border-emerald-500/30 text-emerald-100 hover:bg-emerald-900/50',
                                        'bg-blue-950/30 border-blue-500/30 text-blue-100 hover:bg-blue-900/50',
                                        'bg-purple-950/30 border-purple-500/30 text-purple-100 hover:bg-purple-900/50',
                                        'bg-red-950/30 border-red-500/30 text-red-100 hover:bg-red-900/50',
                                        'bg-yellow-950/30 border-yellow-500/30 text-yellow-100 hover:bg-yellow-900/50',
                                        'bg-pink-950/30 border-pink-500/30 text-pink-100 hover:bg-pink-900/50',
                                        'bg-orange-950/30 border-orange-500/30 text-orange-100 hover:bg-orange-900/50',
                                        'bg-cyan-950/30 border-cyan-500/30 text-cyan-100 hover:bg-cyan-900/50',
                                        'bg-indigo-950/30 border-indigo-500/30 text-indigo-100 hover:bg-indigo-900/50',
                                        'bg-lime-950/30 border-lime-500/30 text-lime-100 hover:bg-lime-900/50',
                                        'bg-fuchsia-950/30 border-fuchsia-500/30 text-fuchsia-100 hover:bg-fuchsia-900/50',
                                    ];
                                    return variants[index % variants.length];
                                };
                                return (
                                    <motion.div key={item.path} whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link 
                                            to={item.path} 
                                            className={`block p-4 text-center text-xs font-bold transition-all duration-300 shadow-lg rounded-xl border ${getColorClasses(index)}`}
                                        >
                                            {item.name.toUpperCase()}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>

                {/* Mawasiliano */}
                <div>
                    <h3 className="text-brand-gold font-bold mb-8 tracking-[0.2em] text-xs uppercase flex items-center gap-4">
                        <span className="h-px bg-white/20 flex-1"></span>
                        Mawasiliano
                        <span className="h-px bg-white/20 flex-1"></span>
                    </h3>
                    <div className="flex justify-center gap-6 mb-8">
                        <motion.a 
                            href="https://www.instagram.com/deogratius_malingula?igsh=YmZ5MmFlaHdwOW1m"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="bg-white/5 p-4 rounded-full border border-white/10 hover:border-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.3)] transition-all"
                        >
                            <Instagram className="text-[#E1306C] w-6 h-6" />
                        </motion.a>
                        <motion.a 
                            href="https://www.facebook.com/share/1D1YSu3W5y/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="bg-white/5 p-4 rounded-full border border-white/10 hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] transition-all"
                        >
                            <Facebook className="text-[#1877F2] w-6 h-6" />
                        </motion.a>
                        <motion.a 
                            href="https://wa.me/255626425950"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="bg-white/5 p-4 rounded-full border border-white/10 hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
                        >
                            <MessageCircle className="text-[#25D366] w-6 h-6" />
                        </motion.a>
                    </div>
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center justify-center gap-3 hover:border-brand-gold/50 transition-all font-light"
                    >
                        <MapPin className="text-brand-gold w-5 h-5" />
                        <span className="text-sm">Arusha, Tanzania</span>
                    </motion.div>
                </div>

                {/* Footer Credits */}
                <div className="text-center pt-8 border-t border-white/5 space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                        DESIGNED BY <span className="text-brand-gold font-bold">DEOGRATIUS J MALINGULA</span>
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto" />
                    <p className="text-[9px] text-neutral-600 tracking-widest uppercase">
                        COPYRIGHT © 2026 MAENDELEO JUMUISHI
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
