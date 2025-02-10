'use client'
import React from 'react'
import { Flex, Heading, Text } from '@radix-ui/themes'
import n8n from '@/public/images/n8n.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion' // ✅ 改用 framer-motion

const PictureAndTextSection = () => {
    return (
        <Flex
            gap="8"
            direction={{ initial: 'column', sm: 'row' }}
            align={{ initial: 'center', sm: 'start' }}
            className="w-full" // ✅ 确保 Flex 不会无限拉伸
        >
            {/* 图片淡入 + 从左滑入 */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false }}
            >
                <Image
                    src={n8n}
                    alt="n8n"
                    className="rounded-xl shadow-lg w-auto max-w-[600px]" // ✅ 防止图片缩小过度
                    width={600}
                    height={393}
                />
            </motion.div>

            {/* 文字部分 */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false }}
                className="w-full max-w-[60ch]" // ✅ 限制最大宽度，防止无限拉伸
            >
                <Flex
                    direction="column"
                    justify="start"
                    gap={{ initial: '4', sm: '9' }}
                    align={{ initial: 'center', sm: 'start' }}
                >
                    {/* 标题动画 */}
                    <motion.div whileHover={{ color: '#4F46E5' }} transition={{ duration: 0.3 }}>
                        <Heading
                            className="cursor-pointer transition-colors duration-300 ease-in-out 
                                       relative after:absolute after:left-0 after:bottom-[-2px] 
                                       after:w-0 after:h-[2px] after:bg-blue-500 
                                       after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Unlock the Power of AI Automation
                        </Heading>
                    </motion.div>

                    {/* 文本部分 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: false }}
                    >
                        <Text className="w-full max-w-[60ch] text-gray-700"> {/* ✅ 限制 Text 宽度 */}
                            Our AI agents take care of routine tasks—managing emails, scheduling, data entry, and more—
                            so you can focus on what truly matters. Experience the impact of AI and elevate your business effortlessly.
                        </Text>
                    </motion.div>
                </Flex>
            </motion.div>
        </Flex>
    )
}

export default PictureAndTextSection