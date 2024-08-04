import React, { useEffect, useRef } from 'react';
import styles from './Starfield.module.css';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const stars = [];

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Retrieve the star color from CSS variables
      const starColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--star-color').trim();
      
      // Apply the star color
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();
        ctx.closePath();
        star.x += star.speed;
        if (star.x > canvas.width) {
          star.x = 0;
        }
      });

      requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    drawStars();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} id="effect"></canvas>
    </div>
  );
};

export default Starfield;
