'use client'

import { ChevronDownIcon } from '@radix-ui/themes'
import { motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'

const ServicesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 100);
        setCloseTimeout(timeout);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center cursor-pointer hover:text-blue-500 transition-all duration-300">
                <span className="font-medium">Services</span>
                <ChevronDownIcon
                    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 10,
                    scale: isOpen ? 1 : 0.95,
                }}
                transition={{
                    duration: 0.2,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className={`absolute left-0 mt-4 w-64 rounded-xl 
                            ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
                            before:absolute before:w-full before:h-full before:rounded-xl
                            before:opacity-90 before:backdrop-blur-lg before:-z-10
                            before:bg-gradient-to-b before:from-gray-800 before:to-gray-900
                            shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]
                        `}
                style={{
                    transformOrigin: 'top',
                    perspective: '1000px',
                }}
            >
                <div className="p-2">
                    {[
                        { name: 'AI Agents & Automation', href: '/ai-agents', icon: '🤖' },
                        { name: 'Microsoft Copilot', href: '/microsoft-copilot', icon: '💻' },
                        { name: 'Power Platform', href: '/power-platform', icon: '⚡' },
                        { name: 'Web Development', href: '/web-development', icon: '🌐' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                            }}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                                            text-gray-200 hover:text-blue-300
                                            hover:bg-gray-700/50 transition-all duration-200
                                            group relative overflow-hidden"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default ServicesDropdown