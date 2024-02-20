// On va appeler l'API pour les éléments photos et légendes
  
let response;  // Il faut le mettre à part de la fonction "fetch" pour qu'on puisse l'utiliser dans d'autres fonctions
let responseCategories;

fetch("http://localhost:5678/api/works")
  .then(async (responseFetch) => {
    if (!responseFetch.ok) {
      throw new Error('La requête a échoué');
    }

    response = await responseFetch.json();
    console.log(response);

    // Appel de la fonction pour créer les éléments à partir des données
    elementsAPI(response);
  })
  .catch(error => {
    console.error('Erreur images/textes');
  });


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


