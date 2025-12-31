
 window.addEventListener('click', function() {
        const audio = document.getElementById("bgm");
        audio.muted = false;
        audio.play();
    });




window.onload = function () {
    const clock = document.getElementById("clock");

    for (let i = 1; i <= 12; i++) {
        const num = document.createElement("div");
        num.classList.add("number");
        num.innerText = i;

        const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;  // BETULKAN POSISI 12

        const radius = 70;
        const centerX = 70;
        const centerY = 65;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        num.style.left = `${x}px`;
        num.style.top = `${y}px`;

        clock.appendChild(num);
    }
};


function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6; // 360° / 60
  const minuteDeg = minute * 6 + second * 0.1; // minute + fraction of second
  const hourDeg = (hour % 12) * 30 + minute * 0.5; // hour + fraction of minute

  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

// Update setiap saat
setInterval(updateClock, 1000);
updateClock(); // panggil sekali terus
