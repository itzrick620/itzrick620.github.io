// Wrap the JavaScript code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the navigation menu
    const toggleNav = () => {
      const navItems = document.getElementById("main-nav-items");
      navItems.classList.toggle("hidden");
      navItems.classList.toggle("active");
    };
  
    // Function to show email submission result
    const showEmailResult = async (e) => {
      e.preventDefault();
      const result = document.getElementById("result");
      result.innerHTML = "Please wait...";
  
      try {
        const response = await getEmailResult();
        if (response.status == 200) {
          result.innerHTML = "Email Successfully Sent";
        } else {
          result.innerHTML = "Sorry, your email was not sent.";
        }
      } catch (error) {
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
      }
    };
  
    // Function to send the email and return the response
    const getEmailResult = async (e) => {
      const form = document.getElementById("contact-form");
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    };
  
    // Attach the toggleNav function to the click event of the navigation toggle button
    document.getElementById("nav-toggle").addEventListener("click", toggleNav);
  
    // Attach the showEmailResult function to the form submit event
    document.getElementById("contact-form").addEventListener("submit", showEmailResult);
  });