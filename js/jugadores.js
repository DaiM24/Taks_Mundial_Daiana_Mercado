let buttonClosed = document.getElementById('cerrarSesion')

buttonClosed.addEventListener('click', ()=>{
    localStorage.removeItem("logged");
    window.location.replace('../index.html');
})

if(!localStorage.getItem("logged")){
    window.location.replace('../index.html')
}

fetch(`https://639a5b283a5fbccb52654901.mockapi.io/jugadores`)
.then((response) => response.json())
.then((data) => {
    let jugadores = data.map((jugador) => {
        return `
        <div class="col">
            <div class="card card-style">
                <div class="img-wrapper">
                    <span class="dorsal">${jugador.dorsal}</span>
                    <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top blur" alt="${jugador.name}">
                </div>
                <div class="card-body m-2">
                    <h5 class="card-title fw-bold">${jugador.name}</h5>
                    <p class="card-text m-0"><span class="fw-bold">Edad:</span> ${jugador.edad}</p>
                    <p class="card-text m-0"><span class="fw-bold">Posición:</span> ${jugador.posicion}</p>
                    <p class="card-text m-0"><span class="fw-bold">Peso:</span> ${jugador["stats-fisico"].peso}</p>
                    <p class="card-text m-0"><span class="fw-bold">Altura:</span> ${jugador["stats-fisico"].altura}</p>
                    <p class="card-text m-0"><span class="fw-bold">Equipo actual:</span> ${jugador.equipoactual}</p>
                    <p class="card-text m-0"><span class="fw-bold">Equipo de nacimiento:</span> ${jugador["fecha-nacimiento"]}</p>
                </div> 
            </div>
        </div>
        `;
    });
    const secction = document.querySelector('section');
    secction.innerHTML = jugadores.join().replaceAll(",","");
})
.catch(error => console.log(error))
