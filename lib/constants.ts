export const SITE_CONFIG = {
    name: 'goldsword',
    title: 'Full Stack Developer',
    description: 'AI-Powered Full Stack Developer | Mobile, Web, Game Development',
    email: 'mobilteknolojileri@gmail.com',
    social: {
        github: 'https://github.com/mobilteknolojileri',
        bionluk: 'https://bionluk.com/goldsword'
    }
}

export const NAV_ITEMS = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Portfolyo', href: '/portfolio' },
    { label: 'Deneyim', href: '#experience' },
    { label: 'Araştırma', href: '#research' },
    { label: 'Referanslar', href: '#testimonials' },
    { label: 'İletişim', href: '#contact' }
]
export const PROJECTS = [
    {
        slug: 'getyo-mobile',
        title: 'Get Yo - Mobil Uygulama',
        description: 'OAuth, push notification, QR sadakat programı',
        category: 'Mobile',
        technologies: ['React Native', 'Expo SDK 54', 'Supabase', 'RewardUp API', 'Push Notifications', 'Google Sign In', 'Apple Sign In', 'NativeWind', 'Zustand'],
        color: 'from-orange-500 to-red-500',
        image: '/assets/projects/getyo-mobile/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe için sıfırdan geliştirilmiş kapsamlı mobil uygulama. RewardUp API entegrasyonu ile sadakat programı, push notification sistemi, Google ve Apple ile giriş, tat oylama ve yorum sistemi. App Store ve Google Play\'de yayında.',
        features: [
            'Admin panelden anlık güncelleme - mobil uygulama güncellemesi gerekmeden tat, topping, çalışma saatleri anında değişiyor',
            'Google/Apple OAuth - şifresiz, tek tıkla giriş',
            'QR sadakat programı - alışveriş yapınca otomatik puan, ücretsiz dondurma kazanın',
            'Push notification - favori tatınız geldiğinde bildirim',
            'Tat oylama - aylık menüyü kullanıcılar belirliyor',
            'Çift lokasyon desteği - hangi şube açık, hangi topping var, anlık bilgi',
            'Doğum günü ödülü - kayıt olunca otomatik',
            'RewardUp API ile profesyonel sadakat sistemi',
            'Supabase real-time senkronizasyon',
            'Native authentication (iOS + Android)',
            'React Native 0.81.5, Expo SDK 54',
            'App Store ve Google Play Store\'da canlı'
        ],
        challenges: 'RewardUp API entegrasyonu, push notification altyapısı, Google/Apple OAuth, App Store/Google Play deployment, QR sistemi, real-time data sync',
        links: [
            { label: 'App Store', url: 'https://apps.apple.com/us/app/get-yo/id6753984684' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.getyocafe.app' }
        ],
        screenshots: [
            '/assets/projects/getyo-mobile/screenshot-1.png',
            '/assets/projects/getyo-mobile/screenshot-2.png',
            '/assets/projects/getyo-mobile/screenshot-3.png',
            '/assets/projects/getyo-mobile/screenshot-4.png',
            '/assets/projects/getyo-mobile/screenshot-5.png',
            '/assets/projects/getyo-mobile/screenshot-6.png',
            '/assets/projects/getyo-mobile/screenshot-7.png'
        ]
    },
    {
        slug: 'ingilizceciyiz',
        title: 'İngilizceciyiz',
        description: 'Modernizasyon, admin panel, akıllı evrak - 16K+ kullanıcı',
        category: 'Mobile',
        technologies: ['React Native', 'Expo SDK 53', 'Node.js', 'Express', 'MongoDB', 'RevenueCat', 'AdMob', 'Gmail SMTP'],
        color: 'from-teal-500 to-green-500',
        image: '/assets/projects/ingilizceciyiz/hero.png',
        detailedDescription: 'Mevcut İngilizceciyiz eğitim uygulamasının tamamen modernize edilmesi. 16.000+ aktif kullanıcıya hizmet veren uygulamanın hem mobil hem backend tarafı yeniden yapılandırıldı. Admin panel ile merkezi içerik yönetimi, akıllı evrak sistemi ve premium üyelik entegre edildi.',
        features: [
            'Akıllı evrak - öğretmenler hazır şablonlardan kendi evraklarını oluşturabiliyor',
            'Otomatik form - bir kez girilen bilgiler tüm evraklarda kullanılıyor',
            'Tek tuşla paylaşım - WhatsApp, email ile anında gönderim',
            'Çapraz platform - telefon, tablet, bilgisayardan erişim',
            'Modern arayüz - eski tasarım tamamen yenilendi',
            'Premium üyelik - reklamsız deneyim',
            'Web admin paneli - tüm içerikler tek yerden yönetiliyor',
            'Push notification - anlık duyurular',
            'Crash fix - çökme ve hata sorunları çözüldü',
            'React Native 0.79.5, Expo SDK 53, Android API 36',
            'RevenueCat in-app purchase, AdMob',
            'Node.js + MongoDB backend',
            '%40 performans artışı'
        ],
        challenges: 'Eski kod tabanını modernize etmek, 16K+ kullanıcıya kesintisiz hizmet, dinamik evrak sistemi, store policy compliance, performans optimizasyonu',
        links: [
            { label: 'App Store', url: 'https://apps.apple.com/us/app/ingilizceciyiz/id6459478322' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.ingilizceciyiz.ingilizceciyiz&hl=tr' }
        ],
        screenshots: [
            '/assets/projects/ingilizceciyiz/screenshot-1.png',
            '/assets/projects/ingilizceciyiz/screenshot-2.png',
            '/assets/projects/ingilizceciyiz/screenshot-3.png',
            '/assets/projects/ingilizceciyiz/screenshot-4.png',
            '/assets/projects/ingilizceciyiz/screenshot-5.png',
            '/assets/projects/ingilizceciyiz/screenshot-6.png',
            '/assets/projects/ingilizceciyiz/screenshot-7.png',
            '/assets/projects/ingilizceciyiz/screenshot-8.png',
            '/assets/projects/ingilizceciyiz/screenshot-9.png',
            '/assets/projects/ingilizceciyiz/screenshot-10.png',
            '/assets/projects/ingilizceciyiz/screenshot-11.png'
        ]
    },
    {
        slug: 'yanitla-kazan',
        title: 'Yanıtla Kazan - Chat & Arkadaşlık',
        description: 'Backend API, Socket.io chat, arkadaş sistemi frontend + backend',
        category: 'Backend',
        technologies: ['Flutter', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Firebase', 'Docker'],
        color: 'from-violet-500 to-purple-500',
        image: '/assets/projects/yanitla-kazan/hero.png',
        detailedDescription: 'Müşterinin mevcut uygulamasına sıfırdan backend API yazılıp Hetzner sunucusunda yayına alındı. Chat sistemi ve arkadaşlık modülünün hem backend API hem frontend ekranları geliştirildi. Medya paylaşımı, sesli mesaj ve emoji desteği eklendi.',
        features: [
            'Node.js + Express backend API sıfırdan yazıldı',
            'Socket.io real-time mesajlaşma',
            'PostgreSQL veritabanı tasarımı',
            'Redis caching ve session',
            'Arkadaş modülü (frontend + backend) - kullanıcı arama, ekleme, listeleme, engelleme',
            'Chat modülü (frontend + backend) - 1-1 mesajlaşma, mesaj geçmişi',
            'Medya paylaşımı - fotoğraf (kamera + galeri)',
            'Sesli mesaj - kayıt, gönderim, oynatma (play/pause)',
            'Emoji & Sticker - emoji picker, GIF',
            'Mesaj özellikleri - silme, yıldızlama, okundu',
            'Docker containerization',
            'Nginx reverse proxy',
            'SSL + güvenlik (Helmet, CORS)',
            'Hetzner VPS production deployment',
            'İngilizce/Türkçe dil desteği'
        ],
        challenges: 'Sıfırdan backend API, real-time chat altyapısı, production deployment, veritabanı optimizasyonu, medya upload/storage, hem frontend hem backend geliştirme',
        links: [
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.BuzzGaming.YantlaKazan&hl=tr' }
        ],
        screenshots: [
            '/assets/projects/yanitla-kazan/screenshot-1.png',
            '/assets/projects/yanitla-kazan/screenshot-2.png',
            '/assets/projects/yanitla-kazan/screenshot-3.png',
            '/assets/projects/yanitla-kazan/screenshot-4.png',
            '/assets/projects/yanitla-kazan/screenshot-5.png',
            '/assets/projects/yanitla-kazan/screenshot-6.png',
            '/assets/projects/yanitla-kazan/screenshot-7.png',
            '/assets/projects/yanitla-kazan/screenshot-8.png',
            '/assets/projects/yanitla-kazan/screenshot-9.png',
            '/assets/projects/yanitla-kazan/screenshot-10.png',
            '/assets/projects/yanitla-kazan/screenshot-11.png',
            '/assets/projects/yanitla-kazan/screenshot-12.png',
            '/assets/projects/yanitla-kazan/screenshot-13.png',
            '/assets/projects/yanitla-kazan/screenshot-14.png',
            '/assets/projects/yanitla-kazan/screenshot-15.png',
            '/assets/projects/yanitla-kazan/screenshot-16.png',
            '/assets/projects/yanitla-kazan/screenshot-17.png',
            '/assets/projects/yanitla-kazan/screenshot-18.png',
            '/assets/projects/yanitla-kazan/screenshot-19.png',
            '/assets/projects/yanitla-kazan/screenshot-20.png',
            '/assets/projects/yanitla-kazan/screenshot-21.png',
            '/assets/projects/yanitla-kazan/screenshot-22.png',
            '/assets/projects/yanitla-kazan/screenshot-23.png',
            '/assets/projects/yanitla-kazan/screenshot-24.png',
            '/assets/projects/yanitla-kazan/screenshot-25.png',
            '/assets/projects/yanitla-kazan/screenshot-26.png',
            '/assets/projects/yanitla-kazan/screenshot-27.png'
        ]
    },
    {
        slug: 'digital-detox',
        title: 'Digital Detox Uygulaması',
        description: 'Uygulama engelleme, grup seansları, başarı sistemi',
        category: 'Mobile',
        technologies: ['Flutter', 'GetX', 'Firebase', 'AdMob', 'In-App Purchase'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/digital-detox/hero.png',
        detailedDescription: 'Kullanıcıların dijital bağımlılıklarını yönetmelerine yardımcı olan kapsamlı bir mobil uygulama. Clean Architecture prensiplerine uygun şekilde sıfırdan geliştirildi.',
        features: [
            'Android sistem seviyesi uygulama engelleme',
            'Tek ve grup detoks seansları',
            'Başarı sistemi + liderlik tablosu',
            'İstatistikler, grafikler, raporlar',
            'Zamanlanmış detoks planları',
            'Premium üyelik + in-app purchase',
            'AdMob rewarded ads',
            'Firebase Authentication',
            'Firestore veritabanı',
            'Dark/light tema',
            'Lottie animasyonlar',
            'Modern UI/UX'
        ],
        challenges: 'Android sistem seviyesi engelleme, background service, grup senkronizasyonu, başarı algoritmaları, premium üyelik entegrasyonu',
        links: [],
        screenshots: [
            '/assets/projects/digital-detox/screenshot-1.png',
            '/assets/projects/digital-detox/screenshot-2.png',
            '/assets/projects/digital-detox/screenshot-3.png',
            '/assets/projects/digital-detox/screenshot-4.png',
            '/assets/projects/digital-detox/screenshot-5.png',
            '/assets/projects/digital-detox/screenshot-6.png',
            '/assets/projects/digital-detox/screenshot-7.png',
            '/assets/projects/digital-detox/screenshot-8.png',
            '/assets/projects/digital-detox/screenshot-9.png',
            '/assets/projects/digital-detox/screenshot-10.png',
            '/assets/projects/digital-detox/screenshot-11.png',
            '/assets/projects/digital-detox/screenshot-12.png',
            '/assets/projects/digital-detox/screenshot-13.png',
            '/assets/projects/digital-detox/screenshot-14.png',
            '/assets/projects/digital-detox/screenshot-15.png',
            '/assets/projects/digital-detox/screenshot-16.png',
            '/assets/projects/digital-detox/screenshot-17.png'
        ]
    },
    {
        slug: 'fabric-detection',
        title: 'Kumaş Kusur Tespiti',
        description: 'YOLOv8 AI, özel dataset, Flutter + FastAPI',
        category: 'AI',
        technologies: ['YOLOv8', 'TensorFlow Lite', 'FastAPI', 'Flutter', 'Python', 'Computer Vision'],
        color: 'from-green-500 to-teal-500',
        image: '/assets/projects/fabric-detection/hero.png',
        detailedDescription: 'Tekstil sektörü için sıfırdan geliştirilen yapay zeka destekli kumaş kalite kontrol sistemi. Kumaş görsellerini etiketleyerek YOLOv8 modelini sıfırdan eğittim. Mobil uygulama ile fotoğraf çekildiğinde, backend\'teki özel eğitilmiş model kumaştaki delikleri otomatik tespit eder.',
        features: [
            'Kamera ile fotoğraf çek, delikler otomatik tespit edilsin',
            'Bounding box görsel işaretleme',
            'Tespit güven skoru (%)',
            'Anlık sonuç (saniyeler)',
            'Özel eğitilmiş YOLOv8 modeli',
            'Dataset hazırlama ve etiketleme',
            'Flutter mobil uygulama (iOS + Android)',
            'FastAPI backend',
            'REST API endpoints',
            'YOLOv8 TFLite optimize model',
            'Görüntü preprocessing',
            'Bounding box + confidence score',
            'Custom dataset fine-tuning',
            'Postman API testleri'
        ],
        challenges: 'YOLOv8 özel eğitim, TFLite optimizasyon, mobil-backend entegrasyon, tespit doğruluğu',
        links: [],
        screenshots: [
            '/assets/projects/fabric-detection/screenshot-1.png',
            '/assets/projects/fabric-detection/screenshot-2.png',
            '/assets/projects/fabric-detection/screenshot-3.png',
            '/assets/projects/fabric-detection/screenshot-4.png',
            '/assets/projects/fabric-detection/screenshot-5.png'
        ]
    },
    {
        slug: 'frozen-yogurt-website',
        title: 'Frozen Yogurt Cafe - Full Stack',
        description: 'reCAPTCHA, Supabase backend, SEO optimizasyonu',
        category: 'Web',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'reCAPTCHA v2', 'Tailwind CSS', 'Vercel'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/frozen-yogurt-website/hero.jpg',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin web sitesinin Readdy bağımlılığından kurtarılarak bağımsız hale getirilmesi. Spam önleme, admin panel, email sistemi ve SEO optimizasyonu. frozenyogurtcafe.com',
        features: [
            'Spam koruması - bot saldırıları durduruldu, reCAPTCHA v2',
            'Email entegrasyonu - müşteri mesajları direkt düşüyor',
            'SEO optimizasyonu - Google\'da daha görünür',
            'Admin paneli - içerik yönetimi tek yerden',
            'Responsive - telefon, tablet, PC uyumlu',
            'Hızlı ve güvenli - modern teknoloji',
            'Supabase backend API',
            'Resend email servisi',
            'Özel email şablonları',
            'Authentication sistemi',
            'Veritabanı şeması',
            'Next.js App Router + TypeScript',
            'Vercel deployment (%99.9 uptime)'
        ],
        challenges: 'Readdy bağımlılığı kaldırma, spam önleme (reCAPTCHA), Supabase migration, email sistemi (Resend), SEO, authentication',
        links: [
            { label: 'Website', url: 'https://frozenyogurtcafe.com/' }
        ],
        screenshots: [
            '/assets/projects/frozen-yogurt-website/screenshot-1.png',
            '/assets/projects/frozen-yogurt-website/screenshot-2.png',
            '/assets/projects/frozen-yogurt-website/screenshot-3.png'
        ]
    },
    {
        slug: 'legends-of-aestera',
        title: 'Legends of Aestera',
        description: 'Unity 2D platformer, 2 karakter, 20+ seviye, boss',
        category: 'Game',
        technologies: ['Unity', 'C#', 'Game Design', 'Android'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/legends-of-aestera/hero.png',
        detailedDescription: 'Unity ile assetler kullanarak geliştirilen 2D platformer macera oyunu. İki farklı karakter ile oynayabilen, 20+ seviye, boss savaşları ve çeşitli mekanikler içeren kapsamlı bir oyun projesi. Google Play Store\'da kapalı test aşamasında.',
        features: [
            'İki karakter: Red (kılıç kombo), Robinhood (okçuluk)',
            '20+ el yapımı seviye - tuzak, gizli geçit, bulmaca',
            'Boss savaşları - strateji ve refleks',
            'Çeşitli ortamlar - orman, mağara, kale',
            'Güçlendirmeler - can, hız, zıplama',
            'Touch + gamepad kontrol',
            'Pixel art grafik, epik müzik',
            'Combo kılıç (yakın dövüş)',
            'Hassas okçuluk (uzun menzil)',
            'Çift zıplama, duvarda koşma, kayma',
            'Dinamik düşmanlar - varil, testere, diken',
            'Gizlilik odaklı - veri toplama yok',
            'Unity 2D + C#',
            'Google Play kapalı test',
            'Android optimizasyonu'
        ],
        challenges: '2D platformer mekanik dengeleme, seviye tasarımı, boss AI, touch/gamepad optimizasyon, Play Store policy',
        links: [],
        screenshots: [
            '/assets/projects/legends-of-aestera/screenshot-1.png',
            '/assets/projects/legends-of-aestera/screenshot-2.png',
            '/assets/projects/legends-of-aestera/screenshot-3.png'
        ]
    },
    {
        slug: 'safeknot',
        title: 'SafeKnot - Ebeveyn Kontrol',
        description: 'XML modernizasyon, Çoklu dil entegrasyonu (Arapça RTL, EN, DE, FR)',
        category: 'Mobile',
        technologies: ['Android', 'Java/Kotlin', 'XML', 'i18n'],
        color: 'from-blue-500 to-cyan-500',
        image: '/assets/projects/safeknot-app/hero.png',
        detailedDescription: 'Ebeveynlerin çocuklarının dijital aktivitelerini takip edebilmeleri için geliştirilen mobil uygulama. Mevcut geleneksel XML tabanlı arayüz modernize edilerek kullanıcı deneyimi iyileştirildi.',
        features: [
            'XML arayüz modernizasyonu',
            'UX iyileştirmeleri',
            'Çoklu dil: Arapça, İngilizce, Almanca, Fransızca',
            'Modern UI tasarım',
            'Responsive optimizasyon',
            'Performans iyileştirme',
            'RTL dil desteği (Arapça)'
        ],
        challenges: 'XML yapısını koruyarak modernizasyon, 4 dil entegrasyonu, RTL (Right-to-Left) Arapça desteği',
        links: [],
        screenshots: [
            '/assets/projects/safeknot-app/screenshot-1.png',
            '/assets/projects/safeknot-app/screenshot-2.png',
            '/assets/projects/safeknot-app/screenshot-3.png',
            '/assets/projects/safeknot-app/screenshot-4.png',
            '/assets/projects/safeknot-app/screenshot-5.png',
            '/assets/projects/safeknot-app/screenshot-6.png',
            '/assets/projects/safeknot-app/screenshot-7.png',
            '/assets/projects/safeknot-app/screenshot-8.png',
            '/assets/projects/safeknot-app/screenshot-9.png',
            '/assets/projects/safeknot-app/screenshot-10.png'
        ]
    },
    {
        slug: 'numeric-wheel',
        title: 'Numeric Wheel - Puzzle Oyunu',
        description: 'HTML5 Android port, Capacitor, 60 FPS',
        category: 'Game',
        technologies: ['HTML5', 'Capacitor', 'Android', 'AdMob', 'Canvas API'],
        color: 'from-yellow-500 to-orange-500',
        image: '/assets/projects/numeric-wheel/hero.png',
        detailedDescription: 'Müşterinin çalışmayan HTML5 puzzle oyununun Android\'e portlanması ve Play Store için optimize edilmesi. Üç aşamalı geliştirme sürecinde oyun tamamen yeniden yapılandırıldı.',
        features: [
            'Puzzle mekanik - renkli top eşleştir',
            'Joker özelliği - renkteki tüm topları patlat',
            'Patlama animasyonları',
            'İlerleme kaydı - skor ve bonus',
            'Müzik/ses kontrol - tercih hatırlama',
            'Arka plan desteği - müzik pause',
            'Responsive - telefon ve tablet',
            '60 FPS pürüzsüz oyun',
            'AdMob reklam sistemi',
            'Google Play yayında',
            'Crash fix - kod tamamen düzeltildi',
            'Canvas optimizasyon',
            'API 21 → API 35 (Android 15)',
            'Capacitor native entegrasyon'
        ],
        challenges: 'Crash fix, HTML5 → native Android optimize, Canvas hataları, joker sistemi, 60 FPS performans',
        links: [
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.yakup.numericwheel&hl=tr' }
        ],
        screenshots: [
            '/assets/projects/numeric-wheel/screenshot-1.png',
            '/assets/projects/numeric-wheel/screenshot-2.png',
            '/assets/projects/numeric-wheel/screenshot-3.png'
        ]
    },
    {
        slug: 'mood-tracker',
        title: 'Mood Tracker Modernizasyonu',
        description: 'Flutter modernizasyon, Material Design, dark mode',
        category: 'Mobile',
        technologies: ['Flutter', 'Firebase', 'UI/UX', 'Material Design'],
        color: 'from-pink-500 to-rose-500',
        image: '/assets/projects/mood-tracker/hero.png',
        detailedDescription: 'Flutter ruh hali takip uygulamasının modern kütüphaneler ve tasarım prensipleriyle tamamen yenilenmesi. Mevcut kod tabanı korunarak modernize edildi.',
        features: [
            'Yeni uygulama ikonu + splash screen',
            'Material Design ekran yenileme',
            'Dark mode iyileştirme',
            'Modern Flutter widget',
            'Ana menü + onboarding redesign',
            'Performans optimizasyonu',
            'Firebase Auth + Firestore güncelleme',
            'Tutarlı tipografi, renk, spacing'
        ],
        challenges: 'Kod tabanı koruma, veri kaybı önleme, dark mode fix, performans artırma',
        links: [],
        screenshots: [
            '/assets/projects/mood-tracker/screenshot-1.png',
            '/assets/projects/mood-tracker/screenshot-2.png',
            '/assets/projects/mood-tracker/screenshot-3.png',
            '/assets/projects/mood-tracker/screenshot-4.png',
            '/assets/projects/mood-tracker/screenshot-5.png',
            '/assets/projects/mood-tracker/screenshot-6.png'
        ]
    },
    {
        slug: 'nobet-app',
        title: 'Nöbetçi Uygulaması',
        description: 'React Native refactoring, component yapısı, i18n',
        category: 'Mobile',
        technologies: ['React Native', 'Expo', 'AsyncStorage', 'i18next', 'NativeWind'],
        color: 'from-emerald-500 to-teal-500',
        detailedDescription: 'Okul öğretmenlerinin nöbet görevlerini yönetmek için geliştirilen mobil uygulama. Müşterinin mevcut uygulaması refactor edilerek kod kalitesi artırıldı ve İngilizce dil desteği eklendi.',
        features: [
            'Proje dosya yapısı düzenleme',
            'Karışık dosyalar ayrıştırma',
            'Gereksiz kod temizleme',
            'Component yapısı (25+ bileşen)',
            'SharedTeacherModal ortak modal',
            'SchoolStatusText saat kontrolü',
            'Import/export fix',
            'Admin yetki sistemi',
            'İngilizce dil (i18next)',
            'Kod tekrarı azaltma'
        ],
        challenges: 'Karışık kod tabanı düzenleme, component yapısı iyileştirme, çoklu dil entegrasyonu, modal birleştirme',
        links: []
    },
    {
        slug: 'getyo-admin',
        title: 'Get Yo - Admin Panel',
        description: 'Flavor, topping, oylama - Push notification, Supabase',
        category: 'Web',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Resend', 'Push Notifications'],
        color: 'from-red-500 to-pink-500',
        image: '/assets/projects/getyo-admin/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin tüm operasyonlarını tek yerden yönetmek için sıfırdan geliştirilmiş admin paneli. Flavor yönetimi, oylama sistemi, topping kontrolü, push notification gönderimi, müşteri yorumları ve geri bildirimler.',
        features: [
            'Anlık güncelleme - mobil app güncellemesi yok',
            'Tat menüsü - fotoğraf, kategori, sos, alerjen',
            'Topping stok - "Tükendi" işaretleme',
            'Push notification - duyuru gönderimi',
            'Oylama kampanyası - kullanıcı seçimi',
            'Çalışma saatleri - tatil günü ayarı',
            'Geri bildirim - öneri, şikayet, başvuru',
            'Yorum moderasyon',
            'Otomatik email bildirimleri',
            'Next.js 14 + TypeScript',
            'Supabase authentication',
            'Resend email servisi'
        ],
        challenges: 'Admin panel sıfırdan inşa, push notification entegrasyon, flavor/topping yönetimi, oylama algoritması, email sistemi, çoklu lokasyon',
        links: [],
        screenshots: []
    },
    {
        slug: 'gmb-optimizasyonu',
        title: 'Google My Business Optimizasyonu',
        description: 'GMB %100, AI görsel, yerel SEO - 2 lokasyon',
        category: 'SEO',
        technologies: ['Google My Business', 'SEO', 'AI Görsel İyileştirme', 'Yerel SEO'],
        color: 'from-red-500 to-orange-500',
        image: '/assets/projects/gmb-optimizasyonu/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin Google My Business profilinin tamamen optimize edilmesi. Görsel iyileştirme, SEO stratejisi ve profil yönetimi yapıldı.',
        features: [
            'GMB profil %100',
            'İşletme bilgileri güncelleme',
            'AI görsel iyileştirme',
            'Gizlilik sansür (yüzler)',
            'Anahtar kelime stratejisi',
            'Yerel SEO',
            'Meta bilgiler',
            'Dashboard ayarları',
            'Analitik takip',
            'Müşteri etkileşim',
            '2 lokasyon optimizasyonu'
        ],
        challenges: 'GMB profil tamamlama, gizlilik sansür, yerel SEO stratejisi, profil görünürlük artırma',
        links: [
            { label: 'Website', url: 'https://www.frozenyogurtcafe.com/' }
        ],
        screenshots: [
            '/assets/projects/gmb-optimizasyonu/screenshot-1.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-2.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-3.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-4.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-5.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-6.png',
            '/assets/projects/gmb-optimizasyonu/screenshot-7.png'
        ]
    }
    ,
    {
        slug: 'graphic-design',
        title: 'Grafik Tasarım Projeleri',
        description: 'Logo, branding, sosyal medya ve reklam tasarımları',
        category: 'Design',
        technologies: ['Canva', 'Brand Identity', 'Social Media Design', 'Visual Design'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/graphic-design/hero.png',
        detailedDescription: 'Farklı markalar için hazırlanmış logo, branding, Instagram story/post ve reklam tasarımları. Her proje müşterinin marka kimliğine uygun, modern ve çekici görseller içeriyor.',
        features: [
            'Emirhan Kuyumcu - Logo ve Instagram story tasarımı',
            'Get Yo - Mobil uygulama reklam görseli',
            'Mobilyacı İkra - Logo ve Instagram post tasarımları',
            'Profesyonel marka kimliği oluşturma',
            'Sosyal medya için optimize edilmiş görseller',
            'Modern ve minimal tasarım dili',
            'Canva ile hızlı ve etkili çözümler'
        ],
        links: [],
        screenshots: [
            '/assets/projects/graphic-design/getyo-mobile-reklam-tasarimi.png',
            '/assets/projects/graphic-design/mobilyaci-ikra-logo.png',
            '/assets/projects/graphic-design/mobilyaci-ikra-instagram-post.jpg'
        ]
    },
    {
        slug: 'tracker-web',
        title: 'Payment & Task Tracker',
        description: 'Ödeme takibi, görev yönetimi - Drag & Drop, otomatik gecikme tespiti',
        category: 'Web',
        technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Drag & Drop'],
        color: 'from-blue-500 to-purple-500',
        image: '/assets/projects/tracker-web/hero.png',
        detailedDescription: 'Kişisel finansal yönetim ve görev takibi için geliştirilmiş full-stack web uygulaması. Supabase backend ile kullanıcı başına özel veri, otomatik durum hesaplamaları ve drag & drop ile sıralama sistemi.',
        features: [
            'Ödeme yönetimi - tutar, son ödeme tarihi, durum takibi',
            'Otomatik gecikme tespiti - tarihe göre durum güncelleme',
            'Görev yönetimi - checkbox ile tamamlama, açıklama, tarih',
            'Drag & Drop sıralama - manuel ve otomatik sıralama',
            'Filtreleme sistemi - tümü, ödenmedi, ödendi, gecikti',
            'Toplam tutar özeti - ödenmemiş toplam hesaplama',
            'Dinamik göstergeler - kalan gün sayısı, renkli badge\'ler',
            'Supabase Auth - email/şifre, şifre sıfırlama',
            'Row Level Security - kullanıcı bazlı veri güvenliği',
            'Dark theme - modern, göz yormayan arayüz',
            'Responsive design - mobil, tablet, desktop uyumlu',
            'Toast notifications - başarı/hata bildirimleri',
            'Smooth animations - Framer Motion geçişleri',
            'Vercel deployment - production-ready'
        ],
        challenges: 'Drag & Drop implementasyonu, otomatik durum hesaplamaları, Row Level Security, modal yönetimi, Türkçe tarih lokalizasyonu, real-time senkronizasyon',
        links: [],
        screenshots: [
            '/assets/projects/tracker-web/Ekran görüntüsü 2025-11-15 183903.png',
            '/assets/projects/tracker-web/Ekran görüntüsü 2025-11-15 183939.png',
            '/assets/projects/tracker-web/Ekran görüntüsü 2025-11-15 183950.png',
            '/assets/projects/tracker-web/Ekran görüntüsü 2025-11-15 184003.png',
            '/assets/projects/tracker-web/Ekran görüntüsü 2025-11-15 184032.png'
        ]
    },
    {
        slug: 'qusafe-mobile',
        title: 'QuSafe - Şifreli Kasa',
        description: 'AES-256 E2E şifreleme, fotoğraf gizleme ve güvenli kasa',
        category: 'Mobile',
        technologies: ['React Native', 'Expo SDK 54', 'Supabase', 'AES-256-GCM', 'Argon2id', 'Zustand', 'NativeWind', 'Quick Crypto'],
        color: 'from-indigo-600 to-blue-500',
        image: '/assets/projects/qusafe-mobile/icon.png',
        detailedDescription: 'Hassas şifrelerinizi, notlarınızı ve medya dosyalarınızı koruyan zero-knowledge mimarili, yüksek güvenlikli şifreli kasa uygulaması.',
        features: [
            'AES-256-GCM donanımsal şifreleme',
            'Argon2id ana şifre türetme',
            'Zero-Knowledge veri güvenliği',
            'Biyometrik kilit (Face ID/Parmak İzi)',
            'Fotoğraf, video ve dosya gizleme',
            'Bulut senkronizasyonu',
            '2FA (TOTP) desteği'
        ],
        links: [
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.schwerttr.qusafe' },
            { label: 'Website', url: '/qusafe' }
        ],
        customLink: '/qusafe',
        screenshots: []
    }
]
