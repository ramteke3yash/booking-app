// Get the form element
const form = document.getElementById("my-form");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const name = nameInput.value;
  const email = emailInput.value;

  // Create an object to store the user details
  const user = {
    name: name,
    email: email,
  };

  // Get existing users from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add the new user to the array
  users.push(user);

  // Store the updated users array in local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";

  // Display a success message
  const msg = document.querySelector(".msg");
  msg.innerHTML = "Submitted";
});

// // Load existing users from local storage
// document.addEventListener("DOMContentLoaded", function () {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   const userList = document.getElementById("users");

//   // Display each user in the user list
//   users.forEach(function (user) {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(`Name: ${user.name}, Email: ${user.email}`)
//     );
//     userList.appendChild(li);
//   });
// });
