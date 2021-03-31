const requestURL = 'https://brashak.github.io/directory/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
     const directory = jsonObject['directory'];
      for (let i = 0; i < directory.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = directory[i].businessname;
        card.appendChild(h2);
        
        document.querySelector('div.cards').appendChild(card);
});
   
