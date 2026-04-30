import { NavLink } from 'react-router-dom';

const services = [
  { title: 'Ménage maison', description: 'Nettoyage complet de la maison', price: '80 DH' },
  { title: 'Ménage appartement', description: 'Service rapide pour appartement', price: '70 DH' },
  { title: 'Nettoyage bureau', description: 'Bureau propre et organisé', price: '100 DH' },
];

function HomePage({ user }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Réservez votre service de ménage en quelques clics</p>
        <h1>Des professionnels fiables pour une maison toujours propre</h1>
        <p className="hero-text">Choisissez un service de ménage, planifiez votre intervention et suivez votre réservation depuis votre espace client.</p>
        <div className="hero-actions">
          <NavLink to="/services" className="button-primary">Voir les services</NavLink>
          <NavLink to="/booking" className="button-secondary">Réserver maintenant</NavLink>
        </div>
        <div className="hero-stats">
          <div>
            <strong>250+</strong>
            <span>Clients satisfaits</span>
          </div>
          <div>
            <strong>7/7</strong>
            <span>Support disponible</span>
          </div>
          <div>
            <strong>Rapide</strong>
            <span>Réservation facile</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-card">
          <h2>Nos services populaires</h2>
          <div className="service-cards">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.price}</span>
              </article>
            ))}
          </div>
          {!user && <NavLink to="/auth" className="button-primary">Créer un compte</NavLink>}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
