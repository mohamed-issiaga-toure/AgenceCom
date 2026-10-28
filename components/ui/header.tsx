"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Pus Touré Com, accueil">
          <span className="brand__mark" aria-hidden="true">PT</span>
          <span className="brand__name">Pus Touré <strong>Com</strong></span>
        </Link>
        <nav className="site-nav" aria-label="Navigation principale">
          {navigation.map(({ href, label }) => {
            const active = pathname === href;

            return (
              <Link key={href} href={href} className={active ? "site-nav__link is-active" : "site-nav__link"} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="button button--small button--accent header-cta">
          Demander un devis <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
