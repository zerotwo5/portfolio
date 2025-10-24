const canvas = document.createElement('canvas');
canvas.width = 32;
canvas.height = 32;
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 32, 32);

// Draw terminal prompt
ctx.fillStyle = '#00FFA1';
ctx.strokeStyle = '#00FFA1';
ctx.lineWidth = 2;

// Terminal window outline
ctx.strokeRect(4, 4, 24, 24);

// Command prompt symbol >_
ctx.font = 'bold 14px monospace';
ctx.fillText('>_', 8, 20);

// Export as PNG
canvas.toBlob((blob) => {
  const a = document.createElement('a');
  a.download = 'favicon.png';
  a.href = URL.createObjectURL(blob);
  a.click();
});