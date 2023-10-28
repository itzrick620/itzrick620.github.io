const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies");
    movies.forEach((movie) => moviesSection.append(getMovie(movie)));
  };
  
  const getMovie = (movie) => {
    let section = document.createElement("section");
    section.classList.add("movie");
  
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    section.append(h3);
  
    let img = document.createElement("img");
    img.src = "https://portiaportia.github.io/json/" + movie.img;
    section.append(img);
  
    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("movie-details");
    section.append(detailsDiv);
  
    let ul = document.createElement("ul");
    detailsDiv.append(ul);
  
    Object.keys(movie).forEach((key) => {
      if (key !== "title" && key !== "img") {
        let li = document.createElement("li");
        ul.append(li);
  
        let label = document.createElement("label");
        label.innerText = `${capitalizeFirstLetter(key)}: `;
        li.append(label);
  
        if (Array.isArray(movie[key])) {
          li.append(movie[key].join(", "));
        } else {
          li.append(movie[key]);
        }
      }
    });
  
    return section;
  };
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  window.onload = () => showMovies();
  