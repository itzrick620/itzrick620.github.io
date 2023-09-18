const showPic = () => {
    document.getElementById("img").classList.remove("hide");
}

const hidePic = () => {
    document.getElementById("img").classList.add("hide");
}

const moveBall = () => {
    document.getElementById("ball").classList.add("move-ball");
}

const printComment = () => {
    document.getElementById("box").classList.add("comment");

    const product = document.getElementById("txt-product").value;
    const header = document.getElementById("add-name");
    
    const comment = document.getElementById("txt-comment").value;
    const rate = document.getElementById("txt-rating").value;
    const commentP = document.getElementById("add-comment");

    const user = document.getElementById("txt-name").value;
    const userP = document.getElementById("add-user");

    header.innerHTML += `<section class = "separate"><strong>${product}</strong> <p class = "small">${rate}/5 stars</p> <p class="small">${comment}</p> <p class = "small">by ${user}</p></section>`;
}

window.onload = () => {
    document.getElementById("button-show").onclick = showPic;
    document.getElementById("button-hide").onclick = hidePic;
    document.getElementById("button-dance").onclick = moveBall;
    document.getElementById("button-add").onclick = printComment;
}