const requestURL = 'https://brashak.github.io/final/data/tours.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const tours = jsonObject['tours'];
    for (let i = 0; i < tours.length; i++) {
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let image = document.createElement('img');
       let  summary = document.createElement('div');
       let  website = document.createElement('div');
       h2.textContent = tours[i].tourname;
       summary.setAttribute('class', 'summary')
       summary.textContent = 'Summary: ' + tours[i].summary;
       website.setAttribute('href', tours[i].website);
       website.innerHTML = tours[i].website;
       website.textContent = 'Book Now:' + tours[i].website;
       image.setAttribute('src', tours[i].imageurl);
       image.setAttribute('alt', tours[i].tourname);
       card.appendChild(h2);
       card.appendChild(summary);
       card.appendChild(website);
       card.appendChild(image);
       document.querySelector('div.cards').appendChild(card);
   }
});