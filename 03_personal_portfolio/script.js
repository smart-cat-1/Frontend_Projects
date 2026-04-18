const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

if(sunIcon && moonIcon) {
  if (savedTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } 
  else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
   
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme)

  if (newTheme === 'dark') {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } 
  else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}