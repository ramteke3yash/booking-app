// Get the form element
const form = document.getElementById("my-form");

// Function to edit a user
function editUser(index) {
  // Retrieve the user details from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Get the user at the specified index
  const user = users[index];

  // Populate the form fields with the user data
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  nameInput.value = user.name;
  emailInput.value = user.email;
  phoneInput.value = user.phone;

  // Store the edit mode and index in the form's dataset
  form.dataset.editMode = "true";
  form.dataset.editIndex = index;
}

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

  // Get existing users from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (form.dataset.editMode === "true") {
    // Editing an existing user
    const editIndex = form.dataset.editIndex;
    users[editIndex] = { name, email, phone };
    form.dataset.editMode = "false";
    form.dataset.editIndex = "";
  } else {
    // Creating a new user
    const user = { name, email, phone };
    users.push(user);
  }

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

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", function () {
      editUser(index);
    });
    li.appendChild(editButton);

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
