// Get the form element
const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const userList = document.getElementById("users");
let editId = null;

// Function to edit a user
function editUser(user) {
  nameInput.value = user.name;
  emailInput.value = user.email;
  phoneInput.value = user.phone;
  editId = user._id;
}

// Function to delete a user
async function deleteUser(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);

    //console.log("success");
    loadUserList(); // Reload the user list
  } catch (err) {
    console.log(err);
  }
}

// Function to load existing users from the API and display them
async function loadUserList() {
  try {
    const response = await axios.get(API_BASE_URL);

    const users = response.data;

    // Clear the user list
    userList.innerHTML = "";

    // Display each user in the user list
    users.forEach(function (user, index) {
      const li = document.createElement("li");
      li.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;

      // Create the Edit button
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        editUser(user);
      });
      li.appendChild(editButton);

      // Create delete button for each user
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteUser(user._id);
      });

      // Append delete button to the list item
      li.appendChild(deleteButton);
      // Append list item to the user list
      userList.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}

// Add event listener for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  if (editId) {
    // Editing an existing user
    const user = { name, email, phone };
    try {
      const response = await axios.put(`${API_BASE_URL}/${editId}`, user);

      // Reload the user list
      loadUserList();
    } catch (err) {
      console.log(err);
    }
  } else {
    // Creating a new user
    const user = { name, email, phone };
    try {
      const response = await axios.post(API_BASE_URL, user);
      loadUserList();
    } catch (err) {
      console.log(err);
    }
  }

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";

  // Display a success message
  const msg = document.querySelector(".msg");
  msg.textContent = "Submitted";
});

// Load existing users from the API and display them
document.addEventListener("DOMContentLoaded", loadUserList);
