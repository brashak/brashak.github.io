const apiURL_weather= 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=2c6bdbd53e64e351529171a4fe9b31ed&units=imperial';
    fetch(apiURL_weather)    
    .then(function (response) {
    return response.json();
})
    .then(function (jsonObject) {
        let temp = jsonObject.main.temp;
        let speed = jsonObject.wind.speed;

        document.getElementById('currently').textContent = jsonObject.weather[0].description;
        document.getElementById('temp').textContent = Math.round(temp);
        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('speed').textContent = Math.round(speed);

        let output = "N/A";
        if (temp <= 50 && speed > 3) {
            output = Math.round(35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16);
            output += " \xB0F";
        }
        document.getElementById("windchill").textContent = output;
  });

const apiURL_forecast= 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=2c6bdbd53e64e351529171a4fe9b31ed&units=imperial';
    fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

    console.log(forecastData);

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

   let day = 0;
  forecastData.forEach(forecast => {
    let x = new Date(forecast.dt_txt);
   document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
   document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
   document.getElementById('img'+(day+1)).alt = forecast.weather[0].description;
   document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
   day++;	  
  });
});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
       if (towns[i].name == 'Fish Haven') {
        let events = towns[i].events;
        for (let i=0; i < events.length; i++) {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('.events').appendChild(event);
        }
    }
   }
});