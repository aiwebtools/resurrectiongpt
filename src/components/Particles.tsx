
import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
};

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const isMobileRef = useRef<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        isMobileRef.current = window.innerWidth < 768;
        createParticles();
      }
    };

    const createParticles = () => {
      particlesRef.current = [];
      // Reduce particle count on mobile for better performance
      const particleCount = isMobileRef.current ? 25 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle: Particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isMobileRef.current ? 1.5 : 2) + 0.5,
          speedX: (Math.random() - 0.5) * (isMobileRef.current ? 0.2 : 0.3),
          speedY: (Math.random() - 0.5) * (isMobileRef.current ? 0.2 : 0.3),
          opacity: Math.random() * 0.5 + 0.1,
          color: getRandomColor(),
        };
        particlesRef.current.push(particle);
      }
    };

    const getRandomColor = () => {
      const colors = [
        'rgba(137, 171, 245, 0.7)', // Light blue
        'rgba(162, 155, 254, 0.7)', // Light purple
        'rgba(108, 99, 255, 0.6)',  // Purple
        'rgba(94, 114, 228, 0.6)',  // Blue
        'rgba(255, 255, 255, 0.8)', // White
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
      });

      // Skip connection drawing on mobile for better performance
      if (!isMobileRef.current) {
        connectParticles(ctx);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 100;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(145, 155, 245, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: window.innerWidth < 768 ? 0.4 : 0.6 }}
    />
  );
};

export default Particles;
