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

export const Sera = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
    <div className="text-center text-white mb-16">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Sera Zetu (Policies)</h1>
      <p className="text-xl text-neutral-300 max-w-2xl mx-auto">Misingi ya maendeleo yetu imejikita katika sera zinazogusa maisha ya kila siku ya mwananchi.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {POLICIES.map((policy) => (
        <motion.div 
          key={policy.id}
          whileHover={{ y: -10 }}
          className="glass-card p-8 flex flex-col h-full"
        >
          <div className="w-12 h-12 rounded-xl bg-tz-green/10 flex items-center justify-center text-tz-green mb-6">
            {IconMap[policy.icon]}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-tz-blue mb-2 block">{policy.category}</span>
          <h3 className="text-xl font-bold text-tz-black mb-4">{policy.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed flex-1">{policy.description}</p>
          <button className="mt-8 text-sm font-bold text-tz-green hover:underline">Soma zaidi</button>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Mikakati = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
    <div className="text-center text-white mb-16">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Mikakati ya Utekelezaji</h1>
      <p className="text-xl text-neutral-300 max-w-2xl mx-auto">Mipango madhubuti ya muda mfupi na mrefu kwa ajili ya kuleta mabadiliko ya kweli.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {STRATEGIES.map((strat) => (
        <div key={strat.id} className="glass-card p-10 relative overflow-hidden group">
          <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${strat.color === 'tz-green' ? 'bg-tz-green' : strat.color === 'tz-blue' ? 'bg-tz-blue' : 'bg-tz-yellow'}`}></div>
          <div className={`text-5xl font-display font-bold mb-8 ${strat.color === 'tz-green' ? 'text-tz-green' : strat.color === 'tz-blue' ? 'text-tz-blue' : 'text-tz-yellow'}`}>
            {strat.number}
          </div>
          <h3 className="text-2xl font-bold text-tz-black mb-4">{strat.title}</h3>
          <p className="text-neutral-500 leading-relaxed">{strat.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Ziara = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
    <div className="text-center text-white mb-16">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Ziara na Matukio</h1>
      <p className="text-xl text-neutral-300 max-w-2xl mx-auto">Kufika kila mahali kusikiliza na kuona maendeleo ya wananchi wetu.</p>
    </div>
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>
      <div className="space-y-12">
        {EVENTS.map((event, idx) => (
          <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-tz-green border-4 border-neutral-900 shadow-sm -translate-x-1/2 z-10 hidden md:block"></div>
            <div className="w-full md:w-1/2 px-8">
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-2 text-tz-blue font-bold text-xs mb-3">
                  <MapPin className="w-3 h-3" /> {event.location}
                </div>
                <h3 className="text-xl font-bold text-tz-black mb-3">{event.title}</h3>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{event.description}</p>
                <div className="text-xs font-medium text-neutral-400 flex items-center gap-2">
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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
    <div className="text-center text-white mb-16">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Rekodi Muhimu</h1>
      <p className="text-xl text-neutral-300 max-w-2xl mx-auto">Hifadhi ya nyaraka na kumbukumbu za utendaji kazi kwa ajili ya uwazi.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {RECORDS.map((record) => (
        <div key={record.id} className="glass-card p-8 text-center group hover:bg-tz-black hover:text-white transition-all duration-300">
          <div className="text-4xl font-display font-bold text-tz-green mb-4 group-hover:text-tz-yellow">{record.count}</div>
          <h3 className="text-lg font-bold mb-2">{record.title}</h3>
          <p className="text-xs text-neutral-500 group-hover:text-neutral-400">{record.description}</p>
          <button className="mt-6 px-4 py-2 rounded-lg border border-neutral-200 text-xs font-bold group-hover:border-white/20">Fungua Nyaraka</button>
        </div>
      ))}
    </div>
  </div>
);

export const Vision = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tz-green via-tz-yellow to-tz-blue"></div>
      <Eye className="w-16 h-16 text-tz-blue mx-auto mb-10" />
      <h1 className="text-4xl md:text-7xl font-display font-bold text-tz-black mb-12 italic">Dira Yetu (Our Vision)</h1>
      <p className="text-2xl md:text-4xl text-neutral-600 max-w-5xl mx-auto leading-relaxed font-light mb-16">
        "Kujenga Tanzania ambapo kila mwananchi, bila kujali asili yake, ana fursa sawa ya kufanikiwa na kuchangia katika ustawi wa taifa letu kupitia uongozi bora na maendeleo jumuishi."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        <div className="space-y-4">
          <h4 className="font-bold text-tz-green text-xl">Umoja</h4>
          <p className="text-sm text-neutral-500">Kuunganisha nguvu za kila mwananchi bila ubaguzi wa itikadi, dini au kabila.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-tz-blue text-xl">Haki</h4>
          <p className="text-sm text-neutral-500">Kuhakikisha mifumo ya kisheria na kijamii inatoa haki sawa kwa wote.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-tz-yellow text-xl">Maendeleo</h4>
          <p className="text-sm text-neutral-500">Kukuza uchumi unaogusa maisha ya watu wa hali ya chini kabisa.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="glass-card overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
      <div className="md:w-1/3 bg-tz-green p-12 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold mb-6">Wasiliana Nasi</h2>
          <p className="text-white/80 mb-12">Tunaomba maoni yako au maswali yoyote uliyo nayo kuhusu jukwaa hili.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span>info@maendeleojumuishi.tz</span>
            </div>
            <div className="flex items-center gap-4">
              <Twitter className="w-6 h-6" />
              <span>@MaendeleoTZ</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-12">
          <Github className="w-5 h-5 opacity-50" />
          <Linkedin className="w-5 h-5 opacity-50" />
        </div>
      </div>
      <div className="md:w-2/3 p-12">
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Jina Kamili</label>
              <input type="text" className="w-full px-4 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-tz-green/20" placeholder="Jina lako..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Barua Pepe</label>
              <input type="email" className="w-full px-4 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-tz-green/20" placeholder="email@mfano.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Ujumbe</label>
            <textarea rows={5} className="w-full px-4 py-4 rounded-xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-tz-green/20 resize-none" placeholder="Andika ujumbe wako hapa..."></textarea>
          </div>
          <button className="w-full bg-tz-black text-white py-5 rounded-xl font-bold hover:bg-neutral-800 transition-all shadow-xl">
            Tuma Ujumbe
          </button>
        </form>
      </div>
    </div>
  </div>
);

export const CategoryPage = ({ category, title, description }: { category: string, title: string, description: string }) => {
  const filteredPosts = POSTS.filter(post => post.category === category);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <div className="text-center text-white mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{title}</h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">{description}</p>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 text-center text-neutral-500">
          Hakuna makala zilizopatikana katika kundi hili kwa sasa.
        </div>
      )}
    </div>
  );
};

export const Kiuchumi = () => <CategoryPage category="Kiuchumi" title="Uchumi na Maendeleo" description="Uchambuzi wa kina wa hali ya uchumi na mikakati ya kukuza kipato cha mwananchi." />;
export const Kisiasa = () => <CategoryPage category="Kisiasa" title="Siasa na Uongozi" description="Habari na uchambuzi wa masuala ya kisiasa na uongozi bora nchini Tanzania." />;
export const Kijamii = () => <CategoryPage category="Kijamii" title="Masuala ya Jamii" description="Maendeleo ya kijamii, afya, elimu na ustawi wa kila mwananchi." />;
export const Diplomatic = () => <CategoryPage category="Diplomatic" title="Diplomasia na Uhusiano" description="Tanzania katika jukwaa la kimataifa na uhusiano wetu na mataifa mengine." />;
export const Nakala = () => <CategoryPage category="Nakala" title="Nakala na Nyaraka" description="Mkusanyiko wa nakala, ripoti na nyaraka muhimu za maendeleo." />;
