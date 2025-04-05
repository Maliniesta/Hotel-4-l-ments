
/*Ce fichier va serrvir a gerer les animations*/ 

/*-si on clique sur une image alors elle prend la place de la deuxieme et la deuxieme prend la place de la premiere*/

/*-si on click sur une image du carousel des service, elle prend la place qui est tout a gauche*/ 
 
/*quand le scrolle arrive a 100vh , la barre de navigation devien verte et les lien blanc*/

/*en mobile quand on clik sur le menu burger , il ouvre la liste des liens */ 

// Sélectionner tous les conteneurs contenant des images
const groupesVisuels = document.querySelectorAll('.visuel');

// Ajouter un écouteur d'événements pour chaque conteneur
groupesVisuels.forEach((groupe) => {
    const images = groupe.querySelectorAll('.hotel-img'); // Sélectionner les images à l'intérieur du conteneur

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            // Identifier l'autre image dans le groupe
            const autreImage = images[(index + 1) % images.length];

            // Échanger les attributs "src" et "alt" entre les deux images
            const tempSrc = image.src;
            const tempAlt = image.alt;

            image.src = autreImage.src;
            image.alt = autreImage.alt;

            autreImage.src = tempSrc;
            autreImage.alt = tempAlt;
        });
    });
});


// Sélectionner toutes les images dans le carrousel
const images = document.querySelectorAll('.options-carousel .service-item');

// Ajouter un écouteur d'événement sur chaque image
images.forEach((image) => {
    image.addEventListener('click', () => {
        // Sélectionner le conteneur parent (options-carousel)
        const parent = image.parentElement;

        // Supprimer l'image cliquée du conteneur
        parent.removeChild(image);

        // Réinsérer l'image cliquée au début du conteneur
        parent.insertBefore(image, parent.firstChild);
    });
});


// Sélectionner la navbar
const navbar = document.querySelector('.navbar');

// Ajouter un écouteur d'événement au défilement
window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('scrolled'); // Ajouter la classe quand on dépasse 100vh
    } else {
        navbar.classList.remove('scrolled'); // Retirer la classe quand on remonte
    }
});





