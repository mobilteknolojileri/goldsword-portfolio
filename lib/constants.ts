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
        description: 'RewardUp API, push notification, Google/Apple OAuth',
        category: 'Mobile',
        technologies: ['React Native', 'Expo SDK 54', 'Supabase', 'RewardUp API', 'Push Notifications', 'Google Sign In', 'Apple Sign In', 'NativeWind', 'Zustand', 'QR Code'],
        color: 'from-orange-500 to-red-500',
        image: '/assets/projects/getyo-mobile/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe için sıfırdan geliştirilmiş kapsamlı mobil uygulama. RewardUp API entegrasyonu ile sadakat programı, push notification sistemi, Google ve Apple ile giriş, tat oylama ve yorum sistemi. App Store ve Google Play\'de yayında.',
        features: [
            'Admin panelden her şey anlık değişiyor - mobil uygulamayı güncellemeye gerek yok, tat, topping, çalışma saatleri her şey anında güncelleniyor',
            'Google veya Apple ile saniyeler içinde giriş - şifre, kayıt formu yok, tek tıkla başlayın',
            'Alışveriş yapınca otomatik puan ve damga kazanıyorsunuz - QR kod gösterin, ücretsiz dondurma hakkı kazanın',
            'Favori tatınız gelince telefonunuza bildirim geliyor - hiçbir fırsatı kaçırmayın',
            'Aylık menüyü siz belirleyin - tat oylama sistemiyle en çok istenen tatlar menüye giriyor',
            'İki lokasyonun güncel bilgileri - hangi şube açık, hangi topping\'ler var, hepsi anlık',
            'Doğum gününüzde özel ödül - sadece kayıt olun, gerisini uygulama halleder',
            'RewardUp API entegrasyonu ile profesyonel sadakat programı',
            'Supabase ile güvenli veri yönetimi ve real-time senkronizasyon',
            'Native authentication - Google Sign In (iOS + Android), Apple Sign In (iOS)',
            'React Native 0.81.5 ve Expo SDK 54 ile modern, performanslı uygulama',
            'App Store ve Google Play Store\'da canlı'
        ],
        challenges: 'RewardUp API entegrasyonunu sıfırdan kurmak, push notification sistemini yapılandırmak, Google ve Apple OAuth entegrasyonu, App Store ve Google Play Console hesaplarını kurmak ve uygulamayı yayınlamak, QR kod sistemi, real-time data senkronizasyonu',
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
        description: 'Modernizasyon, admin panel, akıllı evrak sistemi - 16K+ kullanıcı',
        category: 'Mobile',
        technologies: ['React Native', 'Expo SDK 53', 'Node.js', 'Express', 'MongoDB', 'RevenueCat', 'AdMob', 'Gmail SMTP'],
        color: 'from-teal-500 to-green-500',
        image: '/assets/projects/ingilizceciyiz/hero.png',
        detailedDescription: 'Mevcut İngilizceciyiz eğitim uygulamasının tamamen modernize edilmesi. 16.000+ aktif kullanıcıya hizmet veren uygulamanın hem mobil hem backend tarafı yeniden yapılandırıldı. Admin panel ile merkezi içerik yönetimi, akıllı evrak sistemi ve premium üyelik entegre edildi.',
        features: [
            'Akıllı evrak oluşturma: Öğretmenler hazır şablonlardan kendi evraklarını saniyeler içinde oluşturabilir',
            'Otomatik form doldurma: Bir kez girilen bilgiler (öğrenci adı, okul, tarih vb.) tüm evraklarda otomatik kullanılır',
            'Tek tuşla paylaşım: Hazırlanan evrakları WhatsApp, e-posta ile anında paylaşabilme',
            'Her yerden erişim: Telefon, tablet veya bilgisayardan evrak yönetimi',
            'Modern ve hızlı arayüz: Eski tasarım tamamen yenilendi, kullanımı kolaylaştırıldı',
            'Reklamsız kullanım: Premium üyelikle kesintisiz deneyim',
            'Web yönetim paneli: Yöneticiler tüm içerikleri tek yerden kontrol edebilir',
            'Anlık duyurular: Önemli bildirimler kullanıcılara push notification ile ulaşır',
            'Çökme ve hata sorunları tamamen giderildi: Stabil ve güvenilir kullanım',
            'App Store ve Google Play Store\'da güncel: Her iki mağazada yayınlandı',
            'React Native 0.79.5, Expo SDK 53, Android API 36',
            'Google Play In-App Purchase (RevenueCat ile yönetim), AdMob reklam sistemi',
            'Node.js backend, MongoDB veritabanı, Gmail SMTP entegrasyonu',
            'Navigation ve route sorunları düzeltildi',
            '%40 performans iyileştirmesi sağlandı'
        ],
        challenges: 'Eski ve hata dolu kod tabanını modernize etmek, 16.000+ kullanıcıya kesintisiz hizmet vermek, dinamik evrak sistemini kurmak, her iki mağazada politika uyumluluğunu sağlamak, performansı %40 artırmak',
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
        title: 'Yanıtla Kazan - Chat & Arkadaşlık Sistemi',
        description: 'Sıfırdan backend API, Socket.io real-time chat, Hetzner VPS deployment, Docker',
        category: 'Mobile',
        technologies: ['Flutter', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'Firebase', 'Docker'],
        color: 'from-violet-500 to-purple-500',
        image: '/assets/projects/yanitla-kazan/hero.png',
        detailedDescription: 'Müşterinin mevcut uygulamasına sıfırdan backend API yazılıp Hetzner sunucusunda yayına alındı. Chat sistemi, arkadaşlık özellikleri ve medya paylaşımı eklendi. İngilizce ve Türkçe dil desteği entegre edildi.',
        features: [
            'Node.js + Express backend API sıfırdan yazıldı',
            'Socket.io ile real-time mesajlaşma sistemi',
            'PostgreSQL veritabanı tasarımı ve optimizasyonu',
            'Redis ile caching ve session yönetimi',
            'Arkadaş sistemi: Kullanıcı arama, ekleme, listeleme, engelleme',
            '1-1 chat sistemi: Real-time mesajlaşma ve mesaj geçmişi',
            'Medya paylaşımı: Fotoğraf gönderimi (kamera + galeri)',
            'Sesli mesaj: Audio kayıt, gönderim ve oynatma (play/pause)',
            'Emoji & Sticker: Emoji picker ve GIF desteği',
            'Mesaj özellikleri: Silme, yıldızlama, okundu bilgisi',
            'Docker containerization ve deployment',
            'Nginx reverse proxy yapılandırması',
            'SSL sertifikası ve güvenlik (Helmet, CORS)',
            'Hetzner VPS\'de production deployment',
            'İngilizce ve Türkçe dil desteği (i18n)'
        ],
        challenges: 'Sıfırdan backend API geliştirmek, real-time mesajlaşma altyapısı kurmak, production seviyesinde deployment, veritabanı optimizasyonu, medya upload ve storage yönetimi',
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
        description: 'Sıfırdan Flutter uygulaması - Uygulama engelleme, grup seansları, başarı sistemi',
        category: 'Mobile',
        technologies: ['Flutter', 'GetX', 'Firebase', 'AdMob', 'In-App Purchase'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/digital-detox/hero.png',
        detailedDescription: 'Kullanıcıların dijital bağımlılıklarını yönetmelerine yardımcı olan kapsamlı bir mobil uygulama. Clean Architecture prensiplerine uygun şekilde sıfırdan geliştirildi.',
        features: [
            'Uygulama engelleme sistemi (Android sistem seviyesi)',
            'Tek ve grup detoks seansları',
            'Başarı sistemi (achievements) ve liderlik tablosu',
            'Detaylı istatistikler, grafikler ve raporlar',
            'Zamanlanmış detoks planları',
            'Premium üyelik ve in-app purchase entegrasyonu',
            'AdMob reklam sistemi (rewarded ads)',
            'Firebase Authentication',
            'Firestore veritabanı yönetimi',
            'Karanlık/aydınlık tema desteği',
            'Lottie animasyonlar ve modern UI/UX'
        ],
        challenges: 'Android sistem seviyesinde uygulama engelleme, background service yönetimi, grup senkronizasyonu, başarı sistemi algoritmaları, premium üyelik ve ödeme entegrasyonu',
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
        description: 'YOLOv8 AI modeli, özel dataset eğitimi, Flutter mobil + FastAPI backend',
        category: 'AI',
        technologies: ['YOLOv8', 'TensorFlow Lite', 'FastAPI', 'Flutter', 'Python', 'Computer Vision'],
        color: 'from-green-500 to-teal-500',
        image: '/assets/projects/fabric-detection/hero.png',
        detailedDescription: 'Tekstil sektörü için sıfırdan geliştirilen yapay zeka destekli kumaş kalite kontrol sistemi. Kumaş görsellerini etiketleyerek YOLOv8 modelini sıfırdan eğittim. Mobil uygulama ile fotoğraf çekildiğinde, backend\'teki özel eğitilmiş model kumaştaki delikleri otomatik tespit eder.',
        features: [
            'Kamera ile fotoğraf çek, delikler otomatik tespit edilsin',
            'Tespit edilen kusurlar görsel olarak işaretlenir (bounding box)',
            'Tespit güven skoru: Her kusur için %kaç emin olduğunu gösterir',
            'Anlık sonuç: Fotoğraf yüklenince saniyeler içinde analiz tamamlanır',
            'Özel eğitilmiş AI modeli: Kumaş görsellerini etiketleyerek YOLOv8 modelini sıfırdan eğittim',
            'Dataset hazırlama: Kusurlu kumaş fotoğraflarını topladım ve etiketledim',
            'Mobil uygulama: Flutter ile Android/iOS desteği',
            'Backend API: FastAPI ile hızlı ve ölçeklenebilir servis',
            'REST API endpoint\'leri: Kolay entegrasyon',
            'YOLOv8 TFLite modeli: Optimize edilmiş hafif model',
            'Görüntü ön işleme: Tespit doğruluğunu artırmak için preprocessing',
            'Tespit sonrası işleme: Bounding box ve confidence score hesaplama',
            'Model eğitimi: Custom dataset ile YOLOv8 fine-tuning',
            'API testleri: Postman koleksiyonu ile endpoint testleri'
        ],
        challenges: 'YOLOv8 modelini kumaş kusur tespitine özel eğitmek, TFLite formatına optimize etmek, mobil uygulama ile backend entegrasyonunu sağlamak, tespit doğruluğunu artırmak',
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
        title: 'Frozen Yogurt Cafe - Full Stack Platform',
        description: 'reCAPTCHA entegrasyonu, Supabase backend kurulumu, SEO optimizasyonu',
        category: 'Web',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'reCAPTCHA v2', 'Tailwind CSS', 'Vercel'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/frozen-yogurt-website/hero.jpg',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin web sitesinin Readdy bağımlılığından tamamen kurtarılarak bağımsız hale getirilmesi ve spam probleminin çözülmesi için kapsamlı teknik migration yapıldı. Admin panel entegrasyonu, email sistemi ve SEO optimizasyonu ile profesyonel bir platform oluşturuldu. frozenyogurtcafe.com',
        features: [
            'Spam saldırıları durduruldu - bot\'lar artık sahte form gönderemiyor, sadece gerçek müşteriler ulaşabiliyor',
            'Müşteri mesajları artık direkt email\'e düşüyor - hiçbir mesaj kaçmıyor',
            'Google\'da daha görünür olması için SEO optimizasyonu yapıldı - arama motorları siteyi daha kolay buluyor',
            'Admin paneli eklendi - içerikler ve form gönderileri tek yerden yönetilebiliyor',
            'Her cihazda mükemmel çalışıyor - telefon, tablet veya bilgisayardan bakılınca görünüm harika',
            'Hızlı açılıyor ve güvenli - modern teknolojilerle optimize edilmiş performans',
            'Supabase ile backend API kuruldu - form verileri güvenli bir şekilde işleniyor',
            'Resend email servisi entegre edildi - profesyonel ve güvenilir mail gönderimi',
            'Get Yo markalı özel email şablonları tasarlandı',
            'Kullanıcı girişi, kayıt ve şifre sıfırlama sistemi kuruldu',
            'Veritabanı şeması ve yetkilendirme sistemi oluşturuldu',
            'Next.js App Router ve TypeScript ile modern, tip güvenli kod yazıldı',
            'Vercel üzerinde canlıya alındı - %99.9 uptime garantisi'
        ],
        challenges: 'Readdy bağımlılığını kaldırıp bağımsız hale getirmek, spam problemini çözmek (reCAPTCHA entegrasyonu), Supabase backend migrasyonu, email sistemini yeniden yapılandırmak (Resend), SEO optimizasyonu, authentication sistemini kurmak',
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
        description: 'Unity 2D platformer, 2 karakter, 20+ seviye, boss savaşları - Google Play kapalı test',
        category: 'Game',
        technologies: ['Unity', 'C#', 'Pixel Art', 'Game Design', 'Android'],
        color: 'from-purple-500 to-pink-500',
        image: '/assets/projects/legends-of-aestera/hero.png',
        detailedDescription: 'Unity ile sıfırdan geliştirilen 2D platformer macera oyunu. İki farklı karakter ile oynayabilen, 20+ seviye, boss savaşları ve çeşitli mekanikler içeren kapsamlı bir oyun projesi. Google Play Store\'da kapalı test aşamasında.',
        features: [
            'İki oynanabilir kahraman: Red (kılıç komboları) ve Robinhood (okçuluk)',
            '20+ el yapımı seviye: Tuzaklar, gizli geçitler ve bulmacalar',
            'Boss savaşları: Strateji ve refleks gerektiren epik düellolar',
            'Çeşitli ortamlar: Orman derinlikleri, yeraltı mağaraları, kale içleri',
            'Güçlendirmeler: Can tazeleme, hız artışı, zıplama güçlendirme',
            'Pürüzsüz kontroller: Dokunmatik ve gamepad desteği',
            'Canlı pixel art grafikleri ve epik müzikler',
            'Combo kılıç saldırıları (yakın dövüş)',
            'Hassas nişan alma ile uzun menzilli okçuluk',
            'Çift zıplama, duvarda koşma ve kayma mekanikleri',
            'Dinamik düşmanlar: Zıplayan variller, dönen testere bıçakları, dikenli engeller',
            'Gizlilik odaklı: Hiçbir kişisel veri toplanmıyor',
            'Unity 2D game engine ile geliştirildi',
            'C# ile oyun mekaniği programlama',
            'Google Play Store kapalı test aşamasında',
            'Android optimizasyonu ve performans iyileştirmeleri'
        ],
        challenges: '2D platformer mekaniklerini dengeli hale getirmek, seviye tasarımı, boss AI sistemi, pixel art animasyonları, gamepad ve touch kontrollerini optimize etmek, Google Play Store politikalarına uyum sağlamak',
        links: [],
        screenshots: [
            '/assets/projects/legends-of-aestera/screenshot-1.png',
            '/assets/projects/legends-of-aestera/screenshot-2.png',
            '/assets/projects/legends-of-aestera/screenshot-3.png'
        ]
    },
    {
        slug: 'safeknot',
        title: 'SafeKnot - Ebeveyn Kontrol Uygulaması',
        description: 'XML arayüz modernizasyonu, 4 dil desteği (Arapça RTL, İngilizce, Almanca, Fransızca)',
        category: 'Mobile',
        technologies: ['Android', 'Java/Kotlin', 'XML', 'i18n'],
        color: 'from-blue-500 to-cyan-500',
        image: '/assets/projects/safeknot-app/hero.png',
        detailedDescription: 'Ebeveynlerin çocuklarının dijital aktivitelerini takip edebilmeleri için geliştirilen mobil uygulama. Mevcut geleneksel XML tabanlı arayüz modernize edilerek kullanıcı deneyimi iyileştirildi.',
        features: [
            'Geleneksel XML tabanlı arayüz modernizasyonu',
            'Kullanıcı deneyimi (UX) iyileştirmeleri',
            'Çoklu dil desteği: Arapça, İngilizce, Almanca ve Fransızca',
            'Modern ve kullanıcı dostu arayüz tasarımı',
            'Responsive tasarım optimizasyonları',
            'Performans iyileştirmeleri'
        ],
        challenges: 'Geleneksel XML yapısını koruyarak modernizasyon yapmak, 4 farklı dil desteği entegrasyonu, RTL (Right-to-Left) dil desteği (Arapça)',
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
        description: 'HTML5 oyun Android portlama, Capacitor, 60 FPS optimizasyon - Google Play yayında',
        category: 'Game',
        technologies: ['HTML5', 'Capacitor', 'Android', 'AdMob', 'Canvas API'],
        color: 'from-yellow-500 to-orange-500',
        image: '/assets/projects/numeric-wheel/hero.png',
        detailedDescription: 'Müşterinin çalışmayan HTML5 puzzle oyununun Android\'e portlanması ve Play Store için optimize edilmesi. Üç aşamalı geliştirme sürecinde oyun tamamen yeniden yapılandırıldı.',
        features: [
            'Bağlayıcı puzzle mekanizması: Renkli topları eşleştirerek yüksek skor yapın',
            'Joker özelliği: Sıkıştığınızda seçilen renkteki tüm topları tek hamlede patlat',
            'Göz alıcı patlama animasyonları ve görsel efektler',
            'İlerleme kaydı: Skorunuz ve bonus hamleleriniz otomatik kaydedilir',
            'Müzik ve ses kontrolleri: Tercihiniz bir sonraki açılışta da hatırlanır',
            'Arka plan desteği: Uygulama minimize olunca müzik otomatik duraklatılır',
            'Her ekrana uyumlu: Telefon ve tabletlerde mükemmel çalışır',
            '60 FPS ile pürüzsüz oyun deneyimi',
            'Reklam sistemi entegre (zaman aşımı korumalı)',
            'Google Play Store\'da yayında',
            'Müşterinin çalışmayan kodları tamamen düzeltildi ve optimize edildi',
            'HTML5 Canvas optimizasyonu',
            'API 21\'den API 35\'e güncelleme (Android 15 uyumlu)',
            'Capacitor framework ile native Android entegrasyonu',
            'Kütüphane versiyon uyumsuzlukları giderildi'
        ],
        challenges: 'Çalışmayan ve crash olan kodu düzeltmek, HTML5 oyununu native Android performansına optimize etmek, Canvas kaybolma hatalarını çözmek, joker sistemini geliştirmek, 60 FPS performans sağlamak',
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
        description: 'Flutter modernizasyonu, Material Design, dark mode, Firebase güncelleme',
        category: 'Mobile',
        technologies: ['Flutter', 'Firebase', 'UI/UX', 'Material Design'],
        color: 'from-pink-500 to-rose-500',
        image: '/assets/projects/mood-tracker/hero.png',
        detailedDescription: 'Flutter ruh hali takip uygulamasının modern kütüphaneler ve tasarım prensipleriyle tamamen yenilenmesi. Mevcut kod tabanı korunarak modernize edildi.',
        features: [
            'Yeni uygulama ikonu ve modern splash screen tasarımı',
            'Tüm ekranların Material Design prensiplerine uygun yenilenmesi',
            'Karanlık mod desteği iyileştirmeleri ve okunabilirlik optimizasyonları',
            'Modern Flutter widget\'ları ve kütüphaneleriyle kod güncellemesi',
            'Ana menü ve onboarding ekranlarının yeniden tasarlanması',
            'Performans optimizasyonları ve gereksiz rebuild\'lerin azaltılması',
            'Firebase Authentication ve Firestore entegrasyonu güncellendi',
            'Tutarlı tipografi, renk paleti ve boşluk (spacing) kullanımı'
        ],
        challenges: 'Mevcut kod tabanını koruyarak modernizasyon yapmak, kullanıcı verilerini kaybetmeden güncellemeler yapmak, karanlık mod sorunlarını çözmek ve performans iyileştirmeleri',
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
        description: 'React Native kod refactoring, component yapısı iyileştirme, i18n dil desteği',
        category: 'Mobile',
        technologies: ['React Native', 'Expo', 'AsyncStorage', 'i18next', 'NativeWind'],
        color: 'from-emerald-500 to-teal-500',
        detailedDescription: 'Okul öğretmenlerinin nöbet görevlerini yönetmek için geliştirilen mobil uygulama. Müşterinin mevcut uygulaması refactor edilerek kod kalitesi artırıldı ve İngilizce dil desteği eklendi.',
        features: [
            'Proje dosya yapısı yeniden düzenlendi ve temizlendi',
            'Karışık ve yanlış konumlandırılmış dosyalar ayrıştırıldı',
            'Gereksiz kodlar kaldırılarak kod kalitesi artırıldı',
            'Component yapısı düzenlendi (25+ bileşen)',
            'SharedTeacherModal ortak modal sistemi oluşturuldu',
            'SchoolStatusText saat kontrolü düzeltildi',
            'Import/export hataları giderildi',
            'Admin yetki sistemi geliştirildi',
            'İngilizce dil desteği eklendi (i18next)',
            'Kod tekrarları azaltılarak refactoring yapıldı'
        ],
        challenges: 'Mevcut karışık kod tabanını düzenlemek, component yapısını iyileştirmek, çoklu dil desteği entegrasyonu, modal sistemini birleştirmek',
        links: []
    },
    {
        slug: 'getyo-admin',
        title: 'Get Yo - Admin Panel',
        description: 'Flavor, topping, oylama yönetimi - Push notification, Google Gemini AI entegrasyonu',
        category: 'Web',
        technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Google Gemini AI', 'Tailwind CSS', 'Resend', 'Push Notifications'],
        color: 'from-red-500 to-pink-500',
        image: '/assets/projects/getyo-admin/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin tüm operasyonlarını tek yerden yönetmek için sıfırdan geliştirilmiş admin paneli. Flavor yönetimi, oylama sistemi, topping kontrolü, push notification gönderimi, müşteri yorumları ve geri bildirimler.',
        features: [
            'Mobil uygulamayı güncellemeye gerek kalmıyor - panelden yaptığınız değişiklikler anında uygulamaya yansıyor',
            'Tat menüsünü kolayca yönetin - yeni tat ekleyin, fotoğraf, kategori, sos ve alerjen bilgisi girin, dakikalar içinde müşteriler görüyor',
            'Topping stok durumunu tek tıkla güncelleyin - "Tükendi" işaretleyin, müşteriler anlık görüyor',
            'Tüm kullanıcılara push notification gönderin - yeni tat, kampanya duyuruları, özel bildirimler',
            'Aylık oylama kampanyası başlatın - iki tat arası kullanıcı seçimi, kazanan menüye giriyor',
            'Çalışma saatlerini ve tatil günlerini ayarlayın - uygulama otomatik güncelleniyor',
            'Müşteri geri bildirimlerini okuyun - öneri, şikayet, iş başvuruları hepsi bir yerde',
            'Kullanıcı yorumlarını moderasyonlayın - uygunsuz içerikleri silin',
            'Google Gemini AI ile akıllı içerik önerileri alın',
            'Form gönderildiğinde otomatik email bildirimleri',
            'Next.js 14 ve TypeScript ile hızlı, güvenli panel',
            'Supabase ile güvenli kimlik doğrulama',
            'Resend email servisi entegrasyonu'
        ],
        challenges: 'Kapsamlı admin panelini sıfırdan inşa etmek, push notification sistemini backend ile entegre etmek, flavor ve topping yönetim sistemlerini kurmak, oylama algoritmasını geliştirmek, Google Gemini AI entegrasyonu, email sistemi, çoklu lokasyon desteği',
        links: [],
        screenshots: []
    },
    {
        slug: 'gmb-optimizasyonu',
        title: 'Google My Business Optimizasyonu',
        description: 'GMB profil %100, AI görsel iyileştirme, yerel SEO stratejisi - 2 lokasyon',
        category: 'SEO',
        technologies: ['Google My Business', 'SEO', 'AI Görsel İyileştirme', 'Yerel SEO'],
        color: 'from-red-500 to-orange-500',
        image: '/assets/projects/gmb-optimizasyonu/hero.png',
        detailedDescription: 'Frozen Yogurt Cafe işletmesinin Google My Business profilinin tamamen optimize edilmesi. Görsel iyileştirme, SEO stratejisi ve profil yönetimi yapıldı.',
        features: [
            'GMB profil seviyesi %100\'e çıkarıldı',
            'İşletme bilgileri eksiksiz güncellendi',
            'Kapak fotoğrafları AI araçlarıyla iyileştirildi',
            'Gizlilik için yüzler profesyonelce sansürlendi',
            'Anahtar kelime stratejisi uygulandı',
            'Yerel SEO ayarları optimize edildi',
            'Meta bilgiler düzenlendi',
            'Dashboard ayarları yapılandırıldı',
            'Analitik takip sistemi kuruldu',
            'Müşteri etkileşim sistemi aktifleştirildi',
            '2 lokasyon için optimizasyon tamamlandı'
        ],
        challenges: 'GMB profil tamamlama gereksinimlerini karşılamak, görsellerde gizlilik kurallarına uygun sansürleme, yerel SEO stratejisi geliştirmek, profil görünürlüğünü artırmak',
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
]
