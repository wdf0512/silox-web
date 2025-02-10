'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Box, Button, Flex, Heading } from '@radix-ui/themes'

const BookConsultationBlock = () => {
    const handleClick = () => {
        console.log('Consultation button clicked')
    }

    return (
        <Box className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative w-screen h-[60vh] overflow-hidden"
            >
                <video
                    src="/images/Homepage2.mp4"
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-center text-black max-w-[80%] p-4 rounded-lg"
                    >
                        <Flex direction="column" gap="9" align="center">
                            <Heading className="text-2xl font-bold">
                                Empowering businesses to achieve efficiency and innovation through AI-driven automation,
                                transforming workflows for a smarter and more sustainable future.
                            </Heading>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button size="3" onClick={handleClick}>
                                    Book A Consultation Call
                                </Button>
                            </motion.div>
                        </Flex>
                    </motion.div>
                </div>
            </motion.div>
        </Box>
    )
}

export default BookConsultationBlock