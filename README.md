# Menage Service

Projet React JSX avec Vite et Supabase pour une application de réservation de ménage.

## Installation

1. Installer les dépendances:

```bash
npm install
```

2. Créer un fichier `.env` à la racine avec ces variables:

```env
VITE_SUPABASE_URL=https://YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
# ou la clé publishable si tu l'as sous ce nom :
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

3. Lancer le projet:

```bash
npm run dev
```

## Structure

- `src/main.jsx` - point d'entrée React
- `src/App.jsx` - routes et structure de l'application
- `src/pages` - pages principales: accueil, services, auth, dashboard
- `src/lib/supabaseClient.js` - configuration Supabase
- `src/components` - composants d'interface réutilisables

## Notes

- Ce template fonctionne avec React JSX et Supabase pour l'authentification.
- Ajoute des tables Supabase pour les réservations et les services en back-end si tu veux enregistrer les données.
