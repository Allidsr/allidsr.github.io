const fapiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.037167&lon=-111.396&APPID=8ffe70e1a01b4bb43bbb016f31e1fbf7&units=imperial';
fetch(fapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  let day = 0;
  for(let i=0; i<40; i++){
  
  const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  let d = new Date(jsObject.list[i].dt_txt);
  let time = jsObject.list[i].dt_txt;
  if( time.match(/18:00:00/)){
  document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
  document.getElementById(`forecast${day+1}`).textContent = jsObject.list[i].main.temp;
  const imagesource = `https://openweathermap.org/img/wn/${jsObject.list[i].weather[0].icon}.png`;
  const desc = jsObject.list[i].weather[0].description;
  //document.getElementById(`image${day+1}`).textContent=imagesource;
  document.getElementById(`icon${day+1}`).setAttribute('src', imagesource);
  document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;
     }
  }
});