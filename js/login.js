const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
};

// if(localStorage.getItem("logged") === 'true'){
//     window.location.href = './pages/map.html';
// }

let form = document.querySelector('form')

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let userEmail = document.getElementById('email').value
    let userPassword = document.getElementById('password').value
    if(userEmail === credenciales.email && userPassword === credenciales.password){
        localStorage.setItem("logged", "true")
        window.location.href = "./pages/map.html"
    }else{
        alert("Las credenciales introducidas son inválidas")
    }
})
    
    
    



