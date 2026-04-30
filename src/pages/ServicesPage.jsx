import { NavLink } from 'react-router-dom';
import { Clock, Users, Package, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'maison',
    title: 'Ménage maison',
    description: 'Nettoyage complet de toutes les pièces et surfaces. Idéal pour un entretien régulier de votre domicile.',
    duration: '2-4 heures',
    team: '1-2 personnes',
    price: '80 DH',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
    includes: ['Dépoussiérage', 'Aspiration et lavage des sols', 'Nettoyage cuisine', 'Nettoyage salle de bain', 'Rangement de base']
  },
  {
    id: 'appartement',
    title: 'Ménage appartement',
    description: 'Service adapté aux petits et moyens appartements. Efficace et rapide pour un intérieur toujours frais.',
    duration: '1-3 heures',
    team: '1 personne',
    price: '70 DH',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    includes: ['Dépoussiérage', 'Lavage des sols', 'Désinfection sanitaires', 'Sortie des poubelles']
  },
  {
    id: 'bureau',
    title: 'Nettoyage bureau',
    description: 'Espace de travail propre et sain pour vos collaborateurs. Entretien des bureaux et espaces communs.',
    duration: '2-5 heures',
    team: '2-3 personnes',
    price: '100 DH',
    image: 'https://images.unsplash.com/photo-1612831455740-a2f6cb65f214?q=80&w=800&auto=format&fit=crop',
    includes: ['Nettoyage des postes de travail', 'Espaces communs', 'Sanitaires', 'Vidage des corbeilles']
  },
  {
    id: 'repassage',
    title: 'Repassage à domicile',
    description: 'Service de repassage professionnel pour vos vêtements et linge de maison.',
    duration: '1-3 heures',
    team: '1 personne',
    price: '60 DH',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop',
    includes: ['Tri du linge', 'Repassage soigné', 'Pliage ou mise sur cintre', 'Rangement dans les placards']
  },
  {
    id: 'travaux',
    title: 'Nettoyage après travaux',
    description: 'Élimination de la poussière fine et des résidus après vos travaux de rénovation.',
    duration: '4-8 heures',
    team: '2-4 personnes',
    price: '150 DH',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    includes: ['Dépoussiérage approfondi', 'Lavage minutieux', 'Nettoyage des vitres', 'Évacuation des petits gravats']
  },
  {
    id: 'vitres',
    title: 'Nettoyage vitres',
    description: 'Nettoyage professionnel de vos vitres, baies vitrées et vérandas sans traces.',
    duration: '1-2 heures',
    team: '1 personne',
    price: '50 DH',
    image: 'https://images.unsplash.com/photo-1580982548265-03e7a02cce04?q=80&w=800&auto=format&fit=crop',
    includes: ['Lavage intérieur/extérieur', 'Nettoyage des encadrements', 'Dégraissage', 'Finition sans trace']
  }
];

function ServicesPage() {
  return (
    <div className="bg-surface min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand font-semibold text-sm tracking-wide uppercase mb-2 block">Nos Services</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des services de qualité pour répondre à tous vos besoins
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de nettoyage. Tous nos professionnels sont formés et équipés pour vous garantir un résultat impeccable.
          </p>
          
          {/* Categories / Filter tabs (Visual only for UI demo) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button className="px-4 py-2 rounded-full bg-brand text-white text-sm font-medium">Tous</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium transition-colors">Ménage maison</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium transition-colors">Appartement</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium transition-colors">Bureau</button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm font-medium transition-colors">Spécialisé</button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-0 flex flex-col overflow-hidden group">
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                  <span className="inline-flex items-center justify-center bg-emerald-50 text-brand px-3 py-1 rounded-lg font-bold text-sm whitespace-nowrap ml-2 border border-emerald-100">
                    Dès {service.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-gray-500 mb-6 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-brand" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-brand" />
                    <span>{service.team}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Package size={14} className="text-brand" />
                    <span>Produits d'entretien inclus</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">Inclus :</p>
                  <ul className="space-y-1.5">
                    {service.includes.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.includes.length > 3 && (
                      <li className="text-xs text-gray-400 italic ml-6">+ {service.includes.length - 3} autres tâches</li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <NavLink to={`/services/${service.id}`} className="btn btn-outline text-sm py-2 px-0 w-full">
                    Détails
                  </NavLink>
                  <NavLink to="/booking" className="btn btn-primary text-sm py-2 px-0 w-full group-hover:shadow-soft-lg">
                    Réserver
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
