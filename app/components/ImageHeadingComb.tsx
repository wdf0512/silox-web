'use client'

import { Flex, Heading } from '@radix-ui/themes'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'motion/react'
import React from 'react'

interface Props {
    imageSrc: StaticImageData,
    alt: string,
    title: string
}

const ImageHeadingComb = ({ imageSrc, alt, title }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Flex direction={'column'} align={'center'} gap={'3'}>
                {/* 这里的motion.div包裹Image，让图片有交互效果 */}
                <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={imageSrc}
                        alt={alt}
                        className="rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl"
                    />
                </motion.div>

                {/* 标题的交互动画 */}
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        color: "rgb(99, 102, 241)", // hover时变成蓝色
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Heading className="text-gray-800 transition-all duration-300">{title}</Heading>
                </motion.div>
            </Flex>
        </motion.div>
    )
}

export default ImageHeadingComb