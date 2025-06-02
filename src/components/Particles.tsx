
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
  glowIntensity: number;
  trail: Array<{x: number, y: number, opacity: number}>;
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
      for (let i = 0; i < 120; i++) {
        const particle: Particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.6,
          opacity: Math.random() * 0.9 + 0.1,
          color: getRandomColor(),
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.03,
          life: 0,
          maxLife: Math.random() * 400 + 300,
          glowIntensity: Math.random() * 0.8 + 0.2,
          trail: [],
        };
        particlesRef.current.push(particle);
      }
    };

    const getRandomColor = () => {
      const colors = [
        'rgba(0, 191, 255, 0.9)',   // Electric Blue
        'rgba(138, 43, 226, 0.9)',  // Blue Violet
        'rgba(255, 20, 147, 0.9)',  // Deep Pink
        'rgba(0, 255, 255, 0.9)',   // Cyan
        'rgba(147, 0, 211, 0.9)',   // Dark Violet
        'rgba(255, 255, 255, 0.8)', // White
        'rgba(75, 0, 130, 0.9)',    // Indigo
        'rgba(255, 0, 255, 0.9)',   // Magenta
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle properties
        particle.life++;
        particle.angle += particle.angleSpeed;
        
        // Add trail effect
        particle.trail.push({x: particle.x, y: particle.y, opacity: particle.opacity});
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }
        
        // Update position with orbital motion
        const orbitRadius = Math.sin(particle.life * 0.008) * 30;
        particle.x += particle.speedX + Math.cos(particle.angle) * 0.15;
        particle.y += particle.speedY + Math.sin(particle.angle) * 0.15;
        
        // Create breathing effect
        const breathe = 1 + Math.sin(particle.life * 0.04) * 0.4;
        const currentSize = particle.size * breathe;
        
        // Create pulsing opacity and glow
        const pulse = 0.3 + Math.sin(particle.life * 0.06) * 0.4;
        const currentOpacity = particle.opacity * pulse;
        const glowSize = currentSize * (2 + particle.glowIntensity * 3);
        
        // Draw particle trail
        particle.trail.forEach((trailPoint, i) => {
          const trailOpacity = (trailPoint.opacity * (i / particle.trail.length)) * 0.3;
          const trailSize = currentSize * (i / particle.trail.length) * 0.5;
          
          if (trailOpacity > 0.01) {
            ctx.beginPath();
            const trailGradient = ctx.createRadialGradient(
              trailPoint.x, trailPoint.y, 0,
              trailPoint.x, trailPoint.y, trailSize * 2
            );
            trailGradient.addColorStop(0, particle.color.replace(/[\d\.]+\)$/g, trailOpacity + ')'));
            trailGradient.addColorStop(1, particle.color.replace(/[\d\.]+\)$/g, '0)'));
            
            ctx.fillStyle = trailGradient;
            ctx.arc(trailPoint.x, trailPoint.y, trailSize * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        // Draw particle outer glow
        ctx.beginPath();
        const outerGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        outerGradient.addColorStop(0, particle.color.replace(/[\d\.]+\)$/g, (currentOpacity * 0.8) + ')'));
        outerGradient.addColorStop(0.3, particle.color.replace(/[\d\.]+\)$/g, (currentOpacity * 0.4) + ')'));
        outerGradient.addColorStop(1, particle.color.replace(/[\d\.]+\)$/g, '0)'));
        
        ctx.fillStyle = outerGradient;
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw particle core
        ctx.beginPath();
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize
        );
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, ' + currentOpacity + ')');
        coreGradient.addColorStop(0.7, particle.color.replace(/[\d\.]+\)$/g, currentOpacity + ')'));
        coreGradient.addColorStop(1, particle.color.replace(/[\d\.]+\)$/g, (currentOpacity * 0.3) + ')'));
        
        ctx.fillStyle = coreGradient;
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset particle if it goes off screen or dies
        if (particle.x > canvas.width + 100) particle.x = -100;
        else if (particle.x < -100) particle.x = canvas.width + 100;
        
        if (particle.y > canvas.height + 100) particle.y = -100;
        else if (particle.y < -100) particle.y = canvas.height + 100;
        
        // Respawn particle after its life ends
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = Math.random() * 400 + 300;
          particle.color = getRandomColor();
          particle.glowIntensity = Math.random() * 0.8 + 0.2;
          particle.trail = [];
        }
      });

      connectParticles(ctx);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 150;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - (distance / maxDistance)) * 0.4;
            
            // Create electric connection
            const gradient = ctx.createLinearGradient(
              particlesRef.current[i].x, particlesRef.current[i].y,
              particlesRef.current[j].x, particlesRef.current[j].y
            );
            gradient.addColorStop(0, `rgba(0, 191, 255, ${opacity})`);
            gradient.addColorStop(0.3, `rgba(138, 43, 226, ${opacity * 1.2})`);
            gradient.addColorStop(0.7, `rgba(255, 20, 147, ${opacity * 1.2})`);
            gradient.addColorStop(1, `rgba(0, 255, 255, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + opacity * 3;
            ctx.shadowColor = 'rgba(0, 191, 255, 0.8)';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
            ctx.shadowBlur = 0;
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
      style={{ opacity: 0.8 }}
    />
  );
};

export default Particles;
