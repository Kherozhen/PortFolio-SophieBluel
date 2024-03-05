if(localStorage.getItem('token')){
    const loginLogout = document.querySelector('.loginLogout'); 

    loginLogout.addEventListener('click', () => {
        // Supprimez le token du localStorage
        localStorage.removeItem('token');   
        
    });
}