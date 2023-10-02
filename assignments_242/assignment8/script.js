const displayDonate = () => {
    const donateAmt = parseInt(document.getElementById("txt-donate").value);
    const root = document.querySelector(":root");

    const error = document.getElementById("error");
    error.classList.add("hidden");

    if(donateAmt < 0 || isNaN(donateAmt) || donateAmt > 10000) {
        error.classList.remove("hidden");
        error.innerHTML = "Not a valid number";
    }

    let gradient = 0;

    const fill = setInterval(() => {
        if(donateAmt / 10000 * 100 <= gradient) {
            clearInterval(fill);
        } else {
            gradient++;
            root.style.setProperty("--num", gradient + "%");
        }
    }, 10);
};

var padding = -500;

const moveMan = () => {
    const setLocation = () => {
        document.getElementById("img").style.setProperty("--x", padding + "px");
    }

    let man = document.getElementById("img");
    const updateMove = setInterval(() => {
        padding += 10;
        man.innerHTML = setLocation();

        if(padding % 2 == 0) {
            img.src = "../../images/sprintingman.png";
        }
        if (padding >= 400) {
            clearInterval(updateMove);
        }
    }, 50);
}

window.onload = () => {
    document.getElementById("donate-button").onclick = displayDonate;
    document.getElementById("img").onclick = moveMan;
};