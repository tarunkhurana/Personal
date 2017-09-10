import "./image_viewer.css";
import big from "./assets/big.jpg";
import small from "./assets/small.jpg";

const image = document.createElement("img");
image.src = small;

const newimage = document.createElement("img");
newimage.src = big;

document.body.appendChild(image);
document.body.appendChild(newimage);