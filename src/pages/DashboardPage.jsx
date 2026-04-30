function DashboardPage({ user }) {
  if (!user) {
    return (
      <section className="page-section">
        <div className="section-header">
          <span className="eyebrow">Mon tableau de bord</span>
          <h2>Connecte-toi pour voir tes réservations</h2>
        </div>
      </section>
    );
  }

  const mockReservations = [
    { service: 'Ménage maison', date: '20 Mai 2026', status: 'Confirmée', price: '80 DH' },
    { service: 'Nettoyage bureau', date: '25 Mai 2026', status: 'En attente', price: '100 DH' },
  ];

  return (
    <section className="page-section dashboard-page">
      <div className="section-header">
        <span className="eyebrow">Bienvenue</span>
        <h2>Bonjour, {user.email}</h2>
        <p>Voici les prochaines réservations et votre espace client.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Mes prochaines réservations</h3>
          <ul>
            {mockReservations.map((reservation, index) => (
              <li key={index}>
                <strong>{reservation.service}</strong>
                <span>{reservation.date}</span>
                <span>{reservation.status}</span>
                <span>{reservation.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Résumé</h3>
          <div className="dashboard-stats">
            <div>
              <strong>12</strong>
              <span>Réservations</span>
            </div>
            <div>
              <strong>9</strong>
              <span>Confirmées</span>
            </div>
            <div>
              <strong>3</strong>
              <span>En attente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
