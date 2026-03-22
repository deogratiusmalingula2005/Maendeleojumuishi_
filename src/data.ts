import { Post, Policy, Strategy, Event, RecordItem } from './types';

export const POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'Mustakabali wa Vijana katika Siasa za Tanzania',
    date: 'Machi 15, 2026',
    category: 'Kisiasa',
    preview: 'Leo tunasimama katika kizingiti cha mabadiliko makubwa. Vijana si viongozi wa kesho tu, bali ni nguvu kazi ya leo inayopaswa kushiriki kikamilifu katika maamuzi...',
    content: 'Leo tunasimama katika kizingiti cha mabadiliko makubwa. Vijana si viongozi wa kesho tu, bali ni nguvu kazi ya leo inayopaswa kushiriki kikamilifu katika maamuzi ya taifa letu. Maendeleo Jumuishi yanalenga kutoa nafasi kwa kila kijana mwenye maono na uwezo wa kuongoza.\n\nKatika miaka ya hivi karibuni, tumeshuhudia ongezeko la vijana wanaojitokeza kugombea nafasi mbalimbali za uongozi. Hii ni ishara njema kwa demokrasia yetu. Hata hivyo, bado kuna changamoto nyingi zinazowakabili vijana, ikiwemo ukosefu wa rasilimali na uzoefu.\n\nMkakati wetu ni kuanzisha vituo vya mafunzo ya uongozi katika kila kanda, ambapo vijana watafundishwa misingi ya utawala bora, uchumi, na diplomasia. Tunataka viongozi wanaojua wajibu wao na wenye uchungu na rasilimali za taifa.',
    tags: ['Vijana', 'Siasa', 'Uongozi'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-2',
    title: 'Mageuzi ya Kilimo na Viwanda: Njia ya Kuelekea Uchumi wa Kati',
    date: 'Februari 28, 2026',
    category: 'Kiuchumi',
    preview: 'Ili nchi yetu ipige hatua, ni lazima tujenge viwanda vinavyotumia malighafi zetu wenyewe na kutoa ajira kwa maelfu ya vijana wanaohitimu kila mwaka...',
    content: 'Ili nchi yetu ipige hatua, ni lazima tujenge viwanda vinavyotumia malighafi zetu wenyewe na kutoa ajira kwa maelfu ya vijana wanaohitimu kila mwaka. Kilimo ni uti wa mgongo wa taifa letu, lakini ni lazima kigeuzwe kuwa biashara yenye tija.\n\nTunapendekeza kuongeza bajeti ya utafiti katika kilimo ili kupata mbegu bora na teknolojia ya kisasa ya umwagiliaji. Pia, tutaweka mazingira wezesha kwa wawekezaji wa ndani na nje kujenga viwanda vya kusindika mazao kama pamba, korosho, na alizeti.\n\nLengo letu ni kuhakikisha kuwa hakuna malighafi inayouzwa nje ya nchi bila kuongezewa thamani. Hii ndiyo njia pekee ya kuongeza mapato ya serikali na kuboresha maisha ya wakulima wetu.',
    tags: ['Kilimo', 'Viwanda', 'Uchumi'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-3',
    title: 'Umoja na Mshikamano: Msingi wa Amani Tanzania',
    date: 'Januari 10, 2026',
    category: 'Kisiasa',
    preview: 'Tanzania ni moja, na nguvu yetu ipo katika utofauti wetu. Tunapaswa kulinda amani yetu kwa gharama yoyote ile kwani ndiyo tunu yetu kuu...',
    content: 'Tanzania ni moja, na nguvu yetu ipo katika utofauti wetu. Tunapaswa kulinda amani yetu kwa gharama yoyote ile kwani ndiyo tunu yetu kuu. Katika kipindi hiki cha kuelekea uchaguzi, ni muhimu kukumbushana wajibu wetu wa kudumisha umoja.\n\nSiasa zisitupeke. Tofauti za itikadi zisilete uhasama. Maendeleo Jumuishi yanahubiri siasa za kistaarabu, zenye hoja na zisizo na chuki. Tunawaalika wananchi wote kujiunga nasi katika kujenga taifa lenye usawa na haki kwa wote.\n\nAmani si tu kutokuwepo kwa vita, bali ni uwepo wa haki na fursa sawa kwa kila mwananchi. Tutaendelea kupigania mifumo ya kisheria inayolinda haki za binadamu na uhuru wa kutoa maoni.',
    tags: ['Amani', 'Umoja', 'Tanzania'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-4',
    title: 'Diplomasia ya Uchumi: Tanzania katika Jukwaa la Kimataifa',
    date: 'Machi 20, 2026',
    category: 'Diplomatic',
    preview: 'Uhusiano wetu na mataifa mengine unapaswa kujikita katika maslahi ya kiuchumi na maendeleo ya watu wetu...',
    content: 'Uhusiano wetu na mataifa mengine unapaswa kujikita katika maslahi ya kiuchumi na maendeleo ya watu wetu. Diplomasia ya uchumi ni nguzo muhimu katika kukuza uwekezaji na biashara ya kimataifa. Tunalenga kuimarisha ushirikiano na nchi jirani na washirika wa kimkakati duniani kote.',
    tags: ['Diplomasia', 'Uchumi', 'Uhusiano'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-5',
    title: 'Huduma za Jamii: Changamoto na Suluhisho',
    date: 'Machi 18, 2026',
    category: 'Kijamii',
    preview: 'Kuboresha huduma za afya na elimu ni kipaumbele chetu kikuu ili kuhakikisha maisha bora kwa kila mwananchi...',
    content: 'Kuboresha huduma za afya na elimu ni kipaumbele chetu kikuu ili kuhakikisha maisha bora kwa kila mwananchi. Tunatambua changamoto zilizopo katika sekta hizi na tumejipanga kuleta mabadiliko chanya kupitia uwekezaji katika miundombinu na rasilimali watu.',
    tags: ['Afya', 'Elimu', 'Jamii'],
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-6',
    title: 'Uchambuzi wa Sera za Maendeleo',
    date: 'Machi 10, 2026',
    category: 'Sera',
    preview: 'Sera bora ni msingi wa maendeleo endelevu. Tunachambua sera mbalimbali na kutoa mapendekezo ya kuboresha utekelezaji wake...',
    content: 'Sera bora ni msingi wa maendeleo endelevu. Tunachambua sera mbalimbali na kutoa mapendekezo ya kuboresha utekelezaji wake. Maendeleo Jumuishi yanahimiza ushirikishwaji wa wadau wote katika mchakato wa kutunga na kufanya mapitio ya sera za taifa.',
    tags: ['Sera', 'Maendeleo', 'Uchambuzi'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-7',
    title: 'Ukuaji wa Sekta ya Utalii: Fursa kwa Wajasiriamali',
    date: 'Machi 22, 2026',
    category: 'Kiuchumi',
    preview: 'Utalii ni moja ya sekta zinazokua kwa kasi nchini. Tunajadili jinsi wajasiriamali wadogo wanavyoweza kunufaika na fursa hizi...',
    content: 'Utalii ni moja ya sekta zinazokua kwa kasi nchini. Tunajadili jinsi wajasiriamali wadogo wanavyoweza kunufaika na fursa hizi. Serikali imeweka mazingira mazuri ya kukuza utalii wa ndani na kimataifa, jambo linalofungua milango kwa biashara mpya katika sekta ya malazi, usafirishaji na huduma za kitalii.',
    tags: ['Utalii', 'Uchumi', 'Ujasiriamali'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-8',
    title: 'Umuhimu wa Teknolojia katika Elimu ya Msingi',
    date: 'Machi 21, 2026',
    category: 'Kijamii',
    preview: 'Matumizi ya teknolojia darasani yanaweza kuboresha uelewa wa wanafunzi na kuwandaa kwa maisha ya baadaye...',
    content: 'Matumizi ya teknolojia darasani yanaweza kuboresha uelewa wa wanafunzi na kuwandaa kwa maisha ya baadaye. Maendeleo Jumuishi yanapendekeza kuongeza upatikanaji wa vifaa vya kidijitali katika shule za msingi na sekondari ili kupunguza pengo la kidijitali nchini.',
    tags: ['Elimu', 'Teknolojia', 'Jamii'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-9',
    title: 'Ushirikiano wa Kikanda: EAC na Maendeleo ya Pamoja',
    date: 'Machi 19, 2026',
    category: 'Diplomatic',
    preview: 'Jumuiya ya Afrika Mashariki ina nafasi kubwa katika kukuza biashara na mshikamano kati ya nchi wanachama...',
    content: 'Jumuiya ya Afrika Mashariki ina nafasi kubwa katika kukuza biashara na mshikamano kati ya nchi wanachama. Tunachambua mafanikio na changamoto za mtangamano wa kikanda na jinsi Tanzania inavyoweza kunufaika zaidi na soko la pamoja la EAC.',
    tags: ['EAC', 'Diplomasia', 'Biashara'],
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-10',
    title: 'Ripoti ya Mwaka ya Maendeleo Jumuishi 2025',
    date: 'Januari 15, 2026',
    category: 'Nakala',
    preview: 'Hii ni ripoti kamili ya utendaji na mafanikio ya jukwaa letu katika mwaka uliopita...',
    content: 'Hii ni ripoti kamili ya utendaji na mafanikio ya jukwaa letu katika mwaka uliopita. Tunajivunia hatua zilizopigwa katika kuwafikia wananchi na kuibua hoja muhimu za maendeleo.',
    tags: ['Ripoti', 'Mwaka', 'Mafanikio'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'post-11',
    title: 'Mwongozo wa Uongozi Bora kwa Vijana',
    date: 'Februari 10, 2026',
    category: 'Nakala',
    preview: 'Mwongozo huu unatoa misingi na stadi muhimu kwa vijana wanaotaka kuingia katika uongozi wa umma...',
    content: 'Mwongozo huu unatoa misingi na stadi muhimu kwa vijana wanaotaka kuingia katika uongozi wa umma. Ni nyenzo muhimu katika kujenga kizazi kipya cha viongozi waadilifu na wenye maono.',
    tags: ['Mwongozo', 'Uongozi', 'Vijana'],
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800'
  }
];

export const POLICIES: Policy[] = [
  {
    id: 'p1',
    title: 'Elimu Jumuishi',
    description: 'Kuboresha mfumo wa elimu ili kutoa fursa sawa kwa kila mtoto, bila kujali hali yake ya kiuchumi.',
    icon: 'graduation-cap',
    category: 'Jamii'
  },
  {
    id: 'p2',
    title: 'Uchumi wa Kidijitali',
    description: 'Kujenga miundombinu ya kidijitali itakayowezesha vijana kushiriki kikamilifu katika uchumi wa dunia.',
    icon: 'cpu',
    category: 'Uchumi'
  },
  {
    id: 'p3',
    title: 'Afya kwa Wote',
    description: 'Kuimarisha huduma za afya za msingi na kuhakikisha bima ya afya inamfikia kila mwananchi.',
    icon: 'heart-pulse',
    category: 'Jamii'
  },
  {
    id: 'p4',
    title: 'Kilimo Biashara',
    description: 'Kuleta mageuzi katika sekta ya kilimo kwa kuongeza thamani ya mazao na kutumia teknolojia ya kisasa.',
    icon: 'sprout',
    category: 'Uchumi'
  }
];

export const STRATEGIES: Strategy[] = [
  {
    id: 's1',
    title: 'Utafiti na Takwimu',
    description: 'Kutumia takwimu sahihi kufanya maamuzi ya kiserikali na kijamii ili kuhakikisha rasilimali zinatumika ipasavyo.',
    number: '01',
    color: 'tz-yellow'
  },
  {
    id: 's2',
    title: 'Ushirikishwaji wa Jamii',
    description: 'Kuhakikisha kila sauti inasikika kupitia mikutano ya hadhara na majukwaa ya kidijitali ya maoni.',
    number: '02',
    color: 'tz-green'
  },
  {
    id: 's3',
    title: 'Ufuatiliaji na Tathmini',
    description: 'Mfumo wa wazi wa kufuatilia utekelezaji wa ahadi na miradi ya maendeleo katika kila ngazi.',
    number: '03',
    color: 'tz-blue'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Mkutano wa Wadau wa Elimu',
    location: 'Dodoma',
    date: 'Aprili 2026',
    description: 'Kujadili maboresho ya mitaala ya elimu ya ufundi na ufundishaji wa stadi za kazi.'
  },
  {
    id: 'e2',
    title: 'Ziara ya Viwanda vya Pwani',
    location: 'Pwani',
    date: 'Machi 2026',
    description: 'Kukagua maendeleo ya ujenzi wa viwanda vipya vya kusindika mazao ya kilimo.'
  },
  {
    id: 'e3',
    title: 'Kongamano la Vijana na Teknolojia',
    location: 'Dar es Salaam',
    date: 'Februari 2026',
    description: 'Kuzindua kituo kipya cha ubunifu kwa vijana na kutoa tuzo kwa wabunifu bora.'
  }
];

export const RECORDS: RecordItem[] = [
  { id: 'r1', title: 'Nyaraka za Sera', description: 'Mkusanyiko wa sera zote zilizopendekezwa.', count: '12', type: 'Sera' },
  { id: 'r2', title: 'Ripoti za Ziara', description: 'Muhtasari wa ziara zote za kikazi.', count: '45', type: 'Ziara' },
  { id: 'r3', title: 'Hotuba Zilizorekodiwa', description: 'Hifadhi ya hotuba zote muhimu.', count: '28', type: 'Hotuba' },
  { id: 'r4', title: 'Maoni ya Wananchi', description: 'Uchambuzi wa maoni kutoka kwa wadau.', count: '1500+', type: 'Maoni' }
];
