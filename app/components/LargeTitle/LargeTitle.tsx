import { Flex } from '@radix-ui/themes'
import { motion } from 'motion/react'
import React from 'react'
import styles from './styles.module.css'

const LargeTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex justify={'center'} align={'center'} py={'8'} height={'500px'}>
            <motion.h1
                className={styles['animated-gradient-text']}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.h1>
        </Flex>
    )
}

export default LargeTitle