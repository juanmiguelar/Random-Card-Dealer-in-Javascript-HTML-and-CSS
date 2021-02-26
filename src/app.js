/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let house = ["diamond", "heart", "spade", "club"];
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let randomHouse = GetRandomValue(house);
  let randomValue = GetRandomValue(values);
  let cardElement = document.getElementById("card");
  let leftSymbol = this.document.getElementById("leftSymbol");
  let rightSymbol = this.document.getElementById("rightSymbol");
  let number = this.document.getElementById("number");

  cardElement.className = "card " + randomHouse;
  number.innerHTML = randomValue;

  switch (randomHouse) {
    case "diamond":
      leftSymbol.innerHTML = rightSymbol.innerHTML = "&#9830;";
      break;
    case "heart":
      leftSymbol.innerHTML = rightSymbol.innerHTML = "&#9829;";
      break;
    case "spade":
      leftSymbol.innerHTML = rightSymbol.innerHTML = "&#9824;";
      break;
    case "club":
      leftSymbol.innerHTML = rightSymbol.innerHTML = "&#9827;";
      break;

    default:
      break;
  }

  function GetRandomValue(house) {
    let randomIndex = Math.floor(Math.random() * (house.length - 1));

    return house[randomIndex];
  }
};
