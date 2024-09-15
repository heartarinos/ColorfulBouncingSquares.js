// Create and style the canvas element
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '1000';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Animation settings
const numSquares = 100;
const squares = [];

// Create squares with random positions and colors
for (let i = 0; i < numSquares; i++) {
    squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 10,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    squares.forEach(square => {
        // Move squares
        square.x += square.dx;
        square.y += square.dy;

        // Bounce off edges
        if (square.x < 0 || square.x + square.size > canvas.width) square.dx *= -1;
        if (square.y < 0 || square.y + square.size > canvas.height) square.dy *= -1;

        // Draw the square
        ctx.fillStyle = square.color;
        ctx.fillRect(square.x, square.y, square.size, square.size);
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();
