//const add = (a, b) => a+b;

//const add = (a, b) => {return a + b;}
//console.log(add(5,6));

//const square = a => a*a;
//console.log(square(5));

//const hello = () => console.log("Hello me!");
//hello();

//const helloSpecific = userName => console.log("Hello " + userName + "!");
//helloSpecific("Ricky");

/*
const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log("You are awesome!");
};
helloFullName("ricky", "garretson");
*/

/*  Not okay to change a constant
const myName = "Ricky";
myName = "Doodoo head";
*/

//const myFunct = () => console.log("Hey you!");

const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");
}

const displayName = () => {
    const firstName = document.getElementById("txt-firstname").value;
    console.log("Hello " + firstName + "!");
}
window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
    document.getElementById("button-show-name").onclick = displayName;
}