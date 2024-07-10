// Get references to form elements and response message
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const responseMessage = document.getElementById("response-message");

// Event listener for form submission
contactForm.addEventListener("submit", submitFunction);

const submitFunction = function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Perform basic form validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        responseMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Simulate form submission (you can replace this with actual submission code)
    // In this example, we're just displaying a success message
    responseMessage.textContent = "Message sent successfully!";
    contactForm.reset(); // Clear the form

    // You can add code here to send the form data to a server or API
};

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function changeTheme(){
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    })
}