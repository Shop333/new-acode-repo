import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'James Miller',
      role: t('testimonials.list.client1.role'),
      image: '/client1.jpg',
      quote: t('testimonials.list.client1.quote'),
      rating: 5
    },
    {
      id: 2,
      name: 'David Lee',
      role: t('testimonials.list.client2.role'),
      image: '/client2.jpg',
      quote: t('testimonials.list.client2.quote'),
      rating: 5
    },
    {
      id: 3,
      name: 'Chris Evans',
      role: t('testimonials.list.client3.role'),
      image: '/client3.jpg',
      quote: t('testimonials.list.client3.quote'),
      rating: 5
    }
  ];

  const stats = [
    { value: '5,200+', label: t('testimonials.stats.clients') },
    { value: '4.9', label: t('testimonials.stats.rating') },
    { value: '15', label: t('testimonials.stats.exp') },
    { value: '98%', label: t('testimonials.stats.return') }
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
      className="relative w-full py-24 lg:py-32 bg-[#0D0D0D]"
      id="testimonials"
    >
      <div className="absolute inset-0 film-grain pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E63946]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-6">
            <span className="inline-block geo-block-red text-sm tracking-widest uppercase">
              {t('testimonials.label')}
            </span>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display text-4xl lg:text-6xl text-white mb-4 uppercase">
              {t('testimonials.heading')}
            </h2>
            <div className="line-separator mx-auto max-w-xs" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="scroll-reveal group"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative p-8 border-2 border-white/10 hover:border-[#E63946]/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#E63946] flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E63946] text-[#E63946]" />
                  ))}
                </div>

                <blockquote className="font-body text-white/80 leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-14 h-14 thick-frame p-0.5">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display text-lg text-white group-hover:text-[#E63946] transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-white/50">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ transitionDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl text-[#E63946] mb-2">{stat.value}</div>
              <div className="font-body text-sm text-white/60 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
