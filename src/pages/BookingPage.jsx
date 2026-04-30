import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 'maison', title: 'Ménage maison', price: 80 },
  { id: 'appartement', title: 'Ménage appartement', price: 70 },
  { id: 'bureau', title: 'Nettoyage bureau', price: 100 },
  { id: 'repassage', title: 'Repassage', price: 60 },
];

function BookingPage({ user }) {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      navigate('/auth');
      return;
    }
    setMessage('Réservation enregistrée. Tu peux la consulter dans ton espace client.');
  };

  const currentPrice = services.find((service) => service.id === selectedService)?.price;

  return (
    <section className="page-section booking-page">
      <div className="section-header">
        <span className="eyebrow">Réservation</span>
        <h2>Réserve ton service de ménage maintenant</h2>
      </div>

      <div className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Service
            <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
              {services.map((service) => (
                <option key={service.id} value={service.id}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            Date
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
          </label>
          <label>
            Heure
            <input type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
          </label>
          <div className="booking-summary">
            <span>Prix estimé</span>
            <strong>{currentPrice} DH</strong>
          </div>
          <button className="button-primary" type="submit">Confirmer la réservation</button>
          {message && <p className="form-message success">{message}</p>}
        </form>

        <aside className="booking-info-card">
          <h3>Comment ça marche</h3>
          <ol>
            <li>Choisis ton service</li>
            <li>Planifie la date et l'heure</li>
            <li>Valide ta réservation</li>
          </ol>
          <p>Après validation, tu recevras une confirmation par e-mail si tu es connecté.</p>
        </aside>
      </div>
    </section>
  );
}

export default BookingPage;
