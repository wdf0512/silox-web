'use client'

import { FloatingSphere } from '@/app/microsoft-copilot/components/MFConsultationCallBlock';
import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import { Canvas } from '@react-three/fiber';
import { useInView, motion } from 'motion/react';
import React, { useRef } from 'react'

const UnlockBusinessAgilityWPPSBlock = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false }); // 检测是否在视口内，once: false 允许多次触发

    return (
        <motion.div
            ref={ref} // 绑定 ref 用于视口检测
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                padding: '20px 10px',
                display: 'flex',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(76deg, rgba(196,149,237,1) 20%, rgba(241,247,251,1) 54%, rgba(85,178,232,1) 82%)',
                overflow: 'hidden',
            }}
            animate={{
                y: isInView ? [-10, 0, -10] : 0, // 仅在视口内浮动
            }}
            transition={{
                duration: 3,
                repeat: isInView ? Infinity : 0, // 仅在视口内重复
                repeatType: 'mirror',
                enabled: isInView, // 控制动画是否启用
            }}
        >
            <Canvas
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
                gl={{ antialias: true }} // 抗锯齿，优化渲染质量
                frameloop={isInView ? 'always' : 'demand'} // 仅在视口内持续渲染，否则按需渲染
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingSphere isInView={isInView} />
            </Canvas>
            <Flex
                direction={'column'}
                align={'center'}
                gap={'9'}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    padding: '40px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
            >
                <Heading
                    size={'8'}
                    style={{
                        background: 'linear-gradient(90deg, #ff8a00, #e52e71, #6a0dad, #ff8a00)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Unlock Business Agility with Power Platform Solutions
                </Heading>
                <Text className="max-w-[100ch]" style={{ color: '#4a4948' }} size={'6'}>
                    Leverage the Microsoft Power Platform to drive innovation, optimize processes, and empower your team. With Silo&apos;X  s expert development services, we help you unlock new possibilities for growth and efficiency. Connect with us today to explore the potential.
                </Text>
                <Button size={'3'}>
                    Book A Consultation Call
                </Button>
            </Flex>
        </motion.div>
    )
}

export default UnlockBusinessAgilityWPPSBlock