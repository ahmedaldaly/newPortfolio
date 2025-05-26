'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <img 
            src="/الدالي 123.png" 
            alt="Ahmed Eldaly" 
            className="w-32 h-32 mx-auto object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-yellow-500 mx-auto rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-xl text-yellow-500"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default Loading 