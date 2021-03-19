//hamburger menu
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
  //pancakes
  if (day1[day] == 'Friday') {
      document.getElementById("friday").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
      document.getElementById("friday").style.display = "block";
    }
    else {
      document.getElementById("friday").style.display = "none";
    }
  
    function adjustSeverity(rating) {
      document.getElementById("ratingvalue").innerHTML = rating;
  } 
  //summary
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

  fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
  });
  
  //forecast
  
  const apiURL_weather = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

  fetch(apiURL_weather)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {

      let temp = jsonObject.main.temp;
      let tempHigh = jsonObject.main.temp_max;
      let windspeed = jsonObject.wind.speed;

      document.getElementById('currently').textContent = jsonObject.weather[0].description;
      document.getElementById('temp').textContent = Math.round(temp);
      document.getElementById('humidity').textContent = jsonObject.main.humidity;
      document.getElementById('windspeed').textContent = Math.round(windspeed);

      //windchill
      
      let output = "N/A"
      if (temp <= 50 && windspeed > 3) {
          output = Math.round(35.74 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16);
          output += " \xB0F";
      }

      document.getElementById("windchill").textContent = output;

  });