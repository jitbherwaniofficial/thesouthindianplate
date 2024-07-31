document.addEventListener('DOMContentLoaded', function() {
 // MENU //
const burger = document.getElementById("burger");
const nav_mob = document.getElementById("nav_mob");
const navLinks =  document.querySelectorAll(".nav_link")

  function navigateToSection(id) {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute('href');
      const newUrl = targetId.replace('#', '/');

      // Use History API to update the URL without reloading the page
      history.pushState(null, null, newUrl);

      // Navigate to the section
      navigateToSection(targetId);

      // Remove active class from nav_mob and burger
      nav_mob.classList.remove('active');
      burger.classList.remove('active');
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

  // Handle back/forward navigation
  window.addEventListener('popstate', function() {
    const path = window.location.pathname;
    const sectionId = '#' + path.split('/')[1];
    navigateToSection(sectionId);
  });

  // Handle initial load
  const initialPath = window.location.pathname;
  if (initialPath !== '/') {
    const initialSectionId = '#' + initialPath.split('/')[1];
    navigateToSection(initialSectionId);
  }
});


