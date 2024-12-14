import "../css/About.css"
import createElement from "./utility";

const aboutMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    const aboutTitle = createElement("h1",["We know you hope this was a real place!"],"aboutTitle");
    const descText = createElement("p",[`This page was built with JavaScript ES6 Modules, CSS, and Webpack, emphasizing on dynamic content and a visually appealing design.
        created as part of The Odin Project Restaurant's Page.` ],"descText");

    container.appendChild(aboutTitle);
    container.appendChild(descText);

    return container;
}();

export default aboutMenu;