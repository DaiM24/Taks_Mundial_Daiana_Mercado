// En coordinates guardamos las coordenadas donde se lugar donde se centra el mapa
let coordinates = [25.2807, 51.5217];
// En la variable map enviamos el centrod de mapa y el zoom inicial (12)
let map = L.map('map').setView(coordinates, 12);
// Creamos el mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);