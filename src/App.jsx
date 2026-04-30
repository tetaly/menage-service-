import { useEffect, useState } from 'react';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import { supabase } from './lib/supabaseClient.js';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import BookingPage from './pages/BookingPage.jsx';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
      if (event === 'SIGNED_OUT') {
        navigate('/');
      }
    });

    return () => listener?.subscription?.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">MenageService</div>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Réservation</NavLink>
          {user ? <NavLink to="/dashboard">Mon espace</NavLink> : <NavLink to="/auth">Se connecter</NavLink>}
        </nav>
        <div className="action-buttons">
          {user ? (
            <button className="button-secondary" onClick={handleSignOut}>Déconnexion</button>
          ) : (
            <NavLink to="/auth" className="button-primary">S'inscrire / se connecter</NavLink>
          )}
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage user={user} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
