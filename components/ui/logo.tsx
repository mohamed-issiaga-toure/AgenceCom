import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Pus Touré Com, accueil">
      <span className="brand__mark" aria-hidden="true">PT</span>
      <span className="brand__name">Pus Touré <strong>Com</strong></span>
    </Link>
  );
}
