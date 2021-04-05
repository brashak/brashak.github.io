const requestURL = 'https://brashak.github.io/directory/directory.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const directory = jsonObject['directory'];
   for (let i = 0; i < directory.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let  phonenumber = document.createElement('div');
      let  email = document.createElement('div');
      let website= document.createElement('div');
      h2.textContent = directory[i].businessname;
      phonenumber.setAttribute('class', 'phonenumber')
      phonenumber.textContent = 'Phone Number: ' + directory[i].phonenumber;
      email.setAttribute('class', 'email')
      email.textContent = 'Email: ' + directory[i].email;
      website.setAttribute('class', 'website')
      website.textContent = 'Website: ' + directory[i].website;
      image.setAttribute('src', directory[i].imageurl);
      image.setAttribute('alt', directory[i].businessname);
      card.appendChild(h2);
      card.appendChild(phonenumber);
      card.appendChild(email);
      card.appendChild(website);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);
   }
});


var elements = document.getElementsByClassName("cards");
var i;
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateAreas = "100%";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateAreas = "50%";
  }
}

var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

   
