/*Ce fichier script va servir aux actions sur les boutons:

-Si on clique sur le bouton se connecter, une modale s'ouvre et il y a un formulaire
si l utilisateur le rempli bien , message vous etes connecter avec son nom,
sinon message d erreur avec l'erreur 
cette modale aura un bouton annuler et un bouton valider.


-Si on clique sur un des boutons reserver une modale s ouvre avce nom et prénom ( entre 2 et 50 caractères), 
adresse : avec le numero(nombre) de rue(jusqu'a 150 carracterer) code postale(5 chiifres) et ville (jusqu'a 100 caractere),
email(jusaqua 100  cracterer et le format d email) et numero de telephone(10 chiffe ou 14 cractere si il y en a des speciaux),
 en dessous il y aura la partie reservation qui sera demander avec le choix de l hotel et de la chambre,
 le nombre de personne et la date d arriver et de depart, puis une section supplément avec choix de chauffeur , petit dejeuner et repas,
 visite du parc,
 si tout est bon valider avec un bouton proceder au payement qui ouvrira une modale de payement avec la note
 sinon annuler avec un bouton annuler qui ferme la modale
*/ 

/*-Si on regarder les disponibilité on es renvoyer vers la page de l hotel selectionner avec un message */


// Création d'une fonction pour ouvrir la modale de connexion

function ouvrirModaleConnexion() {
    const modaleSeConnecter = document.createElement("div");
    modaleSeConnecter.className = "modale-connexion";
  
    const formulaire = document.createElement("form");

    // Ajout des labels et champs de saisie
    const labelNom = document.createElement("label");
    labelNom.setAttribute("for", "inputNom"); // Associé à l'input
    labelNom.textContent = "Nom : ";
    formulaire.appendChild(labelNom);
    
    const inputNom = document.createElement("input");
    inputNom.type = "text";
    inputNom.id = "inputNom"; // Id correspondant
    inputNom.placeholder = "Entrez votre nom";
    formulaire.appendChild(inputNom);

    const labelMail = document.createElement("label");
    labelMail.setAttribute("for", "inputMail");
    labelMail.textContent = "Email : ";
    formulaire.appendChild(labelMail);

    const inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.id = "inputMail";
    inputMail.placeholder = "Entrez votre mail";
    formulaire.appendChild(inputMail);

    const labelMotDePasse = document.createElement("label");
    labelMotDePasse.setAttribute("for", "inputMotDePasse");
    labelMotDePasse.textContent = "Mot de passe : ";
    formulaire.appendChild(labelMotDePasse);

    const inputMotDePasse = document.createElement("input");
    inputMotDePasse.type = "password";
    inputMotDePasse.id = "inputMotDePasse";
    inputMotDePasse.placeholder = "Entrez votre mot de passe";
    formulaire.appendChild(inputMotDePasse);
  
    // Ajout des boutons
    const boutonValider = document.createElement("button");
    boutonValider.type = "button";
    boutonValider.textContent = "Valider";
    formulaire.appendChild(boutonValider);
  
    const boutonAnnuler = document.createElement("button");
    boutonAnnuler.type = "button";
    boutonAnnuler.textContent = "Annuler";
    formulaire.appendChild(boutonAnnuler);
  
    // Ajout du formulaire à la modale
    modaleSeConnecter.appendChild(formulaire);
    document.body.appendChild(modaleSeConnecter);
  
    function fermerModaleConnexion() {
        if (document.body.contains(modaleSeConnecter)) {
            document.body.removeChild(modaleSeConnecter);
        }
    }
  
    // Événements des boutons
    boutonAnnuler.addEventListener("click", fermerModaleConnexion);

    boutonValider.addEventListener("click", () => {
        const nom = inputNom.value.trim();
        const email = inputMail.value.trim();
        const motDePasse = inputMotDePasse.value.trim();

        const regexNom = /^[a-zA-Z]+$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexMotDePasse = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

        if (!regexNom.test(nom)) {
            alert("Erreur : Le nom ne doit contenir que des lettres.");
        } else if (!regexEmail.test(email)) {
            alert("Erreur : L'e-mail n'est pas valide.");
        } else if (!regexMotDePasse.test(motDePasse)) {
            alert("Erreur : Le mot de passe doit comporter au moins 8 caractères, incluant au moins une lettre et un chiffre.");
        } else {
            alert(`Vous êtes connecté avec le nom : ${nom}, l'e-mail : ${email}`);
            fermerModaleConnexion();
        }
    });
}


  
// Sélectionner tous les liens avec la classe "connexion"
const liensConnexion = document.querySelectorAll('.connexion');

// Ajouter des écouteurs d'événements à chaque lien
liensConnexion.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        
        // Ouvrir la modale de connexion
        ouvrirModaleConnexion();
    });
});

  
// Création d'une fonction pour ouvrir la modale de reservation

function ouvrirModaleReservation() {
    const modaleReservation = document.createElement("div");
    modaleReservation.className = "modale-reservation";
  
    const formulaire = document.createElement("form");
  
    // Infos personnelles
    const conteneurFlex = document.createElement("div");
    conteneurFlex.className = "flex-container";
  
    const sectionPersonnelle = document.createElement("div");
    sectionPersonnelle.className = "form-row";
    sectionPersonnelle.appendChild(creerLabelEtInput("Nom :", "text", "nom", "Entrez votre nom"));
    sectionPersonnelle.appendChild(creerLabelEtInput("Prénom :", "text", "prenom", "Entrez votre prénom"));
    sectionPersonnelle.appendChild(creerLabelEtInput("Adresse :", "text", "adresse", "Entrez votre adresse"));
  
    const sectionComplementaire = document.createElement("div");
    sectionComplementaire.className = "form-row";
    sectionComplementaire.appendChild(creerLabelEtInput("Code Postal :", "text", "code-postal", "Code postal"));
    sectionComplementaire.appendChild(creerLabelEtInput("Ville :", "text", "ville", "Entrez votre ville"));
    sectionComplementaire.appendChild(creerLabelEtInput("Email :", "email", "email", "Entrez votre email"));
    sectionComplementaire.appendChild(creerLabelEtInput("Téléphone :", "text", "telephone", "Votre numéro"));
  
    conteneurFlex.appendChild(sectionPersonnelle);
    conteneurFlex.appendChild(sectionComplementaire);
    formulaire.appendChild(conteneurFlex);
  
    // Choix hôtel
    const labelHotel = document.createElement("label");
    labelHotel.textContent = "Choix de l'hôtel :";
    formulaire.appendChild(labelHotel);
  
    const selectHotel = document.createElement("select");
    selectHotel.classList.add("choix-hotel");
  
    const optionDefault = document.createElement("option");
    optionDefault.textContent = "Veuillez choisir un hôtel";
    optionDefault.value = "";
    optionDefault.selected = true;
    selectHotel.appendChild(optionDefault);
  
    const hotels = {
      Eau: ["Toboggan (500€/nuit)", "Aqualand (800€/nuit)"],
      Feu: ["Igloo (500€/nuit)", "Laponne (850€/nuit)"],
      Terre: ["Nature (500€/nuit)", "Amazone (800€/nuit)"],
      Air: ["Oiseau (500€/nuit)", "Vent (800€/nuit)"],
      Classique: ["Chambre classique (200€/nuit)"],
    };
  
    for (const [categorie, chambres] of Object.entries(hotels)) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = categorie;
      chambres.forEach((chambre) => {
        const option = document.createElement("option");
        const prixMatch = chambre.match(/(\d+)€/);
        const prix = prixMatch ? prixMatch[1] : 0;
        option.value = prix;
        option.textContent = chambre;
        option.classList.add("option-hotel");
        optgroup.appendChild(option);
      });
      selectHotel.appendChild(optgroup);
    }
  
    formulaire.appendChild(selectHotel);
  
    // Nombre de personnes (min 1, max 2)
    const divPersonnes = creerLabelEtInput("Nombre de personnes :", "number", "nb-personnes", "Nombre de personnes");
    const inputPersonnes = divPersonnes.querySelector("input");
    inputPersonnes.min = "1";
    inputPersonnes.max = "2";
    formulaire.appendChild(divPersonnes);
  
    // Dates
    const divDateArrivee = creerLabelEtInput("Date d'arrivée :", "date", "date-arrivee");
    const dateArriveeInput = divDateArrivee.querySelector("input");
    dateArriveeInput.value = new Date().toISOString().split("T")[0];
    formulaire.appendChild(divDateArrivee);
  
    const divDateDepart = creerLabelEtInput("Date de départ :", "date", "date-depart");
    formulaire.appendChild(divDateDepart);
  
    // Suppléments
    const supplements = [
      { id: "chauffeur", label: "Chauffeur (11€/jour)", prix: 11 },
      { id: "petit-dejeuner", label: "Petit-déjeuner (15€/jour)", prix: 15 },
      { id: "repas", label: "Repas (25€/jour)", prix: 25 },
      { id: "visite-parc", label: "Visite du parc (20€)", prix: 20 },
    ];
  
    supplements.forEach((supp) => {
      formulaire.appendChild(creerCheckboxEtLabel(supp.id, supp.label));
    });
  
    // Boutons
    const boutonValider = document.createElement("button");
    boutonValider.type = "button";
    boutonValider.textContent = "Procéder au paiement";
    boutonValider.addEventListener("click", calculerPrixTotal);
    formulaire.appendChild(boutonValider);
  
    const boutonAnnuler = document.createElement("button");
    boutonAnnuler.type = "button";
    boutonAnnuler.textContent = "Annuler";
    boutonAnnuler.addEventListener("click", () => {
      document.body.removeChild(modaleReservation);
    });
    formulaire.appendChild(boutonAnnuler);
  
    modaleReservation.appendChild(formulaire);
    document.body.appendChild(modaleReservation);
  }
  
  // Fonctions utilitaires
  function creerLabelEtInput(labelText, inputType, id, placeholder = "") {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelText;
  
    const input = document.createElement("input");
    input.type = inputType;
    input.id = id;
    input.placeholder = placeholder;
  
    div.appendChild(label);
    div.appendChild(input);
    return div;
  }
  
  function creerCheckboxEtLabel(id, labelText) {
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
  
    const label = document.createElement("label");
    label.textContent = labelText;
    label.htmlFor = id;
  
    div.appendChild(checkbox);
    div.appendChild(label);
    return div;
  }
  
  function calculerPrixTotal() {
    const dateArrivee = document.querySelector("#date-arrivee").value;
    const dateDepart = document.querySelector("#date-depart").value;
  
    if (!dateArrivee || !dateDepart) {
      alert("Erreur : Les dates doivent être remplies !");
      return;
    }
  
    const dArr = new Date(dateArrivee);
    const dDep = new Date(dateDepart);
  
    if (dDep <= dArr) {
      alert("Erreur : La date de départ doit être après la date d'arrivée !");
      return;
    }
  
    const jours = Math.ceil((dDep - dArr) / (1000 * 60 * 60 * 24));
  
    const selectHotel = document.querySelector(".choix-hotel");
    const selectedOption = selectHotel.options[selectHotel.selectedIndex];
    const prixHotel = parseFloat(selectedOption.value || 0);
    const nomHotel = selectedOption.textContent;
  
    let totalSupp = 0;
    const supplements = [
      { id: "chauffeur", prix: 11, label: "Chauffeur" },
      { id: "petit-dejeuner", prix: 15, label: "Petit-déjeuner" },
      { id: "repas", prix: 25, label: "Repas" },
      { id: "visite-parc", prix: 20, label: "Visite du parc" },
    ];
  
    const suppActifs = [];
  
    supplements.forEach((supp) => {
      if (document.querySelector(`#${supp.id}`).checked) {
        totalSupp += supp.prix * jours;
        suppActifs.push(`${supp.label} (${supp.prix}€/jour)`);
      }
    });
  
    const total = prixHotel * jours + totalSupp;
  
    let recap = `🏨 Réservation de l'hôtel : ${nomHotel}\n`;
    recap += `🗓 Dates : du ${dArr.toLocaleDateString()} au ${dDep.toLocaleDateString()} (${jours} nuit(s))\n`;
    recap += `💰 Prix hôtel : ${prixHotel * jours}€\n`;
    recap += `➕ Suppléments : ${suppActifs.length ? suppActifs.join(", ") : "Aucun"}\n`;
    recap += `🧾 Total : ${total}€`;
  
    let modaleRecap = document.querySelector(".modale-recap");
    if (modaleRecap) modaleRecap.remove();
  
    modaleRecap = document.createElement("div");
    modaleRecap.className = "modale-recap";
  
    const p = document.createElement("p");
    p.innerHTML = recap.replace(/\n/g, "<br>");
    modaleRecap.appendChild(p);
  
    const btnAnnuler = document.createElement("button");
    btnAnnuler.textContent = "Annuler";
    btnAnnuler.onclick = () => modaleRecap.remove();
    modaleRecap.appendChild(btnAnnuler);
  
    const btnPayer = document.createElement("button");
    btnPayer.textContent = "Payer";
    btnPayer.onclick = () => {
      alert("Redirection vers le paiement...");
      modaleRecap.remove();
    };
    modaleRecap.appendChild(btnPayer);
  
    document.body.appendChild(modaleRecap);
  }
  
  // Activation du bouton réservation
  document.querySelectorAll(".reservation").forEach((btn) => {
    btn.addEventListener("click", ouvrirModaleReservation);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-dispo");
    const dateInput = document.querySelector("#date-arrivee");
  
    // Empêche les dates passées
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  
    // Fonction pour formater la date en JJ/MM/AAAA
    const formatDateToFr = (isoDate) => {
      const [year, month, day] = isoDate.split("-");
      return `${day}/${month}/${year}`;
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const hotel = form.hotel.value;
      const personnes = parseInt(form.personnes.value);
      const date = form["date-arrivee"].value;
  
      if (!hotel || !date || isNaN(personnes)) {
        alert("Veuillez remplir tous les champs !");
        return;
      }
  
      if (personnes < 1 || personnes > 2) {
        alert("Le nombre de personnes doit être entre 1 et 2.");
        return;
      }
  
      const formattedDate = formatDateToFr(date);
  
      alert(`Chambre disponible le ${formattedDate} ! Redirection...`);
  
      switch (hotel) {
        case "hotel-feu":
          window.location.href = "../../feu.html";
          break;
        case "hotel-air":
          window.location.href = "../../air.html";
          break;
        case "hotel-terre":
          window.location.href = "../../terre.html";
          break;
        case "hotel-eau":
          window.location.href = "../../eau.html";
          break;
        default:
          alert("Erreur lors de la redirection.");
      }
    });
  });
  
  

  // Sélectionner l'icône du menu et la navigation
const menuIcon = document.getElementById('menu-icon');
const navbarMobile = document.getElementById('navbar_mobile');

// Ajouter un écouteur d'événement au clic sur le menu burger
menuIcon.addEventListener('click', () => {
    // Basculer une classe qui contrôle l'affichage
    navbarMobile.classList.toggle('visible');
});



