const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let m = document.createElement("p")
      let year = document.createElement("p");
      let pop = document.createElement("p");
      let arf = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = towns[i].name;
      m.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      pop.textContent = "Population: " + towns[i].currentPopulation;
      arf.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      image.setAttribute("src", towns[i].photo);
      image.setAttribute("alt", towns[i].name);


      card.appendChild(h2);
      card.appendChild(m);
      card.appendChild(year);
      card.appendChild(pop);
      card.appendChild(arf);
      card.appendChild(image);
      card.setAttribute("class", "card");

      document.querySelector("div.cards").appendChild(card);
    }
  });