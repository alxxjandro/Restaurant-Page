import nav from "./modules/navBar";
import "./css/general.css";
import background from "./imgs/bg-two.jpg";

const createContent = function (){
    //Select the navBar, body and navBar's home btn
    const navBar = document.querySelector("body > header > nav");
    const body = document.querySelector("body");

    //load the bgImage
    const bgImg = document.createElement("img");
    bgImg.src = background;
    body.appendChild(bgImg);

    //create the navBar 
    navBar.appendChild(nav);
    return {navBar};
}();
