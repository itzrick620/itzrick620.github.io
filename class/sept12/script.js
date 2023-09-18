const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi to you, ricky";
    helloP.classList.add("special");
}

const showCheese = () => {
    document.getElementById("cheese").classList.remove("hide")
}
const hideCheese = () => {
    document.getElementById("cheese").classList.add("hide")
}
window.onload = () => {
    //get button, tie function to click
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showCheese;
    document.getElementById("button-hide").onclick = hideCheese;
}