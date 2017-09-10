import $ from "jquery";
import convertibles from "../assets/convertibles.png";
import coupes from "../assets/coupes.png";
import Chrysanthemum from "../assets/Chrysanthemum.jpg";
const body = $("body");


//$("<p></p>", { text: "Hello World3" }).appendTo(body);



const displayConvertibles = () => {
    const image = $("<img></img>", { src: convertibles });
    image.appendTo(body);
}

const displayCoupes = () => {
    const image = $("<img></img>", { src: coupes });
    image.appendTo(body);
}

const displayChrysanthemum = () => {
    const image = $("<img></img>", { src: Chrysanthemum });
    image.appendTo(body);
}

export {
    displayConvertibles,
    displayCoupes,
    displayChrysanthemum
}