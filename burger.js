
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav_mob = document.getElementById("nav_mob");
  const navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active class from nav_mob and burger
      nav_mob.classList.remove("active");
      burger.classList.remove("active");
    });
  });

  burger.addEventListener("click", () => {
    nav_mob.classList.toggle("active");
    if (nav_mob.classList.contains("active")) {
      burger.classList.add("active");
    } else {
      burger.classList.remove("active");
    }
  });
});
