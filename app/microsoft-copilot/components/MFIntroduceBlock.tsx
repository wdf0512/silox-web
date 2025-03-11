'use client'

import { Flex, Heading, Text, Button } from '@radix-ui/themes'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'
import micro365 from '@/public/images/microsoft-365-1.jpg'

const MFIntroduceBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 overflow-hidden rounded-xl"
        >
            <Flex
                direction={{ initial: 'column', md: 'row' }} // 响应式布局：小屏幕纵向，大屏幕横向
                align="center"
                justify="center"
                width="90%"
                maxWidth="1400px"
                mx="auto"
                py={{ initial: '6', md: '9' }}
                px={{ initial: '4', md: '6' }}
                gap={{ initial: '6', md: '8' }}
            >
                {/* 左侧文本区域 */}
                <Flex direction="column" gap="5" style={{ flex: 1, minWidth: 0 }}>
                    {/* 标题动画 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Heading
                            size={{ initial: '7', md: '8' }}
                            weight="bold"
                            className="text-center md:text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            Integrate AI, Copilot, and Next-Level Productivity into Your Business
                        </Heading>
                    </motion.div>

                    {/* 正文动画 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Text
                            size={{ initial: '3', md: '4' }}
                            className="text-center md:text-left text-gray-600 leading-relaxed"
                            style={{ maxWidth: '60ch' }}
                        >
                            Microsoft’s AI assistant, Copilot, is transforming Microsoft 365 by boosting productivity,
                            creativity, and collaboration. However, unlocking AI’s full potential requires more than
                            just technology—it demands a shift in workplace mindset and culture. With the right
                            change management strategies and AI training, your team can seamlessly adapt and thrive
                            in the AI-powered future.
                        </Text>
                    </motion.div>

                    {/* CTA 按钮动画 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Button
                                size="3"
                                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>
                </Flex>

                {/* 右侧图片区域 */}
                <Flex style={{ flex: 1, position: 'relative', minWidth: 0 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl"
                        >
                            <Image
                                src={micro365}
                                alt="Microsoft 365"
                                width={600} // 固定宽度，保持比例
                                height={400} // 固定高度，保持比例
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-all duration-300"
                            />
                            {/* 动态图标装饰（参考图片中的效果） */}
                            <motion.div
                                className="absolute top-[-10%] left-[-10%] w-full h-full pointer-events-none"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                {['W', 'P', 'A', 'X', 'T', 'O'].map((icon, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute text-4xl font-bold text-white opacity-70"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 5 + index * 1,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {icon}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </Flex>
            </Flex>
        </motion.div>
    );
};

export default MFIntroduceBlock;