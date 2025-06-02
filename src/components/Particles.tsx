
import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  glowIntensity: number;
  pulsePhase: number;
};

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

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
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: getRandomDivineColor(),
          glowIntensity: Math.random() * 20 + 10,
          pulsePhase: Math.random() * Math.PI * 2,
        };
        particlesRef.current.push(particle);
      }
    };

    const getRandomDivineColor = () => {
      const colors = [
        'rgba(255, 255, 255, 0.9)',     // Divine white
        'rgba(139, 92, 246, 0.8)',     // Sacred purple
        'rgba(236, 72, 153, 0.7)',     // Mystical pink
        'rgba(168, 85, 247, 0.8)',     // Royal purple
        'rgba(236, 252, 203, 0.6)',    // Ethereal light green
        'rgba(254, 240, 138, 0.7)',    // Golden divine
        'rgba(196, 181, 253, 0.8)',    // Lavender mystical
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      timeRef.current += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Create divine glow effect
        const glowSize = particle.size + Math.sin(timeRef.current + particle.pulsePhase) * 2;
        const glowOpacity = particle.opacity * (0.5 + Math.sin(timeRef.current + particle.pulsePhase) * 0.3);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize * 3
        );
        gradient.addColorStop(0, particle.color.replace(/[\d\.]+\)$/g, `${glowOpacity})`));
        gradient.addColorStop(0.3, particle.color.replace(/[\d\.]+\)$/g, `${glowOpacity * 0.5})`));
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner particle
        ctx.fillStyle = particle.color.replace(/[\d\.]+\)$/g, `${particle.opacity})`);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Divine floating movement
        particle.x += particle.speedX + Math.sin(timeRef.current + index) * 0.2;
        particle.y += particle.speedY + Math.cos(timeRef.current + index) * 0.2;
        
        // Wrap around screen with divine transition
        if (particle.x > canvas.width + 50) particle.x = -50;
        else if (particle.x < -50) particle.x = canvas.width + 50;
        
        if (particle.y > canvas.height + 50) particle.y = -50;
        else if (particle.y < -50) particle.y = canvas.height + 50;
        
        // Update opacity with divine breathing
        particle.opacity = 0.3 + Math.sin(timeRef.current + particle.pulsePhase) * 0.4;
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
            const opacity = (1 - (distance / maxDistance)) * 0.3;
            const gradient = ctx.createLinearGradient(
              particlesRef.current[i].x, particlesRef.current[i].y,
              particlesRef.current[j].x, particlesRef.current[j].y
            );
            
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + Math.sin(timeRef.current) * 0.5;
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
      style={{ opacity: 0.8 }}
    />
  );
};

export default Particles;
