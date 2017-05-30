var minTemp = document.getElementById('min-temp');
var maxTemp = document.getElementById('max-temp');
var request = new XMLHttpRequest();

request.open('GET', 'https://www.metaweather.com/api/location/766273/', true); // use true to make the request async

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    minTemp.innerHTML = Math.round(data.consolidated_weather[0].min_temp);
    maxTemp.innerHTML = Math.round(data.consolidated_weather[0].max_temp);
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
};

request.onerror = function() {
  console.log('Error al tratar de conectarse con el servidor');
};

request.send();
