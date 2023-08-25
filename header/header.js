document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

const tutorials = document.getElementById('tutorials');
tutorials.addEventListener('click', () => {
  const tutorialDp1 = document.getElementById('tutorialDp1');

  tutorialDp1.classList.toggle('active');
});

const uiTrend = document.getElementById('uiTrend');
uiTrend.addEventListener('click', () => {
  const tutorialDp2 = document.getElementById('tutorialDp2');

  tutorialDp2.classList.toggle('active');
});
