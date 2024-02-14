let form = document.querySelector("form");
let error = document.querySelector(".error");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("email").value;                  // "value" est pour récupérer l'intérieur des champs
    let password = document.getElementById("password").value;

    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    })
    .then(function(response){ 
        if(!response.ok){
            document.querySelector(".error").innerHTML = 'Email ou mot de passe incorrect';
            return;
        } else {
            response.json().then(function(data){
                localStorage.setItem('token',data.token);               // le token est comme un billet pour montrer au logiciel l'autorisation de rentrer
                window.location = "index.html";
            })
        }
    })
    .catch(error =>
      console.log('error: ' + error)
    );
})