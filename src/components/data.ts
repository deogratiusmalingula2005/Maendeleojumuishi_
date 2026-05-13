import { Post, Policy, Strategy, Event, RecordItem } from './types';

export const POSTS: Post[] = [
  {
    id: 'post-mengineyo-1',
    title: 'Video na Picha Mbalimbali',
    date: 'Mei 7, 2026',
    category: 'Mengineyo',
    author: 'Deogratius Malingula',
    preview: 'Mkusanyiko wa video na picha mbalimbali za matukio na habari.',
    content: 'Hapa kuna mkusanyiko wa video na picha mbalimbali kutoka mitandao ya kijamii.',
    mediaLinks: [
      'https://www.instagram.com/p/DXR-a7vAnun/',
      'https://www.instagram.com/p/DW1W_R7Ai8j/',
      'https://www.instagram.com/p/DVS1WimoPb2/',
      'https://www.instagram.com/reel/DTpwqmFDbxo/',
      'https://www.instagram.com/reel/DV3xdctiCqB/',
      'https://www.instagram.com/reel/DV1KlmmiBPv/',
      'https://www.instagram.com/reel/DVyiJJriOgr/',
      'https://www.instagram.com/reel/DVtAZdrCM82/',
      'https://www.instagram.com/reel/DVqRqyNiFUw/',
      'https://www.instagram.com/reel/DVoGbI0CPzu/',
      'https://www.instagram.com/p/DVWgxTegq_J/',
      'https://www.instagram.com/reel/DTulQo-jFxw/',
      'https://www.instagram.com/reel/DMnYeMJMCCB/',
      'https://www.instagram.com/reel/DMhFfrdivRg/',
      'https://www.instagram.com/p/DXhf_UZDA_x/',
      'https://www.instagram.com/p/DV1QMjkjN5v/'
    ],
    tags: ['Video', 'Picha', 'Mengineyo'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-07T16:54:00Z'
  },
  {
    id: 'post-37',
    title: 'Diplomasia ya Wananchi',
    date: 'Mei 5, 2026',
    category: 'Kijamii',
    author: 'Deogratius Malingula',
    preview: 'Katika muktadha wa kisiasa, Diplomasia ya Wananchi (People-to-People Diplomacy) nchini Tanzania inapaswa kutazama kama nyenzo ya kimkakati ya Nguvu Laini (Soft Power). Hii si tu mabadilishano ya kitamaduni, bali ni harakati za makusudi.',
    content: 'Katika muktadha wa kisiasa, Diplomasia ya Wananchi (People-to-People Diplomacy) nchini Tanzania inapaswa kutazama kama nyenzo ya kimkakati ya Nguvu Laini (Soft Power). Hii si tu mabadilishano ya kitamaduni, bali ni harakati za makusudi ambapo raia wanakuwa mstari wa mbele kulinda maslahi ya taifa, kueneza itikadi ya nchi, na kujenga ushawishi wa kisiasa kikanda na kimataifa.\n\nHivi ndivyo inavyotakiwa kuwa kisiasa na namna inavyopaswa kutekelezwa:\n\n### 1. Ulinzi wa Taswira ya Taifa (National Image Building)\nKisiasa, diplomasia hii inatakiwa kuwa mlinzi wa kwanza wa "Chapa ya Tanzania".\n* Inavyopaswa kuwa: Kila Mtanzania anayesafiri au kutumia mitandao ya kijamii anapaswa kuelewa misingi ya siasa yetu (kama vile amani, msimamo wa kutofungamana na upande wowote, na ujirani mwema).\n* Lengo: Raia wanakuwa "mabalozi wasio rasmi" wanaozima propaganda hasi dhidi ya nchi na kukuza simulizi chanya ya kisiasa ya Tanzania.\n\n### 2. Diplomasia ya Diaspora kama Nguvu ya Ushawishi (Lobbying)\nDiaspora ya Tanzania haitakiwi kuonekana kama chanzo cha fedha (remittances) pekee, bali kama chombo cha ushawishi wa kisiasa katika nchi wanazoishi.\n* Inavyopaswa kuwa: Serikali iwawezeshe Diaspora kuwa na sauti kwenye majukwaa ya kisiasa ya nchi za nje ili kupigania maslahi ya Tanzania (kwa mfano, kuishawishi serikali ya nchi fulani kuondoa vikwazo vya kibiashara au kuunga mkono mgombea wa Tanzania kwenye nafasi za kimataifa).\n\n### 3. Pan-Africanism na Uongozi wa Kikanda\nTanzania ina historia ndefu ya ukombozi wa Afrika. Diplomasia ya wananchi inapaswa kufufua ari hii kisiasa.\n* Inavyopaswa kuwa: Kupitia mabadilishano ya vijana, wasomi, na wanasiasa chipukizi ndani ya Jumuiya ya Afrika Mashariki (EAC) na SADC.\n* Lengo: Kujenga kizazi kipya cha Waafrika wanaoangalia Tanzania kama kitovu cha fikra za umoja na amani, jambo linaloongeza kura za ushawishi wa Tanzania kwenye Umoja wa Afrika (AU).\n\n### 4. Diplomasia ya "Lugha na Utambulisho" (Kiswahili)\nLugha ya Kiswahili ni silaha kubwa ya kisiasa.\n* Inavyopaswa kuwa: Wananchi (walimu, waandishi, wasanii) wanatakiwa kuitumia lugha hii kama nyenzo ya kuunganisha bara la Afrika chini ya uongozi wa kifikra wa Tanzania.\n* Athari: Hii inatengeneza "Utawala wa Kifikra" (Ideological Hegemony) ambapo mataifa mengine yanaanza kufuata mienendo ya kitamaduni na kisiasa ya Tanzania kupitia lugha.\n\n### 5. Uhusiano wa Vyama, Mashirika na Asas za Kiraia (CSOs)\nDiplomasia ya wananchi inatakiwa kuhusisha ushirikiano wa moja kwa moja kati ya taasisi za kiraia za Tanzania na za nchi nyingine.\n* Inavyopaswa kuwa: Vyama vya siasa na mashirika ya kiraia nchini yafanye kazi na washirika wa nje ili kueneza mifumo ya utawala bora na demokrasia ya Kitanzania. Hii inapunguza utegemezi wa "maelekezo" kutoka mataifa makubwa na badala yake tunasafirisha "falsafa" zetu kwenda nje.\n\n### Namna Inavyotakiwa Kuwa (The Strategic Shift)\nIli diplomasia hii ifanye kazi kisiasa, inatakiwa kuhama kutoka kuwa jambo la bahati mbaya na kuwa mkakati rasmi:\n1. Elimu ya Uraia wa Kimataifa: Watanzania wafundishwe kuelewa nafasi ya nchi yao duniani ili wanapozungumza na wageni, wazungumze kwa mamlaka na uzalendo.\n2. Uwezeshaji wa Kidijitali: Serikali iweke mazingira ambapo "Digital Influencers" wa Kitanzania wanatumiwa kimkakati kutangaza sera za nchi na kupinga upotoshaji wa kisiasa duniani.\n3. Kupunguza Urasimu: Kurahisisha taratibu za wananchi (wasanii, watafiti, wanamichezo) kwenda nje, huku wakiwa na mwongozo mdogo wa nini nchi inataka kufikia kupitia safari zao.\n\nKwa ufupi: Diplomasia ya wananchi kisiasa ni kuifanya sauti ya kila Mtanzania iwe na mwangwi wa maslahi ya Taifa, kiasi kwamba hata bila kuwepo kwa Balozi wa Serikali, msimamo wa Tanzania unaeleweka na kuheshimika kupitia matendo na maneno ya raia wake.',
    tags: ['Diplomasia', 'Wananchi', 'Siasa', 'Tanzania'],
    image: 'https://images.unsplash.com/photo-1576267423044-15b00681a202?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T16:07:00Z',
    quiz: [
      {
        question: 'Diplomasia ya Wananchi inapaswa kutazamwa kama nyenzo ya kimkakati ya nini?',
        options: ['Nguvu Ngumu', 'Nguvu Laini', 'Uchumi wa Viwanda', 'Ulinzi wa Mipaka'],
        correctAnswer: 1
      },
      {
        question: 'Ni nani anayepaswa kuwa mstari wa mbele kulinda maslahi ya taifa?',
        options: ['Maafisa wa Serikali pekee', 'Raia', 'Mabenki', 'Vyama vya Siasa'],
        correctAnswer: 1
      },
      {
        question: 'Kipi kati ya hivi ni lengo la ulinzi wa taswira ya taifa?',
        options: ['Kuongeza kodi', 'Kuzima propaganda hasi', 'Kujenga viwanda', 'Kusafirisha bidhaa'],
        correctAnswer: 1
      },
      {
        question: 'Diaspora wa Tanzania wanapaswa kutazamwa kama nini?',
        options: ['Chanzo cha fedha pekee', 'Chombo cha ushawishi wa kisiasa', 'Watalii', 'Wageni'],
        correctAnswer: 1
      },
      {
        question: 'Pan-Africanism inapaswa kuhusisha nini ndani ya Jumuiya ya Afrika Mashariki?',
        options: ['Ujenzi wa viwanda', 'Mabadilishano ya vijana na wasomi', 'Ulinzi wa mipaka', 'Biashara ya mafuta'],
        correctAnswer: 1
      },
      {
        question: 'Lugha ya Kiswahili inatazamwa kama nini kisiasa?',
        options: ['Lugha ya kufundishia pekee', 'Silaha ya ushawishi wa kifikra', 'Somo la shule', 'Lugha ya makabila'],
        correctAnswer: 1
      },
      {
        question: 'Uhusiano wa CSOs unapaswa kufanya nini nje ya mipaka?',
        options: ['Kuleta misaada', 'Kueneza mifumo ya utawala bora', 'Kujenga madaraja', 'Kuuza bidhaa'],
        correctAnswer: 1
      },
      {
        question: 'Nini kinapaswa kufundishwa katika Elimu ya Uraia wa Kimataifa?',
        options: ['Historia ya nchi jirani', 'Nafasi ya Tanzania duniani', 'Ufugaji', 'Ujenzi'],
        correctAnswer: 1
      },
      {
        question: 'Ni nani anapaswa kutumiwa kimkakati katika kidijitali?',
        options: ['Digital Influencers', 'Wasafiri', 'Wafanyakazi wa serikali', 'Wanafunzi'],
        correctAnswer: 0
      },
      {
        question: 'Diplomasia ya wananchi inatakiwa kuhama kutoka nini na kuwa nini?',
        options: ['Kutoka jambo la bahati mbaya kuwa mkakati rasmi', 'Kutoka siasa kwenda biashara', 'Kutoka umma kwenda binafsi', 'Kutoka nje kwenda ndani'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'post-36',
    title: 'Deni La Taifa',
    date: 'Mei 5, 2026',
    category: 'Sera na Hoja',
    author: 'Deogratius Malingula',
    preview: 'Deni la Taifa ni moja ya mada ambazo mara nyingi huleta mjadala mkubwa wa kisiasa na kiuchumi. Katika elimu ya usimamizi wa fedha, deni halitazamiwi kama jambo baya pekee, bali kama chombo cha kimkakati.',
    content: 'Deni la Taifa ni moja ya mada ambazo mara nyingi huleta mjadala mkubwa wa kisiasa na kiuchumi. Katika elimu ya usimamizi wa fedha, deni halitazamiwi kama jambo baya pekee, bali kama chombo cha kimkakati cha kuongeza kasi ya maendeleo endapo litasimamiwa kwa weledi.\n\nChini ni uchambuzi wa kina kuhusu Deni la Taifa la Tanzania, kuanzia vyanzo vyake hadi jinsi linavyoathiri maendeleo jumuishi.\n\n### 1. Dhana ya Deni la Taifa (National Debt Architecture)\nDeni la Taifa ni jumla ya fedha ambazo Serikali inadaiwa na wakopeshaji wa ndani na nje. Tanzania inakopa kwa sababu mapato ya kodi pekee (Tax Revenue) hayatoshi kuziba pengo la mahitaji makubwa ya miundombinu.\n\n* **Deni la Nje (External Debt):** Hizi ni fedha zinazokopwa kutoka mataifa mengine, mashirika ya kimataifa (kama Benki ya Dunia - WB, au Shirika la Fedha la Kimataifa - IMF), na mabenki ya kibiashara ya nje. Mara nyingi hulipwa kwa fedha za kigeni (Dola).\n* **Deni la Ndani (Domestic Debt):** Hizi ni fedha serikali inayokopa kutoka ndani ya nchi kupitia uuzaji wa Hati Fungani (Treasury Bonds) na Dhamana za Hazina (Treasury Bills). Wakopeshaji hapa ni mabenki ya kibiashara, mifuko ya hifadhi ya jamii (NSSF, PSSSF), na wananchi mmoja mmoja.\n\n### 2. Kwa nini Tanzania Inakopa? (Investment vs. Consumption)\nKatika usimamizi wa fedha, ubora wa deni unapimwa na kile ambacho fedha hizo zinafanya.\n\n* **Miradi ya Kimkakati:** Tanzania inakopa ili kufadhili miradi inayozalisha tija ya muda mrefu kama Reli ya Kisasa (SGR), Mradi wa Umeme wa Julius Nyerere (JNHPP), na madaraja makubwa. Hii inaitwa "Kukopa kwa ajili ya Uwekezaji."\n* **Huduma za Jamii:** Sehemu ya mikopo (hasa yenye masharti nafuu) hutumika kuboresha mifumo ya maji, elimu, na afya, ambayo huongeza ubora wa nguvu kazi ya taifa.\n\n### 3. Uhimilivu wa Deni (Debt Sustainability)\nHiki ndicho kipengele muhimu zaidi ambacho wataalamu na wanasiasa hukitazama. Je, taifa linaweza kulipa madeni yake bila kuathiri uwezo wake wa kutoa huduma nyingine?\n\n* **Uwiano wa Deni na Pato la Taifa (Debt-to-GDP Ratio):** Huu ni kipimo cha ukubwa wa deni ukilinganisha na utajiri unaozalishwa na nchi. Kwa Tanzania, uwiano huu umekuwa ukibaki ndani ya viwango salama vya kimataifa (chini ya 55% kwa thamani ya sasa).\n* **Uwezo wa Kulipa (Debt Service-to-Revenue Ratio):** Hapa tunatazama asilimia ya mapato ya kodi inayotumika kulipa riba na deni kuu. Changamoto hutokea pale kiasi kikubwa cha kodi kinapokwenda kulipa madeni badala ya kununua dawa au kurekebisha barabara za vijijini.\n\n### 4. Changamoto za Usimamizi wa Deni\n1. **Mabadiliko ya Thamani ya Shilingi:** Kwa sababu deni la nje hulipwa kwa Dola, shilingi inaposhuka thamani, mzigo wa deni huongezeka hata kama serikali haijakopa pesa mpya.\n2. **Riba za Masoko ya Kimataifa:** Mikopo kutoka mabenki ya kibiashara (Commercial loans) ina riba kubwa na muda mfupi wa kulipa kuliko mikopo kutoka Benki ya Dunia (Concessional loans).\n3. **Mitego ya Madeni (Debt Traps):** Hali ambapo nchi inalazimika kukopa fedha mpya ili tu iweze kulipa riba ya madeni ya zamani. Huu ni mtego ambao usimamizi makini wa Hazina unajaribu kuuepuka.\n\n### 5. Udhibiti na Uwazi (Oversight and Transparency)\nTanzania ina taratibu za kisheria za kulinda taifa lisizame kwenye madeni yasiyolipika:\n\n* **Sheria ya Mikopo, Dhamana na Misaada (Government Loans, Grants and Guarantees Act):** Inatoa mamlaka kwa Waziri wa Fedha pekee kuwa msimamizi mkuu wa ukopaji.\n* **Kamati ya Taifa ya Usimamizi wa Deni (Debt Management Committee):** Hii inajumuisha wataalamu wanaofanya tathmini ya kila mkopo kabla hajachukuliwa.\n* **Ripoti za CAG:** Kila mwaka, CAG hukagua akaunti ya Deni la Taifa ili kuhakikisha kuwa fedha zilizokopwa zimetumika kama ilivyopangwa na malipo ya madeni yanafanyika kwa usahihi.\n\n### 6. Siasa na Deni la Taifa kwa Maendeleo\nWanasiasa wana jukumu la kuhakikisha kuwa mikopo inatumika kwenye miradi inayogusa maisha ya watu (Maendeleo Jumuishi).\n\n* **Uwajibikaji:** Bunge linapaswa kuhoji mikataba ya mikopo mikubwa ili kuhakikisha haina masharti yanayoumiza uhuru wa nchi.\n* **Uzalishaji wa Ndani:** Ili kulipa deni kwa urahisi, ni lazima kodi iongezeke. Hii inawezekana tu ikiwa mikopo hiyo inasaidia wakulima na wafanyabiashara wadogo kuzalisha zaidi.\n\n### Hitimisho\nDeni la Taifa siyo "mzigo" ikiwa linajenga daraja la kutufikisha kwenye uchumi wa viwanda. Lakini, linakuwa "kitanzi" ikiwa litatumika kwa matumizi ya kawaida ya kila siku. Siri ya mafanikio ya Tanzania iko kwenye Nidhamu ya Ukopaji (kukopa kwa ajili ya miradi yenye faida) na Ukuaji wa Uchumi (kuhakikisha uchumi unakua kwa kasi kuliko deni).',
    tags: ['Deni', 'Taifa', 'Uchumi', 'Sera'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T15:50:00Z',
    quiz: [
      {
        question: 'Deni la Taifa linafafanuliwa kama nini?',
        options: ['Jumla ya fedha serikali inadaiwa', 'Mapato ya kodi', 'Faida ya viwanda', 'Misaada ya nje'],
        correctAnswer: 0
      },
      {
        question: 'Ni nini kinachotofautisha Deni la Nje na Deni la Ndani?',
        options: ['Pesa inayotumika kulipa', 'Watu wanaokopa', 'Jina la wizara', 'Riba pekee'],
        correctAnswer: 0
      },
      {
        question: 'Kwanini Tanzania inakopa fedha?',
        options: ['Kufadhili miradi ya uwekezaji', 'Kununua magari ya kifahari', 'Kujenga magofu', 'Kutoa misaada'],
        correctAnswer: 0
      },
      {
        question: 'Ni kipimo gani kinatumika kuangalia ukubwa wa deni dhidi ya utajiri wa nchi?',
        options: ['Debt-to-GDP Ratio', 'Mshahara wa wafanyakazi', 'Idadi ya watu', 'Idadi ya magari'],
        correctAnswer: 0
      },
      {
        question: 'Nini kinatokea shilingi inaposhuka thamani kwenye deni la nje?',
        options: ['Mzigo wa deni huongezeka', 'Mzigo wa deni hupungua', 'Deni linafutika', 'Deni linabaki vilevile'],
        correctAnswer: 0
      },
      {
        question: 'Ni sheria ipi inalinda taifa lisizame kwenye madeni yasiyolipika?',
        options: ['Government Loans, Grants and Guarantees Act', 'Sheria ya Ardhi', 'Sheria ya Kazi', 'Sheria ya Siasa'],
        correctAnswer: 0
      },
      {
        question: 'Kazi kuu ya Kamati ya Taifa ya Usimamizi wa Deni ni nini?',
        options: ['Tathmini ya mikopo', 'Kukusanya kodi', 'Kujenga barabara', 'Kupiga marufuku mikopo'],
        correctAnswer: 0
      },
      {
        question: 'Mtu anayekagua akaunti ya Deni la Taifa kila mwaka ni nani?',
        options: ['CAG', 'Waziri wa Fedha', 'Rais', 'Naibu Waziri'],
        correctAnswer: 0
      },
      {
        question: 'Deni la taifa linapaswa kuwa "kitanzi" endapo?',
        options: ['Litatumika kwa matumizi ya kawaida', 'Litatumika kujenga viwanda', 'Litatumika kujenga reli', 'Litalipwa kwa muda'],
        correctAnswer: 0
      },
      {
        question: 'Nidhamu ya ukopaji inategemea mambo mangapi makuu?',
        options: ['Mambo mawili', 'Jambo moja', 'Mambo kumi', 'Mambo matano'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'post-35',
    title: 'Usimamizi wa matumizi ya serikali',
    date: 'Mei 5, 2026',
    category: 'Kisiasa',
    author: 'Deogratius Malingula',
    preview: 'Usimamizi wa matumizi ya serikali (Expenditure Control) ni upande wa pili wa sarafu ya kodi. Ukusanyaji wa mapato unaweza kuwa mkubwa, lakini kama hakuna udhibiti wa matumizi, taifa litaingia kwenye nakisi ya bajeti.',
    content: 'Usimamizi wa matumizi ya serikali (Expenditure Control) ni upande wa pili wa sarafu ya kodi. Ukusanyaji wa mapato unaweza kuwa mkubwa, lakini kama hakuna udhibiti wa matumizi, taifa litaingia kwenye nakisi ya bajeti (budget deficit) na madeni yasiyoisha.\n\nChini ni uchambuzi wa kina wa jinsi Tanzania inavyodhibiti matumizi yake ili kuhakikisha kila shilingi inaleta maendeleo.\n\n### 1. Mifumo ya Kidijitali ya Udhibiti (IFMS & Muse)\nZamani, upotevu mwingi wa fedha ulitokea kupitia malipo ya hundi na fedha taslimu. Tanzania imepiga hatua kwa kuanzisha mifumo ya kielektroniki:\n\n* **Integrated Financial Management System (IFMS):** Huu ni mfumo mkuu unaounganisha wizara zote. Huwezi kutoa pesa kama haipo kwenye bajeti iliyopitishwa na Bunge. Mfumo huu unazuia "matumizi ya nje ya bajeti."\n* **Muse (Mfumo wa Ulipaji Serikalini):** Huu ni mfumo wa ndani uliotengenezwa na wataalamu wa Kitanzania ambao umerahisisha malipo na kupunguza gharama za kununua mifumo kutoka nje. Unahakikisha kila malipo yanafuatiliwa kuanzia ngazi ya idara hadi hazina.\n\n### 2. Sheria ya Ununuzi wa Umma (Public Procurement Act)\nZaidi ya 70% ya bajeti ya serikali hutumika kwenye ununuzi (vifaa vya ujenzi, dawa, magari, na huduma za kitaalamu). Hapa ndipo mianya ya rushwa ilipo, hivyo udhibiti ni mkali:\n\n* **Mfumo wa NeST (National e-Procurement System of Tanzania):** Serikali imehamishia ununuzi wote mtandaoni. Badala ya watu kukutana na kupeana tenda kwa upendeleo, kila kitu kinatokea kidijitali ili kuongeza ushindani na kupunguza bei.\n* **Value for Money (VFM):** Mkazo umewekwa kuhakikisha kuwa ubora wa mradi (kama barabara) unaendana na kiasi cha pesa kilicholipwa. CAG hufanya "Performance Audit" kukagua hili.\n\n### 3. Udhibiti wa Mishahara na Watumishi Hewa\nMatumizi ya kawaida ya serikali hutawaliwa na mishahara (Payroll).\n\n* **Lawson System:** Huu ni mfumo wa usimamizi wa rasilimali watu unaohakikisha kila mtumishi anayelipwa yupo kazini. Udhibiti huu umesaidia kuondoa "watumishi hewa" na kuokoa mabilioni ya shilingi kila mwezi.\n* **Control of Allowances:** Serikali imekuwa ikipunguza posho zisizo za lazima (kama posho za vikao na safari za nje) ili kuelekeza fedha hizo kwenye miradi ya maendeleo.\n\n### 4. Jukumu la Hazina na Mgawanyo wa Fedha (Exchequer System)\nHazina (Treasury) ndiyo mlinzi wa mlango. Pesa haitoki mpaka vigezo vifuatavyo vitimizwe:\n\n* **Cash Rationing:** Hazina hutoa fedha kulingana na vipaumbele na upatikanaji wa mapato ya mwezi husika. Miradi ya kimkakati (kama Umeme wa Kidunda au Reli) hupewa kipaumbele kwanza.\n* **Commitment Control:** Idara ya serikali hairuhusiwi kuingia mkataba na mkandarasi kama haina uhakika wa fedha (commitment) kutoka Hazina. Hii inazuia limbikizo la madeni ya ndani.\n\n### 5. Uangalizi wa Kisiasa na Kitaalamu (Oversight)\nUdhibiti huu unakamilishwa na taasisi zinazojitegemea:\n\n* **Ofisi ya CAG:** Hukagua matumizi yaliyopita na kuibua ubadhirifu. Ripoti ya CAG ni "mwiba" kwa watendaji wazembe.\n* **Bunge kupitia Kamati (PAC/LAAC):** Hizi ni kamati za kisiasa zinazochambua ripoti za CAG. Wanasiasa wanapotumia mamlaka yao kuwawajibisha wakurugenzi, hiyo inatuma ujumbe wa nidhamu ya kifedha.\n* **Internal Audit:** Kila wizara ina wakaguzi wa ndani ambao ni "macho ya awali" ya serikali kabla hata makosa hayajatokea.\n\n### 6. Changamoto katika Udhibiti wa Matumizi\nPamoja na mifumo hiyo, bado kuna changamoto:\n1. **Dharura za Kitaifa:** Majanga kama mafuriko au magonjwa (mfano COVID-19) huilazimu serikali kutumia pesa nje ya bajeti ya awali.\n2. **Gharama za Madeni:** Kiasi kikubwa cha mapato kinalazimika kwenda kulipa madeni ya nje na ndani (Debt Servicing), jambo ambalo linapunguza fedha za kuelekeza kwenye miradi ya kijamii.\n3. **Ucheleweshaji wa Fedha:** Wakati mwingine udhibiti ukiwa mkali sana, fedha huchelewa kufika vijijini, jambo linalosimamisha maendeleo ya mwananchi wa kawaida.\n\n### Hitimisho kwa Maendeleo Jumuishi\nUsimamizi wa matumizi (Expenditure Control) ni nidhamu ya kusema "Hapana" kwa mambo yasiyo ya lazima ili kusema "Ndiyo" kwa elimu bora, afya, na miundombinu. Kwa Tanzania, ufunguo ni kuendelea kuimarisha mifumo ya Dijitali na kuwapa nguvu zaidi Wakaguzi (Auditors) ili kila shilingi ya mlipakodi iheshimiwe.',
    tags: ['Sera', 'Matumizi', 'Serikali', 'Usimamizi'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T15:41:00Z'
  },
  {
    id: 'post-34',

    title: 'Mlinganisho wa mataifa na hatua ambazo Tanzania inapiga',
    date: 'Mei 5, 2026',
    category: 'Sera na Hoja',
    author: 'Deogratius Malingula',
    preview: 'Ili kuelewa vizuri nafasi ya Tanzania, ni vyema kulinganisha mfumo wetu na nchi nyingine ambazo zimefanikiwa kutumia usimamizi wa fedha na kodi kama injini ya maendeleo ya haraka.',
    content: 'Ili kuelewa vizuri nafasi ya Tanzania, ni vyema kulinganisha mfumo wetu na nchi nyingine ambazo zimefanikiwa kutumia usimamizi wa fedha na kodi kama injini ya maendeleo ya haraka. Hii inatusaidia kuona wapi tunafanya vizuri na wapi tunahitaji maboresho ili kufikia "Zama Mpya za Maendeleo Jumuishi."\n\nHapa kuna uchambuzi wa mifano ya kimataifa na somo tunaloweza kujifunza:\n\n### 1. Mfano wa Norway: "Usimamizi wa Mapato ya Maliasili"\nNorway ni mfano bora duniani wa jinsi nchi inavyoweza kutumia rasilimali (kama mafuta na gesi) kwanufaisha wananchi wote, jambo ambalo Tanzania inajaribu kufanya kupitia sekta ya Madini na Gesi Asilia.\n\n* **Mfuko wa Pensheni wa Serikali (Sovereign Wealth Fund):** Norway haitumii pesa zote za mafuta kwa wakati mmoja. Badala yake, wanawekeza kiasi kikubwa kwenye masoko ya hisa duniani. Faida inayopatikana ndiyo inayotumika kugharamia huduma za jamii.\n* **Somo kwa Tanzania:** Tanzania imeanza safari hii kupitia uanzishwaji wa mifumo ya usimamizi wa mapato ya gesi. Lengo ni kuhakikisha kuwa rasilimali hizi zisizoisha (non-renewable) zinatengeneza utajiri kwa vizazi vijavyo, siyo tu kwa kizazi cha sasa.\n\n### 2. Mfano wa Rwanda: "Ufanisi wa Ukusanyaji na Digitali"\nRwanda imepiga hatua kubwa katika kurahisisha mifumo ya kodi na kuvutia uwekezaji.\n\n* **Irembo Platform:** Hapa kila huduma ya serikali inalipiwa kidijitali. Hakuna kukutana na ofisa wa serikali kumpa pesa mkononi. Hii imepunguza rushwa kwa kiwango kikubwa sana.\n* **Somo kwa Tanzania:** Tanzania inapiga hatua kupitia mfumo wa GePG (Government electronic Payment Gateway). Sasa hivi, unapolipa faini ya trafiki au ada ya shule, unapata Control Number. Hii inahakikisha pesa inaingia moja kwa moja hazina badala ya kupotelea mikononi mwa watu.\n\n### 3. Mfano wa Vietnam: "Maendeleo kupitia Viwanda na Kilimo"\nVietnam imefanikiwa kugeuza uchumi wake kutoka utegemezi wa kilimo pekee kwenda kwenye viwanda vinavyouza bidhaa nje (Export-oriented manufacturing).\n\n* **Vivutio vya Kodi (Strategic Tax Holidays):** Vietnam inatoa misamaha ya kodi ya muda mrefu (hadi miaka 10 au zaidi) kwa makampuni ya teknolojia yanayojenga viwanda vijijini ili kuleta ajira huko.\n* **Somo kwa Tanzania:** Kupitia kanda maalum za kiuchumi (EPZA), Tanzania inaweza kutumia kodi kama chombo cha kuvutia viwanda vikubwa kanda za kaskazini, kanda ya ziwa, na nyanda za juu kusini ili kukuza ajira kwa vijana.\n\n### 4. Changamoto ya "Hamsini kwa Hamsini" (Fiscal Federalism)\nKatika nchi kama Ujerumani au Afrika Kusini, kuna mgawanyo wa wazi zaidi wa mamlaka ya kifedha:\n\n* **Halmashauri:** Zina nguvu kubwa ya kujipangia kodi zao na kuzitumia bila kusubiri ruhusa kubwa kutoka Serikali Kuu.\n* **Tanzania:** Bado tuna mfumo wa "Centralized," ambapo kodi nyingi zinakwenda Dar es Salaam au Dodoma kwanza kabla ya kurudishwa mikoani. Changamoto hapa ni ucheleweshaji wa fedha za miradi vijijini.\n\n### 5. Mapendekezo ya Kisayansi kwa Tanzania ya Kesho\nIli kufikia maendeleo ya kweli kupitia usimamizi wa fedha, ni lazima tuzingatie mambo haya matatu:\n\n* **A. Kuongeza Wigo wa Kodi (Broadening the Tax Base):** Badala ya kuwa na walipakodi wachache wanaolipa kodi kubwa (jambo linaloumiza biashara), ni bora kuwa na walipakodi wengi (hadi mwananchi wa kijijini) wanaolipa kiasi kidogo sana. Hii inapunguza mzigo kwa mwananchi mmoja mmoja.\n* **B. Usimamizi wa Matumizi (Expenditure Rationalization):** Siasa lazima zielekezwe kwenye kupunguza matumizi ya anasa serikalini na kuelekeza fedha hizo kwenye Viwanda vya Kusindika Mazao. Tukisindika alizeti yetu badala ya kuuza mbegu, thamani ya kodi itakuwa kubwa zaidi (Value Added Tax).\n* **C. Elimu ya Fedha kwa Umma (Financial Literacy):** Mwananchi akielewa kuwa kodi yake ndiyo inayojenga kituo cha afya, atakuwa mlinzi wa kwanza wa fedha hizo. Hii inapunguza hitaji la kukagua kila mara kwa sababu jamii yenyewe inakuwa na "uchungu" na mali za umma.\n\n### Hitimisho la Jumla\nUsimamizi wa fedha nchini Tanzania siyo tu suala la namba; ni suala la Uzalendo na Dira ya Taifa. Tukichanganya nidhamu ya Norway kwenye rasilimali, ufanisi wa kidijitali wa Rwanda, na mkakati wa viwanda wa Vietnam, Tanzania ina uwezo wa kuwa kiongozi wa kiuchumi barani Afrika.\n\nUsimamizi bora wa fedha ndio unaofungua milango ya uhuru wa kweli—uhuru wa kutegemea mapato yetu wenyewe badala ya misaada.\n\n"Pesa ni damu ya uchumi; usimamizi wake ni moyo wa taifa."',
    tags: ['Uchumi', 'Sera', 'Kimataifa', 'Maendeleo'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T15:30:00Z'
  },
  {
    id: 'post-33',
    title: 'Mgawanyo wa Kodi katika Halmashauri na Serikali kuu',
    date: 'Mei 5, 2026',
    category: 'Sera na Hoja',
    author: 'Deogratius Malingula',
    preview: 'Ili kuelewa jinsi kodi inavyobadilika kuwa maendeleo, ni lazima tuangalie mfumo wa mgawanyo wa mapato kati ya Serikali kuu na Mamlakaza Serikali za Mitaa (Halmashauri).',
    content: 'Ili kuelewa jinsi kodi inavyobadilika kuwa maendeleo, ni lazima tuangalie mfumo wa mgawanyo wa mapato kati ya Serikali Kuu na Mamlaka za Serikali za Mitaa (Halmashauri). Huu ndio mtambo unaosukuma maendeleo kuanzia ngazi ya kijiji hadi taifa.\n\n### 1. Mgawanyo wa Mapato (Revenue Sharing)\nPesa inayokusanywa na TRA na Halmashauri haibaki sehemu moja. Inagawanywa ili kuhakikisha huduma zinafika kila kona ya nchi.\n\n* **Serikali Kuu:** Inakusanya kodi kubwa (Kodi ya Mapato, VAT, Ushuru wa Forodha, na Madini). Hizi hutumika kwa miradi ya kimkakati ya kitaifa (Reli, Bwawa la Umeme, Ndege, na Madeni ya Taifa).\n* **Mamlaka za Serikali za Mitaa (LGAs):** Halmashauri hukusanya mapato ya ndani (Ushuru wa mazao, kodi ya majengo, leseni za biashara). Lakini, kwa sababu mahitaji ya vijijini ni makubwa kuliko kodi inayopatikana huko, Serikali Kuu hutoa Ruzuku (Grants) kwenda Halmashauri.\n\n### 2. Kodi ya Majengo na Ardhi: Maendeleo ya Makazi\nKodi ya majengo ni moja ya nyenzo muhimu za maendeleo ya miji nchini Tanzania.\n\n* **Mfumo wa LUKU:** Kwa sasa, Tanzania inatumia mfumo wa kisasa ambapo kodi ya pango la nyumba (Property Rate) inakatwa kupitia manunuzi ya umeme (LUKU). Hii imesaidia kuongeza ufanisi kwa sababu kila mwenye nyumba analipa kiasi kidogo kila mwezi badala ya kusubiri faini kubwa mwisho wa mwaka.\n* **Urasimishaji Ardhi:** Serikali inatumia kodi ya ardhi kusaidia kupanga miji. Unapolipa kodi ya ardhi, unasaidia serikali kupata fedha za kupima viwanja, kujenga mifereji, na barabara za mitaani.\n\n### 3. Mapato ya Ndani ya Halmashauri na "10% za Mikopo"\nHapa ndipo "Maendeleo Jumuishi" yanapotekelezwa kwa vitendo. Kisheria, kila Halmashauri nchini Tanzania inatakiwa kutenga 10% ya mapato yake ya ndani kwa ajili ya kutoa mikopo isiyo na riba:\n\n* 4% kwa Wanawake.\n* 4% kwa Vijana.\n* 2% kwa Watu wenye Ulemavu.\n\nHii ni njia ya kurudisha kodi kwa wananchi ili wakue kiuchumi na baadaye waweze kulipa kodi kubwa zaidi (Economic Empowerment Cycle).\n\n### 4. Bajeti ya Maendeleo vs. Bajeti ya Matumizi\nUsimamizi wa fedha za umma unagawa bajeti katika sehemu mbili:\n\n1. **Matumizi ya Kawaida:** Kulipa mishahara ya walimu, madaktari, na askari, pamoja na gharama za ofisi.\n2. **Maendeleo (Development Budget):** Hizi ndizo fedha zinazojenga madarasa mapya, vituo vya afya, na kusambaza maji vijijini.\n\n* **Siasa za Maendeleo:** Taifa lenye afya ya kifedha ni lile linaloongeza asilimia ya bajeti ya maendeleo na kupunguza matumizi yasiyo ya lazima ya serikali (kama safari na sherehe).\n\n### 5. Usimamizi na Udhibiti: Jukumu la CAG na Bunge\nFedha hizi zisiposimamiwa, zinapotea kwenye mianya ya rushwa. Hapa ndipo nyenzo za kisheria zinapoingia:\n\n* **Mdhibiti na Mkaguzi Mkuu wa Hesabu za Serikali (CAG):** Kila mwaka anatoa ripoti inayoonyesha kama kodi zimetumika kama zilivyopangwa. Hii ni nyenzo muhimu kwa wanasiasa (Wabunge) kuibana serikali.\n* **Kamati za Bunge (PAC na LAAC):** Hizi kamati huchambua ripoti za CAG na kuwaita watendaji wa serikali na Wakurugenzi wa Halmashauri kuelezea matumizi ya fedha. Huu ni usimamizi wa kisiasa wa fedha za umma.\n\n### Hitimisho: Mnyororo wa Thamani wa Fedha nchini Tanzania\nElimu hii inatuonyesha kuwa:\n1. Mwananchi analipa kodi (mfano: kupitia vocha ya simu au kununua sukari).\n2. TRA/Halmashauri wanakusanya kodi hiyo.\n3. Bunge linapanga jinsi ya kuitumia kupitia Bajeti ya Taifa.\n4. Serikali inatekeleza miradi (barabara, maji, umeme).\n5. CAG anakagua ili kuhakikisha hakuna aliyeiba.\n\nUsimamizi huu ukiwa imara, taifa linasonga mbele. Changamoto kubwa inabaki kuwa Uwazi (Transparency) na kuhakikisha kuwa kila shilingi inayokusanywa inafanya kazi iliyokusudiwa.',
    tags: ['Sera', 'Kodi', 'Halmashauri', 'Usimamizi'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T15:21:00Z'
  },
  {
    id: 'post-32',
    title: 'Usimamizi wa Sera ya kodi katika sekta za Kimkakati',
    date: 'Mei 5, 2026',
    category: 'Sera na Hoja',
    author: 'Deogratius Malingula',
    preview: 'Usimamizi wa kodi katika sekta za kimkakati ndio unaoamua kasi ya maendeleo ya taifa.',
    content: 'Usimamizi wa kodi katika sekta za kimkakati ndio unaoamua kasi ya maendeleo ya taifa. Nchini Tanzania, kila sekta ina utaratibu wake wa kipekee wa kodi ulioundwa ili kuchochea uzalishaji wa ndani huku serikali ikipata rasilimali za kutosha.\n\nHapa kuna uchambuzi wa kina wa kodi katika nyanja muhimu:\n\n### 1. Sekta ya Madini: "The Sovereign Wealth Engine"\nSekta hii ni nyeti kisiasa na kiuchumi. Baada ya mabadiliko ya Sheria ya Madini (2017), Tanzania ilianzisha mfumo wa "Win-Win" ili kuhakikisha rasilimali hizi zinawanufaisha Watanzania.\n\n* **Royalty (Mrabaha):** Hii ni kodi inayotozwa kwenye thamani ghafi ya madini. Kwa madini ya vito na metali (kama dhahabu), mrabaha ulipandishwa hadi 6%. Kwa almasi ni 6%, na madini ya ujenzi ni 3%.\n* **Clearance Fee (Ada ya Ukaguzi):** Serikali inatoza 1% kama ada ya ukaguzi wa madini yanaposafirishwa.\n* **Government Free Carried Interest:** Serikali ina haki ya kumiliki hisa zisizopungua 16% kwenye miradi mikubwa ya madini bila kutoa gharama yoyote. Hii ni namna ya kupata mapato kupitia gawio (dividends).\n* **Kodi ya Faida (Corporate Tax):** Makampuni ya madini yanalipa 30% ya faida yao baada ya kutoa gharama za uendeshaji.\n\n### 2. Sekta ya Kilimo: "The Backbone and Tax Incentives"\nKilimo kinaajiri zaidi ya 65% ya Watanzania. Sera hapa inalenga kutoa unafuu badala ya kutoza kodi kubwa ili kumlinda mkulima mdogo.\n\n* **Misamaha ya VAT:** Zana za kilimo (trekta, majembe), mbolea, mbegu, na dawa za wadudu mara nyingi husamehewa kodi ya VAT (VAT Exempt) ili kupunguza gharama za uzalishaji.\n* **Ushuru wa Mazao (Cess):** Hii hutozwa na Mamlaka za Serikali za Mitaa (Halmashauri). Sheria ilirekebishwa ili ushuru huu usizidi 3% kwa mazao ya biashara na 2% kwa mazao ya chakula ili kumlinda mkulima.\n* **Kodi ya Ongezeko la Thamani (Value Addition):** Ili kuhimiza viwanda vya kusindika mazao nchini, serikali wakati mwingine hutoa unafuu wa kodi kwa mashine za viwanda vya kusindika mafuta ya alizeti au pamba.\n\n### 3. Sekta ya Viwanda na Biashara: "Protectionism vs. Growth"\nSera ya kodi hapa inatumika kulinda viwanda vya ndani dhidi ya bidhaa kutoka nje (Import Substitution).\n\n* **Customs Duty (Ushuru wa Forodha):** Kupitia Ushuru wa Pamoja wa Afrika Mashariki (EAC Common External Tariff), bidhaa zinazoweza kuzalishwa nchini (kama sukari au mafuta ya kula) hutozwa ushuru mkubwa wa forodha (hadi 35% au zaidi) ili bidhaa za ndani ziwe na ushindani.\n* **Excise Duty (Ushuru wa Bidhaa):** Hutozwa kwenye bidhaa zenye madhara (sin taxes) au anasa, kama vinywaji baridi, pombe, na sigara. Hiki ni chanzo kikubwa cha mapato ya uhakika kwa serikali.\n* **Kodi ya Maendeleo ya Ujuzi (Skills Development Levy - SDL):** Waajiri wenye wafanyakazi zaidi ya idadi fulani hulipa asilimia ya jumla ya mshahara (Payroll) kwenda serikalini kwa ajili ya kufadhili mafunzo ya ufundi (VETA) na mikopo ya elimu ya juu.\n\n### 4. Sekta ya Fedha na Uchumi wa Kidijitali\nHii ndiyo sekta inayokua kwa kasi zaidi na inaguswa na "Tozo" ambazo zimekuwa mjadala mkubwa wa kisiasa.\n\n* **Tozo za Miamala ya Simu:** Ni kodi inayotozwa unapotuma au kutoa pesa kwa simu. Hii inalenga kukusanya mapato kutoka kwa watu ambao hawako kwenye mfumo rasmi wa kodi (Informal sector).\n* **Digital Service Tax (DST):** Tanzania imeanza kutoza kodi kwa makampuni ya kimataifa yanayotoa huduma za kidijitali nchini (kama Google, Facebook, Netflix) kupitia mapato wanayopata kutoka kwa watumiaji wa Kitanzania.\n\n### 5. Sekta ya Utalii na Maliasili\nUtalii ni mchangiaji mkubwa wa fedha za kigeni.\n\n* **Tourism Levy:** Kodi inayotozwa kwenye hoteli na huduma za kitalii.\n* **Conservation Fees:** Mapato yanayotokana na viingilio kwenye hifadhi za taifa (TANAPA) na mamlaka ya Ngorongoro. Fedha hizi hutumika kulinda mazingira na kugharamia miradi ya jamii zinazozunguka hifadhi hizo.\n\n### Hitimisho la Kisiasa na Kiuchumi\nUsimamizi wa kodi katika nyanja hizi unahitaji mizani ya kipekee:\n\n1. **Kama kodi ni kubwa mno:** Inauwa motisha ya uzalishaji (mfano: wakulima kuacha kulima au wawekezaji wa madini kuondoka).\n2. **Kama kodi ni ndogo mno:** Serikali inashindwa kutoa huduma (elimu, afya, barabara).\n\nKwa maendeleo ya taifa, Tanzania inazidi kuelekea kwenye "Kodi Rafiki"—mfumo ambao unategemea zaidi wingi wa walipakodi (Tax base) kuliko kuwakamua walipakodi wachache waliopo. Hii ndiyo siri ya kufikia "Zama Mpya za Maendeleo Jumuishi."',
    tags: ['Sera', 'Kodi', 'Tanzania', 'Sekta za Kimkakati'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T15:15:00Z'
  },
  {
    id: 'post-31',
    title: 'Sera ya Kodi Tanzania',
    date: 'Mei 5, 2026',
    category: 'Sera na Hoja',
    author: 'Deogratius Malingula',
    preview: 'Ukusanyaji wa mapato kupitia kodi ni uti wa mgongo wa mamlaka ya nchi yoyote.',
    content: 'Ukusanyaji wa mapato kupitia kodi ni uti wa mgongo wa mamlaka ya nchi yoyote. Kwa Tanzania, mfumo huu unaratibiwa na Wizara ya Fedha kupitia Mamlaka ya Mapato Tanzania (TRA). Kuelewa sera ya kodi ya Tanzania kunahitaji kutazama sheria, taasisi, na falsafa ya kisiasa ya "Maendeleo Jumuishi."\n\nHapa kuna uchambuzi wa kina kuhusu Sera ya Kodi na Ukusanyaji wa Mapato nchini Tanzania:\n\n### 1. Misingi ya Sera ya Kodi Tanzania\nSera ya kodi ya Tanzania imejikita katika kanuni kuu za kiuchumi: **Usawa (Equity), Uhakika (Certainty), Urahisi (Convenience), na Ufanisi (Efficiency)**. Lengo kuu ni kuhakikisha serikali inapata mapato ya kutosha kugharamia miradi ya maendeleo (kama SGR na Bwawa la Nyerere) bila kuua biashara za wananchi.\n\n### Aina Kuu za Kodi Tanzania\nKodi nchini Tanzania zimegawanywa katika makundi mawili makubwa:\n\n* **Kodi za Moja kwa Moja (Direct Taxes):** Hizi ni kodi zinazotozwa moja kwa moja kwenye mapato ya mtu au kampuni.\n    * **Kodi ya Mapato (Income Tax):** Inajumuisha Pay As You Earn (PAYE) kwa wafanyakazi na kodi ya faida kwa makampuni (Corporate Tax—kwa kawaida ni 30%).\n    * **Kodi ya Zuio (Withholding Tax):** Inakatwa kwenye malipo kama vile kodi ya pango, gawio, au ada za kitaalamu.\n\n* **Kodi zisizo za Moja kwa Moja (Indirect Taxes):** Hizi hutozwa kwenye bidhaa na huduma.\n    * **Kodi ya Ongezeko la Thamani (VAT):** Kiwango cha kawaida ni 18%. Hii inalipwa na mlaji wa mwisho.\n    * **Ushuru wa Bidhaa (Excise Duty):** Inatozwa kwenye bidhaa maalum kama vinywaji vikali, sigara, na huduma za simu.\n    * **Ushuru wa Forodha (Customs Duty):** Inatozwa kwa bidhaa zinazoingizwa nchini kutoka nje ya Jumuiya ya Afrika Mashariki (EAC).\n\n### 2. Mfumo wa Ukusanyaji: Jukumu la TRA\nTRA ndiyo taasisi yenye dhamana ya kusimamia sheria za kodi. Katika miaka ya hivi karibuni, kumekuwa na mabadiliko makubwa kuelekea digitali:\n\n* **Mfumo wa TANSAD na TACE:S** Kwa ajili ya kurahisisha upitishaji wa mizigo bandarini.\n* **Electronic Fiscal Device (EFD):** Matumizi ya mashine hizi ni lazima ili kuhakikisha kila mauzo yanarekodiwa na kodi ya VAT inapatikana kwa usahihi.\n* **Taxpayer Identification Number (TIN):** Hii ni kitambulisho cha lazima kwa kila mwananchi anayefanya biashara au mwenye kipato, ikisaidia kuratibu kumbukumbu za mlipakodi mmoja mmoja.\n\n### 3. Kodi na Siasa za Maendeleo (Political Economy)\nTanzania inatumia kodi kama chombo cha Diplomasia ya Kiuchumi na Haki ya Kijamii.\n\n* **Vivutio vya Kodi (Tax Incentives):** Kupitia Kituo cha Uwekezaji (TIC), serikali hutoa misamaha ya kodi kwa wawekezaji wakubwa kwenye sekta za kipaumbele (viwanda, madini, utalii) ili kuchochea ajira.\n* **Kodi na Sekta Isiyo Rasmi:** Siasa za sasa zinalenga kuingiza wafanyabiashara wadogo (Machinga) kwenye mfumo wa kodi kwa kuwapa vitambulisho maalum, badala ya kuwafukuza. Hii inapanua wigo wa kodi (Tax Base).\n* **Mjadala wa Tozo:** Tozo za miamala ya simu na benki ni mfano wa namna siasa inavyojaribu kutafuta vyanzo vipya vya mapato kutoka kwenye uchumi wa dijitali ili kupeleka huduma vijijini.\n\n### 4. Changamoto za Ukusanyaji Mapato Tanzania\nLicha ya mafanikio, kuna changamoto zinazohitaji usimamizi wa kisayansi na kisiasa:\n\n1. **Ukwekwaji kodi (Tax Evasion):** Baadhi ya makampuni makubwa hutumia mbinu za "Transfer Pricing" ili kupunguza faida ionekane ndogo na hivyo kulipa kodi kidogo.\n2. **Wigo Mdogo:** Idadi ya walipakodi bado ni ndogo ikilinganishwa na idadi ya watu. Watu wengi bado wako kwenye sekta isiyo rasmi.\n3. **Migogoro ya Kikodi:** Uhusiano kati ya wafanyabiashara na maofisa wa kodi wakati mwingine huwa na misuguano (Tax Administration hostility), jambo linaloweza kuathiri mazingira ya biashara.\n\n### 5. Mapendekezo kwa Maendeleo Jumuishi\nIli mfumo wa kodi ulete maendeleo ya kweli nchini Tanzania, ni lazima:\n\n* **Kurasimisha Biashara:** Kufanya mchakato wa kusajili biashara uwe rahisi na wenye faida kwa mwananchi wa kawaida.\n* **Matumizi ya Data:** Kutumia akili mnemba (AI) na mifumo ya kidijitali kufuatilia miamala na kuzuia upotevu wa mapato.\n* **Uwazi (Accountability):** Wananchi wanapofurahia barabara, maji, na elimu bure, wanapata morali zaidi ya kulipa kodi. Hapa ndipo usimamizi wa fedha unageuka kuwa chombo cha siasa safi.',
    tags: ['Sera', 'Kodi', 'Tanzania', 'Uchumi'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T14:45:00Z'
  },
  {
    id: 'post-30',
    title: 'Elimu ya Usimamizi wa Fedha',
    date: 'Mei 5, 2026',
    category: 'Kisiasa',
    author: 'Deogratius Malingula',
    preview: 'Usimamizi wa fedha katika ngazi ya kitaifa ni pana na inagusa mtambuka wa siasa, uchumi wa jumla, na mifumo ya kibenki.',
    content: 'Elimu ya usimamizi wa fedha katika ngazi ya kitaifa ni pana na inagusa mtambuka wa siasa, uchumi wa jumla (macroeconomics), na mifumo ya kibenki. Ili taifa liendelee, lazima kuwe na uwiano kati ya maamuzi ya kisiasa na misingi ya kitaalamu ya kifedha.\n\n### 1. Siasa na Usimamizi wa Fedha za Umma (Public Finance)\nSiasa ndiyo inayopanga vipaumbele vya taifa kupitia Bajeti ya Serikali. Usimamizi wa fedha hapa unajikita katika maeneo makuu matatu:\n\n**A. Ukusanyaji wa Mapato (Taxation Policy):** Siasa huamua nani alipe kodi na kwa kiasi gani. Elimu ya fedha hapa inafundisha kuwa kodi zisizoelekea kukandamiza uzalishaji huleta maendeleo zaidi.\n\n**B. Matumizi ya Serikali (Expenditure Control):** Fedha za walipa kodi zinatengwa kwenye miradi ya kimkakati (kama reli, umeme, na elimu). Usimamizi mbovu wa kisiasa hapa husababisha "Miradi ya Tembo Mweupe" (miradi inayotumia pesa nyingi bila tija).\n\n**C. Deni la Taifa:** Wanasiasa hukopa kwa ajili ya maendeleo. Hata hivyo, usimamizi wa fedha kitaifa unapaswa kuhakikisha kuwa Deni ni Himilivu, yaani uwezo wa kulipa unakuwepo bila kuumiza huduma za jamii.\n\n![Budget Cycle](https://raw.githubusercontent.com/deogratiusmalingula2005/budget-images/main/budget-cycle.png)\n\n### 2. Benki Kuu (Central Bank) na Sera ya Fedha.\n\nBenki Kuu ndiyo moyo wa mfumo wa fedha nchini. Inafanya kazi kwa uhuru wa kitaalamu lakini inaguswa na dira ya kisiasa ya nchi.\n\n**A. Udhibiti wa Mfumuko wa Bei (Inflation Control):** Benki Kuu inasimamia kiasi cha fedha kinachozunguka. Pesa nyingi mtaani bila uzalishaji husababisha bidhaa kuwa ghali, jambo ambalo linaweza kuleta machafuko ya kisiasa.\n\n**B. Thamani ya Shilingi:** Kupitia usimamizi wa akiba ya fedha za kigeni, Benki Kuu inahakikisha shilingi inabaki imara dhidi ya sarafu kama Dola, jambo ambalo ni muhimu kwa wafanyabiashara na waagizaji wa bidhaa.\n\n**C. Riba za Benki:** Benki Kuu inaposhusha riba, inahamasisha mabenki ya biashara kukopesha zaidi, jambo linalochochea ukuaji wa uchumi na ajira.\n\n### 3. Sekta ya Benki na Ushirikishi wa Kifedha (Financial Inclusion)\n\nMabenki ya biashara ni daraja kati ya wenye mitaji na wenye uhitaji wa mitaji.\n\n**A. Uwekezaji kwenye Sekta za Kimkakati:** Benki zinapaswa kuelekeza mikopo kwenye sekta zinazoajiri watu wengi kama Kilimo na Viwanda Vidogo (SMEs). Hapa ndipo maendeleo jumuishi yanapotokea.\n\n**B. Teknolojia (FinTech):** Matumizi ya mabenki kupitia simu yamesaidia wananchi wengi wa vijijini kuingia kwenye mfumo rasmi wa fedha, jambo linalorahisisha mzunguko wa kodi na biashara nchini.\n\n### 4. Uhusiano wa Siasa, Maendeleo, na Fedha\nMaendeleo ya taifa yanategemea jinsi siasa inavyotengeneza mazingira ya kifedha (Political Economy):\n\n**A. Utawala Bora:** Fedha haziwezi kuleta maendeleo kama kuna rushwa na ubadhirifu. Usimamizi wa fedha unahitaji mifumo ya uwazi (Transparency).\n\n**B. Sheria na Sera:** Bunge (ambalo ni chombo cha kisiasa) hutunga sheria za fedha zinazolinda amana za wananchi mabenki na kuvutia wawekezaji wa nje (FDI).\n\n**C. Maendeleo Jumuishi:** Hii ni falsafa ya kuhakikisha ukuaji wa uchumi haubaki kwa watu wachache wa mjini, bali unafika hadi kwa mwananchi wa kawaida kupitia mifumo ya mikopo na ruzuku.\n\n### 5. Changamoto za Kifedha Kitaifa\n\nIli kuelewa usimamizi wa fedha nchini, ni lazima kutambua vikwazo hivi:\n\n**A. Ukosefu wa Elimu ya Fedha kwa Umma:** Wananchi wengi hawajui jinsi ya kutumia mabenki au soko la hisa (DSE).\n\n**B. Utegemezi wa Nje:** Bajeti za nchi zinazoendelea mara nyingi hutegemea misaada au mikopo ya nje, jambo linaloweza kuathiri uhuru wa kisiasa.\n\n**C. Uchumi usio rasmi:** Watu wengi wanafanya biashara bila kusajiliwa, hivyo serikali kukosa mapato ya kodi na watu kukosa sifa za kukopesheka benki.',
    tags: ['Siasa', 'Usimamizi wa Fedha', 'Maendeleo'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-05-05T00:00:00Z'
  },
  {
    id: 'post-28',
    title: 'MASHARTI YA UANACHAMA',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Masharti ya kujiunga na kuendelea kuwa mwanachama wa Chama Cha Mapinduzi (CCM).',
    content: '### MASHARTI YA UANACHAMA\n\nIli mtu akubaliwe kuingia au kuendelea kuwa mwanachama wa Chama Cha Mapinduzi (CCM), ni sharti atimize vigezo na masharti yafuatayo:\n\n1. **Heshima kwa Binadamu:** Ni lazima mwanachama aonyeshe heshima kwa utu na haki za binadamu.\n\n2. **Uelewa na Utekelezaji wa Itikadi:** Ni sharti mwanachama ajitolee kuielewa, kuieleza, kuitetea, na kuitekeleza Itikadi na Siasa ya CCM.\n\n3. **Utu kupitia Kazi:** Ni lazima mwanachama aamini kuwa kazi ni kipimo cha utu na kutekeleza imani hiyo kwa vitendo.\n\n4. **Ushirikiano:** Ni sharti mwanachama awe na moyo wa kushirikiana na wenzake katika shughuli za chama na jamii.\n\n5. **Uongozi katika Utumishi wa Umma:** Ni lazima mwanachama awe mstari wa mbele katika utekelezaji wa mambo yote ya umma kwa mujibu wa Miongozo ya CCM.\n\n6. **Maadili na Tabia:** Ni sharti mwanachama awe mfano wa tabia njema kwa vitendo na kauli, awe mwaminifu, na aepuke vitendo vya ulevi au uzururaji.\n\n7. **Shughuli Halali:** Ni lazima mwanachama awe mkulima, mfanyakazi, au mwenye shughuli nyingine yoyote halali ya kujitegemea.',
    tags: ['CCM', 'Uanachama', 'Masharti'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-25T00:00:00Z'
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
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-25T00:00:00Z'
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
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-25T00:00:00Z'
  },
  {
    id: 'post-25',
    title: 'MAANA RAHISI YA KIFUNGU 5A',
    date: 'Machi 25, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Ufafanuzi wa maneno yanayotumika kwenye Katiba ya CCM ili kuondoa mkanganyiko.',
    content: '🌿 MAANA RAHISI YA KIFUNGU 5A\n\nKifungu hiki kinafafanua maana ya baadhi ya istilahi zinazotumika katika Katiba ya CCM kwa lengo la kuondoa mkanganyiko wa tafsiri.\n\n### 1. Wabunge wa aina nyingine\nKwa mujibu of kifungu hiki, wabunge wa aina nyingine ni pamoja na:\n- Wabunge wa Viti Maalum;\n- Wabunge walioteuliwa;\n- Wabunge wa Bunge la Afrika Mashariki;\n\nmradi wote wawe wametokana na Chama Cha Mapinduzi (CCM).\n\n### 2. Wawakilishi\nNeno “Wawakilishi” linarejelea wajumbe wa Baraza la Wawakilishi Zanzibar wanaotokana na Chama Cha Mapinduzi (CCM).\n\n### 3. Kanuni zinazohusika\nKanuni zinazohusika ni pamoja na:\n- Kanuni za CCM zilizoorodheshwa katika Nyongeza B ya Katiba;\n- Kanuni nyingine zozote zitakazotungwa kwa mujibu wa Katiba hii.\n\n### 4. Kipaumbele cha Katiba\nIwapo kutatokea mgongano kati ya Katiba na kanuni yoyote ya CCM:\n- Katiba itakuwa na mamlala ya juu na itachukua kipaumbele juu ya kanuni husika.',
    tags: ['CCM', 'Katiba', 'Ufafanuzi'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-25T00:00:00Z'
  },
  {
    id: 'post-24',
    title: 'MALENGO NA MADHUMUNI YA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Malengo na madhumuni ya Chama Cha Mapinduzi (CCM) katika kujenga taifa.',
    content: 'Kwa hiyo Malengo na Madhumuni ya CCM yatakuwa yafuatayo:\n\n(1) Kushinda katika Uchaguzi wa Serikali Kuu na Serikali za Mitaa Tanzania Bara na Zanzibar ili kuunda na kushika Serikali Kuu na Serikali za Mitaa katika Jamhuri ya Muungano wa Tanzania kwa upande mmoja na Zanzibar kwa upande wa pili.\n\n(2) Kulinda na kudumisha Uhuru wa Nchi yetu na raia wake.\n\n(3) Kuhimiza ujenzi wa Ujamaa na Kujitegemea kwa mujibu wa Azimio la Arusha.\n\n(4) Kusimamia utekelezaji wa Siasa ya CCM pamoja na kuendeleza fikra za viongozi waasisi wa vyama vya TANU na ASP, kama zilivyofafanuliwa katika maandiko mbalimbali ya Vyama hivyo.\n\n(5) Kuona kwamba kila mtu anayo haki ya kupata kutoka katika Jamii hifadhi ya maisha yake na mali yake kwa mujibu wa sheria.\n\n(6) Kuona kwamba katika Nchi yetu kila mtu aliye na uwezo wa kufanya kazi anafanya kazi; na kazi maana yake ni shughuli yoyote halali inayompatia mtu riziki yake.\n\n(7) Kusimamia haki na maendeleo ya Wakulima, Wafanyakazi na Wananchi wengine wenye shughuli halali za kujitegemea; na hasa kuona kwamba kila mtu ana haki ya kupata malipo yanayostahili kutokana na kazi yake.\n\n(8) Kuona kwamba kwa kutumia Vikao vilivyowekwa, raia anayo haki ya kushiriki kwa ukamilifu katika kufikia uamuzi wa mambo ya Taifa na yanayomhusu, na kwamba anao uhuru wa kutoa mawazo yake, wa kwenda anakoataka, wa kuamini Dini anayotaka na kukutana with watu wengine, maadamu havunji Sheria au Taratibu zilizowekwa.\n\n(9) Kuona kwamba Nchi yetu inatawaliwa kwa misingi ya kidemokrasia na ya kijamaa.\n\n(10) Kuhifadhi, kukuza na kudumisha imani na moyo wa kimapinduzi miongoni mwa Watanzania pamoja na ushirikiano na mshikamano miongoni mwao na na mataifa mengine duniani.\n\n(11) Kuweka na kudumisha heshima ya binadamu kwa kufuata barabara Kanuni za Tangazo la Dunia la Haki za Binadamu.\n\n(12) Kuona kwamba Dola inakuwa Mhimili wa Uchumi wa Taifa.\n\n(13) Kuona kwamba Serikali na Vyombo vyote vya Umma vinasaidia wananchi wote kujitegemea na kwamba vinatumika kwa ushirikiano na wananchi na siyo kwa ajili ya kuwatumia bali kwa ajili ya kuwasaidia wananchi kujitegemea.\n\n(14) Kuona kwamba matumizi ya utajiri wa Taifa yanatilila mkazo maendeleo ya Wananchi na hasa jitihada za kuondosha umasikini, Ujinga na Maradhi.\n\n(15) Kuona kwamba Serikali na vyombo vyote vya umma vinatoa nafasi zilizo sawa kwa raia wote, Wanawake na Wanaume bila kujali rangi, kabila, Dini, au hali ya mtu.\n\n(16) Kuona kwamba katika nchi yetu hakuna aina yoyote ya dhuluma, vitisho, ubaguzi, rushwa, uonevu na/au upendeleo.\n\n(17) Kuendeleza kupiga vita Ukoloni Mamboleo, Ubeberu na Ubaguzi wa aina yoyote.\n\n(18) Kuimarisha uhusiano mzuri na vyama vya Siasa vya Nchi nyingine vyenye itikadi kama ya CCM ambavyo kupinga Ukoloni, Ukoloni Mamboleo, Ubeberu na Ubaguzi wa aina yoyote.\n\n(19) Kushirikiana na Vyama vingine katika Afrika, kwa madhumuni ya kuleta Umoja wa Afrika, na kuona kwamba Serikali inaendeleza na kuimarisha ujirani mwema.',
    tags: ['CCM', 'Malengo', 'Madhumuni', 'Siasa'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-24T00:00:00Z'
  },
  {
    id: 'post-23',
    title: 'IMANI YA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Chama Cha Mapinduzi kinaamini katika usawa wa binadamu na Ujamaa na Kujitegemea.',
    content: 'Chama Cha Mapinduzi kinaamini kwamba:\n\n(1) Binadamu wote ni sawa.\n(2) Kila mtu anastahili heshima ya kutambuliwa na kuthaminiwa utu wake.\n\n(3) Ujamaa na Kujitegemea ndiyo njia pekee ya kujenga jamii ya watu walio sawa na huru.',
    tags: ['CCM', 'Imani', 'Siasa'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-24T00:00:00Z'
  },
  {
    id: 'post-22',
    title: 'BENDERA, NEMBO NA VAZI RASMI LA CCM',
    date: 'Machi 24, 2026',
    category: 'CCM',
    author: 'Deogratius Malingula',
    preview: 'Maelezo kuhusu bendera, nembo, na vazi rasmi la Chama Cha Mapinduzi (CCM).',
    content: '(1) Bendera ya CCM ina rangi ya kijani kibichi, ambayo ina alama ya Jembe (alama ya Mkulima) na Nyundo (alama ya Mfanyakazi) kwenye pembe ya juu upande of mlingoti.\n\n(2) Nembo ya CCM ina Jembe na Nyundo kwa Mfumo wa kuzidisha, na chini inaunganishwa na neno “Chama cha Mapinduzi.”\n\n(3) Vazi rasmi la CCM ni suruali au sketi nyeusi na shati la kijani lenye nakshi ya njano.',
    tags: ['CCM', 'Bendera', 'Nembo', 'Vazi'],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    font: 'font-sans',
    createdAt: '2026-03-24T00:00:00Z'
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
  { id: 'r1', title: 'Nyaraka za Sera', description: 'Mkusanyiko wa sera zote zilizopendekezwa.', count: '12', type: 'Sera na Hoja' },
  { id: 'r2', title: 'Ripoti za Ziara', description: 'Muhtasari wa ziara zote za kikazi.', count: '45', type: 'Ziara' },
  { id: 'r3', title: 'Hotuba Zilizorekodiwa', description: 'Hifadhi ya hotuba zote muhimu.', count: '28', type: 'Hotuba' },
  { id: 'r4', title: 'Maoni ya Wananchi', description: 'Uchambuzi wa maoni kutoka kwa wadau.', count: '1500+', type: 'Maoni' }
];
