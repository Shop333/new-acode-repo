import { useState, useEffect } from 'react';
import { Menu, X, Scissors, Languages } from 'lucide-react'; // Tambah ikon Languages
import { useTranslation } from 'react-i18next'; // Import hook translation

const Navigation = () => {
  const { t, i18n } = useTranslation(); // Inisialisasi i18n
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navLinks menggunakan t() agar label berubah otomatis
  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#barbers', label: t('nav.barbers') },
    { href: '#testimonials', label: t('nav.reviews') },
    { href: '#contact', label: t('nav.contact') }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fungsi toggle bahasa (Ganti antara en, id, jp)
  const toggleLanguage = () => {
    const langs = ['en', 'id', 'jp'];
    const currentLangIndex = langs.indexOf(i18n.language);
    const nextLang = langs[(currentLangIndex + 1) % langs.length];
    i18n.changeLanguage(nextLang);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#E63946] flex items-center justify-center group-hover:bg-[#1D3557] transition-colors duration-300">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl text-[#1D3557]">GENTLEMAN'S</span>
                <span className="font-display text-xl text-[#E63946] ml-1">BLADE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="nav-pill uppercase"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Language Switcher Desktop */}
              <button 
                onClick={toggleLanguage}
                className="ml-4 p-2 text-[#1D3557] hover:text-[#E63946] flex items-center gap-1 text-xs font-bold transition-all"
              >
                <Languages className="w-4 h-4" />
                {i18n.language.toUpperCase()}
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="ticket-btn text-xs py-2 px-4"
              >
                {t('nav.book_now')}
              </button>
            </div>

            {/* Mobile Actions (Language + Menu) */}
            <div className="flex items-center gap-4 lg:hidden">
              <button onClick={toggleLanguage} className="p-2 text-[#1D3557]">
                <span className="text-xs font-bold">{i18n.language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#1D3557] hover:text-[#E63946] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#F5F1E8] border-t border-[#1D3557]/10 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block font-body text-lg text-[#1D3557] hover:text-[#E63946] transition-colors py-2 border-b border-[#1D3557]/10"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full ticket-btn mt-4"
            >
              {t('nav.book_appointment')}
            </button>
          </div>
        </div>
      </nav>

      {/* Barber pole accent on mobile */}
      <div className="lg:hidden fixed left-0 top-0 bottom-0 w-2 barber-pole-stripes z-40" />
    </>
  );
};

export default Navigation;
