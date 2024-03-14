const edition = document.querySelector('.edition');
const modifier = document.querySelector('.modifier');

if(localStorage.getItem('token')){
  
  // Changement de Login-Logout
  const loginLogout = document.querySelector('.loginLogout');
  loginLogout.textContent = 'logout';

  // Deconnection
  loginLogout.addEventListener('click', () => {
    // Supprimez le token du localStorage
    localStorage.removeItem('token');    
  });

  // Ajout plusieurs balises, il faut les mettre à la suite 
  edition.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><p>Mode édition</p>';
  modifier.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><a href="#">Modifier</a>';

};

///////////////////////////////

// Ouverture de la première modal "gestion images"
// Ajout de la fenêtre Pop-up "Modifier"

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');

// Faire apparaitre la modal

modifier.addEventListener('click', () => {
  modal.style.display = 'block';
});


// Fermer la modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


// Supprimer avec l'élément "poubelle"
function trash() {
  const imageElements = document.querySelectorAll('.figureModal img');

  imageElements.forEach(imageElement => {
    const figures = document.querySelectorAll('.gallery figure'); // Recupéré les éléments sur le site
    const deleteElements = document.querySelectorAll('.deleteElement'); // Chercher deleteElement dans figureModal

    deleteElements.forEach((deleteElement, index) => {  //index permet d'avoir chaque élement de façon individuel

      deleteElement.addEventListener('click', (e) => {
        e.preventDefault();
        
        // récupérer l'id de l'image ainsi que l'element parent à supprimer
        const id = deleteElement.dataset.id;
        const figureModal = deleteElement.parentNode;

        const token = localStorage.getItem('token');
        
        fetch(`http://localhost:5678/api/works/${id}`, {
          method: 'DELETE',
          headers: {
              "Accept": "application/json",
              'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erreur de suppression');
            }
            // Supprimer l'élément .figureModal parent de l'image
            figureModal.remove();
            
            // Ajout d'une condition pour la suppression de l'image sur le site
            if (figures[index]) {
                figures[index].remove();
            }
        })
        .catch((error) => {
            console.error('Erreur :', error);
        });
      });
    })
  });
}


///////////////////////////////

// Ouverture de la seconde modal: "ajout photo"
// Appel des const

const btnAjoutPhoto = document.querySelector('.ajoutPhoto');
const modalPhoto = document.querySelector('.modalPhoto');
const closeModalPhoto = document.querySelector('.closeModalPhoto');
const returnModal = document.querySelector('.return');

// Ouverture de la modal

btnAjoutPhoto.addEventListener('click', () => {
    modalPhoto.style.display = 'block';
    modal.style.display = 'none';
});

// Fermeture de la modal

closeModalPhoto.addEventListener('click', () => {
    modalPhoto.style.display ='none';
    resetModalPhoto();
});

// Ajouter une image grâce à la modal

const selectImage = document.querySelector('.selectImage')
const btnUpload = document.querySelector('.upload');
let previewPhoto = document.querySelector('.previewPhoto');
const uploadImg = document.querySelector('.uploadImg');

btnUpload.addEventListener('click', () => {
  selectImage.click ();
});

function back() {
  modalPhoto.style.display = 'none';
  modal.style.display = 'block';
}

returnModal.addEventListener('click', () => {
  resetModalPhoto();
  back();
});

// Reset la modal quand on la ferme

function resetModalPhoto() {
  const divApercu = document.querySelector('.imgApercu');
  const apercuImage = document.querySelector('.imgApercu img');
  const resetImage = document.querySelector('.resetImage');

  apercuImage.remove();
  resetImage.remove();
  uploadImg.style.display = 'flex';
  divApercu.style.display = 'none';
  selectImage.value = ''; // Reset input image
  titleImage.value = ''; // Reset input titre
  selectCategorie.selectedIndex = 0; // Reset categories
  okForAdd.disabled = true; // Désactive le bouton
};

////////////////////////////////

// Afficher l'image sélectionnée à ajouter

function afficherImage() {
  let file = document.querySelector('input[type=file]').files;

  // Vérifier si un fichier a été sélectionné

  if (file.length > 0) {
    let reader = new FileReader();
    reader.onload = function (event) {

      // Créer un nouvel élément img pour afficher l'aperçu de l'image
      const divApercu = document.querySelector('.imgApercu');
      let apercuImage = document.createElement('img');
      apercuImage.setAttribute('src', event.target.result); // Définir l'URL de l'image
      divApercu.appendChild(apercuImage);
      
      // Vider la balise .previewPhoto pour placer l'apercu de l'image
      uploadImg.style.display = 'none';
      divApercu.style.display = 'block';
      
      // Créer un élement pour reset l'image en cas d'erreur
      const resetImage = document.createElement('span');
      resetImage.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
      resetImage.classList.add('resetImage');
      divApercu.appendChild(resetImage);
    
      resetImage.addEventListener('click', () => {
        // Supprimer l'élément 
        apercuImage.remove();
        resetImage.remove();
        selectImage.value = ''; // Reset input
        divApercu.style.display = 'none';
        uploadImg.style.display = 'flex';
      });   
    };
    // Lire le contenu du fichier en tant qu'URL de données
    reader.readAsDataURL(file[0]);
  }
} 



// Activer le bouton "ajouter photo" lors que tous les champs sont remplis

const selectCategorie = document.querySelector('.selectCategorie');
const titleImage = document.getElementById('titre');
const okForAdd = document.querySelector('.okForAdd');

// Vérifier que tous les champs soient remplis

function verification() {
  const imageAjoutee = selectImage.files.length > 0;
  const titleAjoute = titleImage.value.trim() !== ''; //"trim" sert à supprimer les espaces vides qui ne servent pas dans une phrase
  const categorieAjoutee = selectCategorie.value !== '0'; // !== veut dire différent  => a voir pour le changer vu que j'ai mis une option vide
  
  // Activer le bouton
  okForAdd.disabled = !(imageAjoutee && titleAjoute && categorieAjoutee); // A activer QUE SI ce qu'il a entre () est ok
    if (!okForAdd.disabled) {
      okForAdd.classList.remove('buttonNoActif') // Attention : pas de "." sauf pour querySelector
    }else{
      okForAdd.classList.add('buttonNoActif')
    }
}
// Ecouteur d'évenement pour dire a Js de commencer la fonction verification

selectImage.addEventListener('change', verification); // change est pour dire que le champs a été selectionnée pour desélectionner
titleImage.addEventListener('input', verification); // input est pour dire qu'il y a eu une saisie/collage/coupe
selectCategorie.addEventListener('change', verification); 

// Utiliser la requête POST pour mettre une photo sur le site
function addPhotoAPI() {
  okForAdd.addEventListener('click', (e) => {
    e.preventDefault(); // pour éviter le rechargement de la page

    const gallery = document.querySelector(".gallery");
    const galleryModal = document.querySelector('.galleryModal');
    const divApercu = document.querySelector('.imgApercu');
    const token = localStorage.getItem('token');
    const form = document.querySelector('form');
    const formModal = new FormData(form); // renouveler un form quand le form est envoyé

    formModal.append('title', titleImage.value);
    formModal.append('category', selectCategorie.value);
    formModal.append('image', selectImage.files[0]); //le [0] permet de faire comprendre au logiciel qu'on commence à la premiere image
    
    fetch("http://localhost:5678/api/works", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    body: formModal,
    })
    .then((Response) => {
      return Response.json(); //avoir la reponse en json
      })
    .then(() => {
      gallery.innerHTML = "";
      galleryModal.innerHTML = "";
      apiWorks(); // fait appel aux images de l'api
      form.reset();
      back();
      divApercu.style.display = 'none';
      uploadImg.style.display = 'block';
    })
  });
}