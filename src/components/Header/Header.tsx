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
    <div className='flex flex-col md:flex-row md:gap-6 items-center'>
      <Link href='/' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>Home</Link>
      <Link href='#about' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>About</Link>
      <Link href='/#services' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>Services</Link>
      <Link href='/#projects' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>Projects</Link>
      <Link href='/#resume' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>Resume</Link>
      <Link href='/#contact' className='text-lg py-3 w-full text-center md:w-auto md:py-0 hover:text-yellow-400 transition-colors'>Contact</Link>
    </div>
  );

  return (
    <motion.header
      key={isScrolled ? 'scrolled' : 'top'}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-md:bg-[#242537]/50 max-md:backdrop-blur-2xl fixed top-0 left-0 w-full z-50 px-5 text-white ${isScrolled ? 'bg-[#242537]/50 backdrop-blur-2xl' : 'bg-transparent'}`}
    >
      <div className='flex justify-between items-center h-20 max-w-7xl mx-auto'>
        <h1 className='text-2xl md:text-3xl font-bold'>Ahmed</h1>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6'>
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

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <button className='px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition duration-300'>
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
            className='md:hidden flex flex-col items-center  w-full overflow-hidden'
          >
            {navLinks}
            <div className='w-full flex justify-center py-4'>
              <button className='px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition duration-300'>
                Project building
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
