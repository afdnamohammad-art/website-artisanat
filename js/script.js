// Script pédagogique : le suivi des événements est configuré dans GTM,
// mais ce fichier gère le comportement de démonstration du site.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contact");
  const success = document.getElementById("form-success");

  // Le bouton ne déclenche pas directement GA4 :
  // GTM détecte son clic grâce à l'ID "btn-devis".
  document.querySelectorAll("#btn-devis, #btn-devis-bottom").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => document.querySelector("#form-contact input[name='nom']")?.focus(), 500);
    });
  });

  // On empêche le rechargement de la page pour garder la démonstration locale.
  // Le déclencheur GTM "Soumission de formulaire" peut néanmoins observer le submit.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.hidden = false;
    form.reset();
  });

  // Les boutons "Voir" sont volontairement simples : ils donnent un feedback
  // visuel sans ajouter d'événement GA4 obligatoire au TP.
  document.querySelectorAll(".mini-btn").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Sélectionné ✓";
      setTimeout(() => button.textContent = "Voir", 1400);
    });
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'add_to_cart',
    'ecommerce': {
      'currency': 'DH',
      'value': 149.00,
      'items': [{
        'item_id': 'ART-042',
        'item_name': 'Sac en cuir artisanal',
        'item_category': 'Maroquinerie',
        'quantity': 1,
        'price': 149.00
      }]
    }
  });
});
