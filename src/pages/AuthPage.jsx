import { useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';
import { Mail, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    setError(null);
    setIsLoading(true);

    if (mode === 'register') {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setMessage('Inscription réussie. Vérifiez votre boîte mail pour confirmer.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Email ou mot de passe incorrect.");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-surface min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <NavLink to="/" className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-brand text-white p-2 rounded-xl">
            <CheckCircle2 size={24} />
          </div>
          <span className="font-bold text-2xl text-gray-900 tracking-tight">CleanBook</span>
        </NavLink>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
          {mode === 'login' ? 'Bon retour parmi nous' : 'Créer votre compte'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === 'login' ? "Connectez-vous pour gérer vos réservations" : "Inscrivez-vous pour réserver votre premier service"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-2xl sm:px-10 border border-gray-100">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label">Adresse e-mail</label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="label">Mot de passe</label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {mode === 'login' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Se souvenir de moi</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-brand hover:text-brand-dark">Mot de passe oublié ?</a>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl bg-red-50 p-4 flex items-start gap-3 border border-red-100">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {message && (
              <div className="rounded-xl bg-emerald-50 p-4 flex items-start gap-3 border border-emerald-100">
                <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800">{message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full flex justify-center py-3"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                mode === 'login' ? 'Se connecter' : "S'inscrire"
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                  <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                  <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                  <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                </svg>
                Google
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.408.226.874.362 1.36.378-1.002-.67-1.523-1.92-1.144-3.141.67 1.455 2.146 2.378 3.753 2.502-.455-1.986 1.054-3.751 3.01-3.751 1.01 0 1.923.426 2.563 1.109.801-.157 1.554-.45 2.227-.851-.263.82-.821 1.509-1.556 1.942.711-.085 1.391-.274 2.022-.555-.472.705-1.069 1.332-1.748 1.849z" clipRule="evenodd" />
                </svg>
                Apple
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-600">
            {mode === 'login' ? (
              <p>
                Pas encore de compte ?{' '}
                <button onClick={() => { setMode('register'); setError(null); setMessage(null); }} className="font-semibold text-brand hover:text-brand-dark transition-colors">
                  S'inscrire gratuitement
                </button>
              </p>
            ) : (
              <p>
                Déjà un compte ?{' '}
                <button onClick={() => { setMode('login'); setError(null); setMessage(null); }} className="font-semibold text-brand hover:text-brand-dark transition-colors">
                  Se connecter
                </button>
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthPage;
