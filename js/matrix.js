const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
image.src = 'images/ava.jpg';

image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const katakana = 'Anh Yêu Em';
    const latin = 'Anh Yêu Em';
    const nums = '04-02-25-01';

    const alphabet = katakana + latin + nums;
    const fontSize = 20;

    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: columns }).fill(canvas.height);

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    let lastClearTime = Date.now();

    const draw = () => {
        const now = Date.now();
        if (now - lastClearTime > 2500) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            lastClearTime = now;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    setInterval(draw, 30);
};