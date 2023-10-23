const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const toggleHome = () => {
    document.getElementById("p1of5").classList.toggle("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleAdopt = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.toggle("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleDonate = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.toggle("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleInvolved = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.toggle("hidden");
    document.getElementById("p5of5").classList.add("hidden");
}

const toggleSuccess = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.toggle("hidden");
}

const logSubmit = () => {
    const name = document.getElementById("namebox").value;
    const email = document.getElementById("emailbox").value;
    const donoamt = document.getElementById("donoamtbox").value;

    console.log(name); 
    console.log(email); 
    console.log(donoamt); 
}
window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("p1of5").onclick = toggleHome;
    document.getElementById("p2of5").onclick = toggleAdopt;
    document.getElementById("p3of5").onclick = toggleDonate;
    document.getElementById("p4of5").onclick = toggleInvolved;
    document.getElementById("p4of5").onclick = toggleSuccess;

    document.getElementById("submit").onclick = logSubmit;
}