
const nav = document.getElementById("nav");

window.onscroll = function () {
    let top = window.scrollY;
    if (top > 200) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  };