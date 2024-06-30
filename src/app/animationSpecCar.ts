import Api from "../api/api";
const api = new Api();
let counter :number = 2;
let curentID:number;

export default function startRaceForSpecCar () {
    console.log("done");
    const getAllBtnStart: NodeListOf<HTMLElement> = document.querySelectorAll(".start_btn");
    const getAllCarsOnPage: NodeListOf<SVGElement> = document.querySelectorAll(".item_track svg");
    // const getAllBtnStop: NodeListOf<HTMLElement> = document.querySelectorAll(".stop_btn");
    getAllBtnStart.forEach((el, i) => {
        el.addEventListener("click", () => {
            el.style.opacity = "0.5";
            if(counter === 2 || curentID !== i) {
                console.log("done");
                counter = 1;
                curentID = i;
            api.startEngine(`http://127.0.0.1:3000/engine?id=${i + 1}&status=started`).then((value) => {
            getAllCarsOnPage[i].classList.add("animation_race");
            getAllCarsOnPage[i].style.animationDuration = `${value.velocity / 10}s`;
            getAllCarsOnPage[i].addEventListener("animationend", () => {
                el.style.opacity = "1";
                getAllCarsOnPage[i].classList.remove("animation_race");
                counter = 2;
            });
        });
            }
        });
    });
}