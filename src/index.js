import nav from "./navBar.js";
import "./style.css";


const navBar = function (){
    const navBar = document.querySelector("body > header > nav");
    navBar.appendChild(nav);
    return {navBar};
}();
