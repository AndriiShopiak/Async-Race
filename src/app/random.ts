import Api from "../api/api";
import pastGarage from "../view/garage";
const api = new Api();
const carForRandom = [
    {name:"Tesla", model:"Model S"},
    {name:"Ford", model:"Focus"},
    {name:"Nissan", model:"Cashay"},
    {name:"Toyota", model:"Prado"},
    {name:"GMC", model:"Ranger 7"},
    {name:"RAM", model:"Series 4"},
    {name:"Hummer", model:"H3"},
    {name:"Fiat", model:"Vestra"},
    {name:"Niva", model:"Urban"},
    {name:"Opel", model:"Vector"},
    {name:"Alfa Romeo", model:"Classic"},
    {name:"Isuzu", model:"Picup"},
    {name:"Renault", model:"Cango"},
    {name:"Skoda", model:"Superb"},
    {name:"Toyota", model:"Hilux"},
    {name:"Niva", model:"Legent"},
    {name:"Ferari", model:"Coco"},
    {name:"Subaru", model:"Outlander"},
    {name:"Lada", model:"G7"},
    {name:"Ford", model:"Fusion"},
    {name:"Occa", model:"D4"},
    {name:"Lifan", model:"HI5"},
];

export default function getRandomCar() {
    const randomColor: string = Math.floor(Math.random()*16777215).toString(16);
    api.setCars("http://127.0.0.1:3000/garage", {
        name: carForRandom[Math.floor(Math.random() * carForRandom.length)].name + " " + carForRandom[Math.floor(Math.random() * carForRandom.length)].model,
        color: `#${randomColor}`,
    });
}