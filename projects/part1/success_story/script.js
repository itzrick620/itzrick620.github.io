const toggleNav = () => {
    document.querySelector("main-nav").classList.toggle("show");
};

const printStory = () => {

};

window.onload = () => {
    document.getElementById("nav-toggle").addEventListener("click", toggleNav);
    document.getElementById("button-add").onclick = printStory;
};