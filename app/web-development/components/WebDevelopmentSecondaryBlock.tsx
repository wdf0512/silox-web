'use client'

import { Flex, Heading, Button, Text, Box, Container } from '@radix-ui/themes'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import webBanner from '@/public/images/banner-redimensionat.jpg'

interface SecondaryBlockProps {
    title?: string
    description?: string
    image?: any
    ctaText?: string
    themeColor?: string
    tags?: string[]
}

const WebDevelopmentSecondaryBlock = ({
    title = "We design, develop, and maintain high-quality websites.",
    description = "We craft powerful digital solutions with exceptional design. Whether it's an accessible, user-centric website or a complex application, our goal is to transform ideas into stunning visuals with seamless functionality across web and mobile platforms. Based in Sydney, Australia, we're here to help bring your website to life.",
    image = webBanner,
    ctaText = "Learn More",
    themeColor = "blue",
    tags = ['Web Design', 'Development', 'UX/UI', 'Maintenance']
}: SecondaryBlockProps) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "5%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

    const float1Y = useTransform(scrollYProgress, [0, 1], [0, -40])
    const float2Y = useTransform(scrollYProgress, [0, 1], [0, 40])
    const float3Y = useTransform(scrollYProgress, [0, 1], [0, -40])
    const float4Y = useTransform(scrollYProgress, [0, 1], [0, 40])
    const float5Y = useTransform(scrollYProgress, [0, 1], [0, -40])


    // Dynamic gradient based on theme color
    const getGradient = () => {
        switch (themeColor) {
            case 'blue': return 'from-blue-600 to-purple-600'
            case 'green': return 'from-emerald-600 to-teal-600'
            case 'orange': return 'from-amber-600 to-orange-600'
            case 'pink': return 'from-pink-600 to-rose-600'
            default: return 'from-blue-600 to-purple-600'
        }
    }

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97]
            }
        }
    }

    return (
        <Box ref={ref} className="relative overflow-hidden py-16 md:py-24 lg:py-32">
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 -z-10"
                style={{ opacity }}
            >
                <div className={`absolute inset-0 bg-gradient-to-br from-white via-${themeColor}-50 to-${themeColor}-100`} />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
            </motion.div>

            <motion.div
                className={`absolute rounded-full bg-${themeColor}-200 opacity-20`}
                style={{
                    width: '150px',
                    height: '150px',
                    left: '20%',
                    top: '30%',
                    filter: 'blur(40px)',
                    y: float1Y
                }}
            />
            <motion.div
                className={`absolute rounded-full bg-${themeColor}-200 opacity-20`}
                style={{
                    width: '250px',
                    height: '250px',
                    left: '70%',
                    top: '10%',
                    filter: 'blur(40px)',
                    y: float2Y
                }}
            />
            <motion.div
                className={`absolute rounded-full bg-${themeColor}-200 opacity-20`}
                style={{
                    width: '200px',
                    height: '200px',
                    left: '40%',
                    top: '60%',
                    filter: 'blur(40px)',
                    y: float3Y
                }}
            />
            <motion.div
                className={`absolute rounded-full bg-${themeColor}-200 opacity-20`}
                style={{
                    width: '180px',
                    height: '180px',
                    left: '80%',
                    top: '70%',
                    filter: 'blur(40px)',
                    y: float4Y
                }}
            />
            <motion.div
                className={`absolute rounded-full bg-${themeColor}-200 opacity-20`}
                style={{
                    width: '220px',
                    height: '220px',
                    left: '10%',
                    top: '80%',
                    filter: 'blur(40px)',
                    y: float5Y
                }}
            />

            <Container size="4" className="px-4 md:px-6">
                <Flex
                    direction={{ initial: 'column', md: 'row' }}
                    align="center"
                    justify="between"
                    gap={{ initial: '8', md: '3' }}
                // className="max-w-7xl mx-auto"
                >
                    {/* Content area */}
                    <Flex
                        direction="column"
                        gap={{ initial: '5', md: '6' }}
                        className="w-full lg:w-1/2 relative z-10"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-100px" }}
                            variants={textVariants}
                        >
                            <Text
                                size="3"
                                weight="bold"
                                className={`text-${themeColor}-600 uppercase tracking-widest mb-2 italic underline`}
                            >
                                OUR EXPERTISE
                            </Text>
                            <Heading
                                size={{ initial: '7', md: '8' }}
                                weight="bold"
                                className={`mt-2 bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent leading-tight`}
                            >
                                {title}
                            </Heading>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={textVariants}
                            transition={{ delay: 0.1 }}
                            className="space-y-4"
                        >
                            {description.split('\n').map((paragraph, i) => (
                                <Text
                                    key={i}
                                    as="p"
                                    size={{ initial: '3', md: '4' }}
                                    className={`text-gray-800 leading-relaxed ${i > 0 ? 'opacity-90' : ''}`}
                                >
                                    {paragraph}
                                </Text>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={textVariants}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mt-2"
                        >
                            {tags.map((service, i) => (
                                <motion.div
                                    key={service}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                // viewport={{ once: true }}
                                >
                                    <div className={`px-4 py-2 rounded-full bg-${themeColor}-100 text-${themeColor}-800 font-medium text-sm md:text-base border border-${themeColor}-200/50  transition delay-75 duration-500 ease-in-out hover:bg-pink-200 cursor-pointer`}>
                                        {service}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={textVariants}
                            transition={{ delay: 0.3 }}
                            className="mt-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <Button
                                    size={{ initial: '3', md: '4' }}
                                    className={`bg-${themeColor}-600 text-white hover:bg-${themeColor}-700 transition-all duration-300 shadow-lg group`}
                                    style={{
                                        boxShadow: `0 4px 14px 0 rgba(var(--${themeColor}-500), 0.3)`,
                                        transformStyle: 'preserve-3d'
                                    }}
                                >
                                    <span className="block group-hover:-translate-y-0.5 transition-transform">
                                        {ctaText}
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="ml-2 inline-block"
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Flex>

                    {/* Image area with stacked cards effect */}
                    <motion.div
                        className="relative w-full lg:w-1/2 mt-4 md:mt-0 lg:mt-0"
                        style={{ y }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        viewport={{ once: true }}
                    >
                        {/* Main image card */}
                        <motion.div
                            className="relative rounded-3xl shadow-2xl overflow-hidden border border-white/20 z-10"
                            whileHover={{ y: -10, rotate: -1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={image}
                                    alt="Web Development"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                <Heading
                                    size={{ initial: '5', md: '6' }}
                                    className="text-white font-bold"
                                >
                                    Featured Project
                                </Heading>
                                <Text size="3" className="mt-1 text-white/90">
                                    See our latest work
                                </Text>
                            </div>
                        </motion.div>

                        {/* Secondary card (behind) */}
                        <motion.div
                            className="absolute -z-10 w-[92%] h-[92%] bg-white/90 rounded-3xl shadow-xl -bottom-3 -right-3"
                            initial={{ rotate: -3, opacity: 0 }}
                            whileInView={{ rotate: -1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        />

                        {/* Tertiary card (further behind) */}
                        <motion.div
                            className="absolute -z-20 w-[85%] h-[85%] bg-white/80 rounded-3xl shadow-lg -bottom-6 -right-6"
                            initial={{ rotate: -5, opacity: 0 }}
                            whileInView={{ rotate: -2, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        />

                        {/* Floating decorative elements */}
                        <motion.div
                            className="invisible md:visible absolute -top-8 -left-8 -z-30"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {['★', '✦', '●', '◆'].map((icon, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute text-4xl font-bold text-${themeColor}-400 opacity-70`}
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.2, 1],
                                        y: [0, -10, 0]
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
                </Flex>
            </Container>
        </Box>
    )
}

export default WebDevelopmentSecondaryBlock