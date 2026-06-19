const toggle = document.getElementById('themeToggle');
const body = document.body;
const icon = document.getElementById('themeIcon');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-fill');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
  }
});

