console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert(` Your form has been submitted successfully!`);
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const homeCat = document.querySelector("#home-cat");

homeCat.addEventListener("mouseover", () => {
  alert("You Are Awesome Today! Keep Up the Good Work!");
});
