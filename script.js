// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll indicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentageScrolled = (window.scrollY / maxScroll) * 100;
    scrollIndicator.style.width = `${percentageScrolled}%`;
});

// Interactive canvas color change
const logoCanvas = document.getElementById('logoCanvas');
const logoCtx = logoCanvas.getContext('2d');
logoCanvas.width = 200;
logoCanvas.height = 50;
let colors = ['#0ff', '#f00', '#0f0', '#ff0', '#00f'];
let colorIndex = 0;

function drawLogo() {
    logoCtx.fillStyle = colors[colorIndex];
    logoCtx.fillRect(0, 0, logoCanvas.width, logoCanvas.height);
}
logoCanvas.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    drawLogo();
});
drawLogo();
