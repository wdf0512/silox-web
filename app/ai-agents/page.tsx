'use client'
import { Flex } from '@radix-ui/themes'
import { motion } from 'motion/react'
import styles from './styles.module.css'

const AiAgentPage = () => {
    return (
        <Flex justify={'center'} align={'center'} py={'8'} height={'500px'}>
            <motion.h1
                className={styles['animated-gradient-text']}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                AI Agents & Automation
            </motion.h1>
        </Flex>
    )
}

export default AiAgentPage