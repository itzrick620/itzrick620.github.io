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

const printStory = () => {
    document.getElementById("boxes").classList.add("comment");

    const newDog = document.getElementById("new");
    const ownerName = document.getElementById("txt-o-name").value;
    const email = document.getElementById("email").value;
    const dogName = document.getElementById("txt-d-name").value;
    const dogFile = document.getElementById("dog-file").value;
    const description = document.getElementById("txt-description").value;

    newDog.innerHTML += `<div id = "bottom-sec"> <ul><li>${ownerName}</li><li>${email}</li><li>${dogName}</li><li>${dogFile}</li><li>${description}</li></ul></div>`;

    document.getElementById("new").classList.toggle("hidden");
}


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-add").onclick = printStory;


}