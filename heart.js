const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
    "#ff0000",
    "#ff00ff",
    "#00ffff",
    "#00ff00",
    "#ffff00",
    "#ff8800",
    "#ffffff",
    "#00aaff",
    "#ff66cc"
];

let points = [];

// Heart points
for (let t = 0; t <= Math.PI * 2; t += 0.02) {

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    points.push({
        x: x * 22,
        y: -y * 22
    });
}

function drawSparkle(x, y, color) {

    ctx.strokeStyle = color;

    for (let i = 0; i < 8; i++) {

        const angle = Math.PI / 4 * i;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
            x + Math.cos(angle) * 6,
            y + Math.sin(angle) * 6
        );
        ctx.stroke();
    }
}

let i = 0;

function animate() {

    if (i >= points.length) return;

    const p = points[i];

    const color = colors[Math.floor(Math.random() * colors.length)];

    // Glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;

    // Draw line from center
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(canvas.width / 2, canvas.height / 2 + 30);
    ctx.lineTo(
        canvas.width / 2 + p.x,
        canvas.height / 2 + p.y
    );
    ctx.stroke();

    drawSparkle(
        canvas.width / 2 + p.x,
        canvas.height / 2 + p.y,
        color
    );

    i++;

    requestAnimationFrame(animate);
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

animate();