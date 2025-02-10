'use client'
import React from 'react'
import IntroduceCard from './IntroduceCard'
import { Flex } from '@radix-ui/themes'
import { motion } from 'framer-motion' // ✅ 改用 framer-motion，原来的 motion/react 可能有问题

const ThreeIntroduceBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Flex
                direction={{ 'initial': 'column', 'sm': 'row' }}
                justify={'between'}
                width={'100%'}
                className='gap-8'
            >
                {['Maximize Productivity', 'Cut Costs', 'Make Smarter Decisions'].map((title, index) => (
                    <React.Fragment key={index}>
                        {/* IntroduceCard 动画 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <IntroduceCard index={`0${index + 1}`} title={title}>
                                {index === 0 && "AI agents streamline workflows, getting more done in less time."}
                                {index === 1 && "Automation reduces overhead and minimizes the need for additional hires."}
                                {index === 2 && "AI-powered insights help drive informed and strategic choices."}
                            </IntroduceCard>
                        </motion.div>

                        {/* ✅ 仅在 01 & 02 之后加分隔线 */}
                        {index < 2 && (
                            <motion.div
                                className="hidden 2xl:block h-[168px] w-[3px] bg-gradient-to-b from-gray-300 to-gray-500"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </Flex>
        </motion.div>
    )
}

export default ThreeIntroduceBlock