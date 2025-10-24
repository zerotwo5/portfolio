// Initialize matrix animation when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    // Characters to display
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    
    // Function to update drops when canvas size changes
    const updateDrops = () => {
        const columns = Math.floor(canvas.width / fontSize);
        return Array(columns).fill(1);
    };

    let drops = updateDrops();

    function drawMatrix() {
        // Black background with slight opacity for fading effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text color and font
        ctx.fillStyle = '#00FFA1';
        ctx.font = `${fontSize}px monospace`;

        // Loop through each column
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to the top randomly or move it down
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        drops = updateDrops();
    });

    // Start the animation
    setInterval(drawMatrix, 50);
});