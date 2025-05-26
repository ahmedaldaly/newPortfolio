'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with MERN stack',
      image: '/projects/ecommerce.jpg',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ahmedaldaly/ecommerce-app',
      live: 'https://ecommerce-demo.com',
      features: [
        'User authentication',
        'Product management',
        'Shopping cart',
        'Payment integration'
      ]
    },
    {
      id: 2,
      title: 'Restaurant webside',
      description: 'Restaurant platform fully developed by Mern Technology',
      image: '/projects/dashboard.jpg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'express js ','MongoDB'],
      github: 'https://github.com/ahmedaldaly/restaurant',
      live: 'https://dashboard-demo.com',
      features: [
        'User authentication',
        'Product management',
        'Shopping cart',
      ]
    },
    {
      id: 3,
      title: 'Hotel platform',
      description: 'Webside Hotel is fully developed by Mern Technology.',
      image: '/project/hotel.png',
      tech: ['Next js', 'Tailwind css', 'express.js', 'MongoDB'],
      github: 'https://github.com/ahmedaldaly/hotel',
      live: 'https://hotel-six-wheat.vercel.app/en',
      features: [
        'User authentication',
        'Reservations Management',
        'Room Management',
      ]
    },
    {
      id: 4,
      title: 'Press platform',
      description: 'Webside Press is fully developed by Express js and MongoDB..',
      image: '/projects/taskapp.jpg',
      tech: [ 'express.js', 'MongoDB' ,'Joi'],
      github: 'https://github.com/ahmedaldaly/task',
      features: [
        'User authentication',
        'News management',
      ]
    },
    {
      id: 5,
      title: 'Book Store',
      description: 'Webside Book Store is fully developed by Express js and MongoDB..',
      image: '/projects/taskapp.jpg',
      tech: [ 'express.js', 'MongoDB' ,'Joi'],
      github: 'https://github.com/ahmedaldaly/bookstorenode',
      features: [
        'User authentication',
        'Books management',
      ]
    }
  ]

  return (
    <section id="projects" className='w-full min-h-screen bg-[#242537] py-20 px-5'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>Featured Projects</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Showcase of my recent work and projects
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-[#2A2C42] rounded-xl overflow-hidden'
            >
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Project Image */}
                <div className='relative  overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Project Info */}
                <div className='p-6 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                    <p className='text-gray-400 mb-4'>{project.description}</p>
                    
                    {/* Features */}
                    <div className='mb-6'>
                      <h4 className='text-yellow-500 font-bold mb-2'>Key Features:</h4>
                      <ul className='list-disc list-inside text-gray-400 space-y-1'>
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className='bg-[#242537] px-3 py-1 rounded-full text-sm text-yellow-500'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className='flex gap-4'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 bg-[#242537] px-4 py-2 rounded-full text-sm hover:bg-yellow-500 hover:text-black transition-colors'
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.live && <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm hover:bg-yellow-600 transition-colors'
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>}
                   
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 