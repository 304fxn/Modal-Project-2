/*
Key concepts covered:

document.querySelector()
addEventListener()
classList.add()
classList.remove()
*/

const main = document.querySelector(".main");
const openmodal_btn = document.querySelector(".open-button");
const closemodal_btn = document.querySelector(".close-modal_button");

openmodal_btn.addEventListener("click", function () {
  main.classList.add("myModal");
});

closemodal_btn.addEventListener("click", function () {
  main.classList.remove("myModal");
});
