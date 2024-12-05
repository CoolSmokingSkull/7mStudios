// Interactive 3D logo using Three.js (placeholder)
const logoCanvas = document.getElementById('logoCanvas');
// TODO: Add Three.js rendering logic for 3D logo.

// Interactive sandbox
const sandboxCanvas = document.getElementById('sandboxCanvas');
const ctx = sandboxCanvas.getContext('2d');
sandboxCanvas.width = sandboxCanvas.height = 500;

let angle = 0;
function drawSandbox() {
    ctx.clearRect(0, 0, sandboxCanvas.width, sandboxCanvas.height);
    ctx.save();
    ctx.translate(sandboxCanvas.width / 2, sandboxCanvas.height / 2);
    ctx.rotate(angle);
    ctx.fillStyle = '#0ff';
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();
    angle += 0.01;
    requestAnimationFrame(drawSandbox);
}

// Drag-and-drop functionality (example)
let dragging = false;
sandboxCanvas.addEventListener('mousedown', () => (dragging = true));
sandboxCanvas.addEventListener('mouseup', () => (dragging = false));
sandboxCanvas.addEventListener('mousemove', (e) => {
    if (dragging) {
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.fillRect(e.offsetX - 10, e.offsetY - 10, 20, 20);
    }
});

drawSandbox();
