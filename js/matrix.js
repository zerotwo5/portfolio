/* Matrix rain animation. Used on the home page (hero) and the certificate page. */
function initMatrix(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const fontSize = 16;
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
  }

  function draw() {
    // Slightly transparent black layer creates the fading trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FFA1";
    ctx.font = fontSize + "px monospace";

    drops.forEach((drop, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const y = drop * fontSize;
      ctx.fillText(char, i * fontSize, y);

      // Restart the drop from the top (randomly) after it leaves the screen
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  resize();
  window.addEventListener("resize", resize);
  setInterval(draw, 50);
}
