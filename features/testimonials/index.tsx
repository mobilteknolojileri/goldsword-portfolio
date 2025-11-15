'use client'

import { useState } from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const [showAll, setShowAll] = useState(false)

    const testimonials = [
        {
            name: 'erenardic',
            profileLink: 'https://bionluk.com/erenardic',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/c63830f3-beea-4ad7-a193-e7147e1da8bf.jpeg',
            rating: 5,
            content: 'İşini hakkıyla yapan nadir yazılımcılardan. Gerçekten çok memnun kaldım. Diğer yazılımcıların yapamadığı, 2 ay bekllettiği, yarım yamalak bıraktığı işi sıfırdan yeniden 1 hafta da yaparak çok güzel bir iş çıkardı. Emeğinize sağlık. Kesinlikle temiz ve profesyonel bir iş istiyorsanız tavsiye ederim'
        },
        {
            name: 'bicakli',
            profileLink: 'https://bionluk.com/bicakli',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'Şuana kadar karşılaştığım en ilgili, işini iyi bilen ve yapanlar arasında, isim düşerse kesinlikle tekrar geleceğim kişi. Tekraren çok teşekkür ederim, hızlı ve etkili bir şekilde halloldu. İşin dışında verdiğiniz tavsiyeler için de ayrıca teşekkür ederim.'
        },
        {
            name: 'okankaf',
            profileLink: 'https://bionluk.com/okankaf',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'kafasi calisiyor. sizden tonla detay istemiyor. projeyi iyi kavriyor ve teknik mukemmellik haricinde fikir duzeyinde katki yapiyor. ikinci proje de cok basarili oldu ucuncuyu verdik'
        },
        {
            name: 'yakup02',
            profileLink: 'https://bionluk.com/yakup02',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/57cfd12b-272c-4976-b8ac-f6df588e27a2.jpg',
            rating: 5,
            content: 'bu üçüncü çalışmamız ve hiç şaşırtmayan bir mükemmellik anlayışı gerçekten çok güzel olmuş her şey  için teşekkür eder anlayışın için ayrıca teşekkür ederim daha fazla iş yapmak dileğiyle...'
        },
        {
            name: 'celaldemir2376',
            profileLink: 'https://bionluk.com/celaldemir2376',
            profilePhoto:
                'https://bgcp.bionluk.com/images/avatar/200x200/97137667-cc72-4ed9-a5cd-932d722d6260.jpg',
            rating: 5,
            content: 'Ellerine sağlık hızlı ve çok güzel bir site oldu tam istediğim gibi oldu'
        },
        {
            name: 'ocbslim',
            profileLink: 'https://bionluk.com/ocbslim',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'Gercekten bilgili ve istenileni cok hizli sekilde sonuclandiran bir yazilimci. Kesinlikle islerinizi teslim edebilirsiniz. Bundan sonra hep beraber olacagiz. Tesekkür ederim.'
        },
        {
            name: 'ardaras',
            profileLink: 'https://bionluk.com/ardaras',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/34297234-4e98-433c-8fa9-977d9acf1543.jpeg',
            rating: 5,
            content: 'Hızlı dönüş, kaliteli iş. İstediklerimi gayet iyi anlayıp direkt yardımcı oldu. Anlaştığımız süreden de kısa sürede teslim etti. Çok saygılı biri. Yolun açık olsun.'
        },
        {
            name: 'siete7',
            profileLink: 'https://bionluk.com/siete7',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'İletişim oldukça iyi. Tüm soruları cevap veriyor. Ekstra işler de olsa yardımcı olmaya çalışıyor. Kesinlikle tavsiye ederim.'
        },
        {
            name: 'gokaymemis',
            profileLink: 'https://bionluk.com/gokaymemis',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/384cc53d-68f5-4eae-af68-7140c17a41f2.jpg',
            rating: 5,
            content: 'İşinde çok profesyonel ama bir o kadar mütevazi. Ellerine sağlık abi çok iyi iş çıkardın.'
        },
        {
            name: 'celaldemir2376',
            profileLink: 'https://bionluk.com/celaldemir2376',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/97137667-cc72-4ed9-a5cd-932d722d6260.jpg',
            rating: 5,
            content: 'Yakın süreçte 2 tane proje yaptırdım 2 projeyide sorunsuz ve kısa sürede bitirdi çok teşekkürler'
        },
        {
            name: 'okankaf',
            profileLink: 'https://bionluk.com/okankaf',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'basarili bir sonuc daha. 4ncu projeyi verdik'
        },
        {
            name: 'yakup02',
            profileLink: 'https://bionluk.com/yakup02',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/57cfd12b-272c-4976-b8ac-f6df588e27a2.jpg',
            rating: 5,
            content: 'istediğimden erken bitti soru cevap ilğili tüm sorunları ve diğer sorunlara odak tanıması güzeldi yine çalışmak isterim'
        },
        {
            name: 'siete7',
            profileLink: 'https://bionluk.com/siete7',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'Sorunsuz bir alışveriş oldu. İstediklerim olduğu gibi yerine getirildi. Gönül rahatlığıyla iş yapabilirsiniz.'
        },
        {
            name: 'okankaf',
            profileLink: 'https://bionluk.com/okankaf',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'basarili ve profesyonel freelancer. . projeyi anlastigimiz sekilde ve zamanda  tamamladi'
        },
        {
            name: 'erenardic',
            profileLink: 'https://bionluk.com/erenardic',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/c63830f3-beea-4ad7-a193-e7147e1da8bf.jpeg',
            rating: 5,
            content: '2. İşimiz de de mükemmel bir iş çıkardı. Süpersiniz 🙏🏻'
        },
        {
            name: 'ugurcancaglar',
            profileLink: 'https://bionluk.com/ugurcancaglar',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/a2c5408d-8ab6-4b41-99cb-22b7f8d0f5a2.jpg',
            rating: 5,
            content: 'Siparişi zamanında tamamladı. Projeyle kendi projesiymiş gibi ilgilendi. Çok teşekkür ederim 🙏'
        },
        {
            name: 'ardaras',
            profileLink: 'https://bionluk.com/ardaras',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/34297234-4e98-433c-8fa9-977d9acf1543.jpeg',
            rating: 5,
            content: 'Sürekli çalıştığım biri, her seferinde anlayışıyla ve desteğiyle beni kurtarıyor. Çok teşekkürler.'
        },
        {
            name: 'visionsoftware',
            profileLink: 'https://bionluk.com/visionsoftware',
            profilePhoto: 'https://bgcp.bionluk.com/images/avatar/200x200/b641888b-027a-4239-bf22-f9f48a1d97d8.png',
            rating: 5,
            content: 'Gayet iyi ve hızlı'
        },
        {
            name: 'furkancelik530',
            profileLink: 'https://bionluk.com/furkancelik530',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'uygulama tasarımı işi verildi güzel bir iş çıkardı iletişimi iyiydi eline sağlık'
        },
        {
            name: 'okankaf',
            profileLink: 'https://bionluk.com/okankaf',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'cok iyi'
        },
        {
            name: 'okankaf',
            profileLink: 'https://bionluk.com/okankaf',
            profilePhoto: 'https://gcdn.bionluk.com/uploads/general/No_Avatar.png',
            rating: 5,
            content: 'super'
        }
    ]

    const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6)

    return (
        <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-dark-800">
            <div className="section-container section-padding">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-heading tracking-tight">Müşteri Yorumları</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {displayedTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            profileLink={testimonial.profileLink}
                            profilePhoto={testimonial.profilePhoto}
                            rating={testimonial.rating}
                            content={testimonial.content}
                        />
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
                    {!showAll && testimonials.length > 6 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-3 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-heading font-semibold rounded-lg transition"
                        >
                            Daha Fazla Gör ({testimonials.length - 6} yorum daha)
                        </button>
                    )}
                    {showAll && (
                        <button
                            onClick={() => setShowAll(false)}
                            className="px-6 py-3 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-heading font-semibold rounded-lg transition"
                        >
                            Daha Az Göster
                        </button>
                    )}
                    <a
                        href="https://bionluk.com/goldsword"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition"
                    >
                        Bionluk Profilimi Görüntüle
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials