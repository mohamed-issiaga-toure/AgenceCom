import Link from "next/link";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link href="/" className="brand" aria-label="Pus Touré Com, accueil">
            <span className="brand__mark" aria-hidden="true">PT</span>
            <span className="brand__name">Pus Touré <strong>Com</strong></span>
          </Link>
          <p className="site-footer__slogan">Des idées qui circulent. Des marques qui comptent.</p>
        </div>
        <nav className="site-footer__links" aria-label="Navigation de pied de page">
          {links.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <p className="site-footer__copyright">© {new Date().getFullYear()} Pus Touré Com · Cité de l'Air, Conakry, Guinée</p>
      </div>
    </footer>
  );
}