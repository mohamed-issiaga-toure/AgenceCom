import ContactForm from "@/components/contact-form";

const socialLinks = [
  { label: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { label: "Facebook", url: process.env.NEXT_PUBLIC_FACEBOOK_URL },
  { label: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL },
  { label: "GitHub", url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/mohamed-issiaga-toure" },
].filter((social): social is { label: string; url: string } => Boolean(social.url));

export const metadata = { title: "Contact & devis | Pus Touré Com", description: "Parlons de votre projet de communication à Conakry." };

export default function ContactPage() {
  const agencyEmail = process.env.NEXT_PUBLIC_AGENCY_EMAIL ?? "mohamedissiagat@gmail.com";
  const agencyPhone = process.env.NEXT_PUBLIC_AGENCY_PHONE ?? "+224 629 64 05 64";

  return (
    <main className="inner-page contact-page">
      <section className="page-hero page-width">
        <p className="eyebrow"><span className="eyebrow__dot" /> Contact & devis</p>
        <h1>Votre prochain projet<br />commence <em>ici.</em></h1>
        <p className="page-hero__intro">Un événement à faire rayonner, une marque à lancer ou une idée à clarifier ? Donnez-nous le contexte, nous reviendrons vers vous.</p>
        <span className="page-hero__number" aria-hidden="true">PTC / 04</span>
      </section>
      <section className="contact-section">
        <div className="page-width contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Pus Touré Com</p>
            <h2>Parlons<br />de <em>vos ambitions.</em></h2>
            <p className="contact-details__intro">Partagez quelques détails sur votre besoin. Nous pourrons préparer un premier échange utile.</p>
            <div className="contact-detail"><span>ADRESSE</span><strong>Cité de l'Air, Conakry, Guinée</strong></div>
            <div className="contact-detail"><span>TÉLÉPHONE / WHATSAPP</span><a href={`tel:${agencyPhone.replace(/[^\d+]/g, "")}`}>{agencyPhone}</a></div>
            <div className="contact-detail"><span>EMAIL</span><a href={`mailto:${agencyEmail}`}>{agencyEmail}</a></div>
            <div className="contact-socials"><span>RÉSEAUX</span>{socialLinks.length ? socialLinks.map((social) => <a href={social.url} key={social.label} target="_blank" rel="noreferrer">{social.label} ↗</a>) : <strong className="contact-detail__missing">Liens à configurer</strong>}</div>
          </div>
          <div className="contact-form-wrap">
            <div className="contact-form-wrap__heading"><span>01 — NOUVELLE DEMANDE</span><p>Quelques informations pour bien commencer.</p></div>
            <ContactForm agencyEmail={agencyEmail} />
          </div>
        </div>
      </section>
    </main>
  );
}