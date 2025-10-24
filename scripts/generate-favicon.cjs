const { createCanvas } = require('canvas');
const fs = require('fs');

// Create canvas
const canvas = createCanvas(32, 32);
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

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/favicon.png', buffer);
console.log('Favicon generated successfully!');