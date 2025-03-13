const navLinks = document.querySelectorAll('nav a');
const currentLocation = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentLocation) {
      link.parentElement.classList.add('active');
  }
});
