import "../css/Menu.css"
import dishOneImg from "../imgs/menuOptions/optionOne.jpg";
import dishTwoImg from "../imgs/menuOptions/optionTwo.jpg";
import dishThreeImg from "../imgs/menuOptions/optionThree.jpg";
import createElement from "./utility";


const createMenuOption = function (dishTitle,dishImg,dishDescription){
    const dishContainer = document.createElement("div");
    dishContainer.className = "dish-container";

    const containerTitle = createElement("h2",[`${dishTitle}`],"dish-title");
    const containerDesc = createElement("p",[`${dishDescription}`],"dish-desc");
    const containerImg = document.createElement("img");
    containerImg.src = dishImg;
    containerImg.classList.add("dish-img");

    dishContainer.appendChild(containerTitle);
    dishContainer.appendChild(containerImg);
    dishContainer.appendChild(containerDesc);
    return {dishContainer};
}

const mainMenu = function () {
    const container = document.createElement("div");
    container.innerHTML = "";

    const ourMenu = createElement("h1",["Our Menu!"],"ourMenu");
    const menuDescription = createElement("h1",["Indulge in our handcrafted pasta dishes, prepared fresh daily with bold flavors and timeless recipes."],"menuDescription");

    const gridContainer = document.createElement("div");

    const dishOne = createMenuOption("Classic Carbonara",dishOneImg,"Rich and creamy with smoky pancetta, fresh eggs, and Parmesan cheese.");
    const dishTwo = createMenuOption("Butter Shrimp",dishThreeImg,"Linguine tossed in a luscious garlic butter sauce, topped with succulent shrimp.");
    const dishThree = createMenuOption("Pesto Primavera",dishTwoImg,"A vibrant blend of fresh basil pesto, cherry tomatoes, and seasonal vegetables.");
    gridContainer.appendChild(dishOne.dishContainer);
    gridContainer.appendChild(dishTwo.dishContainer);
    gridContainer.appendChild(dishThree.dishContainer);


    container.appendChild(ourMenu);
    container.appendChild(menuDescription);
    container.appendChild(gridContainer);
    gridContainer.className = "menu-grid";

    return container;
}();

export default mainMenu;