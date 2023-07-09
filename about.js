console.log("hello world");
const selectedRadioButton = document.querySelector(
  'input[name="where"]:checked'
);

// Check if a radio button is selected
if (selectedRadioButton) {
  const selectedValue = selectedRadioButton.value;
}

function handleSubmit(evt) {
  evt.preventDefault();
  alert(` Your form has been submitted successfully!`);
  //console.log('form submit');
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const homeCat = document.querySelector("#home-cat");

homeCat.addEventListener("mouseover", () => {
  alert("You Are Awesome Today! Keep Up the Good Work!");
});
