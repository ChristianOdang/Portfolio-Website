const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideBar = document.querySelector(".sideBar");
const aboutme = document.getElementById("aboutme");
const projectlink = document.getElementById("projectlink");
const skilllink = document.getElementById("skilllink");
const contactlink = document.getElementById("contactlink");
//a function to make the navbar responsive
menuButton.addEventListener("click", function () {
  sideBar.style.display = "flex";
});
closeButton.addEventListener("click", function () {
  sideBar.style.display = "none";
});

//a function to hide the navbar on large screen when opened
function hideSidebar() {
  if (window.innerWidth >= 700 && sideBar.style.display === "block") {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "none";
  }
}

window.addEventListener("resize", hideSidebar);
hideSidebar();

//a function to link the contact section to email
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form fields
    const recipientEmail = "odangjohnny@gmail.com"; // Replace with the recipient's email address
    const subject = "Contact from " + document.getElementById("name").value;
    const body = document.getElementById("message").value;

    // Create a mailto link with recipient, subject, and body
    const mailtoLink =
      "mailto:" +
      recipientEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open the user's email client with the pre-filled information
    window.location.href = mailtoLink;
  });

// a function to close sidebar when any of the links is clicked
aboutme.addEventListener("click", function () {
  sideBar.style.display = "none";
});
projectlink.addEventListener("click", function () {
  sideBar.style.display = "none";
});
skilllink.addEventListener("click", function () {
  sideBar.style.display = "none";
});
contactlink.addEventListener("click", function () {
  sideBar.style.display = "none";
});
