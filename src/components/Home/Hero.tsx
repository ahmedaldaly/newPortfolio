'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"

const Hero = () => {
    const content = [
        {
            id:1,
            name:'Email',
            link:'mailto:ahm3deldlay2@gmail.com',
            address:'ahm3deldlay2@gmail.com'
        },
        {
            id:2,
            name:'Phone',
            link:'https://wa.me/201017803491',
            address:'+20 1017803491'
        },
        {
            id:3,
            name:'Location',
            link:'https://maps.app.goo.gl/oRMao2X9YP9pGDrv9',
            address:'Egypt, Menoufia'
        }
    ]

    const social = [
        {
            id: 1,
            link: 'https://www.facebook.com/ahmedat.efaldaly/',
            icon: <FaFacebookF />,
            bg: 'bg-[#1877F2] hover:bg-[#0d65da]' // Facebook blue
        },
        {
            id: 2,
            link: 'https://wa.me/201017803491',
            icon: <TbBrandWhatsappFilled />,
            bg: 'bg-[#25D366] hover:bg-[#20bd5a]' // WhatsApp green
        },
        {
            id: 3,
            link: 'https://www.instagram.com/ahmed._aldaly/',
            icon: <BiLogoInstagram />,
            bg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90' // Instagram gradient
        },
        {
            id: 4,
            link: 'https://www.linkedin.com/in/ahmed-eldaly-237479340/',
            icon: <FaLinkedinIn />,
            bg: 'bg-[#0A66C2] hover:bg-[#094d92]' // LinkedIn blue
        }
    ]

    // Animation logic
    const titles = ["I'm Software Engineer", "Full Stack Developer"]
    const [currentTitle, setCurrentTitle] = useState('')
    const [titleIndex, setTitleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const fullTitle = titles[titleIndex]
        if (charIndex < fullTitle.length) {
            const timeout = setTimeout(() => {
                setCurrentTitle(prev => prev + fullTitle[charIndex])
                setCharIndex(prev => prev + 1)
            }, 100) // typing speed
            return () => clearTimeout(timeout)
        } else {
            const switchTimeout = setTimeout(() => {
                setTitleIndex(prev => (prev + 1) % titles.length)
                setCurrentTitle('')
                setCharIndex(0)
            }, 2000) // wait before switching
            return () => clearTimeout(switchTimeout)
        }
    }, [charIndex, titleIndex, titles])

    return (
        <div className='w-full max-md:pt-22 min-h-auto items-center max-md:justify-center flex justify-evenly gap-20 max-lg:gap-3 flex-wrap'>
            <div>
                <motion.p
                    initial={{ opacity: 0, x: '-100%' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl'
                > 
                    - I Am Ahmed Eldaly
                </motion.p>
                <h1 className='text-5xl max-lg:text-4xl my-5 font-bold'>
                    {currentTitle}
                    <span className='animate-pulse'>|</span>
                </h1>
                <div className='content flex flex-wrap items-center gap-5'>
                    {content.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            key={item.id}
                        >
                            <h3 className='my-2'>{item.name} :</h3>
                            <a className='' href={item.link}>{item.address}</a>
                        </motion.div>
                    ))}
                </div>
                <div className='content flex items-center my-10 gap-5'>
                    {social.map((item, i) => (
                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-16 text-2xl flex justify-center items-center rounded-xl cursor-pointer hover:scale-110 duration-200 h-16 text-white ${item.bg}`}
                            key={item.id}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
            <div>
                <motion.img
                    initial={{ opacity: 0, x: '100%' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    src="/الدالي 123.png"
                    className='relative top-0 max-xl:h-[60vh] h-[90vh] image'
                    alt="Hero"
                />
            </div>
        </div>
    )
}

export default Hero
