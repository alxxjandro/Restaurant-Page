import nav from "./modules/navBar";
import "./css/general.css";

const navBar = function (){
    const navBar = document.querySelector("body > header > nav");
    navBar.appendChild(nav);
    return {navBar};
}();
