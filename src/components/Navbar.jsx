import { NavLink, Link } from 'react-router-dom';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ user, handleSignOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Comment ça marche', path: '/#how-it-works' },
    { name: 'À propos', path: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand text-white p-2 rounded-xl">
              <CheckCircle2 size={24} />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">CleanBook</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-brand ${isActive && link.path !== '/#how-it-works' && link.path !== '/#about' ? 'text-brand' : 'text-gray-600'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-brand">Mon espace</Link>
                <button onClick={handleSignOut} className="btn btn-secondary text-sm">Déconnexion</button>
              </>
            ) : (
              <>
                <Link to="/auth" className="text-sm font-medium text-gray-700 hover:text-brand">Connexion</Link>
                <Link to="/auth" className="btn btn-primary text-sm">S'inscrire</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700">Mon espace</Link>
                  <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="btn btn-secondary w-full justify-center">Déconnexion</button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700">Connexion</Link>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full justify-center">S'inscrire</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
