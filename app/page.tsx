import Link from "next/link";

const pillars = [
  { number: "01", title: "Entreprises & marques", text: "Construire une identité forte, lancer un produit et créer une relation durable avec votre audience.", services: ["Branding", "Lancement de produits", "Campagnes Ads", "Community management"], accent: "coral" },
  { number: "02", title: "Événementiel", text: "Faire monter l'attente, remplir la salle et raconter l'événement avant, pendant et après.", services: ["Billetterie", "Communication globale", "Couverture média", "Relations presse"], accent: "lime" },
];

const proofPoints = [
  { value: "360°", label: "de la stratégie au terrain" },
  { value: "4", label: "étapes, un cap clair" },
  { value: "1", label: "équipe à vos côtés" },
];

export const metadata = {
  title: "Accueil | Pus Touré Com",
  description: "Sublimez vos produits, donnez de l'écho à vos événements avec Pus Touré Com.",
};

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__photo" aria-hidden="true" />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="page-width home-hero__content">
          <p className="eyebrow"><span className="eyebrow__dot" /> Agence de communication · Conakry</p>
          <h1>Sublimez vos produits,<br /><span>donnez de l'écho</span><br />à vos événements.</h1>
          <p className="home-hero__intro">L'agence de communication stratégique qui transforme vos lancements de produits et vos événements en véritables succès populaires.</p>
          <div className="button-row">
            <Link href="/contact" className="button button--accent">Demander un devis <span aria-hidden="true">↗</span></Link>
            <Link href="/portfolio" className="button button--quiet">Découvrir nos réalisations <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-hero__note"><span>01 — 02</span><span>Des stratégies qui prennent vie sur le terrain</span></div>
        </div>
        <div className="home-hero__stamp" aria-hidden="true">PTC<br /><span>Conakry</span></div>
      </section>

      <section className="trust-strip" aria-label="Ils font confiance à Pus Touré Com">
        <div className="trust-strip__label">Ils font confiance à Pus Touré Com pour leur communication</div>
        <div className="trust-strip__track" aria-hidden="true">
          {["Les marques ambitieuses", "Les organisateurs", "Les idées qui rassemblent", "Les marques ambitieuses", "Les organisateurs", "Les idées qui rassemblent"].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}
        </div>
      </section>

      <section className="section section--light">
        <div className="page-width">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow eyebrow--dark">Deux terrains, la même exigence</p><h2>Une idée forte mérite<br />une vraie <em>portée.</em></h2></div>
            <p className="section-heading__aside">Nous faisons le lien entre la stratégie et le terrain pour que votre communication soit remarquée, comprise et partagée.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className={`pillar-card pillar-card--${pillar.accent}`} key={pillar.number}>
                <div className="pillar-card__top"><span>{pillar.number} / PÔLE</span><span className="pillar-card__symbol" aria-hidden="true">↗</span></div>
                <h3>{pillar.title}</h3><p>{pillar.text}</p>
                <ul>{pillar.services.map((service) => <li key={service}>{service}</li>)}</ul>
                <Link href="/services" className="text-link">Explorer nos services <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="page-width impact-section__inner">
          <div><p className="eyebrow">L'impact, ça se prépare</p><h2>Une communication<br />qui va <em>quelque part.</em></h2></div>
          <div className="impact-grid">{proofPoints.map((point) => <div className="impact-stat" key={point.value}><strong>{point.value}</strong><span>{point.label}</span></div>)}</div>
          <p className="impact-note">Chaque projet a ses propres indicateurs. Nous définissons les bons objectifs ensemble, puis nous mesurons ce qui compte vraiment.</p>
        </div>
      </section>

      <section className="closing-cta">
        <div className="page-width closing-cta__inner">
          <p className="eyebrow eyebrow--dark">À vous de jouer</p><h2>On fait parler de<br />votre prochain projet ?</h2>
          <Link href="/contact" className="button button--dark">Parlons de votre projet <span aria-hidden="true">↗</span></Link>
          <span className="closing-cta__index" aria-hidden="true">PTC / 2026</span>
        </div>
      </section>
    </main>
  );
}