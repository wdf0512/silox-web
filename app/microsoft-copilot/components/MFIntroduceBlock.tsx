'use client'

import { Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'
import micro365 from '@/public/images/microsoft-365-1.jpg'

const MFIntroduceBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Flex direction="column" align="center" width="80%" mx="auto" gap="6" py="8">

                {/* 标题动画 */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Heading size="8" className="py-4 text-center">
                        Integrate AI, Copilot, and Next-Level Productivity into Your Business
                    </Heading>
                </motion.div>

                {/* 文字描述动画 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Text className="text-center text-gray-700 leading-relaxed" style={{ maxWidth: '80ch' }}>
                        Microsoft’s AI assistant, Copilot, is transforming Microsoft 365 by boosting productivity, creativity, and collaboration.
                        However, unlocking AI’s full potential requires more than just technology—it demands a shift in workplace mindset and culture.
                        With the right change management strategies and AI training, your team can seamlessly adapt and thrive in the AI-powered future.
                    </Text>
                </motion.div>

                {/* 图片动画 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={micro365}
                            alt="Microsoft 365"
                            sizes="(max-width: 480px) 800px, (max-width: 768px) 1000px"
                            className="rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            </Flex>
        </motion.div>
    )
}

export default MFIntroduceBlock