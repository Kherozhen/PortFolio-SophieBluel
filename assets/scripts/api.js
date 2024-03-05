// On va appeler l'API pour les éléments photos et légendes
  
let responseAPIWorks;  // Il faut le mettre à part de la fonction "fetch" pour qu'on puisse l'utiliser dans d'autres fonctions
let responseCategories;


function apiWorks() {
  fetch("http://localhost:5678/api/works")
    .then(async (responseFetch) => {
      if (!responseFetch.ok) {
        throw new Error('La requête a échoué');
      }
      responseAPIWorks = await responseFetch.json();
      console.log(responseAPIWorks);

      // Appel de la fonction pour créer les éléments à partir des données
      elementsAPI(responseAPIWorks);
      addPhotoAPI();
      trash()
    })
    .catch(error => {
      console.error('Erreur de fetch:', error);
    });
}

apiWorks(); // Pourquoi la mettre seule ? pour charger les données depuis l'API et initialiser l'interface

// appel de l'API pour les catégories

fetch("http://localhost:5678/api/categories")
  .then(async (resCategories) => {
    if (!resCategories.ok) {
      throw new Error('Echec');
    }

    const responseCategories = await resCategories.json();
    console.log(responseCategories);

    // Appel de la fonction pour créer les éléments à partir des données
    categoriesAPI(responseCategories);
  })
  .catch(error => {
    console.error('Erreur categories');
  });