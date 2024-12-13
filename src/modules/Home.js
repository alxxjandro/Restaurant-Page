import "../css/Home.css"
import createElement from "./utility";

const homeMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    const frases = ["Welcome", `TO ODIN'S PASTA PLACE`];
    const welcomeP1 = createElement("h1",frases);

    container.appendChild(welcomeP1);


    return container;
}();

export default homeMenu;
