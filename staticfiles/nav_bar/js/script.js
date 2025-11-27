const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggle.classList.toggle('open'); // adiciona ou remove o "X"
});
