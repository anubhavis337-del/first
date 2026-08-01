const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function butterflyPoint(a){

    const flap = Math.sin(t) * 0.35;

    const r = Math.exp(Math.cos(a))
            -2*Math.cos(4*a)
            +Math.pow(Math.sin((2*a-Math.PI)/24),5);

    return {
        x: r*Math.sin(a)*(180+flap*60),
        y: -r*Math.cos(a)*180
    };
}

function draw(){

    ctx.fillStyle="rgba(5,5,15,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);

    for(let a=0;a<Math.PI*2;a+=0.02){

        const p = butterflyPoint(a);

        const hue = (a*180/Math.PI*3+t*120)%360;

        ctx.beginPath();
        ctx.fillStyle=`hsl(${hue},100%,65%)`;
        ctx.shadowBlur=18;
        ctx.shadowColor=`hsl(${hue},100%,65%)`;
        ctx.arc(p.x,p.y,2.5,0,Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle=`hsla(${hue},100%,70%,0.35)`;
        ctx.moveTo(0,0);
        ctx.lineTo(p.x,p.y);
        ctx.stroke();
    }

    // Body
    ctx.shadowBlur=20;
    ctx.shadowColor="#ffffff";
    ctx.fillStyle="white";

    ctx.beginPath();
    ctx.roundRect(-6,-80,12,160,10);
    ctx.fill();

    // Antennae
    ctx.beginPath();
    ctx.moveTo(-3,-80);
    ctx.quadraticCurveTo(-25,-120,-10,-145);
    ctx.moveTo(3,-80);
    ctx.quadraticCurveTo(25,-120,10,-145);
    ctx.strokeStyle="white";
    ctx.lineWidth=2;
    ctx.stroke();

    ctx.restore();

    t += 0.05;

    requestAnimationFrame(draw);
}

draw();