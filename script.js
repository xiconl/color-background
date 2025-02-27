// From 2 to 5 is simply getting the Html DOM elements 
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById("gradient");
const header3 = document.querySelector('h3');
//End of getting the Html DOM elements

const setGradient = () => {
    body.style.background = "linear-gradient(to right,"+ color1.value +", "+ color2.value +")";
    header3.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);