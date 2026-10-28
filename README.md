# Pus Touré Com

Site vitrine de **Pus Touré Com**, agence conseil en communication et stratégie digitale basée à Conakry, en Guinée.

L’agence accompagne les entreprises, les marques et les organisateurs d’événements pour promouvoir leurs produits, services et événements : stratégie de communication, lancement de produits, identité de marque, gestion des réseaux sociaux, publicité digitale et couverture média.

## Pages du site

Le site comporte cinq pages accessibles depuis la navigation principale :

| Route | Page | Contenu |
| --- | --- | --- |
| `/` | Accueil | Présentation de l’agence, de ses deux pôles d’expertise et appels à l’action vers les réalisations et le formulaire de contact. |
| `/about` | À propos | Histoire et vision de l’agence, valeurs et méthode de travail en quatre étapes. |
| `/services` | Nos services | Offres de communication événementielle et de communication d’entreprise, avec une FAQ. |
| `/portfolio` | Réalisations | Galerie de projets filtrable par catégorie et fiches détaillées. |
| `/contact` | Contact & devis | Coordonnées de l’agence et formulaire de préparation d’une demande de devis. |

### Services

- **Communication événementielle :** teasing et billetterie, création d’affiches et de vidéos, couverture en direct, relations médias, influenceurs et partenaires.
- **Communication d’entreprise et de produits :** identité de marque, stratégie éditoriale et community management, campagnes Meta Ads et Google Ads, sites vitrines et applications.

### Méthode de travail

1. **Brief et immersion** : comprendre le produit, l’événement, le public et les objectifs.
2. **Stratégie médias et contenu** : définir le positionnement, les contenus et le calendrier.
3. **Déploiement et campagne** : activer les canaux digitaux et les actions de terrain.
4. **Analyse et reporting** : suivre les indicateurs pertinents et présenter les retombées.

## Technologies

- Next.js 15 avec App Router
- React et TypeScript
- Tailwind CSS 4 et feuilles de style CSS

Le projet utilise actuellement son propre CSS pour l’interface. Lucide Icons, Framer Motion, shadcn/ui et 21st.dev, cités dans les spécifications initiales, ne sont pas des dépendances installées.

## Installation et développement

Prérequis : Node.js et Corepack.

```bash
corepack pnpm install
corepack pnpm dev
```

Le site de développement est disponible à l’adresse [http://localhost:3000](http://localhost:3000).

Pour générer la version de production :

```bash
corepack pnpm build
corepack pnpm start
```

## Configuration des coordonnées

La page Contact accepte les variables d’environnement suivantes :

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_AGENCY_EMAIL` | Adresse e-mail de l’agence |
| `NEXT_PUBLIC_AGENCY_PHONE` | Téléphone ou WhatsApp de l’agence |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Lien Instagram |
| `NEXT_PUBLIC_FACEBOOK_URL` | Lien Facebook |
| `NEXT_PUBLIC_LINKEDIN_URL` | Lien LinkedIn |
| `NEXT_PUBLIC_GITHUB_URL` | Lien GitHub |

Si une variable n’est pas définie, le site affiche les coordonnées de remplacement configurées dans la page Contact. Le formulaire ouvre l’application de messagerie du visiteur avec un courriel prérempli ; il n’envoie pas les demandes à un serveur.

## Données de démonstration à remplacer

Les cartes et études de cas du portfolio sont des exemples de présentation, pas des références vérifiées. Les visuels et résultats doivent être remplacés par des contenus autorisés et des données réelles de l’agence avant publication. Les indicateurs d’impact de la page d’accueil sont également des éléments de présentation et ne constituent pas des statistiques mesurées.
