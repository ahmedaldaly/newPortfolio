'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern technologies',
      icon: <FaCode className="text-4xl" />,
      tech: ['React', 'Next.js', 'TypeScript']
    },
    {
      id: 2,
      title: 'UI/ Development',
      description: 'Creating beautiful and intuitive user interfaces with modern design principles',
      icon: <MdOutlineDesignServices className="text-4xl" />,
      tech: ['Tailwind CSS', 'Framer Motion', 'Material UI']
    },
    {
      id: 3,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs',
      icon: <FaServer className="text-4xl" />,
      tech: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Designing and implementing efficient database structures',
      icon: <FaDatabase className="text-4xl" />,
      tech: ['MongoDB', 'Mongoose']
    },
    {
      id: 5,
      title: 'MERN Stack',
      description: 'Full-stack development using MongoDB, Express, React, and Node.js',
      icon: <SiMongodb className="text-4xl" />,
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      id: 6,
      title: 'Next.js Development',
      description: 'Building fast and SEO-friendly web applications with Next.js',
      icon: <TbBrandNextjs className="text-4xl" />,
      tech: ['Next.js', 'SSR', 'ISR']
    }
  ]

  return (
    <section id="services" className='w-full min-h-screen  py-20 px-5'>
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>My Services</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Providing comprehensive web development solutions using cutting-edge technologies
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#2A2C42] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300'
            >
              <div className='text-yellow-500 mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
              <p className='text-gray-400 mb-4'>{service.description}</p>
              <div className='flex flex-wrap gap-2'>
                {service.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className='bg-[#242537] px-3 py-1 rounded-full text-sm text-yellow-500'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services