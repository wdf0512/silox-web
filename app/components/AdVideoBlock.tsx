'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AdVideoBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-screen h-[60vh] flex justify-center items-center"
        >
            <video
                src="/images/Homepage1.mp4"
                loop
                autoPlay
                muted
                className="w-full h-full contain"
            />
        </motion.div>
    )
}

export default AdVideoBlock