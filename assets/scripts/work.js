
// Sélectionnez l'endroit ou mettre les "elements"
const gallery = document.querySelector (".gallery");
const galleryModal = document.querySelector('.galleryModal');

// Fonction pour créer les éléments (images et textes) à partir des données
function elementsAPI(elements) {
  
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
  

  //copie dans la modal

  // Création d'une balise dédiée à chaque image 
   const figureElementModal = document.createElement("figure");

  // On rattache la balise à son parent
   galleryModal.appendChild(figureElementModal);
 
  // Création de l'élément image
   const imageElementModal = document.createElement("img");
   imageElementModal.src = element.imageUrl;
   imageElementModal.alt = element.title; 
   figureElementModal.appendChild(imageElementModal);    
   
  // Creation de l'élément poubelle
   const deleteElement = document.createElement("span");
   deleteElement.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
   figureElementModal.appendChild(deleteElement);

  /*// Faire fonctionner l'élément poubelle
    deleteElement.forEach(function (span) {
      span.addEventListener('click', () => {
        
        /// Appel API 
        fetch("http://localhost:5678/api/works{id}", {
          method: 'DELETE',
          headers: {
              'Authorization': 'token'
          }
        })
        .then(function (response) {
          if (response.ok) {
              // Si la suppression est réussie, cache l'élément d'image
              span.parentElement.style.display = 'none';
          } else {
              console.error('Erreur suppression image', response.status);
          }
        })
        .catch(function (error) {
          console.error('Erreur demande suppression API', error);
        });
      })
    })*/

    
  });
}

