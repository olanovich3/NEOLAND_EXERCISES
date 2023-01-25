const div = document.createElement("div");
document.body.appendChild(div);

//

const newP = document.createElement("p");
const newDiv = document.createElement("div");

newDiv.appendChild(newP);
document.body.appendChild(newDiv);

//

const secondDiv = document.createElement("div");

for (let index = 0; index < 6; index++) {
  const loop = document.createElement("p");
  secondDiv.appendChild(loop);
}
document.body.appendChild(secondDiv);
// 2.4

const dinamic = document.createElement("p");
var text = document.createTextNode(`Soy dinámico`);
dinamic.appendChild(text);
document.body.appendChild(dinamic);

//

const lubba = document.createTextNode(`Wubba Lubba dub dub`);
const wubba = document.querySelector(".fn-insert-here");
wubba.appendChild(lubba);
//
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const array = document.createElement("ul");
for (const iterator of apps) {
  const creator = document.createElement("li");
  array.appendChild(creator);
  const series = document.createTextNode(iterator);
  creator.appendChild(series);
}

document.body.appendChild(array);

//

const noMore = document.querySelectorAll(".fn-remove-me");

for (const label of noMore) {
  label.remove();
}

//

const phrase = document.querySelector("div");
phrase.insertAdjacentHTML("afterend", `<p>Voy en medio!</p>`);

//

const centro = document.querySelectorAll("div.fn-insert-here");

for (const texto of centro) {
  const parrafo = document.createElement("p");
  const frase = document.createTextNode(`Voy dentro!`);
  parrafo.appendChild(frase);
  texto.appendChild(parrafo);
}
