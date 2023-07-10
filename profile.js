const form = document.getElementById("myForm");

// Get the modal element
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// Function to display the modal
function displayModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add an event listener to the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input field values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  // Display the input values in the modal
  document.getElementById("nameDisplay").textContent = "Name: " + name;
  document.getElementById("emailDisplay").textContent = "Email: " + email;
  document.getElementById("phoneDisplay").textContent =
    "Phone Number: " + phone;
  document.getElementById("name").value = "";
  email = document.getElementById("email").value = "";
  phone = document.getElementById("phone").value = "";
  // Display the modal
  displayModal();
});

// Add an event listener to the close button
closeBtn.addEventListener("click", closeModal);

const colorBtn = document.getElementById("color");
const placeBtn = document.getElementById("place");
const ritualBtn = document.getElementById("ritual");
console.log(colorBtn);

colorBtn.addEventListener("click", () => {
  alert("My favorite color is red!");
});

placeBtn.addEventListener("click", () => {
  alert("My favorite place is New York City!");
});

ritualBtn.addEventListener("click", (event) => {
  alert("My favorite ritual is reading books!");
});
