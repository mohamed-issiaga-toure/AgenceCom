"use client";

import { useState } from "react";

const filters = ["Tous", "Événements", "Entreprises & Produits", "Branding", "Vidéos"] as const;
type Filter = (typeof filters)[number];

const projects = [
  { title: "Faire émerger un nouveau produit", category: "Entreprises & Produits", type: "Produit", image: "photo-1556761175-b413da4baf72", challenge: "Installer une nouvelle offre dans un marché concurrentiel.", solution: "Une campagne de lancement articulée autour d'un message simple, d'une identité visuelle cohérente et de contenus sociaux.", result: "Une prise de parole structurée, prête à être déclinée sur les canaux de la marque." },
  { title: "Créer l'attente, faire événement", category: "Événements", type: "Événement", image: "photo-1506157786151-b8491531f063", challenge: "Donner envie de participer et rendre les informations pratiques faciles à trouver.", solution: "Un calendrier de teasing, des créations dédiées à la billetterie et une couverture des temps forts.", result: "Un dispositif de communication pensé pour accompagner chaque étape de l'événement." },
  { title: "Une identité à l'image du projet", category: "Branding", type: "Identité", image: "photo-1634942536790-2536d7f0ad5d", challenge: "Faire ressortir la personnalité d'une marque dès son premier contact.", solution: "Un travail de positionnement, un système graphique distinctif et des supports prêts à l'emploi.", result: "Une identité cohérente, conçue pour vivre sur les supports digitaux et imprimés." },
  { title: "Un lancement en mouvement", category: "Vidéos", type: "Film de campagne", image: "photo-1492619375914-88005aa9e8fb", challenge: "Raconter une offre en quelques secondes et retenir l'attention.", solution: "Un concept vidéo court, un tournage léger et des déclinaisons adaptées aux réseaux sociaux.", result: "Des formats vidéo prêts pour une diffusion organique et sponsorisée." },
  { title: "Une marque plus proche de son public", category: "Entreprises & Produits", type: "Campagne sociale", image: "photo-1521737711867-e3b97375f902", challenge: "Créer une présence régulière et donner une voix reconnaissable à la marque.", solution: "Une ligne éditoriale, des formats récurrents et un calendrier de publication exploitable.", result: "Un cadre de community management clair pour installer la conversation dans la durée." },
  { title: "Les coulisses en direct", category: "Événements", type: "Couverture média", image: "photo-1524368535928-5b5e00ddc76b", challenge: "Prolonger l'énergie du rendez-vous au-delà du lieu et du jour J.", solution: "Une couverture photo et vidéo pensée pour le direct, les récapitulatifs et les partenaires.", result: "Une bibliothèque de contenus pour faire durer la visibilité après l'événement." },
];

function imageUrl(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;
}

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const visibleProjects = filter === "Tous" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="portfolio-tools">
        <div className="filter-tabs" role="group" aria-label="Filtrer les réalisations">
          {filters.map((item) => <button type="button" className={filter === item ? "filter-tab is-selected" : "filter-tab"} onClick={() => setFilter(item)} aria-pressed={filter === item} key={item}>{item}</button>)}
        </div>
        <span className="portfolio-count">{visibleProjects.length.toString().padStart(2, "0")} projets</span>
      </div>
      <div className="portfolio-grid">
        {visibleProjects.map((project) => (
          <button className="project-card" type="button" key={project.title} onClick={() => setSelected(project)}>
            <span className="project-card__image" style={{ backgroundImage: `url("${imageUrl(project.image)}")` }} />
            <span className="project-card__meta"><span>{project.type}</span><span>Voir l'étude ↗</span></span>
            <span className="project-card__title">{project.title}</span>
            <span className="project-card__category">{project.category}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button type="button" className="case-close" onClick={() => setSelected(null)} aria-label="Fermer l'étude de cas">×</button>
            <div className="case-dialog__image" style={{ backgroundImage: `url("${imageUrl(selected.image)}")` }} />
            <div className="case-dialog__content">
              <p className="eyebrow">{selected.category} · Exemple de présentation</p>
              <h2 id="case-title">{selected.title}</h2>
              <p className="case-note">Contenu de démonstration à remplacer par une réalisation vérifiée de l'agence.</p>
              <div className="case-columns"><div><h3>Le défi</h3><p>{selected.challenge}</p></div><div><h3>La réponse</h3><p>{selected.solution}</p></div><div><h3>Le résultat</h3><p>{selected.result}</p></div></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}