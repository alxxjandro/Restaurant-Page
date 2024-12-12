import "../css/Menu.css"

const mainMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    let temp = document.createElement("p");
    temp.textContent = "Menu";
    container.appendChild(temp);

    return container;
}();

export default mainMenu;