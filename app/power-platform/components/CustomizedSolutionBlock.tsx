'use client'

import { Flex, Heading, Text, Button } from '@radix-ui/themes'
import Image from 'next/image'
import { motion } from 'motion/react'
import React from 'react'
import powerPlatform from '@/public/images/power platform-service.png'

const CustomizedSolutionsBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-white via-pink-100 to-pink-300 overflow-hidden rounded-2xl"
        >
            <Flex
                direction={{ initial: 'column', md: 'row' }} // 响应式布局：小屏幕纵向，大屏幕横向
                align="center"
                justify="center"
                width="90%"
                // maxWidth="1400px"
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
                            Customized Solutions for Your Business Needs
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
                            SiloX is proud to hold the Power Platform Solution Architect Certification and offer premier consulting services specializing in the Power Platform. This suite of solutions empowers you to build intelligent, scalable, and automated applications with little to no code. With Power BI, Power Apps, Power Automate, and Power Virtual Agents, we help you streamline processes, boost productivity, and make more informed decisions across your organization.
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
                                src={powerPlatform}
                                alt="Microsoft 365"
                                // width={600} // 固定宽度，保持比例
                                // height={400} // 固定高度，保持比例
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain transition-all duration-300 min-h-[600px]"
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
                                {['P', 'O', 'W', 'E', 'R', 'P', 'L', 'A', 'T', 'F', 'O', 'R', 'M'].map((icon, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute text-4xl font-bold text-blue-900 opacity-70"
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

export default CustomizedSolutionsBlock;