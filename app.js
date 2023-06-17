// Get the form element
const form = document.getElementById("my-form");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  // Create an object to store the user details
  const user = {
    name: name,
    email: email,
    phone: phone,
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
  phoneInput.value = "";

  // Display a success message
  const msg = document.querySelector(".msg");
  msg.innerHTML = "Submitted";

  // Reload the user list
  loadUserList();
});

// Function to delete a user
function deleteUser(index) {
  // Get existing users from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Remove the user at the specified index
  users.splice(index, 1);

  // Store the updated users array in local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Reload the user list
  loadUserList();
}

// Function to load existing users from local storage and display them
function loadUserList() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("users");

  // Clear the user list
  userList.innerHTML = "";

  // Display each user in the user list
  users.forEach(function (user, index) {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`
      )
    );

    // Create delete button for each user
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteUser(index);
    });

    // Append delete button to the list item
    li.appendChild(deleteButton);

    // Append list item to the user list
    userList.appendChild(li);
  });
}

// Load existing users from local storage and display them
document.addEventListener("DOMContentLoaded", function () {
  loadUserList();
});

// // Load existing users from local storage
// document.addEventListener("DOMContentLoaded", function () {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   const userList = document.getElementById("users");

//   // Display each user in the user list
//   users.forEach(function (user) {
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(
//         `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`
//       )
//     );
//     userList.appendChild(li);
//   });
// });
