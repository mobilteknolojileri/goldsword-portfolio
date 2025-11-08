'use client'

import TypeWriter from './TypeWriter'
import AnimatedText from './AnimatedText'
import Button from '@/components/ui/Button'
import NumberCounter from '@/components/effects/NumberCounter'
import TextGradient from '@/components/effects/TextGradient'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 gradient-bg">
            <div className="section-container section-padding">
                <div className="text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
                            <Image
                                src="/assets/images/profile.png"
                                alt="goldsword profil fotoğrafı"
                                fill
                                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                                className="object-cover"
                                priority
                                quality={90}
                            />
                        </div>
                    </div>

                    <AnimatedText>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 md:mb-8 text-heading tracking-tight leading-tight">
                            goldsword
                        </h1>
                    </AnimatedText>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10 text-subheading font-semibold">
                        <TypeWriter />
                    </div>

                    <p className="text-base sm:text-lg text-body max-w-2xl mx-auto mb-8 md:mb-12 px-4">
                        Modern tech stackler kullanarak hızlı ve etkili çözümler üretiyorum.
                        Her platformda, her dilde, her projede.
                    </p>

                    <div className="flex justify-center mb-8 md:mb-12 px-4">
                        <Link href="/portfolio" className="w-full max-w-md">
                            <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Portfolyoma Göz At
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4 pb-8 md:pb-12">
                        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">
                                <NumberCounter end={20} suffix="+" />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-body mt-2">Proje</p>
                        </div>
                        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">
                                <NumberCounter end={5} decimals={1} />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-body mt-2">Puan</p>
                        </div>
                        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">
                                <NumberCounter end={15} suffix="+" />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-body mt-2">Müşteri</p>
                        </div>
                        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500">
                                <NumberCounter end={3} suffix="+" />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-body mt-2">Yıl</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero