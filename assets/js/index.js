navigator.geolocation.getCurrentPosition(success, error);

function success(pos){
  var crd = pos.coords;

  var request = new XMLHttpRequest();
  request.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + crd.latitude + '&lon=' + crd.longitude);

  request.onload = function(){
  var data = JSON.parse(request.responseText);

  document.querySelector("#city").innerHTML += data.name += ', ' + data.sys.country;
  document.querySelector("#temperature").innerHTML += "Temperature<br><br>" + data.main.temp;
  document.querySelector("#temp-max").innerHTML += "Temp. Max.<br><br>" + data.main.temp_max;
  document.querySelector("#temp-min").innerHTML += "Temp. Min.<br><br>" + data.main.temp_min;
  document.querySelector("#pressure").innerHTML += "Pressure<br><br>" + data.main.pressure;
  document.querySelector("#humidity").innerHTML += "Humidity<br><br>" + data.main.humidity;
  document.querySelector("#icon").innerHTML += data.weather[0].main;
  switch (data.weather[0].main){
    case "Clear":
      document.querySelector("#icon").innerHTML += "<i class='wi wi-day-sunny'>";
    break;
    case "Clouds":
      document.querySelector("#icon").innerHTML += "<i class='wi wi-cloudy'>";
    break;
    case "Rain":
      document.querySelector("#icon").innerHTML += "<i class='wi wi-rain'>";
    break;
    case "Snow":
      document.querySelector("#icon").innerHTML += "<i class='wi wi-snow-wind'>";
    break;
  }

  };
  request.send();
}

function error(err){
  alert("Your navigator does not support Geolocation.");
}
  