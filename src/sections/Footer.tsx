import { Scissors, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.barbers'), href: '#barbers' },
    { label: t('nav.reviews'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <footer className="relative w-full bg-[#1D3557] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E63946] flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl block tracking-tighter">GENTLEMAN'S</span>
                <span className="font-display text-2xl text-[#E63946] tracking-tighter">BLADE</span>
              </div>
            </div>
            <p className="font-body text-white/70 leading-relaxed mb-6 max-w-md">
              {t('footer.brand_desc')}
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-[#E63946] hover:bg-[#E63946] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-[#E63946] hover:bg-[#E63946] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-widest">{t('footer.links_title')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="font-body text-white/70 hover:text-[#E63946] transition-colors duration-300 razor-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-widest">{t('footer.contact_title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/70">
                  {t('contact.info.visit.value')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <a 
                  href="tel:5551232523" 
                  className="font-body text-white/70 hover:text-[#E63946] transition-colors"
                >
                  {t('contact.info.call.value')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <a 
                  href="mailto:hello@gentlemansblade.com" 
                  className="font-body text-white/70 hover:text-[#E63946] transition-colors"
                >
                  hello@gentlemansblade.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                {t('contact.info.hours.label')}
              </h5>
              <p className="font-body text-white/70 whitespace-pre-line">
                {t('footer.hours_detailed')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/50">
              © {currentYear} Gentleman's Blade. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-white/50 hover:text-[#E63946] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="font-body text-sm text-white/50 hover:text-[#E63946] transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barber pole accent */}
      <div className="absolute bottom-0 right-0 w-4 h-full barber-pole-stripes hidden lg:block" />
    </footer>
  );
};

export default Footer;
