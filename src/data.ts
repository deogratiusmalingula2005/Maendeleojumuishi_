import { Post, Policy, Strategy, Event, RecordItem } from './types';

export const POSTS: Post[] = [
  {
    id: 'post-15',
    title: 'UJUMBE WA KENANI KIHONGOSI: "UPINZANI UJIFUNZE CCM"',
    date: 'Machi 23, 2026',
    category: 'Kisiasa',
    author: 'Deogratius Malingula',
    preview: 'Katika uchambuzi wake kuhusu siasa za Tanzania, Kenani Kihongosi anatoa mtazamo mpana juu ya tofauti za kiitikadi kati ya vyama vya upinzani na CCM...',
    content: 'Tarehe 26 Januari 2026, Katika uchambuzi wake kuhusu siasa za Tanzania, Kenani Kihongosi anatoa mtazamo mpana juu ya tofauti za kiitikadi, kimfumo na kimkakati kati ya vyama vya upinzani na Chama Cha Mapinduzi (CCM). Anasisitiza kuwa tangu kuanzishwa kwa mfumo wa vyama vingi mwaka 1992, vyama vya upinzani vimekuwa vikijitahidi kutafuta nafasi ya kuwa mbadala wa CCM, lakini mara nyingi vimejikita zaidi kwenye kauli zenye hisia kuliko kujenga misingi imara ya kiitikadi.\n\nAnabainisha kuwa kauli kama “Tunataka mabadiliko,” “Katiba Mpya ndiyo suluhisho,” au “Hakuna haki bila mabadiliko ya mfumo” zimekuwa zikitumika mara kwa mara, lakini zimekosa falsafa pana inayounganisha jamii nzima. Kwa mtazamo wake, kauli hizi zimekuwa kama maneno ya majukwaani yasiyo na msingi wa kiitikadi unaoeleweka na wananchi.\n\nKihongosi anaeleza kuwa mara nyingi upinzani umeonekana kuwasilisha demokrasia kama jukwaa la malalamiko. Kauli kama “Tumebiwa haki yetu” au “Mfumo wote ni mbovu” zimekuwa zikitumika bila kuonyesha dira ya mabadiliko yenye kuzingatia amani, utulivu na mshikamano wa taifa. Hali hii, anasema, imewafanya wananchi wengi kuwaona wapinzani kama walalamikaji au wafanyabiashara wa siasa badala ya kuwa mbadala wa kweli wa CCM.\n\nKwa upande mwingine, Kihongosi anasisitiza kuwa CCM imefanikiwa kwa muda mrefu kuunganisha amani, taifa na siasa kama sehemu ya utambulisho wake wa kiitikadi. Maneno kama amani, utulivu, umoja wa kitaifa, na huduma bora kwa wananchi yamekuwa sehemu ya lugha ya kawaida ndani ya chama hicho. Hii imekijengea CCM uhalali wa kuonekana kama chama cha watu wote, si chama cha mtu mmoja.\n\nAidha, anasema vyama vingi vya upinzani vimejengwa zaidi juu ya mvuto wa viongozi binafsi. Hali hii husababisha kuyumba kwa chama pale kiongozi anapobadilika, kutokana na kukosekana kwa taasisi imara na sera endelevu. Kwa mtazamo wake, jamii inashindwa kuelewa misingi ya vyama hivyo kwa muda mrefu.\n\nKihongosi anahitimisha kwa kueleza kuwa ubora wa itikadi, uwezo wa kuitafsiri kwa lugha ya maisha ya wananchi, na mbinu thabiti za uenezi ndizo silaha zinazoiwezesha CCM kuendelea kushinda chaguzi mbalimbali. Anaamini kuwa CCM imejenga itikadi bora, inayoaminika na inayokubalika na Watanzania.',
    tags: ['Siasa', 'CCM', 'Tanzania', 'Kenani Kihongosi'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-14',
    title: 'MATTEI PLAN: MKAKATI WA ITALIA NA NEEMA KWA TANZANIA',
    date: 'Machi 23, 2026',
    category: 'Kiuchumi',
    author: 'Deogratius Malingula',
    preview: 'Tanzania inatajwa kuwa miongoni mwa nchi zitakazonufaika zaidi na mpango wa Mattei Plan kutoka Italia, unaolenga kuleta mageuzi katika kilimo, nishati na elimu...',
    content: 'Katika kipindi hiki ambapo mataifa mengi yanatafuta namna mpya ya kushirikiana, Italia imekuja na mpango wa kipekee unaojulikana kama "Mattei Plan". Mpango huu si tu wa kutoa misaada, bali ni mkakati wa dhati wa kujenga ushirikiano wa kibiashara na kiteknolojia kati ya Italia na Afrika, ukiwa na falsafa ya ushirikiano wa haki usio na unyonyaji.\n\nKwa Tanzania, fursa ni nyingi. Kwanza, sekta ya kilimo pota msukumo mkubwa kupitia teknolojia mpya za kuongeza thamani ya mazao kama kahawa, ambayo Italia ni mlaji mkubwa. Pili, Benki ya Maendeleo ya Kilimo (TADB) itaimarishwa ili kutoa mikopo zaidi kwa wakulima wadogo na wa kati.\n\nVilevile, mpango huu unagusia nishati safi na miradi ya maji, mambo ambayo ni uti wa mgongo wa maendeleo ya viwanda nchini kwetu. Ni wazi kuwa ikiwa tutatumia fursa hii vizuri, Mattei Plan itakuwa chachu ya mageuzi ya kiuchumi tunayoyatafuta. Italia imetenga bajeti ya awali ya Euro bilioni 5.5 kwa ajili ya mpango huu, ikionyesha dhamira ya dhati ya kuimarisha uhusiano na bara al Afrika.',
    tags: ['Mattei Plan', 'Uchumi', 'Tanzania', 'Italia'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-13',
    title: 'TANZANIA, ITALIA ZAIMARISHA USHIRIKIANO KATIKA SEKTA YA KILIMO',
    date: '17 Machi 2026',
    category: 'Kiuchumi',
    author: 'Deogratius Malingula',
    preview: 'Dar es Salaam, 17 Machi 2026, Tanzania na Italia zimeahidi kuendeleza na kuongeza ushirikiano wao katika sekta ya kilimo...',
    content: 'Dar es Salaam, 17 Machi 2026, Tanzania na Italia zimeahidi kuendeleza na kuongeza ushirikiano wao katika sekta ya kilimo, hususan katika maeneo ya uhimilivu wa chakula, kuongeza thamani ya mazao na kuimarisha taasisi za kifedha za kilimo.\n\nWaziri wa Kilimo, Mhe. Daniel Chongolo (Mb), amesema kuwa ushirikiano kati ya nchi hizo mbili ni wa muda mrefu, akibainisha kuwa Italia imekuwa mshirika muhimu katika maendeleo ya kilimo nchini. Alikumbusha kuwa katika miaka ya 1990, wakati Tanzania ilipokumbwa na ukame, Italia ilitoa msaada wa chakula kwa Serikali ya Tanzania.\n\nAkizungumza baada ya mazungumzo na Balozi wa Italia nchini Tanzania, Mhe. Giuseppe S. Coppola, Waziri Chongolo alisema kuwa Tanzania inanufaika kupitia programu ya Mattei Plan Initiative, ambayo inalenga kuimarisha usalama wa chakula, kuongeza thamani ya zao la kahawa, na kuisaidia Benki ya Maendeleo ya Kilimo kupata uwezo zaidi wa kuwawezesha wakulima.\n\n“Kuiwezesha Benki ya Wakulima ni hatua muhimu kwa sababu itawasaidia wakulima kupata mtaji wa kuongeza uzalishaji and kuhamia kwenye kilimo cha kisasa,” alisema Chongolo.\n\nKwa upande wake, Balozi Coppola alithibitisha dhamira ya Serikali ya Italia kuendeleza ushirikiano huo kwa kuwekeza katika teknolojia za kuongeza thamani ya mazao, hususan kahawa, pamoja na kubadilishana uzoefu kati ya wataalamu wa nchi hizo mbili.',
    tags: ['Kilimo', 'Tanzania', 'Italia', 'Uchumi'],
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200'
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
