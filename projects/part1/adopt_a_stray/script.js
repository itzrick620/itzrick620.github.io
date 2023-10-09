const toggleNav = () => {
    document.querySelector("main-nav").classList.toggle("show");
};

window.onload = () => {
    document.getElementById("nav-toggle").addEventListener("click", toggleNav);
};