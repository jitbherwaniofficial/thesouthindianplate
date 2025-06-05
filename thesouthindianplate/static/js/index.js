console.log("Har Har Mahadev");



gsap.to(".hero_lines span", {
  y: 0,
  stagger: 0.2,
  duration: 1,
});

// swiper starts //
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper starts //


// Navbar //
const navbar = document.querySelector(".main-navbar");
let lastScroll = 0;

if (document.body.clientWidth >= 1280) {
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // At top of page
    navbar.classList.remove("activa");
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.classList.remove("activa");
  } else {
    // Scrolling up
    navbar.classList.add("activa");
  }
  lastScroll = currentScroll;
});

}

// GSAP Animation for Smooth Navbar
gsap.from(".main-navbar", {
  y: -100,
  duration: 0.5,
  ease: "power3.out",
});

 // Handle resize to disable scroll behavior on mobile
        window.addEventListener('resize', function() {
            if (document.body.clientWidth < 1280) {
                navbar.classList.remove("chaalu");
            }
        });

// Navbar //


// ACCORDION //
let questions = document.querySelectorAll(".faq_question");
questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".faq_question.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
// ACCORDION //

document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-container input[type="radio"]');
            let currentActive = document.querySelector('.content.active');

            tabs.forEach(tab => {
              tab.addEventListener('change', () => {
                // Add delay for outgoing animation
                currentActive.style.transition = 'none';
                currentActive.classList.remove('active');

                // Force reflow to reset animation
                void currentActive.offsetWidth;

                // Get new content
                const targetContent = document.getElementById(tab.dataset.target);
                console.log(targetContent);                
                targetContent.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                targetContent.classList.add('active');
                if (document.body.clientWidth < 1280) {
                      let absoluteTabContainer = document.querySelector('.tab-container');
                      absoluteTabContainer.classList.remove('chaalu');
                      window.location.replace('#menuu');
                    }
                    currentActive = targetContent;
                });
            });
        });


const menu = document.querySelector('.fixed-menu');
const absolutetabcontainer = document.querySelector('.tab-container');

if (menu) { // Check if element exists
  menu.addEventListener('click', () => {
    absolutetabcontainer.classList.toggle('chaalu');
    console.log("done"); // Optional debug log
  });
} else {
  console.error("Error: '.fixed-menu' element not found!");
}

const mobileNavbar = document.querySelector('.mob_nav')
const burger = document.querySelector('.burger')
const lineTwo = document.querySelector('.line_two')
const lineOne = document.querySelector('.line_one')
const lineThree = document.querySelector('.line_three')
const menuAnchor = document.querySelector('.menu_anchor')
const contactAnchor = document.querySelector('.contact_anchor')

burger.addEventListener('click', () => {
  mobileNavbar.classList.toggle('activate')
  lineOne.classList.toggle('hideIt')
  lineTwo.classList.toggle('right_tilt')
  lineThree.classList.toggle('left_tilt')
})

menuAnchor.addEventListener('click', () => {
  window.location.replace('#menu');
  mobileNavbar.classList.toggle('activate')
  lineOne.classList.toggle('hideIt')
  lineTwo.classList.toggle('right_tilt')
  lineThree.classList.toggle('left_tilt')
})

contactAnchor.addEventListener('click', () => {
  window.location.replace('#contact');
  mobileNavbar.classList.toggle('activate')
  lineOne.classList.toggle('hideIt')
  lineTwo.classList.toggle('right_tilt')
  lineThree.classList.toggle('left_tilt')
})
