class Toy {
    constructor(name, price, age, rating, image){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }

    getDetails() {
        return `${this.name} ${this.price} ${this.age} ${this.rating}`;
    }

    getToyItem() {
        const sectionOne = document.createElement("section");
        sectionOne.classList.add("styling");

        const img = document.createElement("img");
        sectionOne.append(img);
        img.src = this.image;

        const information = document.createElement("section");
        const h3 = document.createElement("h3");
        const price = document.createElement("p");
        const age = document.createElement("p");
        const rating = document.createElement("p");
        h3.innerHTML = this.name;
        price.innerHTML = this.price;
        age.innerHTML = this.age;
        rating.innerHTML = this.rating;
        information.append(h3);
        information.append(price);
        information.append(age);
        information.append(rating);
        information.classList.add("hidden");
        information.classList.add("location");
        
        sectionOne.append(information);

        sectionOne.onmouseover = () => {
            img.classList.add("changeOpacity");
            information.classList.remove("hidden");
        }

        sectionOne.onmouseout = () => {
           img.classList.remove("changeOpacity");
           information.classList.add("hidden");
        }

        return sectionOne;
    }
}

const showToys = () => {
    
    const toys = [];
    toys.push(new Toy("Model Car", "Price: $9.99", "Age Range: 3+", "Rating: 4 stars", "images/img1.jpg"));
    toys.push(new Toy("Tricycle", "Price: $120.99", "Age Range: 8+", "Rating: 3.5 stars", "images/img2.jpg"));
    toys.push(new Toy("Pokemon Card Set", "Price: $14.99", "Age Range: 7+", "Rating: 5 stars", "images/img3.jpg"));
    toys.push(new Toy("PlayStation 5", "Price: $499.99", "Age Range: 10+", "Rating: 4.5 stars", "images/img4.jpg"));
    toys.push(new Toy("Baseball", "Price: $6.99", "Age Range: 6+", "Rating: 2 stars", "images/img5.jpg"));
    toys.push(new Toy("Lacrosse Stick", "Price: $54.99", "Age Range: 6+", "Rating: 5 stars", "images/img6.jpg"));
    toys.push(new Toy("Squishmallow", "Price: $17.99", "Age Range: 3+", "Rating: 5 stars", "images/img7.jpg"));
    toys.push(new Toy("Fidget Cube", "Price: $8.99", "Age Range: 7+", "Rating: 4 stars", "images/img8.jpg"));
    toys.push(new Toy("Handheld Fan", "Price: $19.99", "Age Range: 8+", "Rating: 4.5 stars", "images/img9.jpg"));
    toys.push(new Toy("UNO Card Game", "Price: $4.99", "Age Range: 4+", "Rating: 2 stars", "images/img10.jpg"));

    const mainSection = document.getElementById("main");
    toys.forEach(toy => {
        mainSection.append(toy.getToyItem());
    });
}

window.onload = () => {
    showToys();
}