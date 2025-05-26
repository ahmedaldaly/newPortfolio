'use client'

import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import About from '@/components/Home/About';
import Projects from '@/components/Home/Projects';
import Resume from '@/components/Home/Resume';
import Contact from '@/components/Home/Contact';
import Footer from '@/components/Footer/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import React from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className="relative min-h-[120vh]">
      {/* background particles */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>

      {/* main content */}
      <div className="relative z-10 overflow-hidden text-white">
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
