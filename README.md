# Vivre en Arctique 🧊

Un blog moderne et épuré sur le thème de l'Arctique, développé avec Next.js 14+, MDX et Emotion.

## 🌟 Caractéristiques

- **Design Nordique Minimaliste** : Interface épurée avec une palette de couleurs froides inspirée de l'Arctique
- **Blog MDX** : Articles riches en contenu avec support Markdown étendu
- **Responsive Design** : Optimisé pour mobile, tablette et desktop
- **Performance Optimisée** : Lazy loading, optimisation des images
- **SEO Ready** : Métadonnées optimisées pour chaque page
- **Animations Subtiles** : Transitions fluides avec Framer Motion

## 🛠 Stack Technique

- **Framework** : Next.js 14+ avec App Router
- **Langage** : TypeScript
- **Styling** : Emotion (CSS-in-JS)
- **Contenu** : MDX pour les articles
- **Animations** : Framer Motion
- **Parsing** : Gray Matter pour les métadonnées
- **Reading Time** : Calcul automatique du temps de lecture

## 📁 Structure du Projet

```
VivreEnArctique/
├── app/                    # App Router de Next.js
│   ├── blog/              # Pages du blog
│   │   ├── [slug]/        # Pages dynamiques des articles
│   │   └── page.tsx       # Liste des articles
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── BlogCard/          # Carte d'article
│   ├── BlogGrid/          # Grille d'articles
│   ├── Navigation/        # Navigation responsive
│   └── MDXComponents/     # Composants MDX personnalisés
├── content/               # Contenu du blog
│   └── posts/            # Articles MDX
├── lib/                   # Utilitaires
│   ├── mdx.ts            # Parsing MDX
│   ├── posts.ts          # Gestion des posts
│   └── types.ts          # Types TypeScript
├── public/               # Assets statiques
│   └── images/           # Images du blog
└── styles/               # Configuration des styles
    └── theme.ts          # Thème Emotion
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/IKGBfr/VivreEnArctique.git

# Naviguer dans le dossier
cd VivreEnArctique

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3001
```

### Production

```bash
# Build pour la production
npm run build

# Lancer le serveur de production
npm start
```

## 📝 Gestion du Contenu

### Créer un Nouvel Article

1. Créer un fichier `.mdx` dans `content/posts/`
2. Ajouter les métadonnées en frontmatter :

```mdx
---
title: "Titre de l'article"
date: "2025-01-15"
excerpt: "Description courte de l'article"
coverImage: "/images/nom-image.jpg"
author: "Nom de l'auteur"
tags: ["tag1", "tag2", "tag3"]
---

Contenu de l'article en MDX...
```

3. Ajouter l'image de couverture dans `public/images/`
4. L'article apparaîtra automatiquement dans le blog

### Composants MDX Disponibles

- Titres (h1-h6)
- Paragraphes
- Listes (ordonnées et non ordonnées)
- Citations (blockquote)
- Code inline et blocs de code
- Images
- Liens
- Texte en gras et italique

## 🎨 Personnalisation

### Modifier le Thème

Éditer le fichier `styles/theme.ts` pour personnaliser :
- Couleurs
- Typographie
- Espacements
- Points de rupture responsive
- Transitions

### Ajouter des Composants MDX

Créer de nouveaux composants dans `components/MDXComponents/` et les exporter dans `index.tsx`.

## 📱 Responsive Design

Le site est optimisé pour trois points de rupture :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🔍 SEO

Chaque page inclut :
- Métadonnées Open Graph
- Titre et description optimisés
- Images de partage social
- Données structurées pour les articles

## 🌐 Déploiement

Le site peut être déployé sur :
- Vercel (recommandé pour Next.js)
- Netlify
- Tout service supportant Node.js

## 📄 Licence

Ce projet est sous licence MIT.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre feature
3. Commit vos changements
4. Push sur la branche
5. Ouvrir une Pull Request

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

Développé avec ❄️ pour les amoureux de l'Arctique
