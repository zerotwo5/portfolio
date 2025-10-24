import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Matrix animation configuration
    const fontSize = 16;
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Initialize drops
    const updateDrops = () => {
      const columns = Math.floor(canvas.width / fontSize);
      return Array(columns).fill(1);
    };
    let drops = updateDrops();

    // Animation function
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FFA1';
      ctx.font = `${fontSize}px monospace`;
      
      drops.forEach((drop, i) => {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drop * fontSize;
        
        ctx.fillText(char, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      drops = updateDrops();
    });

    // Start animation
    const animationId = setInterval(drawMatrix, 50);

    // Cleanup
    return () => {
      clearInterval(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ 
        zIndex: 0,
        opacity: 0.7,
        background: 'rgba(0, 0, 0, 0.9)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixBackground;