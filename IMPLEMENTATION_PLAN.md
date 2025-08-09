# 🎯 Plan d'implémentation - Blog "Vivre en Arctique"

## 📋 Vue d'ensemble
Création d'un blog moderne et épuré sur le thème de l'Arctique avec Next.js 14+, MDX et Emotion.

## 🏗️ Architecture du projet

```
vivre-en-arctique/
├── app/
│   ├── layout.tsx              # Layout principal avec navigation
│   ├── page.tsx                 # Page d'accueil avec les 6 derniers articles
│   ├── globals.css              # Styles globaux minimaux
│   └── blog/
│       └── [slug]/
│           └── page.tsx         # Page dynamique pour chaque article
├── components/
│   ├── Navigation/
│   │   ├── Navigation.tsx       # Barre de navigation responsive
│   │   └── Navigation.styles.ts # Styles Emotion pour la navigation
│   ├── BlogCard/
│   │   ├── BlogCard.tsx         # Carte d'article pour la home
│   │   └── BlogCard.styles.ts   # Styles Emotion pour les cartes
│   ├── BlogGrid/
│   │   ├── BlogGrid.tsx         # Grille des 6 derniers articles
│   │   └── BlogGrid.styles.ts   # Styles Emotion pour la grille
│   └── MDXComponents/
│       └── index.tsx             # Composants personnalisés pour MDX
├── content/
│   └── posts/                   # Dossier contenant tous les articles MDX
│       ├── premier-jour-arctique.mdx
│       ├── aurores-boreales.mdx
│       └── ...
├── lib/
│   ├── mdx.ts                   # Utilitaires pour charger et parser MDX
│   ├── posts.ts                 # Fonctions pour récupérer les posts
│   └── types.ts                 # Types TypeScript
├── styles/
│   └── theme.ts                 # Thème Emotion (couleurs, espacements)
├── public/
│   └── images/                  # Images pour les articles
├── next.config.mjs               # Configuration Next.js avec MDX
├── package.json
├── tsconfig.json
├── .eslintrc.json
└── README.md
```

## 🛠️ Stack technique

### Core
- **Next.js 14+** (App Router)
- **TypeScript** pour le typage
- **MDX** (@next/mdx, @mdx-js/loader, @mdx-js/react)
- **Emotion** (@emotion/react, @emotion/styled)

### Dépendances additionnelles
- **gray-matter** : Parser les frontmatter MDX
- **date-fns** : Formatage des dates
- **reading-time** : Temps de lecture estimé
- **next-mdx-remote** : Si rendu MDX côté serveur nécessaire
- **framer-motion** : Animations subtiles (optionnel)

## 📝 Étapes d'implémentation

### 1. Initialisation du projet
```bash
npx create-next-app@latest vivre-en-arctique --typescript --app --no-tailwind
cd vivre-en-arctique
npm install @emotion/react @emotion/styled @mdx-js/loader @mdx-js/react @next/mdx gray-matter date-fns reading-time
```

### 2. Configuration Next.js pour MDX
Créer `next.config.mjs` :
```javascript
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com'], // Pour les images d'exemple
  },
}

export default withMDX(nextConfig)
```

### 3. Création du thème Emotion
`styles/theme.ts` :
```typescript
export const theme = {
  colors: {
    primary: '#0EA5E9',      // Bleu glacial
    secondary: '#E0F2FE',    // Bleu très clair
    dark: '#0F172A',         // Noir bleuté
    gray: '#64748B',         // Gris neutre
    white: '#FFFFFF',
    background: '#F8FAFC',   // Blanc cassé
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'Georgia, serif',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
  },
}
```

### 4. Structure des articles MDX
Format attendu pour chaque article dans `content/posts/` :
```mdx
---
title: "Premier jour en Arctique"
date: "2024-01-15"
excerpt: "Découverte d'un monde de glace et de silence..."
coverImage: "/images/arctic-1.jpg"
author: "Votre nom"
tags: ["aventure", "arctique", "voyage"]
---

Contenu de l'article en markdown...
```

### 5. Composants clés

#### Navigation responsive
- Menu hamburger sur mobile
- Navigation horizontale sur desktop
- Liens : Accueil, Articles, À propos, Contact
- Animation au scroll (navbar transparente puis blanche)

#### BlogCard
- Image de couverture
- Titre
- Extrait (2-3 lignes)
- Date et temps de lecture
- Tags
- Effet hover avec légère élévation

#### BlogGrid
- Grille responsive : 1 colonne mobile, 2 tablette, 3 desktop
- Animation d'apparition au chargement (fade-in)
- Espacement généreux

### 6. Fonctionnalités essentielles

#### lib/posts.ts
```typescript
// Fonctions à implémenter :
- getAllPosts() : Récupère tous les posts triés par date
- getPostBySlug(slug) : Récupère un post spécifique
- getLatestPosts(count) : Récupère les N derniers posts
```

### 7. Pages principales

#### app/page.tsx (Homepage)
- Hero section minimaliste avec titre et sous-titre
- Grille des 6 derniers articles
- Footer simple

#### app/blog/[slug]/page.tsx
- Rendu de l'article MDX
- Navigation précédent/suivant
- Informations auteur et date
- Bouton retour à l'accueil

## 🎨 Design guidelines

### Principes
- **Minimalisme nordique** : Beaucoup d'espace blanc
- **Typographie élégante** : Grandes polices, hiérarchie claire
- **Couleurs froides** : Palette inspirée de l'Arctique
- **Images immersives** : Grandes photos de couverture
- **Animations subtiles** : Transitions douces, pas d'effets excessifs

### Responsive Design
- Mobile-first approach
- Breakpoints : 640px, 768px, 1024px
- Menu burger < 768px
- Grille adaptative pour les cartes

## 🚀 Commandes de développement

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancement production
npm start

# Linting
npm run lint
```

## 📦 Articles d'exemple à créer

1. **premier-jour-arctique.mdx** - Récit d'arrivée
2. **aurores-boreales.mdx** - Guide d'observation
3. **faune-arctique.mdx** - Rencontres animales
4. **survie-grand-froid.mdx** - Conseils pratiques
5. **culture-sami.mdx** - Traditions du peuple Sami
6. **changement-climatique.mdx** - Impact environnemental

## ⚡ Optimisations

- Images optimisées avec next/image
- Lazy loading des composants non critiques
- Préchargement des liens au hover
- Génération statique des pages (SSG)
- Métadonnées SEO complètes
- Sitemap automatique

## 🔍 SEO & Métadonnées

Chaque page doit inclure :
- Title unique
- Meta description
- Open Graph tags
- Twitter Card
- Structured data (Article schema)

## 📱 Progressive Web App (optionnel)

Si souhaité, ajouter :
- manifest.json
- Service Worker
- Icons pour installation

## 🎯 Prochaines étapes après MVP

1. Système de commentaires (Giscus ou Disqus)
2. Newsletter avec capture email
3. Recherche full-text
4. Mode sombre
5. RSS feed
6. Partage social
7. Analytics (Vercel Analytics ou Plausible)

---

## 📌 Notes pour Cline

- Commencer par la structure de base et la configuration
- Créer d'abord les composants de layout (Navigation, Footer)
- Implémenter le système MDX et les utilitaires
- Créer 3-4 articles d'exemple avec du contenu Lorem Ipsum arctique
- Tester le responsive à chaque étape
- Utiliser des images Unsplash pour les exemples (theme arctique)
- Garder le code modulaire et réutilisable
- Commenter les parties complexes du code
- Suivre les conventions Next.js 14 App Router