import { sayHi } from "./message.js";
import { displayConvertibles, displayCoupes, displayChrysanthemum } from "./imageDisplay.js";
import { displayButton } from "./button";
import "./hot";
//sayHi();
displayConvertibles();
displayCoupes();
displayChrysanthemum();
displayButton();

if (module.hot) {
    module.hot.accept("./hot");
}