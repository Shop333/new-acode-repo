import { useEffect, useRef, useState } from 'react';
import { Scissors, Sparkles, FlameKindling, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Tambahkan ini

interface Service {
  id: number;
  icon: React.ElementType;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const Services = () => {
  const { t } = useTranslation(); // Inisialisasi hook translation
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Data services dipindahkan ke dalam komponen agar bisa menggunakan t()
  const services: Service[] = [
    {
      id: 1,
      icon: Scissors,
      name: t('services.list.classic_cut.name'),
      description: t('services.list.classic_cut.desc'),
      price: t('services.list.classic_cut.price'),
      duration: t('services.list.classic_cut.duration'),
      image: '/service1.jpg'
    },
    {
      id: 2,
      icon: Crown,
      name: t('services.list.grooming.name'),
      description: t('services.list.grooming.desc'),
      price: t('services.list.grooming.price'),
      duration: t('services.list.grooming.duration'),
      image: '/service2.jpg'
    },
    {
      id: 3,
      icon: Sparkles,
      name: t('services.list.beard.name'),
      description: t('services.list.beard.desc'),
      price: t('services.list.beard.price'),
      duration: t('services.list.beard.duration'),
      image: '/hero1.jpg'
    },
    {
      id: 4,
      icon: FlameKindling,
      name: t('services.list.shave.name'),
      description: t('services.list.shave.desc'),
      price: t('services.list.shave.price'),
      duration: t('services.list.shave.duration'),
      image: '/hero2.jpg'
    }
  ];

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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#1D3557]"
      id="services"
    >
      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-6">
            <span className="inline-block geo-block-red text-sm tracking-widest uppercase">
              {t('services.label')}
            </span>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display text-4xl lg:text-6xl text-white mb-4 uppercase">
              {t('services.heading')}
            </h2>
            <div className="line-separator mx-auto max-w-xs" />
          </div>
          <div className="scroll-reveal mt-6" style={{ transitionDelay: '0.2s' }}>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="scroll-reveal group"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="vintage-menu-card h-full flex flex-col transition-all duration-500 hover:shadow-[12px_12px_0_#1D3557] hover:-translate-y-1">
                {/* Card Header */}
                <div className="flex items-start justify-between p-6 border-b-2 border-dashed border-[#1D3557]/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#E63946]/10 flex items-center justify-center group-hover:bg-[#E63946] transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-[#E63946] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#1D3557] group-hover:text-[#E63946] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="font-body text-sm text-[#1D3557]/60">{service.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-[#E63946]">{service.price}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6">
                  <p className="font-body text-[#1D3557]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Image reveal on hover */}
                  <div className={`relative overflow-hidden transition-all duration-500 ${hoveredId === service.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="thick-frame">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <button className="w-full py-3 border-2 border-[#1D3557] text-[#1D3557] font-semibold tracking-wider text-sm hover:bg-[#1D3557] hover:text-white transition-all duration-300 uppercase">
                    {t('services.book_btn')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal text-center mt-16" style={{ transitionDelay: '0.5s' }}>
          <p className="font-body text-white/60 mb-6">
            {t('services.footer_text')}
          </p>
          <button className="ticket-btn uppercase">
            {t('services.footer_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
