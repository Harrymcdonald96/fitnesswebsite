document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('visible');
  });
  
  // Close menu when clicking outside of it
  document.addEventListener('click', (event) => {
      if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
          mobileMenu.classList.remove('visible');
      }
  });
});
