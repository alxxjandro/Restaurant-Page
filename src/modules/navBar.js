import About from "./About.js";
import Home from "./Home.js";
import Menu from "./Menu.js";
import "../css/navBar.css";

const navBar = function () {
    const navBar = document.createElement("div");
    const content = document.getElementById("content");
    const buttons = ["Home","Menu","About"];

    buttons.forEach(button =>{
        let tempButton = document.createElement("button");
        tempButton.textContent = button;
        navBar.appendChild(tempButton);

        tempButton.addEventListener("click", () =>{

            //to add the class "active-button" to the last clicked one 
            Array.from(navBar.children).forEach(btn => btn.classList.remove("active-button"));
            tempButton.classList.add("active-button");
            content.innerHTML = "";

            switch (tempButton.textContent) {
                case "About":
                    content.appendChild(About);
                    content.className = "";
                    content.classList.add("About");
                    break;
                case "Home":
                    content.appendChild(Home);
                    content.className = "";
                    content.classList.add("Home");
                    break;
                case "Menu":
                    content.appendChild(Menu);
                    content.className = "";
                    content.classList.add("Menu");
                    content.classList.add("changeBG");
                    break;
                default:
                    console.log("Fail to load content");
            }
        })
    })

    //load the home menu by default
    content.innerHTML = "";
    content.appendChild(Home);
    content.classList.add("Home");
    return navBar;
}();

export default navBar;
