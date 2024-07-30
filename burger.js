// MENU //
const burger = document.getElementById("burger");
const link2 = document.querySelector(".link2");
burger.addEventListener("click", () => {
  link2.classList.toggle("active");
  if (link2.classList.contains("active")) {
    burger.classList.add("active");
  } else {
    burger.classList.remove("active");
  }
});
