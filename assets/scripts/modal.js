if(localStorage.getItem('token')){
  buttonFiltre.style.display = "none";

  const edition = document.querySelector('.edition');
  const modifier = document.querySelector('.modifier');

  // Ajout plusieurs balises, il faut les mettre à la suite 
  edition.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><a href="#">Mode édition</a>';
  modifier.innerHTML = '<i class="fa-regular fa-pen-to-square"></i><a href="#">Modifier</a>';

  // Ajout de la fenêtre Pop-up "Modifier"
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.closeModal');
  /*const galleryModal = document.querySelector('.galleryModal')*/  
  // Faire apparaitre la modal
  modifier.addEventListener('click', () => {
    modal.style.display = 'block';

    
    //const images = document.querySelectorAll('img');
    //const galleryModal = document.querySelector('.galleryModal');
    ////faire apparaitre les images
    //  images.forEach(function(image) {
    //    const imgElement = document.createElement('img');
    //    imgElement.src = image.src;

        /*//Faire l'icone "supprimer" et la faire fonctionner
        const deleteIcone = document.createElement('span');
        deleteIcone.innerhtml = '<i class="fa-regular fa-trash-can"></i>';
        deleteIcone.className = '.deleteIcone';
        deleteIcone.onclick = function() {
          galleryModal.removeChild(imgElement);
          image.remove();
        }*/

    //    const stockImg = document.createElement('div');
    //    stockImg.appendChild(imgElement);
    //    galleryModal.appendChild(stockImg);
        /*stockImg.appendChild(deleteIcone);*/

    //  })
    
  });

  // Fermer la modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  //Ouverture de la seconde modal, ajout photo
  //Appel des const
  const btnAjoutPhoto = document.querySelector('.ajoutPhoto');
  const modalPhoto = document.querySelector('.modalPhoto');
  const closeModalPhoto = document.querySelector('.closeModalPhoto');
  // Ouverture de la modal
  btnAjoutPhoto.addEventListener('click', () => {
      modalPhoto.style.display = 'block';
      modal.style.display = 'none';
  });
  //Fermeture de la modal
  closeModalPhoto.addEventListener('click', () => {
      modalPhoto.style.display ='none';
  });
}