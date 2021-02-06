const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay() 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
document.getElementById("currentDate").innerHTML = dateStr;
document.getElementById("currentYear").innerHTML = year;

if (day1[day] == 'Friday') {
    document.getElementById("pancakes").innerHTML = "Friday = Preston Pancakes in the Park!  9:00 a.m. Friday at the city park pavilion.";
    document.getElementById("pancakes").style.display = "block";
  }
  else {
    document.getElementById("pancakes").style.display = "none";
  }