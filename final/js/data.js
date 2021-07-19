const requestURL = 'https://brashak.github.io/final/data/data.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const data = jsonObject['data'];
    for (let i = 0; i < data.length; i++) {
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let image = document.createElement('img');
       let  maxperson = document.createElement('div');
       let  reservationhalf = document.createElement('div');
       let  reservationfull = document.createElement('div');
       let  walkinhalf = document.createElement('div');
       let  walkinfull = document.createElement('div');
       h2.textContent = data[i].rentalname;
       maxperson.setAttribute('class', 'maxperson')
       maxperson.textContent = 'Max Person(s); ' + data[i].maxperson;
       reservationhalf.setAttribute('class', 'reservationhalf')
       reservationhalf.textContent = 'Reservation-Half Day (3 hrs): ' + data[i].reservationhalf;
       reservationfull.setAttribute('class', 'reservationfull')
       reservationfull.textContent = 'Reservation-Full Day: ' + data[i].reservationfull;
       walkinhalf.setAttribute('class', 'walkinhalf')
       walkinhalf.textContent = 'Walk In-Half Day (3 hrs): ' + data[i].walkinhalf;
       walkinfull.setAttribute('class', 'walkinfull')
       walkinfull.textContent = 'Walk In- Full Day: ' + data[i].walkinfull;
       image.setAttribute('src', data[i].imageurl);
       image.setAttribute('alt', data[i].rentalname);
       card.appendChild(h2);
       card.appendChild(maxperson);
       card.appendChild(reservationhalf);
       card.appendChild(reservationfull);
       card.appendChild(walkinhalf);
       card.appendChild(walkinfull);
       card.appendChild(image);
       document.querySelector('div.cards').appendChild(card);
   }
});