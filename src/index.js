import nav from "./modules/navBar";
import "./css/general.css";
import background from "./imgs/bg-two.jpg";

const createContent = function (){
    const navBar = document.querySelector("body > header > nav");
    const body = document.querySelector("body");



    const bgImg = document.createElement("img");
    bgImg.src = background;
    body.appendChild(bgImg);

    navBar.appendChild(nav);
    const homeBtn = document.querySelector("header > nav > div > button:first-child");
    homeBtn.classList.add("active-button");
    return {navBar};
}();
