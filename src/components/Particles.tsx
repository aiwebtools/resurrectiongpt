
import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  angle: number;
  angleSpeed: number;
  life: number;
  maxLife: number;
};

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 80; i++) {
        const particle: Particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.8 + 0.2,
          color: getRandomColor(),
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          life: 0,
          maxLife: Math.random() * 300 + 200,
        };
        particlesRef.current.push(particle);
      }
    };

    const getRandomColor = () => {
      const colors = [
        'rgba(139, 92, 246, 0.8)',  // Purple
        'rgba(236, 72, 153, 0.8)',  // Pink
        'rgba(59, 130, 246, 0.8)',  // Blue
        'rgba(147, 51, 234, 0.8)',  // Violet
        'rgba(255, 255, 255, 0.9)', // White
        'rgba(168, 85, 247, 0.8)',  // Purple variant
        'rgba(219, 39, 119, 0.8)',  // Deep pink
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle properties
        particle.life++;
        particle.angle += particle.angleSpeed;
        
        // Add orbital motion
        const orbitRadius = Math.sin(particle.life * 0.01) * 20;
        particle.x += particle.speedX + Math.cos(particle.angle) * 0.1;
        particle.y += particle.speedY + Math.sin(particle.angle) * 0.1;
        
        // Create breathing effect
        const breathe = 1 + Math.sin(particle.life * 0.05) * 0.3;
        const currentSize = particle.size * breathe;
        
        // Create pulsing opacity
        const pulse = 0.5 + Math.sin(particle.life * 0.08) * 0.3;
        const currentOpacity = particle.opacity * pulse;
        
        // Draw particle with glow effect
        ctx.beginPath();
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.4, particle.color.replace(/[\d\.]+\)$/g, (currentOpacity * 0.6) + ')'));
        gradient.addColorStop(1, particle.color.replace(/[\d\.]+\)$/g, '0)'));
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.beginPath();
        ctx.fillStyle = particle.color.replace(/[\d\.]+\)$/g, currentOpacity + ')');
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset particle if it goes off screen or dies
        if (particle.x > canvas.width + 50) particle.x = -50;
        else if (particle.x < -50) particle.x = canvas.width + 50;
        
        if (particle.y > canvas.height + 50) particle.y = -50;
        else if (particle.y < -50) particle.y = canvas.height + 50;
        
        // Respawn particle after its life ends
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = Math.random() * 300 + 200;
          particle.color = getRandomColor();
        }
      });

      connectParticles(ctx);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 120;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - (distance / maxDistance)) * 0.3;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particlesRef.current[i].x, particlesRef.current[i].y,
              particlesRef.current[j].x, particlesRef.current[j].y
            );
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 1.5})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + opacity * 2;
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
      style={{ opacity: 0.7 }}
    />
  );
};

export default Particles;
