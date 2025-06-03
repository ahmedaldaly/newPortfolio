'use client';

import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const [particleNumber, setParticleNumber] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setParticleNumber(15);
      } else if (window.innerWidth < 1024) {
        setParticleNumber(30);
      } else {
        setParticleNumber(50);
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
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { 
            enable: true, 
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" }
          },
          links: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.2,
            width: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 70 },
            push: { quantity: 2 },
          },
        },
        fpsLimit: 30,
      }}
    />
  );
}
