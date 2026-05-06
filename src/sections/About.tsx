import { useEffect, useRef } from 'react';
import { Award, Clock, Sparkles, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Tambahkan ini

const About = () => {
  const { t } = useTranslation(); // Inisialisasi hook translation
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Update features menggunakan t()
  const features = [
    { icon: Award, title: t('about.features.award.title'), desc: t('about.features.award.desc') },
    { icon: Clock, title: t('about.features.clock.title'), desc: t('about.features.clock.desc') },
    { icon: Sparkles, title: t('about.features.sparkles.title'), desc: t('about.features.sparkles.desc') },
    { icon: Heart, title: t('about.features.heart.title'), desc: t('about.features.heart.desc') },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
      id="about"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            #1D3557 40px,
            #1D3557 42px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            #1D3557 40px,
            #1D3557 42px
          )`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="scroll-reveal mb-6">
              <span className="geo-block-red text-sm tracking-widest uppercase">
                {t('about.label')}
              </span>
            </div>

            {/* Heading */}
            <div className="scroll-reveal mb-8" style={{ transitionDelay: '0.1s' }}>
              <h2 className="font-display text-4xl lg:text-6xl text-[#1D3557] leading-tight mb-4 uppercase">
                {t('about.heading_line1')}<br />{t('about.heading_line2')}
              </h2>
              <div className="line-separator max-w-sm" />
            </div>

            {/* Description */}
            <div className="scroll-reveal space-y-6 mb-10" style={{ transitionDelay: '0.2s' }}>
              <p className="font-body text-lg text-[#1D3557]/80 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="font-body text-lg text-[#1D3557]/80 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="scroll-reveal grid grid-cols-2 gap-6" style={{ transitionDelay: '0.3s' }}>
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="group flex items-start gap-4 p-4 border-2 border-[#1D3557]/10 hover:border-[#E63946] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#E63946]/10 flex items-center justify-center group-hover:bg-[#E63946] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#1D3557] mb-1">{feature.title}</h4>
                    <p className="font-body text-sm text-[#1D3557]/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="scroll-reveal relative" style={{ transitionDelay: '0.2s' }}>
              {/* Main poster block */}
              <div className="poster-block bg-white">
                <div className="text-center mb-8">
                  <div className="font-display text-6xl lg:text-8xl text-[#E63946] mb-2">15</div>
                  <div className="font-display-alt text-lg text-[#1D3557] tracking-widest uppercase">{t('about.poster.years_text')}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#1D3557]/20 pb-3">
                    <span className="font-body text-[#1D3557]">{t('about.poster.item1')}</span>
                    <span className="font-display text-[#E63946]">✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#1D3557]/20 pb-3">
                    <span className="font-body text-[#1D3557]">{t('about.poster.item2')}</span>
                    <span className="font-display text-[#E63946]">✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#1D3557]/20 pb-3">
                    <span className="font-body text-[#1D3557]">{t('about.poster.item3')}</span>
                    <span className="font-display text-[#E63946]">✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-dashed border-[#1D3557]/20 pb-3">
                    <span className="font-body text-[#1D3557]">{t('about.poster.item4')}</span>
                    <span className="font-display text-[#E63946]">✓</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-4 border-[#1D3557]">
                  <p className="font-body text-sm text-[#1D3557]/70 text-center italic">
                    "{t('about.poster.quote')}"
                  </p>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#457B9D]/20 transform -rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
