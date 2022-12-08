import { render } from "./ReactClone.js";
import Component from "./Component.js";

let propCount = 4;
const buttonElem = document.getElementById("btn-count");

function renderComponent() {
  render(Component, { propCount, buttonElem }, document.getElementById("root"));
}

renderComponent();
