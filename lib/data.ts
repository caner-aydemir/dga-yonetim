export type ProjectStat = {
  label: string
  value: string
}

export type Project = {
  slug: string
  title: string
  category: string
  location: string
  year: string
  cover: string
  gallery: string[]
  excerpt: string
  description: string[]
  stats: ProjectStat[]
  highlights: string[]
  hasDetail: boolean
}

export const company = {
  name: "DGA YÖNETİM",
  legalName: "DGA Tesis Yönetimi ve Danışmanlık Limited Şirketi",
  tagline: "Kusursuz Yönetim, Sessiz Operasyon.",
  email: "info@dgayonetim.com.tr",
  phone: "+90 507 540 51 73",
  phoneHref: "tel:+905075405173",
  whatsapp: "https://wa.me/905075405173",
  instagram: "https://instagram.com/dgayonetim",
  twitter: "https://x.com/dgayonetim",
  website: "https://www.dgayonetim.com.tr",
  address:
    "İnkılap Mah. Dr. Adnan Büyükdeniz Caddesi Akkom 2. Blok Cessas Plaza No:4 Kat:10 Ümraniye İstanbul",
}

export const navItems = [
  { label: "Anasayfa", href: "/#hero", homeHref: "#hero" },
  { label: "Farkımız", href: "/#about", homeHref: "#about" },
  { label: "Hizmetler", href: "/#services", homeHref: "#services" },
  { label: "Projeler", href: "/projeler", homeHref: "#projects" },
]

export const projects: Project[] = [
  {
    slug: "akkom-ofis-park",
    title: "Akkom Ofis Park",
    category: "A Tipi Ofis",
    location: "Ümraniye, İstanbul",
    year: "İşletmede",
    cover: "/images/projects/akkom/03.jpg",
    gallery: [
      "/images/projects/akkom/hero.jpg",
      "/images/projects/akkom/02.jpg",
      "/images/projects/akkom/03.jpg",
      "/images/projects/akkom/04.jpg",
      "/images/projects/akkom/05.jpg",
    ],
    excerpt:
      "Türkiye’nin tek seferde sunulan en büyük A tipi ofis kampüsü. Dört iş kulesinde sessiz, kurumsal ve kesintisiz tesis yönetimi.",
    description: [
      "İstanbul’un finans merkezi Ümraniye’de yükselen Akkom Ofis Park, özgün mimarisi, teknolojik altyapısı ve A sınıfı ofis standardıyla Türkiye’nin tek seferde sunulan en büyük ofis projelerinden biridir. Dört iş kulesinden oluşan kampüste ilk blok, genel müdürlük binası olarak Albaraka Türk tarafından satın alınmış; diğer kuleler sektörün önde gelen kurumlarına ev sahipliği yapmaktadır.",
      "DGA Yönetim olarak bu ölçekteki bir iş kampüsünde kuruluştan işletmeye kadar tesis yönetimi organizasyonunu kurduk; yönetim planını hazırladık ve operasyonu devreye aldık. 160.000 m² inşaat, 90.000 m² kiralanabilir alanda hedefimiz nettir: işin akışını hiç bozmadan, görünmeden çalışan kusursuz bir düzen.",
      "Teknik işletme, güvenlik, temizlik, satın alma ve sözleşme yönetimi tek standartta yürür. Ortak alanların prestiji, lobi deneyimi ve 7/24 operasyonel süreklilik; markanın canlı imzası olarak sahada hissedilir.",
    ],
    stats: [
      { label: "Konum", value: "Ümraniye / İstanbul" },
      { label: "İnşaat Alanı", value: "160.000 m²" },
      { label: "Kiralanabilir Alan", value: "90.000 m²" },
      { label: "Kat Alanları", value: "600 – 1.600 m²" },
      { label: "Yapı", value: "4 iş kulesi" },
      { label: "Sınıf", value: "A Tipi Ofis" },
    ],
    highlights: [
      "Sıfırdan tesis yönetimi organizasyonu",
      "Kurumsal lobi ve ortak alan standartları",
      "Teknik işletme ve 7/24 süreklilik",
      "Çok kiracılı ofis kampüsü operasyonu",
    ],
    hasDetail: true,
  },
  {
    slug: "pruva-34",
    title: "Pruva 34",
    category: "Lüks Konut",
    location: "Bakırköy, İstanbul",
    year: "İşletmede",
    cover: "/images/projects/pruva/hero.jpg",
    gallery: [
      "/images/projects/pruva/hero.jpg",
      "/images/projects/pruva/03.jpg",
      "/images/projects/pruva/05.jpg",
      "/images/projects/pruva/04.jpg",
    ],
    excerpt:
      "Bakırköy’de denize sıfır, 239 konutluk seçkin bir yaşam. Peyzaj, sosyal alan ve sessiz operasyonla kurgulanan bir sahne.",
    description: [
      "İstanbul’un en gözde bölgelerinden Bakırköy’de, denize sıfır bir alanda konumlanan Pruva 34; yalın mimarisi, geniş peyzajı ve sosyal imkanlarıyla ayrıcalıklı bir yaşam sunar. 309.003 m² inşaat alanında 239 konut, 290 m²’den 718 m²’ye uzanan metrekareleriyle aile yaşamını merkeze alır.",
      "DGA Yönetim, projenin işletmeye alma sürecinde yönetim planını, saha organizasyonunu ve prestijli konut sitelerine yakışan ağırlama standardını kurguladı. Havuzlar, bahçeler ve ortak alanlar; gürültüsüz, aksamasız ve görünmez bir operasyonla yönetilir.",
      "Burada tesis yönetimi sıradan bir bakım değildir. Sakinlerin her sabah karşılaştığı düzen, güvenlik ve zarafet; gayrimenkulün değerini koruyan bir ağırlama tecrübesidir.",
    ],
    stats: [
      { label: "Konum", value: "Bakırköy / İstanbul" },
      { label: "İnşaat Alanı", value: "309.003 m²" },
      { label: "Konut Alanı", value: "157.588 m²" },
      { label: "Konut Adedi", value: "239" },
      { label: "Konut Büyüklükleri", value: "290,8 – 718,7 m²" },
      { label: "Karakter", value: "Denize sıfır lüks yaşam" },
    ],
    highlights: [
      "Lüks konut sitesi işletme standardı",
      "Peyzaj ve sosyal alan yönetimi",
      "Sakin deneyimini bozmayan sessiz operasyon",
      "Yönetim planı ve işletmeye alma",
    ],
    hasDetail: true,
  },
  {
    slug: "doga-plaza",
    title: "Doğa Plaza",
    category: "İş Merkezi",
    location: "Beylikdüzü, İstanbul",
    year: "İşletmede",
    cover: "/images/projects/plaza/hero.jpg",
    gallery: [
      "/images/projects/plaza/hero.jpg",
      "/images/projects/plaza/02.jpg",
      "/images/projects/plaza/04.jpg",
      "/images/projects/plaza/03.jpg",
    ],
    excerpt:
      "Kıraç’ta yükselen iş merkezi. Bankalar ve kurumsal kiracılar için düzenli, güvenli ve kesintisiz bir işletme.",
    description: [
      "İstanbul’un gelişen bölgelerinden Kıraç’ta 18.609 m²’lik alanda kurulan Doğa Plaza, iş yaşantısının temel ihtiyaçlarının ötesine geçen bir ofis yapısı olarak tasarlandı. Farklı şirketlerin ve büyük kurumların kiracı olarak yer aldığı plaza, bölgenin değişen yüzünü temsil eder.",
      "DGA Yönetim bu yapıda teknik işletme, ortak alan yönetimi, güvenlik ve temizlik süreçlerini tek bir standartta birleştirdi. Kat alanları 2.460 m² ile 4.032 m² arasında değişen binada, çok kiracılı bir iş merkezinin gerektirdiği esneklik ve disiplin birlikte yürür.",
      "Hedefimiz, çalışanların her gün ayrıcalıklı hissettiği; işverenin ise yalnızca işine odaklandığı bir plaza deneyimidir.",
    ],
    stats: [
      { label: "Konum", value: "Beylikdüzü / İstanbul" },
      { label: "İnşaat Alanı", value: "18.609 m²" },
      { label: "Kiralanabilir Alan", value: "9.197 m²" },
      { label: "Kat Alanları", value: "2.460 – 4.032 m²" },
      { label: "Mimar", value: "Nermin Özkök" },
      { label: "Kullanım", value: "Çok kiracılı iş merkezi" },
    ],
    highlights: [
      "Çok kiracılı plaza operasyonu",
      "Teknik bakım ve ortak alan disiplini",
      "Kurumsal güvenlik standardı",
      "Maliyet odaklı, şeffaf işletme",
    ],
    hasDetail: true,
  },
  {
    slug: "doga-cadde-avm",
    title: "Doğa Cadde AVM",
    category: "Alışveriş Merkezi",
    location: "Battalgazi, Malatya",
    year: "İşletmede",
    cover: "/images/projects/cadde-avm/hero.jpg",
    gallery: [
      "/images/projects/cadde-avm/hero.jpg",
      "/images/projects/cadde-avm/02.jpg",
      "/images/projects/cadde-avm/03.jpg",
      "/images/projects/cadde-avm/04.jpg",
    ],
    excerpt:
      "Malatya’da cadde konseptli alışveriş. Ziyaretçi konforu, marka karması ve kesintisiz AVM işletmesi.",
    description: [
      "Şubat 2016’da Malatya Battalgazi’de hayata geçen Doğa Cadde AVM, cadde boyu alışveriş konseptiyle kente yeni bir alışveriş deneyimi kazandırdı. 24.500 m² inşaat, 20.873 m² kiralanabilir alan ve 900 araçlık açık otoparkıyla ziyaretçisine rahat, akıcı bir dolaşım sunar.",
      "Ulusal markaların yer aldığı karmayı ayakta tutan şey vitrin değil; arka plandaki operasyondur. DGA Yönetim, AVM’nin teknik altyapısından temizlik ve güvenliğe, ortak alan düzeninden ziyaretçi deneyimine kadar tüm katmanları sessiz ve ölçülebilir biçimde yönetir.",
      "Yoğun sirkülasyonlu bir perakende yapısında aksama kabul edilemez. Bizim için her gün, markaların ve ziyaretçinin fark etmeden güvendiği bir sahne kurulumudur.",
    ],
    stats: [
      { label: "Konum", value: "Battalgazi / Malatya" },
      { label: "İnşaat Alanı", value: "24.500 m²" },
      { label: "Kiralanabilir Alan", value: "20.873 m²" },
      { label: "Otopark", value: "900 araç" },
      { label: "Konsept", value: "Cadde AVM" },
      { label: "Açılış", value: "Şubat 2016" },
    ],
    highlights: [
      "AVM işletme ve ziyaretçi deneyimi",
      "Yüksek sirkülasyonlu alan yönetimi",
      "Teknik, temizlik ve güvenlik entegrasyonu",
      "Perakende ortak alan standardı",
    ],
    hasDetail: true,
  },
  {
    slug: "limonlu-bahce-konaklari",
    title: "Limonlu Bahçe Konakları",
    category: "Konut Sitesi",
    location: "Ümraniye, İstanbul",
    year: "İşletmede",
    cover: "/images/projects/limonlu/02.png",
    gallery: [
      "/images/projects/limonlu/hero.jpg",
      "/images/projects/limonlu/02.png",
      "/images/projects/limonlu/03.png",
      "/images/projects/limonlu/04.jpg",
      "/images/projects/limonlu/05.jpg",
    ],
    excerpt:
      "Ümraniye’de 509 konut, 148 ticari ünite ve 67 bitki türüyle kurgulanmış doğa odaklı bir yaşam sitesi.",
    description: [
      "Limonlu Bahçe Konakları, Alemdağ Caddesi üzerinde, M5 metro hattına yakın konumuyla şehirle bağını koparmadan doğayla iç içe bir yaşam sunar. 196.796 m² inşaat alanında 509 konut ve 148 ticari ünite; 2+1’den 4+1’e uzanan tipolojilerle aile yaşamına göre planlanmıştır.",
      "67 farklı bitki türü, limon serası, gölet, yürüyüş ve bisiklet parkurları, kapalı yüzme havuzu, fitness, sauna ve hamam… Bu kadar katmanın tek bir ritimde işlemesi, görünmez bir yönetim disiplini ister. DGA Yönetim, peyzajdan sosyal tesise, güvenlikten site içi çarşıya kadar tüm operasyonu yüksek standartta kurgular.",
      "Aile dostu, engelsiz ve sakin bir site atmosferinin arkasında; zamanlaması kusursuz planlar, eğitimli saha ekibi ve şeffaf takip vardır.",
    ],
    stats: [
      { label: "Konum", value: "Ümraniye / İstanbul" },
      { label: "İnşaat Alanı", value: "196.796 m²" },
      { label: "Konut Sayısı", value: "509" },
      { label: "Ticari Ünite", value: "148" },
      { label: "Konut Tipleri", value: "2+1 · 3+1 · 4+1" },
      { label: "Peyzaj", value: "67 bitki türü" },
    ],
    highlights: [
      "Geniş peyzaj ve sosyal tesis işletmesi",
      "Konut + ticari karma site yönetimi",
      "Aile odaklı güvenlik ve ortak alan düzeni",
      "Sakin deneyimini merkeze alan sessiz operasyon",
    ],
    hasDetail: true,
  },
  {
    slug: "big-country",
    title: "Big Country",
    category: "Villa Yaşamı",
    location: "Büyükçekmece, İstanbul",
    year: "İşletmede",
    cover: "/images/projects/big-country/02.png",
    gallery: [
      "/images/projects/big-country/02.png",
      "/images/projects/big-country/03.png",
      "/images/projects/big-country/04.png",
      "/images/projects/big-country/05.png",
      "/images/projects/big-country/hero.jpg",
    ],
    excerpt:
      "Büyükçekmece Gölü manzaralı 126 tek katlı villa. Mahremiyet, ferahlık ve butik işletme standardı.",
    description: [
      "Büyükçekmece’de hayata geçen Big Country; 4+1’den 7+1’e tek katlı, geniş bahçeli villa seçenekleriyle düşük yoğunluklu ve mahremiyeti yüksek bir yaşam vadeder. 66.489 m²’lik alanda 126 bağımsız villa, birbirinin manzarasını engellemeyecek şekilde konumlanır.",
      "Big Country Club bünyesindeki tenis kortları, basketbol ve futbol sahaları, yarı olimpik kapalı yüzme havuzu ve sosyal alanlar; villanın birkaç adım ötesinde ayrıcalıklı bir kulüp hayatı sunar. DGA Yönetim, bu butik ölçekte bile aynı yüksek standardı uygular: görünmeden çalışan teknik ekipler, kusursuz zamanlama, prestiji koruyan saha disiplini.",
      "Seçkin villa yaşamında hizmet ekibi değil, markanın canlı imzası görülmelidir. Operasyon sessiz; sonuçlar yüksek seslidir.",
    ],
    stats: [
      { label: "Konum", value: "Büyükçekmece / İstanbul" },
      { label: "İnşaat Alanı", value: "66.489 m²" },
      { label: "Villa Sayısı", value: "126" },
      { label: "Villa Tipleri", value: "4+1 · 5+1 · 6+1 · 7+1" },
      { label: "Mimari", value: "Tek katlı villa" },
      { label: "Manzara", value: "Göl ve deniz" },
    ],
    highlights: [
      "Butik villa sitesi işletmesi",
      "Sosyal tesis ve kulüp alanları yönetimi",
      "Mahremiyeti koruyan saha disiplini",
      "Peyzaj, havuz ve teknik bakım sürekliliği",
    ],
    hasDetail: true,
  },
  {
    slug: "karat-34",
    title: "Karat 34",
    category: "Karma Yaşam",
    location: "Bahçelievler, İstanbul",
    year: "",
    cover: "/images/projects/karat/hero.jpg",
    gallery: [
      "/images/projects/karat/hero.jpg",
      "/images/projects/karat/03.jpg",
      "/images/projects/karat/04.jpg",
      "/images/projects/karat/05.jpg",
    ],
    excerpt:
      "Bahçelievler’de ofis ve rezidansı bir arada tutan prestijli karma yaşam. Kuruluştan işletmeye kurgulanan bir düzen.",
    description: [
      "Emlak Konut GYO güvencesiyle Doğa Şehircilik ve Başyapı tarafından inşa edilen Karat 34, İstanbul’da iş ve yaşam akışının kesiştiği bir noktada; ofis ve rezidanslardan oluşan prestijli bir karma yaşam projesidir. Atatürk Havalimanı’nın yanı başında, E5, metro ve metrobüs bağlantısıyla konumlanır.",
      "21.438 m² alanda 3’ü ofis, 3’ü rezidans olmak üzere 6 blok yükselir. 112.964 m² inşaat, 28.285 m² konut alanı ve 441 konut; 28,58 m²’den 267,10 m²’ye uzanan tipolojilerle hem yatırım hem yaşam için kurgulanmıştır. Ticari bloklar, LEED Gold yeşil bina sertifikasına adaydır.",
      "DGA Yönetim bu ölçekte ofis ve konutun aynı sahneyi paylaştığı bir yapıda tesis yönetimi organizasyonunu kurdu; yönetim planını hazırladı ve operasyonu devreye aldı. Ortak alanlar, sosyal tesis ve teknik süreklilik; işin ve evin ritmini bozmadan yürür.",
    ],
    stats: [
      { label: "Konum", value: "Bahçelievler / İstanbul" },
      { label: "İnşaat Alanı", value: "112.964 m²" },
      { label: "Konut Alanı", value: "28.285 m²" },
      { label: "Konut Adedi", value: "441" },
      { label: "Konut Büyüklükleri", value: "28,58 – 267,10 m²" },
      { label: "Yapı", value: "6 blok · 3 ofis · 3 rezidans" },
    ],
    highlights: [
      "Ofis + rezidans karma işletme",
      "Yönetim planı ve kuruluş organizasyonu",
      "Ortak alan ve sosyal tesis standardı",
      "Teknik süreklilik ve sessiz operasyon",
    ],
    hasDetail: true,
  },
  {
    slug: "platform-merter",
    title: "Platform Merter",
    category: "Lüks Rezidans",
    location: "Merter, İstanbul",
    year: "",
    cover: "/images/projects/platform-merter/hero.jpg",
    gallery: [
      "/images/projects/platform-merter/hero.jpg",
      "/images/projects/platform-merter/03.jpg",
      "/images/projects/platform-merter/04.jpg",
      "/images/projects/platform-merter/05.jpg",
    ],
    excerpt:
      "Merter’de 323 konutluk lüks rezidans. Akıllı ev, wellness ve butik perakendeyi aynı standartta yöneten bir sahne.",
    description: [
      "İstanbul’un yenilenen merkezlerinden Merter’de yükselen Platform Merter, ailesi için farklı, güvenli ve lüks bir yaşam arayanlara özel tasarlandı. 142.300 m² inşaat alanında 323 konut; 80 m²’den 500 m²’ye uzanan metrekareleriyle rezidans ezberini bozar.",
      "Akıllı ev sistemi, kat bahçeleri, Wellness Spa Center, buhar odası, Türk hamamı, sauna, yüzme havuzu ve fitness; sosyal alanların hemen yanında mağazalarla tamamlanır. Bu kadar katmanın tek ritimde işlemesi, görünmez bir işletme disiplini ister.",
      "DGA Yönetim, işletmeye alma ve saha organizasyonunda aynı yüksek standardı uygular: teknik süreklilik, prestiji koruyan ortak alan düzeni ve sakin deneyimini bozmayan sessiz operasyon.",
    ],
    stats: [
      { label: "Konum", value: "Merter / İstanbul" },
      { label: "İnşaat Alanı", value: "142.300 m²" },
      { label: "Konut Alanı", value: "27.600 m²" },
      { label: "Konut Adedi", value: "323" },
      { label: "Konut Büyüklükleri", value: "80 – 500 m²" },
      { label: "Karakter", value: "Lüks rezidans + sosyal tesis" },
    ],
    highlights: [
      "Lüks rezidans işletme standardı",
      "Wellness, havuz ve sosyal tesis yönetimi",
      "Akıllı ev altyapısıyla entegre saha",
      "Konut + ticari karma operasyon",
    ],
    hasDetail: true,
  },
]

export const featuredProjects = projects

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const philosophyItems = [
  {
    title: "Bir sahne sanatı olarak tesis yönetimi",
    description:
      "Saha ekibimizden kullandığımız ekipmanlara kadar her detay, markamızın ve tesisinizin şıklığını temsil eder. Alan yönetimi, her gün aynı özenle sergilenen bir disiplin ve estetik anlayışıdır.",
  },
  {
    title: "Görünmez güç: sessiz operasyon",
    description:
      "Mükemmel işleyen bir tesis, varlığını hissettirmeden konfor sunandır. İleri teknoloji ekipmanlarımız ve zamanlaması kusursuz planlamalarımızla alanlarınızda sıfır rahatsızlık, maksimum verimle çalışırız.",
  },
  {
    title: "Standart değil, yüksek standart",
    description:
      "Herkes bir mekâna giriş yapabilir; ama kim olduğu ve oraya ne kattığı fark yaratır. Eğitimli personelimiz, şeffaf takip sistemimiz ve proaktif çözümlerimizle standartları biz belirliyoruz.",
  },
  {
    title: "Kuruluştan işletmeye mühendislik",
    description:
      "Yeni projelerde organizasyonu sıfırdan kurar, yönetim planını hazırlar, işletme altyapısını oluştururuz. Faaliyetteki tesislerde ise bütçe, teknik işletme, satın alma ve sözleşmeyi aynı disiplinle yürütürüz.",
  },
]

export const services = [
  {
    title: "Entegre Tesis Yönetimi",
    description:
      "Konut, ofis, AVM ve karma yaşam alanlarında yönetim, teknik, temizlik ve güvenliği tek çatı altında, tek standartta kurgularız. İşinizin akışını bozmadan arka planda işleyen bir düzen.",
  },
  {
    title: "Yönetim Planı ve Kurulum",
    description:
      "Proje planlamasının ilk aşamasından işletmeye almaya kadar organizasyonu sıfırdan kurarız. Yönetim planı, işletme altyapısı ve saha kurgusu; mühendislik bakışıyla hazırlanır.",
  },
  {
    title: "Teknik İşletme ve Bakım",
    description:
      "Mekanik, elektrik, altyapı ve ortak alan sistemlerinde kayıt altına alınmış bakım esastır. Arıza oluşmadan müdahale eden, tesisi kesintisiz ayakta tutan bir teknik disiplin.",
  },
  {
    title: "Temizlik ve Ağırlama",
    description:
      "Detaylara dikkat her şeydir. Ortak alanlardan lobilere, peyzaj sınırından vitrin önüne kadar her yüzey; tesisinizin prestijini temsil eden bir ağırlama sahnesidir.",
  },
  {
    title: "Güvenlik Hizmetleri",
    description:
      "Nezaket ve kararlılık, güvenlikteki başarının sırrıdır. Sakinlerin ve çalışanların yalnızca yaşamına ve işine odaklanması için görünmeden korunan bir çevre.",
  },
  {
    title: "Bütçe, Satın Alma ve Sözleşme",
    description:
      "Operasyonel verimlilik, maliyet optimizasyonu ve şeffaf raporlama. Yatırımcı, yönetim kurulu ve paydaşlar için uzun vadeli değer üreten kurumsal bir işletme modeli.",
  },
]

export const faqs = [
  {
    question: "Hangi tür tesisleri yönetiyorsunuz?",
    answer:
      "A tipi ofis kampüsleri, lüks konut siteleri, villa yaşamları, iş merkezleri ve alışveriş merkezlerinde entegre tesis yönetimi sunuyoruz. Akkom Ofis Park, Pruva 34, Limonlu Bahçe Konakları, Big Country, Doğa Plaza ve Doğa Cadde AVM bu ölçeğin referanslarıdır.",
  },
  {
    question: "Tesis yönetimine ne zaman dahil oluyorsunuz?",
    answer:
      "Hem yeni projelerde kuruluş aşamasından itibaren hem de faaliyette olan tesislerde. Yeni yapılarda organizasyonu sıfırdan kurar, yönetim planını hazırlar ve operasyonu devreye alırız. İşleyen tesislerde ise bütçe, teknik işletme, satın alma ve saha süreçlerini devralırız.",
  },
  {
    question: "Yönetim planı hazırlıyor musunuz?",
    answer:
      "Evet. Yönetim planı, işletme altyapısı ve saha kurgusu DGA’nın temel işlerindendir. Plan; yasal çerçeveyi, operasyonel standartları, bütçe disiplinini ve paydaş ilişkilerini tek bir omurgada toplar.",
  },
  {
    question: "Sessiz operasyon ne anlama geliyor?",
    answer:
      "Mükemmel işleyen bir tesis, varlığını hissettirmeden konfor sunandır. Bakım, temizlik ve teknik müdahaleler yaşamın ve işin akışını bozmadan, doğru zamanda ve doğru ekipmanla yapılır. Gürültü yok, aksama yok; yalnızca yüksek kalite vardır.",
  },
  {
    question: "Hizmetleriniz neleri kapsıyor?",
    answer:
      "Entegre tesis yönetimi, yönetim planı ve kurulum, teknik işletme, temizlik ve ağırlama, güvenlik, bütçe-satın alma ve sözleşme yönetimi. İhtiyaca göre tekli hizmet ya da tam entegre model kurgularız.",
  },
  {
    question: "Nasıl başlarız?",
    answer:
      "Kısa bir keşif görüşmesiyle tesisinizin ölçeğini, mevcut operasyonu ve hedeflerinizi dinleriz. Ardından size özel bir yönetim modeli, organizasyon şeması ve yol haritası sunarız. Her büyük düzen, doğru bir konuşmayla başlar.",
  },
]

export const stats = [
  { value: "15+", label: "Yıl deneyim" },
  { value: "8", label: "Prestijli referans" },
  { value: "750.000+", label: "m² proje ölçeği" },
  { value: "4", label: "Segment: ofis, konut, AVM, villa" },
]
