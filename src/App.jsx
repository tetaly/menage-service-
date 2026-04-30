import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { supabase } from './lib/supabaseClient.js';
import Navbar from './components/Navbar.jsx';
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
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar user={user} handleSignOut={handleSignOut} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage user={user} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage user={user} />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-bold text-xl text-gray-900 tracking-tight flex items-center gap-2 mb-4">
                <div className="bg-brand text-white p-1.5 rounded-lg inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                CleanBook
              </span>
              <p className="text-gray-500 text-sm max-w-sm">
                Des professionnels fiables pour un service de ménage de qualité. Votre maison toujours propre, en quelques clics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Liens utiles</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-brand">Accueil</a></li>
                <li><a href="/services" className="hover:text-brand">Nos services</a></li>
                <li><a href="/booking" className="hover:text-brand">Réserver</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>support@cleanbook.com</li>
                <li>+212 5 00 00 00 00</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CleanBook. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-600">Confidentialité</a>
              <a href="#" className="hover:text-gray-600">Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
