'use client'

import { Box, Flex } from '@radix-ui/themes'
import { motion } from 'framer-motion'
import React from 'react'
import ScheduleBg from '@/public/images/Homepage4.png'
import ScheduleLeftArea from './ScheduleLeftArea'
import ScheduleRightArea from './ScheduleRightArea'

const ScheduleBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <Box
                width="100%"
                py="4"
                style={{
                    backgroundImage: `url(${ScheduleBg.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Flex justify="center" align="center" width="100%" height="100%">
                    <Flex
                        direction={{ initial: 'column', md: 'row' }}
                        justify="between"
                        align="center"
                        gap="9"
                        width="70%"
                        height="100%"
                    >
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <ScheduleLeftArea />
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <ScheduleRightArea />
                        </motion.div>
                    </Flex>
                </Flex>
            </Box>
        </motion.div>
    )
}

export default ScheduleBlock