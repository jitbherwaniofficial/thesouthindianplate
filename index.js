const nav = document.getElementById("nav");

window.onscroll = function () {
  let top = window.scrollY;
  if (top > 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

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
    });
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
