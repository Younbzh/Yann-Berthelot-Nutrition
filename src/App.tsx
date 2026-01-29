import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Star, CheckCircle, Clock, Award, Calendar, ExternalLink, Sparkles, Heart } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-200' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Sparkles className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-pink-600">{siteConfig.salonName}</h1>
                <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-pink-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('prestations')} className="text-gray-700 hover:text-pink-600 transition-colors">Prestations</button>
              <button onClick={() => scrollToSection('avis')} className="text-gray-700 hover:text-pink-600 transition-colors">Avis</button>
              <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg flex items-center gap-2">
                <Calendar size={18} />
                Réserver
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'prestations', 'avis'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 capitalize">
                  {section}
                </button>
              ))}
              <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-3 text-pink-600 hover:bg-pink-50 font-semibold">
                Réserver en ligne
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-8xl animate-pulse">💅</div>
          <div className="absolute bottom-20 left-10 text-8xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-2 rounded-full mb-6 shadow-lg border border-pink-200">
              <Star className="text-pink-600 fill-pink-600" size={20} />
              <span className="text-sm font-semibold text-pink-700">{siteConfig.hero.rating} • {siteConfig.reviews.totalReviews} avis</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-purple-600 mb-3 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-2 leading-relaxed">
                {siteConfig.hero.description}
              </p>
              <p className="text-xl text-pink-600 font-semibold italic mb-8">
                {siteConfig.slogan}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-xl shadow-pink-500/30 flex items-center gap-2">
                <Calendar size={20} />
                {siteConfig.hero.cta}
              </a>
              <button onClick={() => scrollToSection('prestations')} className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all shadow-lg border-2 border-pink-300">
                Voir les prestations
              </button>
            </div>

            {/* Rating breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {Object.entries(siteConfig.reviews.breakdown).map(([key, value], index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-pink-200">
                  <div className="text-2xl font-bold text-pink-600">{value}/5</div>
                  <div className="text-sm text-gray-600 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suzanne */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{siteConfig.suzanne.name}</h2>
                  <p className="text-pink-600 font-semibold">{siteConfig.suzanne.title}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{siteConfig.suzanne.bio}</p>
              <p className="text-gray-700 leading-relaxed">{siteConfig.suzanne.expertise}</p>
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-6 border-l-4 border-pink-500">
                <p className="text-pink-700 italic font-semibold">{siteConfig.suzanne.passion}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes Valeurs</h3>
              <div className="space-y-3">
                {siteConfig.suzanne.values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className="text-pink-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Salon */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.salon.title}</h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">{siteConfig.salon.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.salon.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-pink-200">
                <Sparkles className="w-10 h-10 text-pink-500 mb-4" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-2xl font-bold">{siteConfig.salon.atmosphere}</p>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.services.title}</h2>
            <p className="text-xl text-pink-600">{siteConfig.services.subtitle}</p>
          </div>

          <div className="bg-rose-100 rounded-xl p-6 mb-12 border-l-4 border-rose-500">
            <p className="text-rose-700 font-semibold">⚠️ {siteConfig.services.note}</p>
          </div>

          <div className="space-y-12">
            {siteConfig.services.categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{category.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-purple-600">{category.description}</p>
                  </div>
                </div>

                {category.note && (
                  <div className="bg-purple-100 rounded-lg p-4 mb-6 border-l-4 border-purple-500">
                    <p className="text-purple-700 font-semibold text-sm">{category.note}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {category.prestations.map((presta, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{presta.name}</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-pink-600">{presta.price}</div>
                          <div className="text-sm text-gray-500">{presta.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{presta.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-xl shadow-pink-500/30">
              <Calendar size={20} />
              Réserver ma prestation
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi me choisir */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.whyChoose.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.whyChoose.reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-pink-200">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-pink-500 fill-pink-500" size={32} />
              ))}
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.reviews.title}</h2>
            <p className="text-2xl text-pink-600 font-bold">{siteConfig.reviews.rating}/5 • {siteConfig.reviews.totalReviews} avis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.reviews.testimonials.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-md border border-pink-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-pink-500 fill-pink-500" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-pink-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-pink-400" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.tips.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.tips.items.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-md border border-pink-200">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{siteConfig.infos.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 shadow-xl text-white">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Adresse</h3>
                <p className="text-lg font-semibold mb-1">{siteConfig.infos.address.street}</p>
                <p className="text-lg font-semibold">{siteConfig.infos.address.city}</p>
                <p className="text-sm opacity-90 mt-4">{siteConfig.infos.parking}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <Calendar className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires</h3>
                <div className="space-y-3">
                  {Object.entries(siteConfig.infos.hours).map(([day, hours], index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-pink-100">
                      <span className="font-medium text-gray-700 capitalize">{day === 'monday' ? 'Lundi' : day === 'tuesday' ? 'Mardi' : day === 'wednesday' ? 'Mercredi' : day === 'thursday' ? 'Jeudi' : day === 'friday' ? 'Vendredi' : day === 'saturday' ? 'Samedi' : 'Dimanche'}</span>
                      <span className={`font-semibold ${hours === 'Fermé' ? 'text-gray-400' : 'text-pink-600'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-3xl font-bold mb-4">Réservation en ligne</h3>
              <p className="text-lg mb-6">{siteConfig.infos.booking.platform}</p>
              <ul className="space-y-3 mb-8">
                {siteConfig.infos.booking.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="block bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all shadow-lg text-center">
                <div className="flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Réserver maintenant
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-md border border-pink-200">
                <h3 className="text-lg font-bold text-pink-600 mb-3">Q: {item.question}</h3>
                <p className="text-gray-700">R: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <Sparkles className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-6">Prête à sublimer vos ongles ?</h2>
          <p className="text-2xl mb-8">Réservez votre moment détente dès maintenant</p>
          <a href={siteConfig.infos.booking.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all shadow-xl">
            <Calendar size={20} />
            Prendre rendez-vous sur Planity
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t-2 border-pink-500">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">{siteConfig.salonName}</h3>
              <p className="text-gray-400 mb-2">{siteConfig.suzanne.name}</p>
              <p className="text-gray-500 text-sm">{siteConfig.suzanne.title}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 {siteConfig.infos.address.street}</p>
                <p>{siteConfig.infos.address.city}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-400">Horaires</h3>
              <div className="space-y-2 text-gray-400">
                <p>Lun-Ven : 08h-19h</p>
                <p>(Vendredi : 08h-18h)</p>
                <p className="text-pink-400 font-semibold">Fermé Sam-Dim</p>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-500/30 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">
              © 2026 {siteConfig.salonName} - Tous droits réservés
            </p>
            <p className="text-pink-400 font-bold">
              💅 Note 5/5 sur Planity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}