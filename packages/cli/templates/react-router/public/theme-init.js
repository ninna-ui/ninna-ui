(function () {
  var theme = localStorage.getItem('theme');

  if (!theme || ['dark', 'light', 'system'].indexOf(theme) === -1) {
    theme = 'system';
  }

  document.documentElement.classList.remove('light', 'dark');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.add('light');
  }
})();
