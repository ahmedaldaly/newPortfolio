import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import ParticlesBackground from '@/components/ParticlesBackground';
import React from 'react';

const Page = () => {
  return (
    <main className="relative min-h-[120vh]">
      {/* background particles */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>

      {/* main content */}
      <div className="relative z-10  overflow-hidden text-white">
       <Hero/>
       <Services/>
      </div>
    </main>
  );
};

export default Page;
