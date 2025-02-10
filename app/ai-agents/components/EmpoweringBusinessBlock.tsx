'use client'
import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import AutomateWithoutLimits from '@/public/images/AutomateWithoutLimits.jpeg'
import Image from 'next/image'
import { motion } from 'motion/react'

const EmpoweringBusinessBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }} // 当 30% 进入视口时触发动画
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Flex
                direction={'column'}
                align={'center'}
                width={'80%'}
                mx={'auto'}
                gap={'5'}
                className="relative overflow-hidden"
            >
                {/* 标题动画 */}
                <motion.div
                    whileHover={{ scale: 1.05, color: '#6C63FF' }}
                    transition={{ duration: 0.3 }}
                >
                    <Heading
                        size={'8'}
                        className='py-4 break-all text-gray-900'
                    >
                        Empowering Your Business with AI Automation
                    </Heading>
                </motion.div>

                {/* 描述文本 */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <Text
                        className='text-center text-gray-700'
                        style={{ maxWidth: '100ch', wordWrap: 'break-word' }}
                    >
                        At SiloX, we empower businesses to streamline operations and scale—without increasing headcount.
                        No AI expertise required—we take care of everything. Stay ahead of the competition, enhance efficiency,
                        and let automation fuel your success.
                    </Text>
                </motion.div>
                <Image
                    src={AutomateWithoutLimits}
                    alt='AutomateWithoutLimits'
                    sizes="(max-width: 480px) 800px, (max-width: 768px) 1000px"
                    className='rounded-xl shadow-lg transition-all duration-500'
                />
            </Flex>
        </motion.div>
    )
}

export default EmpoweringBusinessBlock