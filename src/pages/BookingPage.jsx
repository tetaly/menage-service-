import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

const services = [
  { id: 'maison', title: 'Ménage maison', price: 80, duration: '2-4 heures' },
  { id: 'appartement', title: 'Ménage appartement', price: 70, duration: '1-3 heures' },
  { id: 'bureau', title: 'Nettoyage bureau', price: 100, duration: '2-5 heures' },
  { id: 'repassage', title: 'Repassage', price: 60, duration: '1-3 heures' },
];

function BookingPage({ user }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [message, setMessage] = useState('');
  
  // Extra fields for step 3
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      navigate('/auth', { state: { returnTo: '/booking' } });
      return;
    }
    setStep(4);
    setMessage('Réservation confirmée ! Vous recevrez un email sous peu.');
  };

  const currentService = services.find((s) => s.id === selectedService) || services[0];

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand rounded-full -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
        
        {['Service', 'Date & Heure', 'Informations', 'Confirmation'].map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = step === stepNum;
          const isCompleted = step > stepNum;
          return (
            <div key={stepNum} className="flex flex-col items-center gap-2 bg-surface px-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                isActive ? 'bg-brand text-white shadow-md shadow-emerald-200' : 
                isCompleted ? 'bg-emerald-100 text-brand' : 'bg-white border-2 border-gray-200 text-gray-400'
              }`}>
                {isCompleted ? <CheckCircle2 size={16} /> : stepNum}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${isActive || isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-surface min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <NavLink to="/" className="hover:text-brand">Accueil</NavLink>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">Réserver</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Réservez votre service</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <div className="card">
              {renderStepIndicator()}

              {/* Step 1: Service */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quel service souhaitez-vous ?</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label 
                        key={service.id}
                        className={`relative flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedService === service.id 
                            ? 'border-brand bg-emerald-50 shadow-sm' 
                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="service" 
                          value={service.id} 
                          checked={selectedService === service.id}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="sr-only"
                        />
                        <span className="font-bold text-gray-900">{service.title}</span>
                        <span className="text-sm text-gray-500 mt-1">{service.duration} estimé</span>
                        <span className="text-brand font-bold mt-3">À partir de {service.price} DH</span>
                        
                        {selectedService === service.id && (
                          <div className="absolute top-4 right-4 text-brand">
                            <CheckCircle2 size={20} className="fill-current text-white" />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button onClick={handleNextStep} className="btn btn-primary px-8">Continuer</button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quand souhaitez-vous l'intervention ?</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label">Date</label>
                      <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        className="input-field"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Heure d'arrivée souhaitée</label>
                      <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        className="input-field"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-2 flex items-start gap-1">
                        <AlertCircle size={14} className="mt-0.5 shrink-0" />
                        L'heure d'arrivée exacte peut varier de +/- 30 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button onClick={handlePrevStep} className="btn btn-outline px-6">Retour</button>
                    <button onClick={handleNextStep} disabled={!date || !time} className="btn btn-primary px-8 disabled:opacity-50">Continuer</button>
                  </div>
                </div>
              )}

              {/* Step 3: Info */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Où devons-nous intervenir ?</h2>
                  {!user && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3">
                      <AlertCircle className="text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-amber-800 font-medium">Vous n'êtes pas connecté.</p>
                        <p className="text-sm text-amber-700 mt-1">Vous serez invité à vous connecter ou à créer un compte à l'étape suivante pour confirmer votre réservation.</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <label className="label">Adresse complète</label>
                      <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="N° rue, quartier, ville"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label">Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="06 xx xx xx xx"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label">Instructions spéciales (optionnel)</label>
                      <textarea 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)} 
                        placeholder="Code digicode, présence d'animaux, particularités..."
                        className="input-field min-h-[100px] resize-y"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button onClick={handlePrevStep} className="btn btn-outline px-6">Retour</button>
                    <button onClick={handleSubmit} className="btn btn-primary px-8">Confirmer la réservation</button>
                  </div>
                </div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <div className="text-center py-8 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Réservation confirmée !</h2>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">{message}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <NavLink to="/dashboard" className="btn btn-primary">Voir mes réservations</NavLink>
                    <NavLink to="/" className="btn btn-outline">Retour à l'accueil</NavLink>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Summary Pane */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24 border border-gray-100 shadow-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4 pb-4 border-b border-gray-100">Détails de la réservation</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=200&auto=format&fit=crop" alt="Service" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{currentService.title}</h4>
                  <p className="text-brand font-bold">{currentService.price} DH</p>
                  <p className="text-xs text-gray-500 mt-1">Durée estimée: {currentService.duration}</p>
                </div>
              </div>

              {date && time && (
                <div className="py-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Heure</p>
                      <p className="text-sm font-medium text-gray-900">{time}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-end">
                  <span className="text-gray-600 font-medium">Total estimé</span>
                  <span className="text-2xl font-bold text-brand">{currentService.price} DH</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">Taxes incluses. Paiement après service.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookingPage;
