
// Fonction pour créer les éléments (id et names)
function createCategories(categories) {

  // Séléctionner l'endroit où placer les boutons filtre

  const buttonFiltre = document.querySelector(".buttonFiltre");


  // Création bouton "Tous"

  const btnAll = document.createElement("button");
  btnAll.innerText = "Tous";
  buttonFiltre.appendChild(btnAll);


  // Création des éléments "name"

  categories.forEach(categorie => {
    const nameCategories = document.createElement("button");
    nameCategories.innerText = categorie.name;
    nameCategories.setAttribute('data-id', categorie.id);                         // Grâce à setAttribut on va aller chercher dans l'API l'attibut 
    buttonFiltre.appendChild(nameCategories);                                     // (la propriété spécifique) des éléments "name" et donc ici, la categorie.id

  });

  // Mettre en place le filtre et le reset instantanée de la page

  const btnFiltres = document.querySelectorAll(".buttonFiltre button[data-id]");  // Sélectionne les boutons qui vont servir de filtre

  btnFiltres.forEach(button => {                                                  // Faire une boucle pour cibler tous les boutons
    button.addEventListener("click", () => {                                      // Faire en sorte que qqc se passe au click de la souris
      const btnId = button.dataset.id;                                            // Grâce à la fonction dataset on va aller recupérer "id" sur l'API
      let filtre = response.filter(function(element) {                            // On utilise "let" car le filtre va varier suivant les boutons
        return element.categoryId == btnId;                                       // "return" est pour avoir une réponse, "==" => veut dire "équivalent"
      })
      gallery.innerHTML = "";                                                     // => sert à reset la page toujours sans rechargement de la page
      createElements(filtre);
    })
  })

    btnAll.addEventListener('click', () => {                                      // Permet de reset la page et de afficher tous les éléments sans chargement de la page
      gallery.innerHTML = "";
      return createElements(response);
    })


}

