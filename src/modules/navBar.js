import About from "./About.js";
import Home from "./Home.js";
import Menu from "./Menu.js";

const navBar = function () {
    const navBar = document.createElement("div");
    const content = document.getElementById("content");
    const buttons = ["Home","Menu","About"];



    buttons.forEach(button =>{
        let tempButton = document.createElement("button");
        tempButton.textContent = button;
        navBar.appendChild(tempButton);

        tempButton.addEventListener("click", () =>{
            content.innerHTML = "";

            switch (tempButton.textContent) {
                case "About":
                    content.appendChild(About);
                    break;
                case "Home":
                    content.appendChild(Home);
                    break;
                case "Menu":
                    content.appendChild(Menu);
                    break;
                default:
                    console.log("Fail to load content");
            }
            


        })
    })

    content.innerHTML = "";
    content.appendChild(Home);

    return navBar;
}();

export default navBar;
