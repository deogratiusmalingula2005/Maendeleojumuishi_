import { Post, Policy, Strategy, Event, RecordItem } from './types';

export const POSTS: Post[] = [
  {
    id: 'post-28',
    title: 'MASHARTI YA UANACHAMA',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Masharti ya kujiunga na kuendelea kuwa mwanachama wa Chama Cha Mapinduzi (CCM).',
    content: '### MASHARTI YA UANACHAMA\n\nIli mtu akubaliwe kuingia au kuendelea kuwa mwanachama wa Chama Cha Mapinduzi (CCM), ni sharti atimize vigezo na masharti yafuatayo:\n\n1. **Heshima kwa Binadamu:** Ni lazima mwanachama aonyeshe heshima kwa utu na haki za binadamu.\n\n2. **Uelewa na Utekelezaji wa Itikadi:** Ni sharti mwanachama ajitolee kuielewa, kuieleza, kuitetea, na kuitekeleza Itikadi na Siasa ya CCM.\n\n3. **Utu kupitia Kazi:** Ni lazima mwanachama aamini kuwa kazi ni kipimo cha utu na kutekeleza imani hiyo kwa vitendo.\n\n4. **Ushirikiano:** Ni sharti mwanachama awe na moyo wa kushirikiana na wenzake katika shughuli za chama na jamii.\n\n5. **Uongozi katika Utumishi wa Umma:** Ni lazima mwanachama awe mstari wa mbele katika utekelezaji wa mambo yote ya umma kwa mujibu wa Miongozo ya CCM.\n\n6. **Maadili na Tabia:** Ni sharti mwanachama awe mfano wa tabia njema kwa vitendo na kauli, awe mwaminifu, na aepuke vitendo vya ulevi au uzururaji.\n\n7. **Shughuli Halali:** Ni lazima mwanachama awe mkulima, mfanyakazi, au mwenye shughuli nyingine yoyote halali ya kujitegemea.',
    tags: ['CCM', 'Uanachama', 'Masharti'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-27',
    title: 'WANACHAMA WAPYA',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Masharti ya kujiunga na Chama Cha Mapinduzi (CCM).',
    content: 'Raia yeyote wa Tanzania mwenye umri wa angalau miaka 18 anaweza kujiunga na Chama Cha Mapinduzi (CCM) endapo anakubali Imani, Malengo na Madhumuni ya CCM.',
    tags: ['CCM', 'Wanachama', 'Siasa'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-26',
    title: 'WANACHAMA WAASISI',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Ufafanuzi kuhusu wanachama waasisi wa CCM kutoka TANU na ASP.',
    content: 'Mtu yeyote aliyewahi kuwa mwanachama wa TANU au ASP kabla ya vyama hivyo kuvunjwa, na ambaye alitimiza masharti ya uanachama wakati huo, anajumuishwa moja kwa moja kuwa mwanachama wa Chama Cha Mapinduzi (CCM).\n\nHata hivyo, mtu huyo anaweza kuamua mwenyewe kutokukubali uanachama huo.',
    tags: ['CCM', 'Wanachama', 'Waasisi'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-25',
    title: 'MAANA RAHISI YA KIFUNGU 5A',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Ufafanuzi wa maneno yanayotumika kwenye Katiba ya CCM ili kuondoa mkanganyiko.',
    content: '🌿 MAANA RAHISI YA KIFUNGU 5A\n\nKifungu hiki kinafafanua maana ya baadhi ya istilahi zinazotumika katika Katiba ya CCM kwa lengo la kuondoa mkanganyiko wa tafsiri.\n\n### 1. Wabunge wa aina nyingine\nKwa mujibu wa kifungu hiki, wabunge wa aina nyingine ni pamoja na:\n- Wabunge wa Viti Maalum;\n- Wabunge walioteuliwa;\n- Wabunge wa Bunge la Afrika Mashariki;\n\nmradi wote wawe wametokana na Chama Cha Mapinduzi (CCM).\n\n### 2. Wawakilishi\nNeno “Wawakilishi” linarejelea wajumbe wa Baraza la Wawakilishi Zanzibar wanaotokana na Chama Cha Mapinduzi (CCM).\n\n### 3. Kanuni zinazohusika\nKanuni zinazohusika ni pamoja na:\n- Kanuni za CCM zilizoorodheshwa katika Nyongeza B ya Katiba;\n- Kanuni nyingine zozote zitakazotungwa kwa mujibu wa Katiba hii.\n\n### 4. Kipaumbele cha Katiba\nIwapo kutatokea mgongano kati ya Katiba na kanuni yoyote ya CCM:\n- Katiba itakuwa na mamlaka ya juu na itachukua kipaumbele juu ya kanuni husika.',
    tags: ['CCM', 'Katiba', 'Ufafanuzi'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-24',
    title: 'MALENGO NA MADHUMUNI YA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Malengo na madhumuni ya Chama Cha Mapinduzi (CCM) katika kujenga taifa.',
    content: 'Kwa hiyo Malengo na Madhumuni ya CCM yatakuwa yafuatayo:\n\n(1) Kushinda katika Uchaguzi wa Serikali Kuu na Serikali za Mitaa Tanzania Bara na Zanzibar ili kuunda na kushika Serikali Kuu na Serikali za Mitaa katika Jamhuri ya Muungano wa Tanzania kwa upande mmoja na Zanzibar kwa upande wa pili.\n\n(2) Kulinda na kudumisha Uhuru wa Nchi yetu na raia wake.\n\n(3) Kuhimiza ujenzi wa Ujamaa na Kujitegemea kwa mujibu wa Azimio la Arusha.\n\n(4) Kusimamia utekelezaji wa Siasa ya CCM pamoja na kuendeleza fikra za viongozi waasisi wa vyama vya TANU na ASP, kama zilivyofafanuliwa katika maandiko mbalimbali ya Vyama hivyo.\n\n(5) Kuona kwamba kila mtu anayo haki ya kupata kutoka katika Jamii hifadhi ya maisha yake na mali yake kwa mujibu wa sheria.\n\n(6) Kuona kwamba katika Nchi yetu kila mtu aliye na uwezo wa kufanya kazi anafanya kazi; na kazi maana yake ni shughuli yoyote halali inayompatia mtu riziki yake.\n\n(7) Kusimamia haki na maendeleo ya Wakulima, Wafanyakazi na Wananchi wengine wenye shughuli halali za kujitegemea; na hasa kuona kwamba kila mtu ana haki ya kupata malipo yanayostahili kutokana na kazi yake.\n\n(8) Kuona kwamba kwa kutumia Vikao vilivyowekwa, raia anayo haki ya kushiriki kwa ukamilifu katika kufikia uamuzi wa mambo ya Taifa na yanayomhusu, na kwamba anao uhuru wa kutoa mawazo yake, wa kwenda anakoataka, wa kuamini Dini anayotaka na kukutana na watu wengine, maadamu havunji Sheria au Taratibu zilizowekwa.\n\n(9) Kuona kwamba Nchi yetu inatawaliwa kwa misingi ya kidemokrasia na ya kijamaa.\n\n(10) Kuhifadhi, kukuza na kudumisha imani na moyo wa kimapinduzi miongoni mwa Watanzania pamoja na ushirikiano na mshikamano miongoni mwao na na mataifa mengine duniani.\n\n(11) Kuweka na kudumisha heshima ya binadamu kwa kufuata barabara Kanuni za Tangazo la Dunia la Haki za Binadamu.\n\n(12) Kuona kwamba Dola inakuwa Mhimili wa Uchumi wa Taifa.\n\n(13) Kuona kwamba Serikali na Vyombo vyote vya Umma vinasaidia wananchi wote kujitegemea na kwamba vinatumika kwa ushirikiano na wananchi na siyo kwa ajili ya kuwatumia bali kwa ajili ya kuwasaidia wananchi kujitegemea.\n\n(14) Kuona kwamba matumizi ya utajiri wa Taifa yanatilila mkazo maendeleo ya Wananchi na hasa jitihada za kuondosha umasikini, Ujinga na Maradhi.\n\n(15) Kuona kwamba Serikali na vyombo vyote vya umma vinatoa nafasi zilizo sawa kwa raia wote, Wanawake na Wanaume bila kujali rangi, kabila, Dini, au hali ya mtu.\n\n(16) Kuona kwamba katika nchi yetu hakuna aina yoyote ya dhuluma, vitisho, ubaguzi, rushwa, uonevu na/au upendeleo.\n\n(17) Kuendeleza kupiga vita Ukoloni Mamboleo, Ubeberu na Ubaguzi wa aina yoyote.\n\n(18) Kuimarisha uhusiano mzuri na vyama vya Siasa vya Nchi nyingine vyenye itikadi kama ya CCM ambavyo kupinga Ukoloni, Ukoloni Mamboleo, Ubeberu na Ubaguzi wa aina yoyote.\n\n(19) Kushirikiana na Vyama vingine katika Afrika, kwa madhumuni ya kuleta Umoja wa Afrika, na kuona kwamba Serikali inaendeleza na kuimarisha ujirani mwema.',
    tags: ['CCM', 'Malengo', 'Madhumuni', 'Siasa'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-23',
    title: 'IMANI YA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Chama Cha Mapinduzi kinaamini katika usawa wa binadamu na Ujamaa na Kujitegemea.',
    content: 'Chama Cha Mapinduzi kinaamini kwamba:\n\n(1) Binadamu wote ni sawa.\n(2) Kila mtu anastahili heshima ya kutambuliwa na kuthaminiwa utu wake.\n(3) Ujamaa na Kujitegemea ndiyo njia pekee ya kujenga jamii ya watu walio sawa na huru.',
    tags: ['CCM', 'Imani', 'Siasa'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-22',
    title: 'BENDERA, NEMBO NA VAZI RASMI LA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Maelezo kuhusu bendera, nembo, na vazi rasmi la Chama Cha Mapinduzi (CCM).',
    content: '(1) Bendera ya CCM ina rangi ya kijani kibichi, ambayo ina alama ya Jembe (alama ya Mkulima) na Nyundo (alama ya Mfanyakazi) kwenye pembe ya juu upande wa mlingoti.\n\n(2) Nembo ya CCM ina Jembe na Nyundo kwa Mfumo wa kuzidisha, na chini inaunganishwa na neno “Chama cha Mapinduzi.”\n\n(3) Vazi rasmi la CCM ni suruali au sketi nyeusi na shati la kijani lenye nakshi ya njano.',
    tags: ['CCM', 'Bendera', 'Nembo', 'Vazi'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-21',
    title: 'MAJIBU: KIHONGOSI AMJIBU LEMA',
    date: 'Machi 23, 2026',
    category: 'Kisiasa',
    author: 'Deogratius Malingula',
    preview: 'Kihongosi amejibu kauli ya mwanasiasa Godbless Lema iliyozua mjadala mtandaoni, akitoa maelezo makali.',
    content: 'Kihongosi amesema:\n\n> “LEMMA najua unakumbuka Ulipanga kunimaliza 2020, lakini MUNGU hakuruhusu na alinilinda, najua Mipango yako ni Kunimaliza katika ZIARA ninayofanya mikoani lakini MUNGU atanilinda, HUTAFANIKIWA.\n> Mipango yako ya kunimaliza ilianza nikiwa Arusha na bado inaendelea mpaka sasa na ukaona ufanikishe mambo yako na Nia yako OVU ya Kunimaliza nikiwa katika ziara zangu mikoani ili uje useme UNABII wako UMETIMIA, ilihali wewe ndiye uliyesuka Mipango hiyo. LEMMA HUTAFANIKIWA. Nakuombea Umri Mrefu Uuone Ukuu wa MUNGU.\n> Salimia familia hapo CANADA endelea kufurahia maisha na Mke wako pamoja na Watoto wako ambao wanasomeshwa na kupata mahitaji yote bure kabisa huku ukiwalaghai watu kuwa unapata shida huko ulipo.\n> BARIKIWA COMRADE.”',
    tags: ['Siasa', 'Kihongosi', 'Lema', 'Majibu'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-20',
    title: 'KAULI YA LEMA YACHOCHEA MJADALA MKALI MTANDAONI',
    date: 'Machi 23, 2026',
    category: 'Kisiasa',
    author: 'Deogratius Malingula',
    preview: 'Mwanasiasa Godbless Lema amezua mjadala mkubwa mitandaoni baada ya kutoa kauli kali akijibu madai ya Kenani Kihongosi kuhusu mustakabali wa CHADEMA.',
    content: 'Mwanasiasa Godbless Lema amezua mjadala mkubwa mitandaoni baada ya kutoa kauli kali akijibu madai ya **Kenani Kihongosi** kuhusu mustakabali wa CHADEMA.\n\nLema alisema:\n\n> “Watu wengi sana waliotabiri CHADEMA kufa wao ndio waliokufa. Kwani na wewe una mpango wa kufa hivi karibuni? TUBU. Tena mwambie na wife akusaidie kufunga na kuomba na KUTUBU. La sivyo !!!! Mungu anakuchapa.”\n\nKauli hiyo imesambaa kwa kasi kwenye mitandao ya kijamii, huku ikizua maoni tofauti kutoka kwa wananchi na wadau wa siasa, baadhi wakiiunga mkono na wengine wakiikosoa kwa ukali wake.',
    tags: ['Siasa', 'Lema', 'Kihongosi', 'CHADEMA'],
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200'
  },
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
    content: 'Katika kipindi hiki ambapo mataifa mengi yanatafuta namna mpya ya kushirikiana, Italia emekuja na mpango wa kipekee unaojulikana kama "Mattei Plan". Mpango huu si tu wa kutoa misaada, bali ni mkakati wa dhati wa kujenga ushirikiano wa kibiashara na kiteknolojia kati ya Italia na Afrika, ukiwa na falsafa ya ushirikiano wa haki usio na unyonyaji.\n\nKwa Tanzania, fursa ni nyingi. Kwanza, sekta ya kilimo pota msukumo mkubwa kupitia teknolojia mpya za kuongeza thamani ya mazao kama kahawa, ambayo Italia ni mlaji mkubwa. Pelli, Benki ya Maendeleo ya Kilimo (TADB) itaimarishwa ili kutoa mikopo zaidi kwa wakulima wadogo na wa kati.\n\nVilevile, mpango huu unagusia nishati safi na miradi ya maji, mambo ambayo ni uti wa mgongo wa maendeleo ya viwanda nchini kwetu. Ni wazi kuwa ikiwa tutatumia fursa hii vizuri, Mattei Plan itakuwa chachu ya mageuzi ya kiuchumi tunayoyatafuta. Italia imetenga bajeti ya awali ya Euro bilioni 5.5 kwa ajili ya mpango huu, ikionyesha dhamira ya dhati ya kuimarisha uhusiano na bara al Afrika.',
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
