const add = document.getElementById("add_btn");
const subtract = document.getElementById("subtract_btn");
const reset = document.getElementById("reset_btn");

const count = document.querySelector(".count");

add.addEventListener("click", () => {
  count.innerText++;
});

subtract.addEventListener("click", () => {
  count.innerText--;
});

reset.addEventListener("click", () => {
  count.innerText = 0;
});