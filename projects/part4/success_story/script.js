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
    // Create a new section element
    let section = document.createElement("section");
    section.classList.add("dog");

    // Create an h1 element for the dog's name
    let h1 = document.createElement("h1");
    h1.innerText = dog.name;
    section.appendChild(h1);

    // Create a div for the details
    let details = document.createElement("div");
    details.classList.add("dogs-details");
    section.appendChild(details);

    // Create an unordered list for the dog's information
    let ul = document.createElement("ul");
    details.appendChild(ul);

    // Create list items for owner and email
    let liOwner = document.createElement("li");
    liOwner.innerText = "Owner: " + dog.owner;
    ul.appendChild(liOwner);

    let liEmail = document.createElement("li");
    liEmail.innerText = "Email: " + dog.emailOwner;
    ul.appendChild(liEmail);

    // Create a list item for the description
    let liDesc = document.createElement("li");
    liDesc.innerText = dog.desc;
    ul.appendChild(liDesc);

    // Create an image element for the dog's picture
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