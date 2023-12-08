const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
  };
  
  const getDogs = async () => {
    try {
      return (await fetch("https://two42-final.onrender.com/api/dogs")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showDogs = async () => {
    try {
      const response = await getDogs();
      if (response.ok) {
        const dogs = await response.json();
        const dogsDiv = document.getElementById("dog-list");
        dogsDiv.innerHTML = "";
        dogs.forEach((dog) => {
          const section = document.createElement("section");
          section.classList.add("dog");
          dogsDiv.appendChild(section);
  
          const a = document.createElement("a");
          a.href = "#";
          section.appendChild(a);
  
          const h3 = document.createElement("h3");
          h3.textContent = dog.name;
          a.appendChild(h3);
  
          const img = document.createElement("img");
          img.src = "https://two42-final.onrender.com" + dog.img;
          section.appendChild(img);
  
          a.onclick = (e) => {
            e.preventDefault();
            displayDetails(dog);
          };
        });
      } else {
        console.log("Failed to fetch dogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayDetails = (dog) => {
    const dogDetails = document.getElementById("dog-details");
    dogDetails.innerHTML = "";
  
    const dLink = document.createElement("a");
    dLink.innerHTML = "Delete";
    dogDetails.append(dLink);
    dLink.id = "delete-link";
  
    const eLink = document.createElement("a");
    eLink.innerHTML = "Edit";
    dogDetails.append(eLink);
    eLink.id = "edit-link";
  
    const h3 = document.createElement("h3");
    h3.innerHTML = dog.name;
    dogDetails.append(h3);
  
    const link = document.createElement("p");
    dogDetails.append(link);
    link.innerHTML = dog.link;
  
    const ul = document.createElement("ul");
    dogDetails.append(ul);
    console.log(dog.description);
    dog.description.forEach((desc) => {
      const li = document.createElement("li");
      ul.append(li);
      li.innerHTML = desc;
    });
  
    eLink.onclick = (e) => {
      e.preventDefault();
      document.querySelector(".dialog").classList.remove("transparent");
      document.getElementById("add-edit-title").innerHTML = "Edit Dog";
    };
  
    dLink.onclick = (e) => {
      e.preventDefault();
      deleteDog(dog);
    };
  
    populateEditForm(dog);
  };
  
  const deleteDog = async (dog) => {
    let response = await fetch(`https://two42-final.onrender.com/api/dogs/${dog._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.status != 200) {
      console.log("error deleting");
      return;
    }
  
    let result = await response.json();
    showDogs();
    document.getElementById("dog-details").innerHTML = "";
    resetForm();
  };
  
  const populateEditForm = (dog) => {
    const form = document.getElementById("add-edit-dog-form");
    form._id.value = dog._id;
    form.name.value = dog.name;
    form.link.value = dog.link;
    populateDesc(dog);
  };
  
  const populateDesc = (dog) => {
    const section = document.getElementById("description-boxes");
  
    dog.description.forEach((desc) => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = desc;
      section.append(input);
    });
  };
  
  const addEditDog = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-dog-form");
    const formData = new FormData(form);
    let response;
    formData.append("description", getDescription());
  
    if (form._id.value == -1) {
      formData.delete("_id");
  
      response = await fetch("https://final-project-l8qk.onrender.com/api/dogs", {
        method: "POST",
        body: formData,
      });
    } else {
      console.log(...formData);
  
      response = await fetch(`https://final-project-l8qk.onrender.com/api/dogs/${form._id.value}`, {
        method: "PUT",
        body: formData,
      });
    }
  
    if (response.status != 200) {
      console.log("Error posting data");
    }
  
    let newDog = await response.json();
  
    if (form._id.value != -1) {
      displayDetails(dog);
    }
  
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showDogs();
  };
  
  const getDescription = () => {
    const inputs = document.querySelectorAll("#description-boxes input");
    let description = [];
  
    inputs.forEach((input) => {
      description.push(input.value);
    });
  
    return description;
  };
  
  const resetForm = () => {
    const form = document.getElementById("add-edit-dog-form");
    form.reset();
    form._id.value = "-1";
    document.getElementById("description-boxes").innerHTML = "";
  };
  
  const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Dog";
    resetForm();
  };
  
  const addDescription = (e) => {
    e.preventDefault();
    const section = document.getElementById("description-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
  };
  
  window.onload = () => {
    showDogs();
    document.getElementById("add-edit-dog-form").onsubmit = addEditDog;
    document.getElementById("add-link").onclick = showHideAdd;
  
    document.querySelector(".close").onclick = () => {
      document.querySelector(".dialog").classList.add("transparent");
    };
  
    document.getElementById("add-description").onclick = addDescription;
  
    document.getElementById("nav-toggle").onclick = toggleNav;
  };
  
  