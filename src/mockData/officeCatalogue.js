import deskIcon from "../assets/desk.png";
import chairIcon from "../assets/chair.png";
import computerIcon from "../assets/computer.png";
import lampIcon from "../assets/lamp.png";
import plantIcon from "../assets/plant.png";
import tvIcon from "../assets/tv.png";
import waterIcon from "../assets/water.png";

const officeCatalogue = [
  {
    name: "desk",
    selected: false,
    image: deskIcon,
    quantity: 0,
    price: 130,
    type: "furniture",
    toCommand: false
  },
  {
    name: "computer",
    selected: false,
    image: computerIcon,
    quantity: 0,
    price: 210,
    type: "electronics",
    toCommand: false
  },
  {
    name: "television",
    selected: false,
    image: tvIcon,
    quantity: 0,
    price: 110,
    type: "electronics",
    toCommand: false
  },
  {
    name: "lamp",
    selected: false,
    image: lampIcon,
    quantity: 0,
    price: 30,
    type: "accessory",
    toCommand: false
  },
  {
    name: "plant",
    selected: false,
    image: plantIcon,
    quantity: 0,
    price: 25,
    type: "accessory",
    toCommand: false
  },
  {
    name: "chair",
    selected: false,
    image: chairIcon,
    quantity: 0,
    price: 67,
    type: "furniture",
    toCommand: false
  },
  {
    name: "water",
    selected: false,
    image: waterIcon,
    quantity: 0,
    price: 275,
    type: "accessory",
    toCommand: false
  }
];

export { officeCatalogue };
