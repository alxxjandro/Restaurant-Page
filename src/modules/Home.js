import "../css/Home.css"
import createElement from "./utility";

const homeMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    const welcomeText = createElement("h1",["Welcome to", `ODIN'S PASTA PLACE`],"welcomeText");
    const description = createElement("p",["Step into a world of fresh, artisanal pasta where bold flavors and timeless recipes come to life."],"home-description");

    container.appendChild(welcomeText);
    container.appendChild(description);
    return container;
}();

export default homeMenu;
