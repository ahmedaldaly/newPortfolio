'use client'

import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import React from 'react'

const Hero = dynamic(() => import('@/components/Home/Hero'), { ssr: true })
const Services = dynamic(() => import('@/components/Home/Services'), { ssr: false })
const About = dynamic(() => import('@/components/Home/About'), { ssr: false })
const Projects = dynamic(() => import('@/components/Home/Projects'), { ssr: false })
const Resume = dynamic(() => import('@/components/Home/Resume'), { ssr: false })
const Contact = dynamic(() => import('@/components/Home/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: true })
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

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
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <About />
          <Services />
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}
