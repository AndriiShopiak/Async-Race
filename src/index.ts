import createUI from "./view/ui";
import addGerage from "./view/garage";
import addGreeting from "./view/greeting";
import Api from "./api/api";
import addWinnerTab from "./view/winners";
import getRandomCar from "./app/random";
import startRace from "./app/animation";
import startRaceForSpecCar from "./app/animationSpecCar";
import "./global.css";
// addGreeting();
const api = new Api();
createUI();
const createBtn: HTMLElement = document.querySelector(".create__btn");
const updateBtn: HTMLElement = document.querySelector(".update__btn");
const createText: HTMLInputElement = document.querySelector(".create__name");
const createColor: HTMLInputElement = document.querySelector(".create__color");
const toGarageBtn: HTMLElement = document.querySelector("#toGarage");

toGarageBtn.addEventListener("click", () => {
    api.getCars("http://127.0.0.1:3000/garage").then((value) => {
    addGerage(value);
    updateCar();
  });
});
createBtn.addEventListener("click", () => {
  api.setCars("http://127.0.0.1:3000/garage", {
  name: `${createText.value}`,
  color: `${createColor.value}`
});
  api.getCars("http://127.0.0.1:3000/garage").then((value) => {
    addGerage(value);
    removeCar();
    updateCar();
  });
});
api.getCars("http://127.0.0.1:3000/garage").then((value) => {
  addGerage(value);
  startRaceForSpecCar();
}).then(removeCar).then(updateCar);

function removeCar(): void {
  const itemTrack = document.querySelectorAll(".item_track");
  document.querySelectorAll(".remove_car").forEach((el:HTMLDivElement,i) => {
    el.addEventListener("click", () => {
      api.deleteCar(`http://127.0.0.1:3000/garage/${itemTrack[i].id}`).then(() => {
        api.getCars("http://127.0.0.1:3000/garage").then((value) => {
          addGerage(value);
          removeCar();
          updateCar();
        });
      });
    });
  });
}
function updateCar(): void {
  const updateField: HTMLInputElement = document.querySelector(".update__name");
  const itemTrack = document.querySelectorAll(".item_track");
  const fieldUpdateColor: HTMLInputElement = document.querySelector(".update__color");
  let idNumber: number;
  document.querySelectorAll(".select_car").forEach((el:HTMLElement,i) => {
    el.addEventListener("click", () => {
      api.getCar(`http://127.0.0.1:3000/garage/${itemTrack[i].id}`).then((value) => {
        updateField.value = value.name;
        fieldUpdateColor.value = value.color;
        idNumber = value.id;
        updateBtn.addEventListener("click", () => {
          api.updateCar(`http://127.0.0.1:3000/garage/${itemTrack[i].id}`, {
            name: updateField.value,
            color: fieldUpdateColor.value
          }).then((val) => {
              api.getCars("http://127.0.0.1:3000/garage").then((value) => {
              addGerage(value);
              removeCar();
            });
          });
          location.reload();
        });
      });
    });
  });
}
function generateCars(): void {
  for (let i = 0; i < 100; i++) {
    getRandomCar();
  }
  setTimeout(() =>{
    api.getCars("http://127.0.0.1:3000/garage").then((response) => {
    addGerage(response);
  });
  },100);
}
const generateBtn: HTMLElement = document.querySelector(".generate__buttons__btn");
generateBtn.addEventListener("click", generateCars);
addWinnerTab();
const raceButton: HTMLElement = document.querySelector(".race_button");
raceButton.addEventListener("click", startRace);
