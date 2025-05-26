'use client';

import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const [particleNumber, setParticleNumber] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setParticleNumber(30);  // موبايل: أقل
      } else if (window.innerWidth < 1024) {
        setParticleNumber(60);  // تابلت: متوسط
      } else {
        setParticleNumber(100); // ديسكتوب: كامل
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: '#242537' },
        particles: {
          number: { value: particleNumber },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}
