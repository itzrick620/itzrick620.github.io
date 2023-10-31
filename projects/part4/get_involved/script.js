const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}