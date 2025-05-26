'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'ahm3deldlay2@gmail.com',
      link: 'mailto:ahm3deldlay2@gmail.com'
    },
    {
      id: 2,
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      value: '+20 1017803491',
      link: 'tel:+201017803491'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      value: 'Egypt, Menoufia',
      link: 'https://maps.app.goo.gl/oRMao2X9YP9pGDrv9'
    }
  ]

  return (
    <section id="contact" className='w-full min-h-screen  py-20 px-5'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Feel free to contact me for any work or suggestions
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-[#2A2C42] p-8 rounded-xl'
          >
            <h3 className='text-2xl font-bold mb-6'>Send Message</h3>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-400 mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-3 bg-[#242537] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-400 mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 bg-[#242537] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-400 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  className='w-full px-4 py-3 bg-[#242537] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-medium hover:bg-yellow-600 transition-colors'
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='space-y-8'
          >
            <div className='bg-[#2A2C42] p-8 rounded-xl'>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.id}
                    href={info.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex items-start gap-4 p-4 bg-[#242537] rounded-lg hover:bg-opacity-70 transition-colors'
                  >
                    <div className='text-yellow-500'>{info.icon}</div>
                    <div>
                      <h4 className='font-medium mb-1'>{info.title}</h4>
                      <p className='text-gray-400'>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-[#2A2C42] p-8 rounded-xl'
            >
              <h3 className='text-2xl font-bold mb-6'>Location</h3>
              <div className='relative h-[300px] rounded-lg overflow-hidden'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.5751016562178!2d31.0112183!3d30.7719444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c8b5c1c71b63%3A0x47c3d93f4f7e9bb4!2sMenufia%2C%20Egypt!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 