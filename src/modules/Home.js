const homeMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    let temp = document.createElement("p");
    temp.textContent = "Home";
    container.appendChild(temp);

    return container;
}();

export default homeMenu;
