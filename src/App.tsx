import React, { useState, useEffect } from 'react';
import {
  Apple, Wind, Heart, Droplets, Moon,
  Award, CheckCircle, Users, Wrench, MapPin, Euro,
  Phone, MessageCircle, MapPinned, Clock, ChevronDown, Menu, X, Check,
  GraduationCap, Leaf
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
    <div className="min-h-screen bg-[#FAF5EC]">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo texte */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1C3424] to-[#2E5541] rounded-lg flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-[#C4813A]" />
              </div>
              <div>
                <p className="font-bold text-[#1C3424] text-base leading-tight">Yann Berthelot</p>
                <p className="text-xs text-[#C4813A] font-semibold tracking-wide">Coach en Neuro-Nutrition</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#C4813A] transition-colors font-medium">
                Mon approche
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#C4813A] transition-colors font-medium">
                Les 5 Facteurs
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#C4813A] transition-colors font-medium">
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#C4813A] text-white px-6 py-2.5 rounded-lg hover:bg-[#A8702A] transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Prendre rendez-vous
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
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-[#C4813A]">
                  Mon approche
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-[#C4813A]">
                  Les 5 Facteurs
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-gray-700 hover:text-[#C4813A]">
                  FAQ
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 bg-[#C4813A] text-white px-4 rounded-lg font-semibold">
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1C3424] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4813A]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4813A]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center bg-[#C4813A]/20 text-[#C4813A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="w-4 h-4 mr-2" />
                Formation certifiée École 5.3 · Qualiopi
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
                    <div className="text-3xl font-bold text-[#C4813A]">{stat.number}</div>
                    <div className="text-xs text-white/55 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {siteConfig.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                    <Check className="w-4 h-4 text-[#C4813A] mr-2 flex-shrink-0" />
                    <span className="font-medium text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#C4813A] text-white px-8 py-4 rounded-lg hover:bg-[#A8702A] transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
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

            {/* Right column – carte + téléphone */}
            <div className="flex flex-col items-center">
              <img
                src="/1000009307.jpg"
                alt="Yann Berthelot – Coach en Neuro-Nutrition"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="mt-6 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 w-full max-w-sm hover:bg-white/20 transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#C4813A] flex-shrink-0" />
                <span className="text-white font-semibold text-lg group-hover:text-[#C4813A] transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
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
              {/* Carte méthode */}
              <div className="mt-6">
                <img
                  src="/1000009306.jpg"
                  alt="Les 5 Facteurs Vivants – Méthode Dr Yann Rougier"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1C3424] to-[#2E5541] p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Mon engagement</h3>
              <div className="w-12 h-1 bg-[#C4813A] rounded mb-6"></div>
              <div className="space-y-4">
                {siteConfig.about.values.map((value, index) => (
                  <div key={index} className="border-l-4 border-[#C4813A]/60 pl-4">
                    <h4 className="font-bold text-lg mb-1 text-[#C4813A]">{value.title}</h4>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section – Les 5 Facteurs */}
      <section id="services" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.list.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C4813A] to-[#A8702A] rounded-xl flex items-center justify-center mb-6 shadow-md">
                  {service.icon === 'Apple' && <Apple className="w-8 h-8 text-white" />}
                  {service.icon === 'Wind' && <Wind className="w-8 h-8 text-white" />}
                  {service.icon === 'Heart' && <Heart className="w-8 h-8 text-white" />}
                  {service.icon === 'Droplets' && <Droplets className="w-8 h-8 text-white" />}
                  {service.icon === 'Moon' && <Moon className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-[#1C3424] mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-[#C4813A] mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-[#C4813A] bg-[#FAF5EC] p-6 rounded-r-xl hover:bg-white transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C4813A] rounded-lg flex items-center justify-center flex-shrink-0">
                    {reason.icon === 'Award' && <Award className="w-6 h-6 text-white" />}
                    {reason.icon === 'CheckCircle' && <CheckCircle className="w-6 h-6 text-white" />}
                    {reason.icon === 'Users' && <Users className="w-6 h-6 text-white" />}
                    {reason.icon === 'Wrench' && <Wrench className="w-6 h-6 text-white" />}
                    {reason.icon === 'MapPin' && <MapPin className="w-6 h-6 text-white" />}
                    {reason.icon === 'Euro' && <Euro className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1C3424] mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'accompagnement */}
      <section className="py-20 bg-gradient-to-br from-[#1C3424] to-[#2E5541] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-[#C4813A]" />
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
                <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center font-medium border border-[#C4813A]/20">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {siteConfig.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#C4813A] transition-colors">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-[#FAF5EC] transition-colors"
                >
                  <span className="font-bold text-[#1C3424] text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#C4813A] flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-5 bg-[#FAF5EC] border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          {/* CTA Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[#1C3424] to-[#2E5541] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl border border-[#C4813A]/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Contactez-moi dès maintenant</h3>
              <div className="w-16 h-1 bg-[#C4813A] rounded mx-auto mb-6"></div>
              <p className="text-xl mb-8 text-white/80">Premier entretien gratuit et sans engagement · Réponse sous 24h</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="bg-[#C4813A] text-white px-8 py-4 rounded-lg hover:bg-[#A8702A] transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Coordonnées détaillées */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Téléphone */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C4813A] to-[#A8702A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C3424] mb-4">Téléphone</h3>
              <div className="space-y-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="block text-[#C4813A] hover:underline text-lg font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">Appel direct</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C4813A] to-[#A8702A] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C3424] mb-4">WhatsApp</h3>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4813A] hover:underline text-lg font-semibold"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-sm text-gray-500 mt-4">Réponse sous 24h</p>
            </div>

            {/* Disponibilité */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C4813A] to-[#A8702A] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C3424] mb-4">Secteur</h3>
              <p className="text-gray-700 font-medium">22600 Loudéac</p>
              <p className="text-gray-700 font-medium">& visioconférence France</p>
              <p className="text-sm text-gray-500 mt-4">Centre Bretagne</p>
            </div>
          </div>

          {/* Horaires */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#C4813A] mr-3" />
                <h3 className="text-2xl font-bold text-[#1C3424]">Disponibilités</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {siteConfig.hours.details.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-[#FAF5EC] rounded-lg">
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
      <footer className="bg-[#111D18] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1C3424] to-[#2E5541] border border-[#C4813A]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-[#C4813A]" />
                </div>
                <div>
                  <p className="font-bold text-white text-base leading-tight">Yann Berthelot</p>
                  <p className="text-xs text-[#C4813A] font-semibold">Coach en Neuro-Nutrition</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Retrouvez énergie, équilibre et bien-être grâce à la méthode des 5 Facteurs Vivants.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#C4813A]">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#C4813A]" />
                  {siteConfig.contact.phone}
                </p>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#C4813A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-[#C4813A]" />
                  WhatsApp
                </a>
                <p className="flex items-center">
                  <MapPinned className="w-4 h-4 mr-2 text-[#C4813A]" />
                  22600 Loudéac · Bretagne
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#C4813A]">Informations</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Coach en Neuro-Nutrition</p>
                <p>Formation certifiante École 5.3</p>
                <p>Organisme certifié Qualiopi</p>
                <p>Méthode Dr Yann Rougier</p>
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
