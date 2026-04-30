const services = [
  {
    title: 'Ménage maison',
    description: 'Nettoyage complet de toutes les pièces et surfaces.',
    duration: '2-3 heures',
    price: '80 DH',
  },
  {
    title: 'Ménage appartement',
    description: 'Service adapté aux petits et moyens appartements.',
    duration: '1-2 heures',
    price: '70 DH',
  },
  {
    title: 'Nettoyage bureau',
    description: 'Espace de travail propre et sain.',
    duration: '1-2 heures',
    price: '100 DH',
  },
  {
    title: 'Repassage',
    description: 'Repassage des vêtements et du linge léger.',
    duration: '1-2 heures',
    price: '60 DH',
  },
];

function ServicesPage() {
  return (
    <section className="page-section">
      <div className="section-header">
        <span className="eyebrow">Nos services</span>
        <h2>Choisissez le service qui correspond à vos besoins</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card-large">
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-meta">
              <span>{service.duration}</span>
              <strong>{service.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
