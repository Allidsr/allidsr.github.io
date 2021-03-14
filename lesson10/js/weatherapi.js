const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ffe70e1a01b4bb43bbb016f31e1fbf7&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
const weather = document.querySelector("#weather");
weather.textContent = jsObject.weather[0].description;

const temperature = document.querySelector('#temp');
temperature.textContent = jsObject.main.temp;

const humidity = document.querySelector("#humidity");
humidity.textContent = jsObject.main.humidity;

const speed = document.querySelector("#speed");
speed.textContent = jsObject.wind.speed;

const wind = document.querySelector("#wind");
wind.textContent = jsObject.wind.humidity;
/*const imagesrc =`https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);*/
  });
