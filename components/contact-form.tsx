"use client";

import { FormEvent, useState } from "react";

export default function ContactForm({ agencyEmail }: { agencyEmail: string }) {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agencyEmail) {
      setNotice("L'adresse email de l'agence doit être configurée avant l'envoi du formulaire.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = `Demande de devis — ${formData.get("need")}`;
    const body = [
      `Nom : ${formData.get("name")}`,
      `Email : ${formData.get("email")}`,
      `Téléphone / WhatsApp : ${formData.get("phone") || "Non renseigné"}`,
      `Besoin : ${formData.get("need")}`,
      `Échéance : ${formData.get("deadline") || "Non renseignée"}`,
      "",
      "Brief :",
      String(formData.get("message") || ""),
    ].join("\n");

    // Le formulaire prépare un courriel dans l’application de messagerie du visiteur.
    window.location.href = `mailto:${agencyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Votre application de messagerie va s'ouvrir avec le brief prérempli.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Nom complet<input name="name" autoComplete="name" required /></label>
        <label>Email professionnel<input name="email" type="email" autoComplete="email" required /></label>
        <label>Téléphone / WhatsApp<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Type de besoin<select name="need" defaultValue="" required><option value="" disabled>Choisir une option</option><option>Communication Événementielle</option><option>Communication d'Entreprise / Produit</option><option>Branding & Design</option><option>Autre</option></select></label>
        <label className="form-grid__wide">Date de l'événement / échéance<input name="deadline" type="date" /></label>
        <label className="form-grid__wide">Votre brief<textarea name="message" rows={5} required placeholder="Parlez-nous de votre projet, de vos objectifs et de votre public." /></label>
      </div>
      <div className="form-submit"><button className="button button--accent" type="submit">Préparer ma demande <span aria-hidden="true">↗</span></button><span>Les champs marqués sont nécessaires pour préparer votre brief.</span></div>
      <p className="form-notice" role="status" aria-live="polite">{notice}</p>
    </form>
  );
}