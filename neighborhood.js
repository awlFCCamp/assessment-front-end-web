const data = [
  { name: "Feges BBQ Spring Branch", url: "https://fegesbbq.com/" },
  { name: "Squable", url: "https://www.squabletime.com/" },
  { name: "Da Gama", url: "https://www.dagamahtx.com/" },
  { name: "Truth BBQ", url: "https://www.truthbbq.com/" },
  {
    name: "Bludorn Restaurant",
    url: "https://www.bludornrestaurant.com/",
  },
  { name: "The Original Ninfa's on Navigation", url: "https://ninfas.com/" },
];
const suggestion = document.querySelector("#suggestion");
document.querySelector("#resturant-btn").addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 6);
  const randomData = data[randomNumber];
  suggestion.textContent = `Here is a wonderful resturant that you can visit: ${randomData.name}`;
});
