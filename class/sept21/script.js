const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  }

const changeMood = () => {
    //console.log("In Mood") to check if it works in developer menu
    const mood = document.getElementById("txt-mood").value.toLowerCase().trim();
    const root = document.querySelector(":root");
    
    if (mood == "angry") {
        root.style.setProperty("--back", "red");
        root.style.setProperty("--headback", "orange");
    }
    //elseifs have the same syntax
}

const colorSquare = () => {
document.getElementById("square").classList.add("rainbow");
}

const orderCoffee = () => {
    const numCoffees = parseInt(document.getElementById("txt-num").value);
    const coffeeType = document.getElementById("txt-type").value;
    const error = document.getElementById("error-num");
    error.classList.add("hidden");
    if(isNaN(numCoffees)){
        error.classList.remove("hidden");
        error.innerHTML = "Not a valid number";
    } else if(numCoffees < 0) {
        error.classList.remove("hidden");
        error.innerHTML = "Cant Have Negative Coffees";
    } else if(numCoffees == 0) {
        error.classList.remove("hidden");
        error.innerHTML = "Cant Have Zero Coffees";
    } else if(numCoffees == 1) {
        error.classList.remove("hidden");
        error.innerHTML = `Ordered 1 ${coffeeType}.`;
    } else {
        orderDiv.innerHTML = `Ordered ${numCoffees} ${coffeeType}s.`;
    }
}
  
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    //cannot have 2 separate window.onload functions
    document.getElementById("button-change-mood").onclick = changeMood;
    document.getElementById("button-gradient").onclick = colorSquare;
};