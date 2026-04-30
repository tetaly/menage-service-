import { LayoutDashboard, Calendar, User, Settings, LogOut, CheckCircle2, Clock, XCircle, MoreVertical } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function DashboardPage({ user }) {
  if (!user) {
    return (
      <div className="bg-surface min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <User size={32} className="text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Connectez-vous à votre espace</h2>
        <p className="text-gray-500 mb-8 max-w-sm">Vous devez être connecté pour voir vos réservations et gérer votre compte.</p>
        <NavLink to="/auth" className="btn btn-primary">Se connecter</NavLink>
      </div>
    );
  }

  const mockReservations = [
    { id: '1', service: 'Ménage maison', date: '22 Mai 2026', time: '10:00', status: 'confirmée', price: '80 DH', client: 'Jean Dupont' },
    { id: '2', service: 'Nettoyage vitres', date: '25 Mai 2026', time: '14:30', status: 'en attente', price: '50 DH', client: 'Sarah Martin' },
    { id: '3', service: 'Ménage appartement', date: '18 Mai 2026', time: '09:00', status: 'terminée', price: '70 DH', client: 'Karim Benali' },
    { id: '4', service: 'Repassage', date: '21 Mai 2026', time: '16:00', status: 'confirmée', price: '60 DH', client: 'Fatima Zahra' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmée':
        return <span className="badge badge-green flex items-center gap-1"><CheckCircle2 size={12} /> Confirmée</span>;
      case 'en attente':
        return <span className="badge badge-orange flex items-center gap-1"><Clock size={12} /> En attente</span>;
      case 'terminée':
        return <span className="badge bg-gray-100 text-gray-800 flex items-center gap-1"><CheckCircle2 size={12} /> Terminée</span>;
      case 'annulée':
        return <span className="badge badge-red flex items-center gap-1"><XCircle size={12} /> Annulée</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-slate-900 text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" className="w-10 h-10 rounded-full border border-slate-700" />
          <div>
            <p className="font-medium text-sm">Administrateur</p>
            <p className="text-xs text-slate-400 truncate w-32">{user.email}</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand text-white font-medium text-sm">
            <LayoutDashboard size={18} /> Tableau de bord
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-sm transition-colors">
            <Calendar size={18} /> Réservations
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-sm transition-colors">
            <Package size={18} /> Services
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-sm transition-colors">
            <User size={18} /> Utilisateurs
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-sm transition-colors">
            <Settings size={18} /> Paramètres
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Tableau de bord</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm font-medium mb-1">Total réservations</p>
              <p className="text-3xl font-bold">156</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm font-medium mb-1">Confirmées</p>
              <p className="text-3xl font-bold text-emerald-400">89</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm font-medium mb-1">En attente</p>
              <p className="text-3xl font-bold text-amber-400">6</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm font-medium mb-1">Revenus (ce mois)</p>
              <p className="text-3xl font-bold text-white">12,450 DH</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-lg font-bold">Réservations récentes</h2>
              <button className="text-sm font-medium text-brand hover:text-emerald-400">Voir toutes</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-400 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Client</th>
                    <th className="px-6 py-4 font-medium">Service</th>
                    <th className="px-6 py-4 font-medium">Date & Heure</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockReservations.map((res) => (
                    <tr key={res.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-sm text-white">{res.client}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{res.service}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {res.date} <span className="text-slate-500 ml-1">{res.time}</span>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(res.status)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-600 transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Just adding a dummy Package icon since it was missing in the import
function Package(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
}

export default DashboardPage;
