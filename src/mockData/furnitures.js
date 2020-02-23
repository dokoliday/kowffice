import deskIcon from "../assets/desk.png";
import chairIcon from "../assets/chair.png";
import computerIcon from "../assets/computer.png";
import lampIcon from "../assets/lamp.png";
import plantIcon from "../assets/plant.png";
import tvIcon from "../assets/tv.png";
import waterIcon from "../assets/water.png";

const furnitures = [
  { name: "desk", selected: false, image: deskIcon, quantity: 0, price: 130 },
  {
    name: "computer",
    selected: false,
    image: computerIcon,
    quantity: 0,
    price: 210
  },
  {
    name: "television",
    selected: false,
    image: tvIcon,
    quantity: 0,
    price: 110
  },
  { name: "lamp", selected: false, image: lampIcon, quantity: 0, price: 30 },
  { name: "plant", selected: false, image: plantIcon, quantity: 0, price: 25 },
  { name: "chair", selected: false, image: chairIcon, quantity: 0, price: 67 },
  { name: "water", selected: false, image: waterIcon, quantity: 0, price: 275 }
];

export { furnitures };
