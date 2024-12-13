
//given the type of elements and an array, for each element on the array it 
//creates a "element" and append's it to a father div, to finally return the div itself

const createElement = function (element,content, className = null){
    const div = document.createElement("div");
    if (className) div.classList.add(className);

    content.forEach(text => {
        let temp = document.createElement(element);
        temp.textContent = text;
        div.appendChild(temp);
    });

    return div;
} 

export default createElement;