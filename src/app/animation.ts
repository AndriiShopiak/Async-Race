import Api from "../api/api";
const api = new Api();

export default function startRace () {
    const getAllCarsOnPage: NodeListOf<SVGElement> = document.querySelectorAll(".item_track svg");
    getAllCarsOnPage.forEach((el, i) => {
        api.startEngine(`http://127.0.0.1:3000/engine?id=${i + 1}&status=started`).then((value) => {
            el.classList.add("animation_race");
            el.style.animationDuration = `${value.velocity / 10}s`;
            el.addEventListener("animationend", () => {
                el.classList.remove("animation_race");
            });
        });
    });
}