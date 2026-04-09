# PRD - CineStars (Site Web Entertainment)

## Problème Original
Créer un site web pour la niche célébrités, séries et films avec des articles cliquables déjà rédigés sur ces sujets.

## Choix Utilisateur
- **Type de contenu**: Mix (actualité/news, interviews, biographies, critiques, analyses)
- **Organisation**: Page d'accueil avec tous les articles mélangés
- **Style visuel**: Dynamique et coloré (style entertainment)
- **Fonctionnalités**: Recherche, articles populaires/tendances, partage sur réseaux sociaux
- **Nombre d'articles**: 10-15 articles pré-rédigés

## Architecture Technique

### Stack
- **Frontend**: React 19, React Router, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, MongoDB (à implémenter)
- **État actuel**: Frontend avec données mock uniquement

### Structure Frontend
```
/frontend/src/
├── components/
│   ├── Header.jsx - Navigation + recherche
│   ├── Hero.jsx - Section hero avec image cinéma
│   ├── ArticleCard.jsx - Carte article cliquable
│   ├── Footer.jsx - Footer avec réseaux sociaux
│   └── ui/ - Composants Shadcn
├── pages/
│   ├── Home.jsx - Page d'accueil avec grille articles
│   └── ArticleDetail.jsx - Page détail article
├── mock/
│   └── articles.js - 12 articles pré-rédigés (mock)
└── App.js - Routing
```

## Fonctionnalités Implémentées (15 janvier 2024)

### ✅ Phase 1 - Frontend avec Mock Data
1. **Header sticky**
   - Logo CineStars avec icône film
   - Barre de recherche fonctionnelle
   - Navigation (Accueil, Célébrités, Séries, Films)

2. **Hero Section**
   - Image de cinéma avec overlay gradient
   - Titre accrocheur
   - Badges "À la une", "Mis à jour quotidiennement", "12+ Articles exclusifs"

3. **Page d'accueil**
   - Filtres par catégorie (Tous, Célébrités, Séries, Films)
   - Grille responsive 3 colonnes d'articles
   - Chaque carte article contient:
     * Image avec hover effect (scale)
     * Badge catégorie et tendance
     * Type d'article (couleur)
     * Titre (2 lignes max)
     * Excerpt (3 lignes max)
     * Métadonnées (temps lecture, vues, auteur)
   - Sidebar avec:
     * Top 5 articles tendances (numérotés)
     * Card newsletter avec gradient rose/purple

4. **Page détail article**
   - Bouton retour
   - Image hero full-width
   - Métadonnées complètes
   - Boutons de partage social (Facebook, Twitter, LinkedIn) - fonctionnels
   - Excerpt mis en évidence
   - Contenu article formaté
   - Section partage en bas
   - Articles similaires (3 suggestions)

5. **Footer**
   - Logo et description
   - Liens navigation
   - Types d'articles
   - Icônes réseaux sociaux avec hover effects
   - Mentions légales

6. **Design & UX**
   - Palette dynamique: rose (#f43f5e), purple, amber, indigo
   - Pas de gradients sombres (respect règles)
   - Hover states et transitions sur tous éléments interactifs
   - Typographie lisible avec bonne hiérarchie
   - Espacement généreux (whitespace)
   - Responsive design

7. **Données Mock**
   - 12 articles complets pré-rédigés
   - Catégories: Célébrités (4), Séries (4), Films (4)
   - Types: Actualité, Interview, Critique, Analyse, Biographie
   - Images de qualité depuis Unsplash/Pexels
   - Métadonnées réalistes (auteurs, dates, vues, temps lecture)

## Données Mock vs Backend

### Articles Mock (mock/articles.js)
- 12 articles avec contenu complet
- Structure: id, title, category, type, excerpt, content, image, author, date, readTime, views, trending
- Filtrage et recherche côté frontend

### À Implémenter en Backend
**Non encore commencé - Phase 2**

## Backlog Priorisé

### P0 - Backend Essential (Prochaine phase)
- [ ] Modèles MongoDB (Articles, Categories)
- [ ] API CRUD articles (GET /api/articles, GET /api/articles/:id)
- [ ] API recherche et filtres
- [ ] Migration des données mock vers MongoDB
- [ ] Intégration frontend-backend
- [ ] Tests end-to-end

### P1 - Fonctionnalités Additionnelles
- [ ] Système de newsletter (collecte emails)
- [ ] Analytics (tracking vues articles)
- [ ] Commentaires sur articles
- [ ] Likes/réactions
- [ ] Articles recommandés (algo)

### P2 - Améliorations
- [ ] Pagination articles
- [ ] Infinite scroll
- [ ] Partage optimisé (Open Graph meta tags)
- [ ] SEO optimization
- [ ] Mode sombre
- [ ] Admin panel pour gérer articles
- [ ] Système de tags
- [ ] Archives par date

## User Personas

1. **Lecteur Casual** (25-35 ans)
   - Cherche actualités entertainment rapides
   - Utilise mobile principalement
   - Partage sur réseaux sociaux

2. **Fan Passionné** (18-45 ans)
   - Lit critiques et analyses approfondies
   - Intéressé par interviews exclusives
   - Revient régulièrement

3. **Professionnel Média** (25-50 ans)
   - Recherche informations spécifiques
   - Utilise fonction recherche intensivement
   - Besoin de sources fiables

## Prochaines Actions
1. Demander confirmation utilisateur pour développement backend
2. Créer API contracts (endpoints, models)
3. Implémenter backend avec MongoDB
4. Intégrer frontend avec backend (supprimer mock)
5. Tests complets avec testing_agent_v3
6. Finish avec backend opérationnel

## Notes Techniques
- Frontend compile sans erreurs
- Hot reload activé
- Images optimisées (Unsplash/Pexels)
- Pas d'intégrations tierces pour l'instant
- Toasts configurés (Sonner)
- Tous composants Shadcn utilisés correctement
