'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <div className='flex flex-col md:flex-row md:gap-5 items-center'>
      <Link href='/' className='text-xl py-2 md:py-0'>Home</Link>
      <Link href='#about' className='text-xl py-2 md:py-0'>About</Link>
      <Link href='/' className='text-xl py-2 md:py-0'>Services</Link>
      <Link href='/' className='text-xl py-2 md:py-0'>Projects</Link>
      <Link href='/' className='text-xl py-2 md:py-0'>Resume</Link>
      <Link href='/' className='text-xl py-2 md:py-0'>Contact</Link>
    </div>
  );

  return (
    <motion.header
      key={isScrolled ? 'scrolled' : 'top'}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`h-20 ${isScrolled ? 'fixed max-md:bg-black/30 max-md:backdrop-blur-2xl top-0 left-0 w-full bg-black/30 backdrop-blur-2xl z-50' : 'max-md:bg-black/30 max-md:backdrop-blur-2xl z-50 fixed  w-full'}  px-5 text-white`}
    >
      <div className='flex justify-between  items-center h-24'>
        <h1 className='text-3xl font-bold'>Ahmed</h1>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-5'>
          {navLinks}
        </div>

        {/* Menu Button */}
        <button
          className='md:hidden text-3xl'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Button on both */}
        <div className='hidden md:block'>
          <button className='w-34 h-12 bg-yellow-500 text-black rounded-md cursor-pointer hover:bg-yellow-600 transition-all duration-300'>
            Project building
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className='md:hidden flex flex-col items-center gap-2 overflow-hidden'
          >
            {navLinks}
            <button className='w-34 h-12 mb-5 bg-yellow-500 text-black rounded-md cursor-pointer hover:bg-yellow-600 transition-all duration-300'>
              Project building
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
