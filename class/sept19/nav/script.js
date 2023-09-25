const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide");
}
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav
}