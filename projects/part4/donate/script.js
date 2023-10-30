const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

const logSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    const name = document.getElementById("namebox").value;
    const email = document.getElementById("emailbox").value;
    const donoamt = document.getElementById("donoamtbox").value;

    const result = document.getElementById("result");
    result.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Donation Amount: $${donoamt}</p>
    `;
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;

    const submitButton = document.getElementById("donate-monthly");
    submitButton.onclick = logSubmit;
}
