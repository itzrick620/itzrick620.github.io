const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const printStory = () => {
    document.getElementById("box").classList.add("comment");

    const newDog = document.getElementById("new");
    const ownerName = document.getElementById("txt-o-name").value;
    const email = document.getElementById("email").value;
    const dogName = document.getElementById("txt-d-name").value;
    const dogFile = document.getElementById("dog-file").value;
    const description = document.getElementById("txt-description").value;

    newDog.innerHTML += `<div id = "bottom-sec"> <ul><li>${ownerName}</li><li>${email}</li><li>${dogName}</li><li>${dogFile}</li><li>${description}</li></ul></div>`;

    document.getElementById("new").classList.toggle("hidden");
}

const getDogs = async () => {
    const url = "https://itzrick620.github.io/jsons/projects.json";
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
};
  
const showDogs = async () => {
    try {
        let dogs = await getDogs();

        if (dogs) {
            let dogsSection = document.getElementById("main-content");
            dogs.forEach((dog) => {
                dogsSection.appendChild(getDog(dog));
            });
        }
    } catch (error) {
        console.log(error);
    }
};


const getDog = (dog) => {
    let section = document.createElement("section");
    section.classList.add("dog");

    let h1 = document.createElement("h1");
    h1.innerText = dog.name;
    section.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.innerText = dog.desc;
    section.appendChild(h3);

    let details = document.createElement("div");
    details.classList.add("dogs-details");
    section.appendChild(details);

    let ul = document.createElement("ul");
    details.appendChild(ul);

    // Update to directly access properties from the 'dog' object
    let liDesc = document.createElement("li");
    liDesc.innerText = dog.desc;
    ul.appendChild(liDesc);

    let liOwner = document.createElement("li");
    liOwner.innerText = `Owner: ${dog.owner}`;
    ul.appendChild(liOwner);

    let liEmail = document.createElement("li");
    liEmail.innerText = `Owner's Email: ${dog.emailOwner}`;
    ul.appendChild(liEmail);

    let img = document.createElement("img");
    img.src = dog.img;
    section.appendChild(img);

    return section;
};


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-add").onclick = printStory;
    showDogs();
}