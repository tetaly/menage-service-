import { useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);

    if (mode === 'register') {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Inscription réussie. Vérifie ton mail.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <section className="page-section auth-page">
      <div className="auth-panel">
        <div className="section-header">
          <span className="eyebrow">Espace client</span>
          <h2>{mode === 'login' ? 'Se connecter' : 'Créer un compte'}</h2>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@email.com" required />
          </label>
          <label>
            Mot de passe
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </label>
          <button className="button-primary" type="submit">
            {mode === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>
          {message && <p className="form-message">{message}</p>}
        </form>

        <div className="auth-switch">
          {mode === 'login' ? (
            <p>
              Pas encore de compte ?{' '}
              <button className="link-button" onClick={() => setMode('register')} type="button">
                Créer un compte
              </button>
            </p>
          ) : (
            <p>
              Déjà inscrit ?{' '}
              <button className="link-button" onClick={() => setMode('login')} type="button">
                Se connecter
              </button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
