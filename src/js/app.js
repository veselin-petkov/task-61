import "../scss/app.scss";

var x = document.querySelectorAll(".hot");

for (let index = 0; index < x.length; index++) {

  x[index].innerHTML += " 🔥";
}

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});
