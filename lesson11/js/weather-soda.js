const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=8ffe70e1a01b4bb43bbb016f31e1fbf7&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
const weather = document.querySelector("#weather");
weather.textContent = jsObject.weather[0].description;

const temp = document.querySelector('#temp');
temp.textContent = jsObject.main.temp;

const humidity = document.querySelector("#humidity");
humidity.textContent = jsObject.main.humidity;

const speed = document.querySelector("#speed");
speed.textContent = jsObject.wind.speed;

const temp2 = jsObject.main.temp;
    const speed2 = jsObject.wind.speed;
    const chillFactor =35.74 + 0.6215 * temp2 - 35.75*Math.pow(speed2,0.16) + 0.4275*temp2 *Math.pow(speed2,0.16);
       if(temp2>50 && speed2< 4.8){
       chillFactor= "N\/A";
        //return chillFactor;
   }
    
   

    //const chillFactor = 35.74 + 0.6215 * temp - 35.75*Math.pow(speed,0.16) + 0.4275*temp *Math.pow(speed,0.16);
    document.getElementById(`wind`).textContent = chillFactor.toFixed(2); 

  });
