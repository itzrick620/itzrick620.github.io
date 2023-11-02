const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/animals", (req, res) => {
    const animals = [];
    animals[0] = {
        name: "zebra",
        color: "black with white stripes",
        state: "chillllin",
        img: "images/zebra.jpg"
    };
    animals[1] = {
        name: "moose",
        color: "brown",
        state: "angry",
        img: "images/moose.jpg"
    };
    animals[2] = {
        name: "pig",
        color: "pink",
        state: "oink",
        img: "images/pig.jpg"
    };
    res.json(animals);
});

app.listen(3001, () => {
    console.log("Im listening");
});