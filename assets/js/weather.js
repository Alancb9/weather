import { weather_data } from './data.js';


let loadDayForecastData = () => {

    let [datosCiudad, ...otrasCiudades] = weather_data;

    let { city: ciudad, date: fecha, maxtemperature: maxtemp, mintemperature: mintemp, cloudiness: nubosidad, wind: viento, rainfall: probPrecipitacion, forecast_today: pronosticoHoy } = datosCiudad;

    let [tarde, noche] = pronosticoHoy;

    let { text: textoTarde, temperature: tempTarde, forecast: msmTarde, icon: iconoTarde } = tarde;
    let { text: textoNoche, temperature: tempNoche, forecast: msmNoche, icon: iconoNoche } = noche;

    let mensaje_ciudad = `<h5 id="city" class="text-golden">${ciudad}</h5>`;
    let mensaje_fecha = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0">${fecha}</h5>`;
    let mensaje_tempMax = `<span id="maxtemperature">${maxtemp}</span>`;
    let mensaje_tempMin = `<span id="mintemperature" class="opacity-6 mx-2">${mintemp}</span></h2>`;
    let mensaje_nubosidad = `<h6 id="cloudiness" class="text-golden mb-0">${nubosidad}</h6>`;
    let mensaje_viento = `<h6 id="wind" class="text-golden mb-0">${viento}</h6>`;
    let mensaje_probPrecipitacion = `<h6 id="rainfall" class="text-golden mb-0">${probPrecipitacion}</h6>`;
    let mensaje_iconoTarde = `<i id="late_icon" class="material-icons opacity-10">${iconoTarde}</i>`;
    let mensaje_tempTarde = `<h3 id="late_temperature" class="text-center mb-0">${tempTarde}</h3>`;
    let mensaje_pronosticoTarde = `<span id="late_forecast" class="text-md">${msmTarde}</span>`;
    let mensaje_periodoTarde = `<h4 id="late_text" class="mb-0 text-md">${textoTarde}</h4>`;
    let mensaje_iconoNoche = `<i id="night_icon" class="material-icons opacity-10">${iconoNoche}</i>`;
    let mensaje_tempNoche = `<h3 id="night_temperature" class="text-center mb-0">${tempNoche}</h3>`;
    let mensaje_pronosticoNoche = `<span id="night_forecast" class="text-md">${msmNoche}</span>`;
    let mensaje_periodoNoche = `<h4 id="night_text" class="mb-0 text-md">${textoNoche}</h4>`;

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
    
    elemento_ciudad.innerHTML = mensaje_ciudad;
    elemento_fecha.innerHTML = mensaje_fecha;
    elemento_tempMax.innerHTML = mensaje_tempMax;
    elemento_tempMin.innerHTML = mensaje_tempMin;
    elemento_nubosidad.innerHTML = mensaje_nubosidad;
    elemento_viento.innerHTML = mensaje_viento;
    elemento_probPrecipitacion.innerHTML = mensaje_probPrecipitacion;
    elemento_iconoTarde.innerHTML = mensaje_iconoTarde;
    elemento_tempTarde.innerHTML = mensaje_tempTarde;
    elemento_pronosticoTarde.innerHTML = mensaje_pronosticoTarde;
    elemento_periodoTarde.innerHTML = mensaje_periodoTarde;
    elemento_iconoNoche.innerHTML = mensaje_iconoNoche;
    elemento_tempNoche.innerHTML = mensaje_tempNoche;
    elemento_pronosticoNoche.innerHTML = mensaje_pronosticoNoche;
    elemento_periodoNoche.innerHTML = mensaje_periodoNoche;

}

let loadWeekForecastData = () => {
    for (let dias of weather_data[0].forecast_week) {
        let {text: nombreDia, date: fecha, temperature: temperaturas, icon: icono } = dias;
        let { max: tempMax, min: tempMin } = temperaturas;
        let mensaje =  `<div class="d-flex flex-column">
                            <h6 class="mb-1 text-dark font-weight-bold text-sm">${nombreDia}</h6>
                            <span class="text-xs">${fecha}</span>
                        </div>
                        <div class="d-flex align-items-center ">
                            <span class="font-weight-bold text-dark mx-2">${tempMax}</span> |  <span class="text-dark mx-2">${tempMin}</span>
                            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icono}</i></div>
                        </div>`;
        let elemento = document.getElementById("info" + nombreDia);
        elemento.innerHTML = mensaje;
    }
}


loadDayForecastData();
loadWeekForecastData();