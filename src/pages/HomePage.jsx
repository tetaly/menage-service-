import { NavLink } from 'react-router-dom';
import { Star, ShieldCheck, Clock, ThumbsUp, ArrowRight } from 'lucide-react';

const services = [
  { 
    title: 'Ménage maison', 
    description: 'Nettoyage complet de votre maison. Des professionnels pour un service de qualité.', 
    price: '80 DH',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Ménage appartement', 
    description: 'Nettoyage complet de votre appartement, adapté à vos besoins spécifiques.', 
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  { 
    title: 'Nettoyage bureau', 
    description: 'Nettoyage des bureaux et espaces professionnels pour un environnement sain.', 
    price: '100 DH',
    image: 'https://images.unsplash.com/photo-1612831455740-a2f6cb65f214?q=80&w=800&auto=format&fit=crop'
  },
];

const features = [
  { icon: <ShieldCheck className="text-brand w-6 h-6" />, title: 'Professionnels vérifiés', desc: 'Équipe de confiance' },
  { icon: <Star className="text-brand w-6 h-6" />, title: 'Satisfaction garantie', desc: 'Qualité assurée' },
  { icon: <Clock className="text-brand w-6 h-6" />, title: 'Réservation rapide', desc: 'En quelques clics' },
  { icon: <ThumbsUp className="text-brand w-6 h-6" />, title: 'Support 7j/7', desc: 'Nous sommes là' },
];

const steps = [
  { num: '1', title: 'Choisissez un service', desc: 'Sélectionnez le service dont vous avez besoin.' },
  { num: '2', title: 'Choisissez une date', desc: 'Sélectionnez le jour et l\'heure.' },
  { num: '3', title: 'Informations', desc: 'Remplissez vos informations.' },
  { num: '4', title: 'Confirmation', desc: 'Votre réservation est confirmée.' },
];

function HomePage({ user }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-brand text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand"></span>
                Le ménage facile et rapide
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                Réservez votre <span className="text-brand">service de ménage</span> en quelques clics
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Des professionnels fiables, un service de qualité, pour une maison toujours propre sans effort de votre part.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <NavLink to="/booking" className="btn btn-primary text-base px-8 py-3.5">
                  Réserver maintenant
                </NavLink>
                <NavLink to="/services" className="btn btn-outline text-base px-8 py-3.5 bg-white">
                  Découvrir nos services
                </NavLink>
              </div>

              {/* Stats/Trust */}
              <div className="mt-10 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+1k</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="font-medium">4.8/5 (1200+ avis)</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:ml-auto">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional cleaner smiling" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg text-brand">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Qualité Assurée</p>
                      <p className="text-xs text-gray-500">100% Satisfaction</p>
                    </div>
                  </div>
                  <NavLink to="/booking" className="bg-brand text-white p-2 rounded-lg hover:bg-brand-dark transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 -right-12 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -z-10 -bottom-8 -left-12 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'pl-8' : ''}`}>
                <div className="bg-emerald-50 p-3 rounded-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos services populaires</h2>
            <p className="text-gray-600">Choisissez le service qui correspond à vos besoins et profitez d'un intérieur impeccable.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                    À partir de {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <NavLink to="/services" className="text-brand font-medium text-sm hover:text-brand-dark flex items-center gap-1">
                      Voir détails <ArrowRight className="w-4 h-4" />
                    </NavLink>
                    <NavLink to="/booking" className="btn btn-primary text-sm px-4 py-2">
                      Réserver
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <NavLink to="/services" className="btn btn-secondary">
              Voir tous nos services
            </NavLink>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 bg-brand text-white overflow-hidden relative">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 L100,0 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-emerald-100">Réservez en 4 étapes simples et profitez de votre temps libre.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/4 left-[12.5%] right-[12.5%] h-0.5 bg-emerald-400/30 -z-10"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white text-brand flex items-center justify-center text-2xl font-bold mb-6 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-emerald-100 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NavLink to="/booking" className="btn bg-white text-brand hover:bg-gray-50 shadow-lg hover:shadow-xl text-base px-8 py-3.5">
              Commencer maintenant
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
