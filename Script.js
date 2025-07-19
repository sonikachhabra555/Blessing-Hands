// Show an alert when someone clicks any nav link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    alert('Thank you for visiting Blessing Hands Animal Welfare!');
  });
});
