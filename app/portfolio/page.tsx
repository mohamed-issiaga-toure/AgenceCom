import PortfolioGallery from "@/components/portfolio-gallery";

export const metadata = { title: "Réalisations | Pus Touré Com", description: "Découvrez les terrains d'expression de Pus Touré Com." };

export default function PortfolioPage() {
  return (
    <main className="inner-page portfolio-page">
      <section className="page-hero page-width">
        <p className="eyebrow"><span className="eyebrow__dot" /> Nos réalisations</p>
        <h1>Des idées faites<br />pour <em>se remarquer.</em></h1>
        <p className="page-hero__intro">Campagnes, événements, identités : explorez les différents formats de communication que nous pouvons imaginer ensemble.</p>
        <span className="page-hero__number" aria-hidden="true">PTC / 03</span>
      </section>
      <section className="portfolio-section">
        <div className="page-width">
          <div className="portfolio-intro"><p>Une sélection de pistes de présentation. Les projets et résultats réels de l'agence sont à intégrer avant publication.</p></div>
          <PortfolioGallery />
        </div>
      </section>
    </main>
  );
}