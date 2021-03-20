const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var preston = document.querySelector('.fishEvents');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);   
    const town = jsonObject['towns'];
 
   let prestonevents = document.createElement('p');  
   let eventlist;

    for (let i = 0; i < town.length; i++ ) { 
      
       if (town[i].name == "Fish Haven") {
            eventlist= town[i].events;         
            prestonevents.textContent =  town[i].events;
            preston.appendChild(prestonevents);
       }   
    }   
});

