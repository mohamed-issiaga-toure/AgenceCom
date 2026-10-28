import Link from "next/link";

const serviceGroups = [
  {
    number: "01",
    title: "Communication événementielle",
    audience: "Pour les organisateurs",
    description: "Créer l'attente, convertir l'intérêt en réservations, puis prolonger la conversation après le dernier rappel.",
    services: [
      ["Teasing & billetterie", "Campagnes de lancement et montée en puissance des ventes."],
      ["Création de contenus", "Affiches, teasers vidéo, motion design et déclinaisons digitales."],
      ["Live coverage", "Animation des réseaux pendant l'événement et valorisation des temps forts."],
      ["Relations & influence", "Médias, créateurs de contenu et partenaires mobilisés autour du projet."],
    ],
  },
  {
    number: "02",
    title: "Communication d'entreprise",
    audience: "Pour les marques & produits",
    description: "Faire émerger votre marque, clarifier votre message et bâtir une présence cohérente dans le temps.",
    services: [
      ["Identité de marque", "Branding, plateforme de marque, logo et charte graphique."],
      ["Réseaux sociaux", "Stratégie éditoriale et community management mensuel."],
      ["Publicité digitale", "Campagnes Meta Ads et Google Ads ciblées et suivies."],
      ["Solutions numériques", "Sites vitrines et applications conçus selon vos besoins."],
    ],
  },
];

const faqs = [
  ["Quels sont vos délais de livraison ?", "Ils dépendent du périmètre et des validations nécessaires. Après un premier échange, nous vous proposons un calendrier réaliste avec les étapes et les dates clés."],
  ["Quel budget prévoir pour la communication d'un événement ?", "Le budget varie selon la durée, les canaux, les contenus et l'ampleur de la couverture. Nous construisons une proposition adaptée à vos objectifs et à vos moyens."],
  ["Pouvez-vous gérer une campagne urgente ?", "Nous étudions les demandes urgentes au cas par cas. Écrivez-nous avec votre échéance et les éléments déjà disponibles pour que nous puissions vous répondre rapidement."],
];

export const metadata = { title: "Nos services | Pus Touré Com", description: "Communication événementielle, stratégie de marque, campagnes digitales et création de contenus." };

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-width">
        <p className="eyebrow"><span className="eyebrow__dot" /> Nos services</p>
        <h1>De la première idée<br />au <em>grand moment.</em></h1>
        <p className="page-hero__intro">Deux expertises complémentaires, réunies par une même ambition : faire avancer votre projet et le rendre visible.</p>
        <span className="page-hero__number" aria-hidden="true">PTC / 02</span>
      </section>

      <section className="service-section">
        <div className="page-width service-stack">
          {serviceGroups.map((group) => (
            <article className="service-group" key={group.number}>
              <div className="service-group__intro"><span className="service-group__number">{group.number} / {group.audience}</span><h2>{group.title}</h2><p>{group.description}</p></div>
              <div className="service-list">{group.services.map(([title, description], index) => <div className="service-row" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></div>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="page-width faq-layout">
          <div><p className="eyebrow">Questions fréquentes</p><h2>Quelques repères<br />avant de <em>se lancer.</em></h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="simple-cta"><div className="page-width simple-cta__inner"><p>Un projet en tête ?</p><Link href="/contact" className="button button--accent">Parlons-en <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}