
document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('show');
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.createElement('div');
    darkModeToggle.innerHTML = '<button id="darkModeToggle">Dark Mode</button>';
    darkModeButtonContainer.appendChild(darkModeToggle);

    const darkModeButton = document.getElementById('darkModeToggle');
    const currentMode = localStorage.getItem('darkMode');

    if (currentMode === 'enabled') {
      enableDarkMode();
    }

    darkModeButton.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });