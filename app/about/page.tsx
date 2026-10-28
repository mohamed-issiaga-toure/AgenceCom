import Link from "next/link";

const values = [
  { index: "01", name: "Impact", description: "Des actions pensées pour produire un résultat, pas seulement faire du bruit." },
  { index: "02", name: "Créativité", description: "Des idées singulières, ancrées dans la culture et les réalités de votre public." },
  { index: "03", name: "Visibilité", description: "Le bon message, sur les bons canaux, au moment où il peut faire la différence." },
  { index: "04", name: "Rigueur", description: "Une organisation claire, des engagements tenus et des retombées suivies." },
];

const steps = [
  { number: "01", title: "Brief & immersion", description: "Nous prenons le temps de comprendre votre produit, votre événement, vos publics et votre ambition." },
  { number: "02", title: "Stratégie médias & contenu", description: "Nous définissons le cap, le planning éditorial et les formats qui feront passer votre message." },
  { number: "03", title: "Déploiement & campagne", description: "Nous activons les réseaux sociaux, la publicité et le terrain dans un dispositif cohérent." },
  { number: "04", title: "Analyse & reporting", description: "Nous suivons les indicateurs utiles et partageons un bilan lisible des retombées." },
];

export const metadata = { title: "À propos | Pus Touré Com", description: "Notre vision, nos valeurs et notre méthode de travail." };

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-width">
        <p className="eyebrow"><span className="eyebrow__dot" /> À propos de l'agence</p>
        <h1>La stratégie<br />rencontre <em>le terrain.</em></h1>
        <p className="page-hero__intro">Pus Touré Com accompagne les marques et les organisateurs qui veulent faire entendre leur voix, avec des idées justes et une exécution qui suit.</p>
        <span className="page-hero__number" aria-hidden="true">PTC / 01</span>
      </section>

      <section className="story-section">
        <div className="page-width story-grid">
          <div className="story-image" role="img" aria-label="Public réunis lors d'un événement culturel" />
          <div className="story-copy">
            <p className="eyebrow">Notre histoire & notre vision</p>
            <h2>Les bonnes idées<br />méritent <em>d'être vues.</em></h2>
            <p>Nous sommes une agence conseil en communication et stratégie digitale basée à Conakry. Notre travail consiste à transformer une ambition en récit, en campagne et en présence concrète auprès des bonnes personnes.</p>
            <p>Nous connaissons l'exigence des lancements, l'énergie des événements et l'importance de comprendre le terrain. De la première idée au dernier bilan, nous avançons avec méthode et curiosité.</p>
            <Link href="/contact" className="text-link text-link--light">Faire connaissance <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="page-width">
          <div className="section-heading"><p className="eyebrow eyebrow--dark">Ce qui nous guide</p><h2>Nos valeurs, en <em>action.</em></h2></div>
          <div className="values-grid">{values.map((value) => <article className="value-item" key={value.index}><span>{value.index}</span><h3>{value.name}</h3><p>{value.description}</p></article>)}</div>
        </div>
      </section>

      <section className="method-section">
        <div className="page-width">
          <div className="section-heading section-heading--split"><div><p className="eyebrow">Notre méthode</p><h2>Du brief aux<br /><em>retombées.</em></h2></div><p className="section-heading__aside">Quatre étapes pour garder le cap et faire avancer chaque projet avec clarté.</p></div>
          <ol className="method-list">{steps.map((step) => <li className="method-step" key={step.number}><span className="method-step__number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        </div>
      </section>
    </main>
  );
}