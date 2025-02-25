console.log("Har Har Mahadev");

gsap.to(".hero_lines span", {
  y: 0,
  stagger: 0.2,
  duration: 1,
});

// const swiper = new Swiper(".swiper-container", {
//   grabCursor: true, // Enable grab effect
//   loop: false, // Enable continuous loop mode
//   spaceBetween: -80, // Space between slides
//   breakpoints: {
//     1366: {
//       spaceBetween: 50,
//     },
//     1280: {
//       spaceBetween: 50,
//     },
//     1024: {
//       spaceBetween: 50,
//     },
//     768: {
//       spaceBetween: 40,
//     },
//     450: {
//       spaceBetween: 40,
//     },
//     400: {
//       spaceBetween: 40,
//     },
//     375: {
//       spaceBetween: 40,
//     },
//     360: {
//       spaceBetween: 40,
//     },
//   },
//   slidesPerView: 1, // Number of slides to show at once
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true, // Make pagination bullets clickable
//   },
//   navigation: {
//     nextEl: ".swiper-button-next", // Navigation arrows
//     prevEl: ".swiper-button-prev",
//   },
// });

// Get all the pill elements
const pills = document.querySelectorAll("button.pill");

// Initialize Swiper with slide change listener
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 40, // Space between slides
  grabCursor: true, // Enable grab effect
    breakpoints: {
    1366: {
      spaceBetween: 50,
    },
    1280: {
      spaceBetween: 50,
    },
    1024: {
      spaceBetween: 50,
    },
    768: {
      spaceBetween: 40,
    },
    450: {
      spaceBetween: 40,
    },
    400: {
      spaceBetween: 40,
    },
    375: {
      spaceBetween: 40,
    },
    360: {
      spaceBetween: 40,
    },
  },
  on: {
    slideChange: function() {
      const activeIndex = this.activeIndex;
      // Update active state of pills
      pills.forEach(pill => {
        const pillIndex = parseInt(pill.dataset.slide);
        pill.classList.toggle('active', pillIndex === activeIndex);
      });
    }
  }
});


// Pill click handlers
pills.forEach(pill => {
  pill.addEventListener('click', (e) => {
    e.preventDefault();
    swiper.slideTo(parseInt(pill.dataset.slide));
  });
});

// Arrow navigation handlers
document.querySelectorAll('.second_section_arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    const isPrev = arrow.querySelector('.prev');
    isPrev ? swiper.slidePrev() : swiper.slideNext();
  });
});


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