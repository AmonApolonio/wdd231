const navLinks = document.querySelectorAll('nav a');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
const currentLocation = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentLocation) {
      link.parentElement.classList.add('active');
  }
});

mobileNavLinks.forEach(link => {
  if (link.href === currentLocation) {
      link.parentElement.classList.add('active');
  }
});
