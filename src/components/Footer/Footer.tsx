'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/ahmedat.efaldaly/',
      color: 'hover:bg-blue-600'
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/ahmed-eldaly-237479340/',
      color: 'hover:bg-blue-500'
    },
    {
      id: 3,
      icon: <FaGithub />,
      href: 'https://github.com/yourusername',
      color: 'hover:bg-gray-700'
    },
    {
      id: 4,
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/ahmed._aldaly/',
      color: 'hover:bg-pink-600'
    }
  ]

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-[#1E1F30] text-white">
      {/* Main Footer */}
      <div className="w-full py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Ahmed Eldaly</h3>
              <p className="text-gray-400">
                Full Stack Developer specializing in MERN stack development and modern web technologies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-[#242537] flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Egypt, Menoufia</li>
                <li>
                  <a href="mailto:ahm3deldlay2@gmail.com" className="hover:text-yellow-500 transition-colors">
                    ahm3deldlay2@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+201017803491" className="hover:text-yellow-500 transition-colors">
                    +20 1017803491
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
         
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-400"
          >
            <p>&copy; {currentYear} Ahmed Eldaly. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 