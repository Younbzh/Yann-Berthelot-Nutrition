import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, ShoppingBag, CheckCircle, Clock, Award, Star, Calendar, Heart, Globe, Sparkles, Users } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-red-200' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                <Globe className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-600">{siteConfig.storeName}</h1>
                <p className="text-sm text-gray-700">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-red-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('produits')} className="text-gray-700 hover:text-red-600 transition-colors">Produits</button>
              <button onClick={() => scrollToSection('origines')} className="text-gray-700 hover:text-red-600 transition-colors">Origines</button>
              <button onClick={() => scrollToSection('infos')} className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-orange-600 transition-all shadow-lg">
                Nous trouver
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'produits', 'origines', 'infos'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-9xl">🌍</div>
          <div className="absolute bottom-20 right-10 text-9xl">🌶️</div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 px-6 py-3 rounded-full mb-6 shadow-lg border-2 border-red-300">
              <Sparkles className="text-red-600" size={24} />
              <span className="text-lg font-bold text-red-700">{siteConfig.hero.opening}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-red-600" style={{textShadow: '3px 3px 0px rgba(251, 146, 60, 0.3)'}}>
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-3xl md:text-4xl text-orange-600 mb-3 font-bold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="bg-white rounded-2xl p-6 inline-block shadow-xl mb-6 border-2 border-orange-200">
              <p className="text-2xl font-bold text-gray-900 mb-2">{siteConfig.slogan}</p>
              <p className="text-sm text-gray-600 italic">{siteConfig.sloganTranslation}</p>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('produits')} className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all shadow-xl shadow-red-500/30">
                {siteConfig.hero.cta}
              </button>
              <button onClick={() => scrollToSection('infos')} className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-lg border-2 border-red-300">
                Nous trouver
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Origines des produits */}
      <section id="origines" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.origins.title}</h2>
            <p className="text-xl text-orange-600">{siteConfig.origins.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.origins.regions.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-red-200">
                <div className="text-6xl mb-4 text-center">{region.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{region.name}</h3>
                <p className="text-gray-700 text-center">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Produits */}
      <section id="produits" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <ShoppingBag className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.products.title}</h2>
            <p className="text-xl text-red-600">{siteConfig.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.products.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-orange-600">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gérante & Histoire */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Heart className="text-red-600" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{siteConfig.manager.name}</h3>
                  <p className="text-orange-200">{siteConfig.manager.title}</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-4">{siteConfig.manager.story}</p>
              <p className="text-lg leading-relaxed italic">{siteConfig.manager.passion}</p>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mt-6">
                <p className="text-sm font-semibold">📍 {siteConfig.manager.experience}</p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30">
              <h3 className="text-3xl font-bold mb-6">Notre Histoire</h3>
              <p className="text-lg leading-relaxed">{siteConfig.story.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.whyUs.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.whyUs.reasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-200">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Concept */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.concept.title}</h2>
            <p className="text-xl text-orange-600">{siteConfig.concept.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <Award className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Mission</h3>
              <p className="text-gray-700 leading-relaxed">{siteConfig.concept.mission}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <Sparkles className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Engagement</h3>
              <p className="text-gray-700 leading-relaxed">{siteConfig.concept.engagement}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <Heart className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Ambiance</h3>
              <p className="text-gray-700 leading-relaxed">{siteConfig.concept.atmosphere}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.target.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.target.profiles.map((profile, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-red-200">
                <div className="text-4xl mb-3">{profile.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{profile.title}</h3>
                <p className="text-gray-600 text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recettes & Conseils */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">{siteConfig.recipes.title}</h2>
          <p className="text-2xl mb-4">{siteConfig.recipes.subtitle}</p>
          <p className="text-lg mb-8 opacity-90">{siteConfig.recipes.description}</p>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30">
            <h3 className="text-2xl font-bold mb-6">Quelques idées de recettes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {siteConfig.recipes.examples.map((recipe, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-left">
                  <p className="font-semibold">• {recipe}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section id="infos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.infos.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 shadow-xl text-white">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Où nous trouver ?</h3>
                <p className="text-lg font-semibold mb-2">{siteConfig.infos.address.street}</p>
                <p className="text-lg font-semibold">{siteConfig.infos.address.city}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 shadow-xl text-white">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-lg font-semibold mb-2">{siteConfig.infos.contact.phone}</p>
                <p className="text-sm opacity-90">N'hésitez pas à nous appeler !</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-orange-300">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h3>
              
              <div className="space-y-3">
                {Object.entries(siteConfig.infos.hours.weekdays).map(([day, hours], index) => (
                  <div key={index} className="flex justify-between items-center bg-white rounded-lg p-4 border border-orange-200">
                    <span className="font-bold text-gray-900 capitalize">{day === 'monday' ? 'Lundi' : day === 'tuesday' ? 'Mardi' : day === 'wednesday' ? 'Mercredi' : day === 'thursday' ? 'Jeudi' : day === 'friday' ? 'Vendredi' : day === 'saturday' ? 'Samedi' : 'Dimanche'}</span>
                    <span className={`font-semibold ${hours === 'Fermé' ? 'text-red-600' : 'text-green-600'}`}>{hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-100 rounded-lg p-4 mt-6 border-l-4 border-orange-500">
                <p className="text-sm text-orange-700">
                  ⚠️ {siteConfig.infos.hours.note}
                </p>
              </div>

              <div className="bg-amber-100 rounded-lg p-4 mt-4 border-l-4 border-amber-500">
                <p className="text-sm text-amber-700">
                  📍 {siteConfig.infos.otherLocation.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
                <h3 className="text-lg font-bold text-red-600 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  <span className="text-orange-600 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <ShoppingBag className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-6">Venez nous rendre visite !</h2>
          <p className="text-2xl mb-8">Découvrez les saveurs du monde à Loudéac</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 inline-block border-2 border-white/30">
            <p className="text-xl font-bold mb-2">📍 7 boulevard de la Gare, Loudéac</p>
            <p className="text-lg mb-2">📞 {siteConfig.infos.contact.phone}</p>
            <p className="text-lg">🕐 Lun-Dim : 10h-19h30 (fermé mardi)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t-2 border-red-500">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">{siteConfig.storeName}</h3>
              <p className="text-gray-400 mb-2">{siteConfig.slogan}</p>
              <p className="text-gray-500 text-sm italic">{siteConfig.sloganTranslation}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 {siteConfig.infos.address.street}</p>
                <p>{siteConfig.infos.address.city}</p>
                <p>📞 {siteConfig.infos.contact.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Horaires</h3>
              <div className="space-y-2 text-gray-400">
                <p>Lun-Dim : 10h-19h30</p>
                <p className="text-red-400 font-semibold">Fermé le mardi</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500/30 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">
              © 2026 {siteConfig.storeName} - Tous droits réservés
            </p>
            <p className="text-red-400 font-bold">
              🌍 Votre épicerie du monde à Loudéac
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}