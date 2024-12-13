
//given an element, it creates it inside of a div and returns the div item itself
const createElement = function (element,content){
    const div = document.createElement("div");

    content.forEach(text => {
        let temp = document.createElement(element);
        temp.textContent = text;
        div.appendChild(temp);
    });
    
    return div;
} 

export default createElement;