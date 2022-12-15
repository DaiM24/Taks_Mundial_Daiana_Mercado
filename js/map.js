// En coordinates guardamos las coordenadas donde se lugar donde se centra el mapa
let coordinates = [25.2841478, 51.4419568];
// En la variable map enviamos el centrod de mapa y el zoom inicial (12)
let map = L.map('map').setView(coordinates, 11);
// Creamos el mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Icono
let icon = L.icon({
    iconUrl: "../assets/marker.png",
    iconSize: [30, 45],
    iconAnchor: [20, 44],
    popupAnchor: [18, -41]
});
let marker = L.marker(coordinates, {icon: icon}).addTo(map);
// popUp
marker.bindPopup('<b>Lo logramos!!!</b>').openPopup();

const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
];

const select = document.querySelector('select');
      //select.onchange = changeMap
// Opcion 1
let jugadores = objetoMapa.map((objeto) =>`<option>${objeto.jugador}</option>`)
let jugadoresOptions = jugadores.join().replace(',', '')
select.innerHTML = jugadoresOptions

// Opcion 2
// objetoMapa.map((objeto) =>{
//     let option = document.createElement('option')
//     option.innerHTML = objeto.jugador;
//     select.appendChild(option)
// })

function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

let buttonClosed = document.getElementById('cerrarSesion')

buttonClosed.addEventListener('click', ()=>{
    localStorage.removeItem("logged");
    window.location.replace('../index.html');
})

if(!localStorage.getItem("logged")){
    window.location.replace('../index.html')
}

