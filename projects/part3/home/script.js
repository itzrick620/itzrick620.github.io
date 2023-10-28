const toggleNav = () => {
    const navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
    navItems.classList.toggle("active");
};

const toggleHome = () => {
    document.getElementById("p1of5").classList.toggle("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
};

const toggleAdopt = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.toggle("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
};

const toggleDonate = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.toggle("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.add("hidden");
};

const toggleInvolved = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.toggle("hidden");
    document.getElementById("p5of5").classList.add("hidden");
};

const toggleSuccess = () => {
    document.getElementById("p1of5").classList.add("hidden");
    document.getElementById("p2of5").classList.add("hidden");
    document.getElementById("p3of5").classList.add("hidden");
    document.getElementById("p4of5").classList.add("hidden");
    document.getElementById("p5of5").classList.toggle("hidden");
};

const logSubmit = () => {
    const name = document.getElementById("namebox").value;
    const email = document.getElementById("emailbox").value;
    const subject = document.getElementById("subjectbox").value;
    const message = document.getElementById("messagebox").value;

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
};

window.onload = () => {
    const navToggle = document.getElementById("nav-toggle");
    const submitButton = document.getElementById("submit");

    navToggle.onclick = toggleNav;
    submitButton.onclick = logSubmit;
};
