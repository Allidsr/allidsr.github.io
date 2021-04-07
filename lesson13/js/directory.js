const requestURL =
  "https://allidsr.github.io/lesson13/json/directory.json";

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject["directory"];
    for (let i = 0; i < directory.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let desc = document.createElement("p");
      let p = document.createElement("p");
      let email = document.createElement("p");
      let wurl = document.createElement("a");
      let image = document.createElement("img");

      h2.textContent = directory[i].name;
      desc.textContent = "Description: " + directory[i].description;
      p.textContent = "Phone Number: " + directory[i].phone;
      email.textContent = "E-mail: " + directory[i].mail;
      wurl.textContent = "Website: " + directory[i].url;
      image.setAttribute("src", directory[i].logo);
      image.setAttribute("alt", (directory[i].name));


      card.appendChild(h2);
      card.appendChild(desc);
      card.appendChild(p);
      card.appendChild(email);
      card.appendChild(wurl);
      card.appendChild(image);
      card.setAttribute("class", "card");

      document.querySelector("div.cards").appendChild(card);
    }
  });