const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let angle = 0;

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    for (let i = 0; i < 180; i++) {

        ctx.save();

        ctx.rotate(i * Math.PI / 90);

        let r = 220 + 40 * Math.sin(angle * 2 + i);

        let x = Math.cos(i * 0.18 + angle) * r;
        let y = Math.sin(i * 0.18 + angle) * r;

        let hue = (i * 4 + angle * 150) % 360;

        ctx.strokeStyle = `hsl(${hue},100%,60%)`;
        ctx.shadowColor = `hsl(${hue},100%,60%)`;
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue},100%,70%)`;
        ctx.fill();

        ctx.restore();
    }

    ctx.restore();

    angle += 0.01;

    requestAnimationFrame(draw);
}

draw();