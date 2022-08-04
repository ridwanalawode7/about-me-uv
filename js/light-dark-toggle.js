//Let's Start

//Dark Mode Functionality
const clrSchmBtn = document.getElementById('clr-schm-btn');
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('ridBioTheme');

if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme');
} else if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme');
}

clrSchmBtn.addEventListener('click', () => {
  if (prefersDarkTheme.matches) {
    document.body.classList.toggle('light-theme');
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';
  } else {
    document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';
  }
  localStorage.setItem('ridBioTheme', theme);
});

clrSchmBtn.addEventListener('keydown', (e) => {
  console.log('working');
  if (e.keyCode == 13) {
    clrSchmBtn.click();
  }
});

clrSchmBtn.addEventListener('keydown', (e) => {
  console.log('working');
  if ((e.keyCode == 13)) {
    clrSchmBtn.click();
  }
});
