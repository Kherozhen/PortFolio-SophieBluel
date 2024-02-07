
// Sélectionnez l'endroit ou mettre les "elements"
const gallery = document.querySelector (".gallery");

// Fonction pour créer les éléments (images et textes) à partir des données
function createElements(elements) {                             // ATTENTION : createElements ici n'est pas la fonction
  
// Création des éléments

elements.forEach(element => {
  // Création d'une balise dédiée à chaque image + title (si on ne créé pas la balise dans le forEach, Js ne comprends pas que la balise doit être pour chaque élément)
  const figureElement = document.createElement("figure");

  // On rattache la balise à son parent
  gallery.appendChild(figureElement);

  // Création de l'élément image
  const imageElement = document.createElement("img");
  imageElement.src = element.imageUrl;                          // Utilise l'URL de l'image à partir des données
  imageElement.alt = element.title;                             // Ne pas oublier de mettre un alt aux images, le alt est le titre des images
  figureElement.appendChild(imageElement);                      // On rattache à son parent

  // Création de l'élément titre
  const titleElement = document.createElement("figcaption");
  titleElement.innerText = element.title;                       // Utilise le titre à partir des données
  figureElement.appendChild(titleElement);                      // On rattache à son parent
  
  });
  
}







