// Matrix Rain Animation
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 24;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#4AA253';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(drawMatrixRain);
}

drawMatrixRain();

// Text Typing Animation
const matrixText = document.getElementById('matrixText');
const text = "Hello, I am Levani, a programmer. On this website, you can explore my personal portfolio and projects. My goal is to apply new technologies and develop unique solutions. I work with HTML, CSS, JavaScript, React, and other technologies. If you're interested, don't hesitate to reach out and connect with me!";
matrixText.textContent = text;
