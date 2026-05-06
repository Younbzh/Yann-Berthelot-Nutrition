import React, { useState, useEffect } from 'react';
import {
  PaintBucket, Home, Building2, Palette,
  Award, CheckCircle, Users, Wrench, MapPin, Euro,
  Phone, Mail, MapPinned, Clock, ChevronDown, Menu, X, Check
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpeg"
                alt="Antoine Rault Peinture & Décoration"
                className="h-14 w-auto object-contain rounded"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#C9A847] transition-colors font-medium">
                L'entreprise
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#C9A847] transition-colors font-medium">
                Prestations
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#C9A847] transition-colors font-medium">
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#C9A847] text-stone-900 px-6 py-2.5 rounded-lg hover:bg-[#B8952E] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-[#C9A847]">
                  L'entreprise
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-[#C9A847]">
                  Prestations
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-700 hover:text-[#C9A847]">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 bg-[#C9A847] text-stone-900 px-4 rounded-lg font-semibold">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#2C2D31] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A847]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A847]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center bg-[#C9A847]/20 text-[#C9A847] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                Plus de 25 ans d'expérience
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                {siteConfig.hero.title}
              </h2>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                {siteConfig.hero.subtitle}
              </p>

              {/* Stats row */}
              <div className="flex gap-8 mb-8">
                {siteConfig.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#C9A847]">{stat.number}</div>
                    <div className="text-xs text-white/55 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {siteConfig.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                    <Check className="w-4 h-4 text-[#C9A847] mr-2 flex-shrink-0" />
                    <span className="font-medium text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#C9A847] text-stone-900 px-8 py-4 rounded-lg hover:bg-[#B8952E] transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {siteConfig.hero.cta.primary}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg border-2 border-white/25"
                >
                  {siteConfig.hero.cta.secondary}
                </button>
              </div>
            </div>

            {/* Right column – logo + contact */}
            <div className="flex flex-col items-center">
              <img
                src="/logo.jpeg"
                alt="Antoine Rault Peinture & Décoration"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="mt-6 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 w-full max-w-sm hover:bg-white/20 transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#C9A847] flex-shrink-0" />
                <span className="text-white font-semibold text-lg group-hover:text-[#C9A847] transition-colors">
                  {siteConfig.contact.phone}
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2D31] mb-4">
              {siteConfig.about.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              {siteConfig.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2C2D31] to-[#1C1D20] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Mon engagement</h3>
              <div className="w-12 h-1 bg-[#C9A847] rounded mb-6"></div>
              <div className="space-y-4">
                {siteConfig.about.values.map((value, index) => (
                  <div key={index} className="border-l-4 border-[#C9A847]/60 pl-4">
                    <h4 className="font-bold text-lg mb-1 text-[#C9A847]">{value.title}</h4>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2D31] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.services.list.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A847] to-[#9A7828] rounded-xl flex items-center justify-center mb-6 shadow-md">
                  {service.icon === 'PaintBucket' && <PaintBucket className="w-8 h-8 text-white" />}
                  {service.icon === 'Home' && <Home className="w-8 h-8 text-white" />}
                  {service.icon === 'Building2' && <Building2 className="w-8 h-8 text-white" />}
                  {service.icon === 'Palette' && <Palette className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-[#2C2D31] mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-[#C9A847] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2D31] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-[#C9A847] bg-stone-50 p-6 rounded-r-xl hover:bg-white transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C9A847] rounded-lg flex items-center justify-center flex-shrink-0">
                    {reason.icon === 'Award' && <Award className="w-6 h-6 text-white" />}
                    {reason.icon === 'CheckCircle' && <CheckCircle className="w-6 h-6 text-white" />}
                    {reason.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                    {reason.icon === 'Wrench' && <Wrench className="w-6 h-6 text-white" />}
                    {reason.icon === 'MapPin' && <MapPin className="w-6 h-6 text-white" />}
                    {reason.icon === 'Euro' && <Euro className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C2D31] mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-br from-[#2C2D31] to-[#1C1D20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-[#C9A847]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {siteConfig.serviceArea.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {siteConfig.serviceArea.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {siteConfig.serviceArea.cities.map((city, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center font-medium border border-[#C9A847]/20">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-white/75 font-medium">
              {siteConfig.serviceArea.radius}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2D31] mb-4">
              {siteConfig.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {siteConfig.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#C9A847] transition-colors">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-[#2C2D31] text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#C9A847] flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-5 bg-stone-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2D31] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          {/* CTA Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#2C2D31] to-[#1C1D20] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl border border-[#C9A847]/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Contactez-moi dès maintenant</h3>
              <div className="w-16 h-1 bg-[#C9A847] rounded mx-auto mb-6"></div>
              <p className="text-xl mb-8 text-white/80">Devis gratuit et personnalisé – Réponse rapide garantie</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="bg-[#C9A847] text-stone-900 px-8 py-4 rounded-lg hover:bg-[#B8952E] transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-6 h-6" />
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>

          {/* Coordonnées détaillées */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Téléphone */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A847] to-[#9A7828] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2D31] mb-4">Téléphone</h3>
              <div className="space-y-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="block text-[#C9A847] hover:underline text-lg font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
                {siteConfig.contact.mobile && (
                  <a
                    href={`tel:${siteConfig.contact.mobile.replace(/\s/g, '')}`}
                    className="block text-[#C9A847] hover:underline text-lg font-semibold"
                  >
                    {siteConfig.contact.mobile}
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-4">Appel direct</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A847] to-[#9A7828] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2D31] mb-4">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#C9A847] hover:underline text-sm font-semibold break-all"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-sm text-gray-500 mt-4">Réponse sous 24h</p>
            </div>

            {/* Adresse */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A847] to-[#9A7828] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2D31] mb-4">Secteur</h3>
              <p className="text-gray-700 font-medium">
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </p>
              <p className="text-sm text-gray-500 mt-4">Centre Bretagne</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#C9A847] mr-3" />
                <h3 className="text-2xl font-bold text-[#2C2D31]">Disponibilités</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {siteConfig.hours.details.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-stone-50 rounded-lg">
                    <p className="font-bold text-gray-700 mb-1">{item.day}</p>
                    <p className="text-gray-600">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1D20] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.jpeg"
                  alt="Antoine Rault"
                  className="h-12 w-auto object-contain rounded"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                L'exigence du détail, au service de votre intérieur depuis 25 ans.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#C9A847]">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#C9A847]" />
                  {siteConfig.contact.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#C9A847]" />
                  {siteConfig.contact.email}
                </p>
                <p className="flex items-center">
                  <MapPinned className="w-4 h-4 mr-2 text-[#C9A847]" />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#C9A847]">Informations</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Artisan peintre indépendant</p>
                <p>Diplômé CAP · BEP · Bac Pro</p>
                <p>22600 Saint-Barnabé</p>
                <p>Bretagne, France</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {siteConfig.businessName} – Tous droits réservés</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
