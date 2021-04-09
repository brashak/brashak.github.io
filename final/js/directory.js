const requestURL = 'https://brashak.github.io/final/directory/directory.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const directory = jsonObject['directory'];
   for (let i = 0; i < directory.length; i++) {
      let card = document.createElement('section');
      let carddiv = document.createElement('div');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let  phonenumber = document.createElement('div');
      let  email = document.createElement('div');
      let website= document.createElement('a');
      h2.textContent = directory[i].businessname;
      phonenumber.setAttribute('class', 'phonenumber')
      phonenumber.textContent = 'Phone Number: ' + directory[i].phonenumber;
      email.setAttribute('class', 'email')
      email.textContent = 'Email: ' + directory[i].email;
      website.setAttribute('href', directory[i].website);
      website.innerHTML = directory[i].website;
      image.setAttribute('src', directory[i].imageurl);
      image.setAttribute('alt', directory[i].businessname);
      card.appendChild(h2);
      card.appendChild(phonenumber);
      card.appendChild(email);
      card.appendChild(image);
      carddiv.appendChild(website);

      document.querySelector('div.website').appendChild(card);
   }
});

// Get the elements with class="column"
var elements = document.getElementsByClassName("cards .section");

// Declare a loop variable
var i;

// List View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}




   
