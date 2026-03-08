"use client";

import TypeWriter from "./TypeWriter";
import AnimatedText from "./AnimatedText";
import Button from "@/components/ui/Button";
import NumberCounter from "@/components/effects/NumberCounter";
import TextGradient from "@/components/effects/TextGradient";
import Magnetic from "@/components/effects/Magnetic";

const Hero = () => {
  return (
    <section
      id="hero"
      className="gradient-bg flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="section-container section-padding w-full">
        <div className="w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary-500 shadow-xl sm:h-40 sm:w-40 md:h-48 md:w-48">
              <img
                src="/assets/images/profile.png"
                alt="goldsword profil fotoğrafı"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <AnimatedText>
            <h1 className="text-heading mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:mb-8 md:text-7xl lg:text-8xl">
              <span className="sr-only">Freelancer Yazılım Geliştirici - </span>
              <TextGradient>goldsword</TextGradient>
            </h1>
          </AnimatedText>

          <div className="text-subheading mb-6 text-lg font-bold sm:text-2xl md:mb-10 md:text-3xl lg:text-4xl">
            <TypeWriter />
          </div>

          <p className="text-body mx-auto mb-8 max-w-2xl px-4 text-base sm:text-lg md:mb-12">
            Modern tech stackler kullanarak hızlı ve etkili çözümler üretiyorum. Her platformda, her
            dilde, her projede.
          </p>

          <div className="mb-8 flex justify-center px-4 md:mb-12">
            <Magnetic strength={0.2}>
              <a href="/portfolio" className="w-full max-w-sm">
                <Button size="lg" className="w-full rounded-2xl py-6 text-xl shadow-xl">
                  <span className="flex items-center justify-center gap-4">
                    <svg
                      className="animate-bounce-horizontal h-7 w-7 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span className="tracking-wide">Portfolyoma Göz At</span>
                  </span>
                </Button>
              </a>
            </Magnetic>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-4 pb-8 sm:gap-4 md:grid-cols-4 md:gap-6 md:pb-12">
            <div className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:border-dark-700 dark:bg-dark-800/80 sm:p-6">
              <h3 className="text-2xl font-bold text-primary-500 sm:text-3xl md:text-4xl">
                <NumberCounter end={30} suffix="+" />
              </h3>
              <p className="text-body mt-2 text-xs sm:text-sm md:text-base">Proje</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:border-dark-700 dark:bg-dark-800/80 sm:p-6">
              <h3 className="text-2xl font-bold text-primary-500 sm:text-3xl md:text-4xl">
                <NumberCounter end={5} decimals={1} />
              </h3>
              <p className="text-body mt-2 text-xs sm:text-sm md:text-base">Puan</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:border-dark-700 dark:bg-dark-800/80 sm:p-6">
              <h3 className="text-2xl font-bold text-primary-500 sm:text-3xl md:text-4xl">
                <NumberCounter end={20} suffix="+" />
              </h3>
              <p className="text-body mt-2 text-xs sm:text-sm md:text-base">Müşteri</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:border-dark-700 dark:bg-dark-800/80 sm:p-6">
              <h3 className="text-2xl font-bold text-primary-500 sm:text-3xl md:text-4xl">
                <NumberCounter end={3} suffix="+" />
              </h3>
              <p className="text-body mt-2 text-xs sm:text-sm md:text-base">Yıl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
