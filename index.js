// Les promesses servent a lancer des fonctions sans bloquer le chargement du reste
// de la page

import { fetchData } from "./fetch.js";

// Traitement en amont via formulaire
// const post = {
//   titre: "test",
//   content: "Mon contenu",
//   picture: "/images/image.jpg",
// };

const YOUR_API_KEY = "ede47c8dc0c84d55a1182f6e353eb223";

const root = document.querySelector("#root");
const main = document.createElement("main");
root.append(main);

fetchData({
  ...{ url: `https://api.rawg.io/api/games?key=${YOUR_API_KEY}` },
}).then((data) => {
  data.results
    // .filter((game) => game.rating > 4.6) (ligne pour activer un filtre)
    .map((game) => {
      console.log(game);

      const card = document.createElement("div");
      card.setAttribute("id", "card");

      const titreCard = document.createElement("h2");
      titreCard.innerText = game.name;

      // const image = document.createElement("div");
      // image.style.background = `url(${game.background_image}) no-repeat center center / cover`;
      // image.setAttribute(`class`, `card`);

      const note = document.createElement("p");
      note.innerText = game.rating;

      const date = document.createElement("p");
      date.innerText = game.released;

      const img = document.createElement("img");
      img.setAttribute("src", game.background_image);
      img.style.width = "100%";

      const content = document.createElement("div");
      game.platforms.map((platform) => {
        const span = document.createElement("span");
        span.innerText = platform.platform.name;
        content.append(span);
      });

      card.append(titreCard, date, img, note);
      main.append(card);
    });
});

// console.log(users);

// function awaiting(timer) {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("ok"));
//     }, timer);
//   });
// }

// const maFonction = async (timer) => {
//   setTimeout(() => {
//     console.log(timer);
//   }, timer);
// };

// const attendre = await maFonction(4000);

// console.log(attendre);
// awaiting(1000);
