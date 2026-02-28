(function () {
  var theme = localStorage.getItem('theme');
  var preset = localStorage.getItem('theme-preset') || 'default';

  if (!theme || ['dark', 'light', 'system'].indexOf(theme) === -1) {
    theme = 'system';
  }

  document.documentElement.classList.remove('light', 'dark');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.add('light');
  }

  document.documentElement.setAttribute('data-theme', preset);
})();
