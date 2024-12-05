// Placeholder for 3D logo using Three.js
const logoCanvas = document.getElementById('logoCanvas');
// TODO: Add Three.js logo rendering.

// Placeholder for Sandbox Canvas
const sandboxCanvas = document.getElementById('sandboxCanvas');
const ctx = sandboxCanvas.getContext('2d');
sandboxCanvas.width = sandboxCanvas.height = 500;

// Simple Animation Example
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
drawSandbox();
