import "../css/About.css"

const aboutMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    let temp = document.createElement("p");
    temp.textContent = "About";
    container.appendChild(temp);

    return container;
}();

export default aboutMenu;