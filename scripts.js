/* Add your JavaScript to this file */
/*For the Newsletter Subscription, you are required to write some JavaScript code so 
that when the form is submitted, you will need to get the email address that the user 
entered into the input field and display a message to say "Thank you! Your email 
address `<example@address.com>` has been added to our mailing list!" in the 
`div` with the class `message` that is already in your `index.html` file. 
Also if no email address is entered in the input field and the form is submitted, it 
should display the message "Please enter a valid email address." in the same 
message area replacing any previous message. */

/* Add your JavaScript to this file */

window.addEventListener("DOMContentLoaded", function () {
  // Select key elements
  const form = document.querySelector(".newsletter form");
  const emailInput = document.getElementById("email");
  const messageDiv = document.querySelector(".message");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page from reloading

    const email = emailInput.value.trim();

    // Check if email field is empty
    if (email === "") {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "#ffb3b3"; // Red tone for error
    } else {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list.`;
      messageDiv.style.color = "#ffffff"; // White for success
      form.reset(); // Optionally clear input
    }
  });
});