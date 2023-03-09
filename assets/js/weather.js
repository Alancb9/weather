import { weather_data } from './data.js';


let loadDayForecastData = (indice) => {

    let datosCiudad = weather_data[indice];

    let { city: ciudad, date: fecha, maxtemperature: maxtemp, mintemperature: mintemp, cloudiness: nubosidad, wind: viento, rainfall: probPrecipitacion, forecast_today: pronosticoHoy } = datosCiudad;

    let [tarde, noche] = pronosticoHoy;

    let { text: textoTarde, temperature: tempTarde, forecast: msmTarde, icon: iconoTarde } = tarde;
    let { text: textoNoche, temperature: tempNoche, forecast: msmNoche, icon: iconoNoche } = noche;

    let elemento_ciudad = document.getElementById("city");
    let elemento_fecha = document.getElementById("date");
    let elemento_tempMax = document.getElementById("maxtemperature");
    let elemento_tempMin = document.getElementById("mintemperature");
    let elemento_nubosidad = document.getElementById("cloudiness");
    let elemento_viento = document.getElementById("wind");
    let elemento_probPrecipitacion = document.getElementById("rainfall");
    let elemento_iconoTarde = document.getElementById("late_icon");
    let elemento_tempTarde = document.getElementById("late_temperature");
    let elemento_pronosticoTarde = document.getElementById("late_forecast");
    let elemento_periodoTarde = document.getElementById("late_text");
    let elemento_iconoNoche = document.getElementById("night_icon");
    let elemento_tempNoche = document.getElementById("night_temperature");
    let elemento_pronosticoNoche = document.getElementById("night_forecast");
    let elemento_periodoNoche = document.getElementById("night_text");

    elemento_ciudad.innerHTML = ciudad;
    elemento_fecha.innerHTML = fecha;
    elemento_tempMax.innerHTML = maxtemp;
    elemento_tempMin.innerHTML = mintemp;
    elemento_nubosidad.innerHTML = nubosidad;
    elemento_viento.innerHTML = viento;
    elemento_probPrecipitacion.innerHTML = probPrecipitacion;
    elemento_iconoTarde.innerHTML = iconoTarde;
    elemento_tempTarde.innerHTML = tempTarde;
    elemento_pronosticoTarde.innerHTML = msmTarde;
    elemento_periodoTarde.innerHTML = textoTarde;
    elemento_iconoNoche.innerHTML = iconoNoche;
    elemento_tempNoche.innerHTML = tempNoche;
    elemento_pronosticoNoche.innerHTML = msmNoche;
    elemento_periodoNoche.innerHTML = textoNoche;

    
}

let cargarDatosSemana = (indiceArreglo) => {

    for (let dias of weather_data[indiceArreglo].forecast_week){

        let { text: nombreDia, date: fecha, temperature: temperaturas, icon: icono } = dias;
        let { max: tempMax, min: tempMin } = temperaturas;
        let mensajeDiaCiudad = `<div class="d-flex flex-column">
                                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${nombreDia}</h6>
                                    <span class="text-xs">${fecha}</span>
                                </div>
                                <div class="d-flex align-items-center ">
                                    <span class="font-weight-bold text-dark mx-2">${tempMax}</span> |  <span class="text-dark mx-2">${tempMin}</span>
                                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icono}</i></div>
                                </div>`;

        let elementoDia = document.getElementById("informacion" + nombreDia);

        elementoDia.innerHTML = mensajeDiaCiudad;

    };
    

};

let loadWeekForecastData = (contador, indiceArreglo) => {
    var boton = document.getElementById("loadinfo");
    var listaDias = document.getElementById("semana");
    boton.addEventListener("click", () => {

        if (contador === 0){

            for (let dias of weather_data[indiceArreglo].forecast_week) {
                let { text: nombreDia, date: fecha, temperature: temperaturas, icon: icono } = dias;
                let { max: tempMax, min: tempMin } = temperaturas;
    
                var nuevoDia = document.createElement("li");
                nuevoDia.classList.add("list-group-item", "border-0", "d-flex", "justify-content-between", "ps-0", "mb-2", "border-radius-lg");
                nuevoDia.id = "informacion" + nombreDia;
                nuevoDia.innerHTML = `<div class="d-flex flex-column">
                                        <h6 class="mb-1 text-dark font-weight-bold text-sm">${nombreDia}</h6>
                                        <span class="text-xs">${fecha}</span>
                                      </div>
                                      <div class="d-flex align-items-center ">
                                          <span class="font-weight-bold text-dark mx-2">${tempMax}</span> |  <span class="text-dark mx-2">${tempMin}</span>
                                          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icono}</i></div>
                                      </div>`;
    
                listaDias.appendChild(nuevoDia);          
            };
    
            contador = 1;
    
    
        };

        var estado = listaDias.style.display;
        if (estado === "none" || estado === "") {
            listaDias.style.display = "block";
        } else {
            listaDias.style.display = "none";
        };

    });
};

let cargarCiudades = () => {

    for (let indice =0; indice < weather_data.length; indice++) {
        let ciudad = weather_data[indice]["city"];

        let listaCiudades = document.getElementById("dropdownMenuButton");
        let nuevaCiudad = document.createElement("option");

        nuevaCiudad.classList.add("dropdown-item");      
        nuevaCiudad.id = "dropdown-" + ciudad;
        nuevaCiudad.innerHTML = ciudad;
        listaCiudades.appendChild(nuevaCiudad);


    };

};

function datosClimaCiudad() {
    let opcionMenu = document.getElementById("dropdownMenuButton");
    opcionMenu.addEventListener("change", () => {
        loadDayForecastData(opcionMenu.selectedIndex - 1);
        cargarDatosSemana(opcionMenu.selectedIndex - 1);
        
        
    });
    
};

document.addEventListener("DOMContentLoaded", function() {
    loadDayForecastData(0);
    var contador = 0;
    loadWeekForecastData(contador, 0);
    cargarCiudades();
    datosClimaCiudad();
});

