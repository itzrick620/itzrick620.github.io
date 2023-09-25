const toggleNav = () => {
    document.querySelector(".menu").classList.toggle("active");
};

const showExercise1 = () => {
    document.getElementById("exercise1Content").style.display = 'block';
    document.getElementById("exercise2Content").style.display = 'none';
};

const showExercise2 = () => {
    document.getElementById("exercise1Content").style.display = 'none';
    document.getElementById("exercise2Content").style.display = 'block';
};

const determineOrder = () => {
    const name1 = document.getElementById("name1").value;
    const age1 = parseInt(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseInt(document.getElementById("age2").value);
    const name3 = document.getElementById("name3").value;
    const age3 = parseInt(document.getElementById("age3").value);

    const result = document.getElementById("result");

    if (isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        result.textContent = "Error: Please enter valid ages.";
    } else {
        const ages = [age1, age2, age3];
        const names = [name1, name2, name3];

        const sortedAges = [...ages].sort((a, b) => b - a);
        const orderedNames = sortedAges.map((age) => {
            const index = ages.indexOf(age);
            return names[index];
        });

        result.textContent = `Oldest to Youngest: ${orderedNames.join(', ')}`;
    }
};

let totalDonation = 0; // Initializes total donation amount

const updateThermometer = () => {
    const donationAmount = parseFloat(document.getElementById("donationAmount").value);

    if (isNaN(donationAmount) || donationAmount < 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    totalDonation += donationAmount; // Accumulates donations

    const totalGoal = 10000; // Total donation goal
    const percentage = (totalDonation / totalGoal) * 100;

    document.getElementById("thermometerFill").style.height = `${Math.min(percentage, 100)}%`;
};

window.onload = () => {
    document.getElementById("menuToggle").onclick = toggleNav;
    document.getElementById("exercise1").onclick = showExercise1;
    document.getElementById("exercise2").onclick = showExercise2;
    document.getElementById("determineOrder").onclick = determineOrder;
    document.getElementById("updateThermometer").onclick = updateThermometer;
};