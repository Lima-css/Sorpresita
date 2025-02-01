document.addEventListener("DOMContentLoaded", function () {
    const emojis = ['😍', '🥰', '😘', '💖', '💗'];
    
    function crearConfeti() {
        for (let i = 0; i < 50; i++) {
            let emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'absolute';
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.top = '-5vh';
            emoji.style.fontSize = '2rem';
            emoji.style.animation = `caer ${Math.random() * 2 + 3}s linear infinite`;
            document.body.appendChild(emoji);
        }
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes caer {
            from { transform: translateY(-10vh); }
            to { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);

    crearConfeti();
});


