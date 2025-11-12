// Get the menu icon and navigation links container
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle mobile menu visibility and icon symbol on click
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Set the current year in the footer automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Get the welcome text container and define the message
const container = document.getElementById("welcome-text");
const message = "👋 Welcome! I’m Basanta Saru 🙋.";
let i = 0;

// Typewriter effect: types one character at a time
function typeWriter() {
  if (i < message.length) {
    container.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 30); // Delay between characters
  } else {
    highlightName(); // After typing, style the name
  }
}

// Highlight "Basanta Saru" with a special span style
function highlightName() {
  const text = container.textContent;
  const styled = text.replace("Basanta Saru", '<span class="name">Basanta Saru</span>');
  container.innerHTML = styled;
}

// Start the typewriter animation when the page loads
window.onload = typeWriter;