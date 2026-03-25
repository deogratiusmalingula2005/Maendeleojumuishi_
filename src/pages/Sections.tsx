import React from 'react';
import { motion } from 'motion/react';
import { POSTS, POLICIES, STRATEGIES, EVENTS, RECORDS } from '../data';
import { GraduationCap, Cpu, HeartPulse, Sprout, MapPin, Clock, FileText, Database, Eye, Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { NewsCard } from '../components/News';

const IconMap: any = {
  'graduation-cap': <GraduationCap className="w-6 h-6" />,
  'cpu': <Cpu className="w-6 h-6" />,
  'heart-pulse': <HeartPulse className="w-6 h-6" />,
  'sprout': <Sprout className="w-6 h-6" />,
};

export const CategoryPage = ({ category, title, description, pt = "pt-64" }: { category: string, title: string, description: string, pt?: string }) => {
  const filteredPosts = POSTS.filter(post => post.category === category);
  
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${pt} pb-20 space-y-12 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16`}>
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1 bg-tz-yellow/10 text-tz-yellow text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Mageuzi {category}</span>
        <h1 className="text-4xl md:text-6xl font-serif font-black text-tz-black mb-6 tracking-tight">{title}</h1>
        <p className="text-xl text-tz-black max-w-2xl mx-auto font-bold leading-relaxed">{description}</p>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="glass-card p-20 text-center text-neutral-400 font-serif italic text-xl">
          Hakuna makala zilizopatikana katika kundi hili kwa sasa.
        </div>
      )}
    </div>
  );
};

export const Ziara = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-20 space-y-12 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16">
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-1 bg-tz-yellow/10 text-tz-yellow text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Ziara na Matukio</span>
      <h1 className="text-4xl md:text-6xl font-serif font-black text-tz-black mb-6 tracking-tight">Ziara na Matukio</h1>
      <p className="text-xl text-tz-black max-w-2xl mx-auto font-bold leading-relaxed">Kufika kila mahali kusikiliza na kuona maendeleo ya wananchi wetu.</p>
    </div>
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-100 -translate-x-1/2 hidden md:block"></div>
      <div className="space-y-12">
        {EVENTS.map((event, idx) => (
          <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-tz-green border-4 border-white shadow-sm -translate-x-1/2 z-10 hidden md:block"></div>
            <div className="w-full md:w-1/2 px-8">
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 border-l-4 border-tz-green"
              >
                <div className="flex items-center gap-2 text-tz-green font-bold text-[10px] uppercase tracking-widest mb-3">
                  <MapPin className="w-3 h-3" /> {event.location}
                </div>
                <h3 className="text-xl font-serif font-bold text-tz-black mb-3 leading-tight">{event.title}</h3>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed font-light">{event.description}</p>
                <div className="text-[10px] font-bold text-neutral-400 flex items-center gap-2 uppercase tracking-widest">
                  <Clock className="w-3 h-3" /> {event.date}
                </div>
              </motion.div>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Rekodi = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-20 space-y-12 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16">
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-1 bg-tz-yellow/10 text-tz-yellow text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Rekodi na Nyaraka</span>
      <h1 className="text-4xl md:text-6xl font-serif font-black text-tz-black mb-6 tracking-tight">Rekodi Muhimu</h1>
      <p className="text-xl text-tz-black max-w-2xl mx-auto font-bold leading-relaxed">Hifadhi ya nyaraka na kumbukumbu za utendaji kazi kwa ajili ya uwazi.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {RECORDS.map((record) => (
        <div key={record.id} className="glass-card p-8 text-center group hover:bg-tz-green hover:text-white transition-all duration-500 border-b-4 border-transparent hover:border-tz-black">
          <div className="text-5xl font-serif font-black text-tz-green mb-4 group-hover:text-white transition-colors tracking-tighter">{record.count}</div>
          <h3 className="text-lg font-serif font-bold mb-2 leading-tight">{record.title}</h3>
          <p className="text-xs text-neutral-500 group-hover:text-white/70 font-light mb-6">{record.description}</p>
          <button className="btn-outline w-full py-3 text-xs">Fungua Nyaraka</button>
        </div>
      ))}
    </div>
  </div>
);

export const Vision = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-20 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16">
    <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden border-t-8 border-tz-green">
      <div className="absolute top-0 left-0 w-full h-1 bg-tz-green/20"></div>
      <Eye className="w-16 h-16 text-tz-green mx-auto mb-10" />
      <h1 className="text-4xl md:text-7xl font-serif font-black text-tz-black mb-12 italic tracking-tighter">Dira Yetu (Our Vision)</h1>
      <p className="text-2xl md:text-4xl text-tz-black max-w-5xl mx-auto leading-relaxed font-bold mb-16 italic">
        "Kujenga Tanzania ambapo kila mwananchi, bila kujali asili yake, ana fursa sawa ya kufanikiwa na kuchangia katika ustawi wa taifa letu kupitia uongozi bora na maendeleo jumuishi."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12 border-t border-neutral-100">
        <div className="space-y-4">
          <h4 className="font-serif font-black text-tz-green text-xl tracking-tight">Umoja</h4>
          <p className="text-sm text-tz-black font-bold leading-relaxed">Kuunganisha nguvu za kila mwananchi bila ubaguzi wa itikadi, dini au kabila.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif font-black text-tz-green text-xl tracking-tight">Haki</h4>
          <p className="text-sm text-tz-black font-bold leading-relaxed">Kuhakikisha mifumo ya kisheria na kijamii inatoa haki sawa kwa wote.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-serif font-black text-tz-green text-xl tracking-tight">Maendeleo</h4>
          <p className="text-sm text-tz-black font-bold leading-relaxed">Kukuza uchumi unaogusa maisha ya watu wa hali ya chini kabisa.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 pb-20 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16">
    <div className="glass-card overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl">
      <div className="md:w-1/3 bg-tz-black p-12 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-tz-green/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-black mb-6 tracking-tight">Wasiliana Nasi</h2>
          <p className="text-white/80 mb-12 font-bold leading-relaxed">Tunaomba maoni yako au maswali yoyote uliyo nayo kuhusu jukwaa hili.</p>
          <div className="space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-tz-green transition-colors">
                <Mail className="w-5 h-5 text-tz-yellow" />
              </div>
              <span className="text-sm font-bold tracking-wider">maendeleojumuishitz@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-tz-green transition-colors">
                <Twitter className="w-5 h-5 text-tz-yellow" />
              </div>
              <span className="text-sm font-bold tracking-wider">@MaendeleoTZ</span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-12 relative z-10">
          <Twitter className="w-5 h-5 text-white/30 hover:text-white transition-colors cursor-pointer" />
          <Linkedin className="w-5 h-5 text-white/30 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
      <div className="md:w-2/3 p-12 md:p-20 bg-white">
        <form className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Jina Kamili</label>
              <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 focus:outline-none focus:border-tz-green transition-all text-lg font-serif" placeholder="Jina lako..." />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Barua Pepe</label>
              <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 focus:outline-none focus:border-tz-green transition-all text-lg font-serif" placeholder="email@mfano.com" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Ujumbe</label>
            <textarea rows={4} className="w-full px-0 py-4 bg-transparent border-b border-neutral-200 focus:outline-none focus:border-tz-green transition-all text-lg font-serif resize-none" placeholder="Andika ujumbe wako hapa..."></textarea>
          </div>
          <button className="btn-green w-full md:w-auto">
            Tuma Ujumbe
          </button>
        </form>
      </div>
    </div>
  </div>
);

export const Kiuchumi = () => (
  <>
    {/* YouTube Music Player - Aligned with Home Page */}
    <section className="py-4 flex justify-center pt-64">
      <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
        <iframe
          width="320"
          height="180"
          src="https://www.youtube.com/embed/fw2y4pwJ_0A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <CategoryPage pt="pt-12" category="Kiuchumi" title="Uchumi na Maendeleo" description="Uchambuzi wa kina wa hali ya uchumi na mikakati ya kukuza kipato cha mwananchi." />
  </>
);
export const Kisiasa = () => (
  <>
    {/* YouTube Music Player - Aligned with Home Page */}
    <section className="py-4 flex justify-center pt-64">
      <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
        <iframe
          width="320"
          height="180"
          src="https://www.youtube.com/embed/IjijfU7Rdck"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <CategoryPage pt="pt-12" category="Kisiasa" title="Siasa na Uongozi" description="Habari na uchambuzi wa masuala ya kisiasa na uongozi bora nchini Tanzania." />
  </>
);
export const Kijamii = () => <CategoryPage category="Kijamii" title="Masuala ya Jamii" description="Maendeleo ya kijamii, afya, elimu na ustawi wa kila mwananchi." />;
export const SeraPage = () => <CategoryPage category="Sera" title="Sera na Dira" description="Misingi ya maendeleo yetu imejikita katika sera zinazogusa maisha ya kila siku ya mwananchi." />;
export const MikakatiPage = () => <CategoryPage category="Mikakati" title="Mikakati ya Mageuzi" description="Mipango madhubuti ya muda mfupi na mrefu kwa ajili ya kuleta mabadiliko ya kweli." />;
export const Mengineyo = () => {
  const mainCategories = ['Kiuchumi', 'Kisiasa', 'Kijamii', 'Sera', 'Mikakati', 'CCM'];
  const filteredPosts = POSTS.filter(post => !mainCategories.includes(post.category));
  
  return (
    <>
      {/* Instagram Post - Aligned with Home Page */}
      <section className="py-4 flex justify-center pt-64">
        <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
          <iframe
            width="320"
            height="400"
            src="https://www.instagram.com/p/DV4L-_-DIgJ/embed"
            title="Instagram Post"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 space-y-12 bg-white/80 backdrop-blur-md rounded-[40px] my-12 shadow-2xl border border-white/20 p-8 md:p-16">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-tz-yellow/10 text-tz-yellow text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Mageuzi Mengineyo</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-tz-black mb-6 tracking-tight">Mengineyo</h1>
          <p className="text-xl text-tz-black max-w-2xl mx-auto font-bold leading-relaxed">Habari na uchambuzi wa masuala mbalimbali yanayohusu maendeleo ya taifa letu.</p>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-20 text-center text-neutral-400 font-serif italic text-xl">
            Hakuna makala zilizopatikana katika kundi hili kwa sasa.
          </div>
        )}
      </div>
    </>
  );
};
export const Kiteknolojia = () => <CategoryPage category="Kiteknolojia" title="Teknolojia na Ubunifu" description="Mageuzi ya kidijitali na matumizi ya teknolojia kwa maendeleo ya taifa." />;
export const Diplomatic = () => <CategoryPage category="Diplomatic" title="Diplomasia na Uhusiano" description="Tanzania katika jukwaa la kimataifa na uhusiano wetu na mataifa mengine." />;
export const Nakala = () => <CategoryPage category="Nakala" title="Nakala na Nyaraka" description="Mkusanyiko wa nakala, ripoti na nyaraka muhimu za maendeleo." />;
export const CCM = () => (
  <>
    {/* Instagram Reel - Aligned with Home Page */}
    <section className="py-4 flex justify-center pt-64">
      <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl">
        <iframe
          width="320"
          height="400"
          src="https://www.instagram.com/reel/DN9-_E1iPQo/embed"
          title="Instagram Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <CategoryPage pt="pt-12" category="CCM" title="Chama Cha Mapinduzi (CCM)" description="Habari, sera na misingi ya Chama Cha Mapinduzi." />
  </>
);
