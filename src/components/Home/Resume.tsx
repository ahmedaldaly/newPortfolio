'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const Resume = () => {
  const education = [
    {
      id: 1,
      year: '2024 - 2027',
      degree: 'Bachelor of Laws',
      institution: ' Sadat City University',
      description: 'Study Egyptian law.'
    },
    {
      id: 2,
      year: '2023',
      degree: 'Web Development Bootcamp',
      institution: 'Training Institute',
      description: 'Intensive training in modern web development technologies and practices.'
    }
  ]

  const experience = [
    {
      id: 1,
      year: '2023 - Present',
      position: 'Full Stack Developer',
      company: 'Company Name',
      description: 'Developing and maintaining web applications using MERN stack.'
    },
    {
      id: 2,
      year: '2022 - 2023',
      position: 'Frontend Developer',
      company: 'Company Name',
      description: 'Created responsive and interactive user interfaces using React.js.'
    }
  ]

  const skills = {
    technical: [
      { name: 'React.js', level: 90 },
      { name: 'tailwindCss', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Next.js', level: 85 },
      { name: 'Nest.js', level: 75 },
      { name: 'express.js', level: 90 },
      { name: 'Socket.io', level: 80 },
      { name: 'FireBase', level: 70 },
    ],
    soft: [
      { name: 'Problem Solving', level: 70 },
      { name: 'Communication', level: 85 },
      { name: 'Team Work', level: 90 },
      { name: 'Time Management', level: 85 }
    ]
  }

  return (
    <section id="resume" className='w-full min-h-screen  py-20 px-5'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>Resume</h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-8'>
            My academic and professional journey
          </p>
          <motion.a
            href="/ahmed eldaly.pdf"
            download
            className='inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaGraduationCap className='text-3xl text-yellow-500' />
              <h3 className='text-2xl font-bold'>Education</h3>
            </div>
            <div className='space-y-6'>
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='bg-[#2A2C42] p-6 rounded-xl'
                >
                  <span className='text-yellow-500 text-sm'>{item.year}</span>
                  <h4 className='text-xl font-bold mt-2'>{item.degree}</h4>
                  <p className='text-gray-400 mt-1'>{item.institution}</p>
                  <p className='text-gray-400 mt-3'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <FaBriefcase className='text-3xl text-yellow-500' />
              <h3 className='text-2xl font-bold'>Experience</h3>
            </div>
            <div className='space-y-6'>
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='bg-[#2A2C42] p-6 rounded-xl'
                >
                  <span className='text-yellow-500 text-sm'>{item.year}</span>
                  <h4 className='text-xl font-bold mt-2'>{item.position}</h4>
                  <p className='text-gray-400 mt-1'>{item.company}</p>
                  <p className='text-gray-400 mt-3'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mt-20'
        >
          <div className='flex items-center gap-3 mb-10 justify-center'>
            <FaCode className='text-3xl text-yellow-500' />
            <h3 className='text-2xl font-bold'>Skills</h3>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Technical Skills */}
            <div>
              <h4 className='text-xl font-bold mb-6 text-yellow-500'>Technical Skills</h4>
              <div className='space-y-6'>
                {skills.technical.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className='flex justify-between mb-2'>
                      <span className='text-gray-300'>{skill.name}</span>
                      <span className='text-yellow-500'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-[#242537] rounded-full'>
                      <motion.div
                        className='h-full bg-yellow-500 rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className='text-xl font-bold mb-6 text-yellow-500'>Soft Skills</h4>
              <div className='space-y-6'>
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className='flex justify-between mb-2'>
                      <span className='text-gray-300'>{skill.name}</span>
                      <span className='text-yellow-500'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-[#242537] rounded-full'>
                      <motion.div
                        className='h-full bg-yellow-500 rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 