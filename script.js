const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// დააყენეთ ტილოს ზომა ფანჯრის ზომის მიხედვით
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// სიმბოლოების სია
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 20; // სიმბოლოს ზომა
const columns = Math.floor(canvas.width / fontSize); // კოლონების რაოდენობა
const drops = Array(columns).fill(0); // თითოეული კოლონის სიმაღლე

// სიჩქარის კონტროლი (სიჩქარე დააყენეთ 1-ზე დაბალი)
const speedFactor = 0.5; // ნელა მოძრაობისთვის გამოიყენეთ 0.1-დან 0.5-მდე

// ანიმაციის ფუნქცია
function drawMatrixRain() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // ნახევრად გამჭვირვალე შავი ფონზე
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#4AA253'; // მწვანე ტექსტი
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    const x = i * fontSize; // X კოორდინატი
    const y = drops[i] * fontSize; // Y კოორდინატი

    ctx.fillText(text, x, y);

    // თუ სიმბოლოები ფანჯრის ქვემოთ ჩავა, დააბრუნეთ დასაწყისში
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // სიჩქარის კონტროლი
    drops[i] += speedFactor; // გადაადგილება ნელდება speedFactor-ის მიხედვით
  }

  requestAnimationFrame(drawMatrixRain);
}

// დააწყვეთ ანიმაცია
drawMatrixRain();
