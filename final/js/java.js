//hamburger
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("menu-id"); }

//footer date
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  var day = d.getDay(); 
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
  document.getElementById("currentDate").innerHTML = dateStr;
  document.getElementById("currentYear").innerHTML = year;

  //heber weather summary
  const apiURL_weather = 'https://api.openweathermap.org/data/2.5/weather?id=5775699&appid=c0fea80851f1161764ede42a5291e6ff&units=imperial';

  fetch(apiURL_weather)
      .then(function (response) {
          return response.json();
      })
      .then(function (jsonObject) {
  
          let temp = jsonObject.main.temp;
          let condition = jsonObject.main.condition;
          let humidity = jsonObject.humidity;
  
          document.getElementById('condition').textContent = jsonObject.weather[0].description;
          document.getElementById('temp').textContent = Math.round(temp);
          document.getElementById('humidity').textContent = jsonObject.main.humidity;
  });

//3 day forecast
const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5775699&units=imperial&APPID=c0fea80851f1161764ede42a5291e6ff";


fetch(apiURL_forecast)
   .then(response => response.json())
   .then((jsObject) => {
       console.log(jsObject);
       const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(forecastData);

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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


