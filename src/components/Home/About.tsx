'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Git/GitHub',
    'RESTful APIs',
    'Responsive Design',
  ]

  const timeline = [
    {
      id: 1,
      year: '2023 - Present',
      title: 'Full Stack Developer',
      description: 'Working on various web development projects using MERN stack',
      icon: <MdWork className="text-2xl" />
    },
    {
      id: 2,
      year: '2022 - Present',
      title: 'Frontend Developer',
      description: 'Specialized in creating responsive and interactive user interfaces',
      icon: <FaLaptopCode className="text-2xl" />
    },
    {
      id: 3,
      year: '2023 - Present',
      title: 'Web Development Training',
      description: 'Intensive training in modern web development technologies',
      icon: <FaCode className="text-2xl" />
    },
  ]

  return (
    <section id="about" className="w-full min-h-screen">
      <div className="w-full px-4 md:px-20 mx-auto bg-[#242537] py-10 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-yellow-500">My Journey</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              As a Full Stack Developer, I specialize in building modern web applications using the MERN stack. 
              With a strong foundation in both frontend and backend development, I create seamless, user-friendly 
              experiences that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              My passion for coding and problem-solving drives me to continuously learn and adapt to new technologies. 
              I believe in writing clean, maintainable code and following best practices in software development.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-yellow-500">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#2A2C42] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-gray-300 text-sm md:text-base"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-20 px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-6 md:mb-8 text-center">
            Experience & Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#2A2C42] p-4 md:p-6 rounded-xl relative flex items-start gap-3 md:gap-4"
              >
                <div className="bg-yellow-500 p-2 md:p-3 rounded-full shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs md:text-sm text-yellow-500">{item.year}</span>
                  <h4 className="text-base md:text-lg font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About