let form = document.querySelector("form");
let error = document.querySelector(".error");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("email").value;                  // "value" est pour récupérer l'intérieur des champs
    let password = document.getElementById("password").value;

    if (email === 'sophie.bluel@test.tld' && password === 'S0phie'){     // "&&" pour dire "et"
    
        // Si les logs sont bons on remet la page d'acceuil 
        window.location.href = "index.html";

    } else {
        // Affiche un message d'erreur
        error.textContent = "E-mail et/ou mot de passe incorrect"
    }

})