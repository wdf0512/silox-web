import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import { motion } from 'motion/react';
import { Button, Flex, Heading, Text } from '@radix-ui/themes';

const FloatingSphere = () => {
    const { scale } = useSpring({
        loop: { reverse: true },
        from: { scale: 1 },
        to: { scale: 1.2 },
        config: { duration: 2000 },
    });

    return (
        <a.mesh scale={scale}>
            <Sphere args={[1, 32, 32]}>
                <MeshDistortMaterial
                    color="#00a8ff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    transparent
                    opacity={0.8}
                />
            </Sphere>
        </a.mesh>
    );
};

const AIAgentBookConsultationBlock = () => {
    return (
        <motion.div
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
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
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
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingSphere />
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
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Harness the Power of AI Automation
                </Heading>

                <Text className="max-w-[130ch]" style={{ color: '#4a4948' }}>
                    Take your business to the next level with AI-driven automation. Whether you need expert
                    consulting, a vibrant community of innovators, or step-by-step tutorials, we provide
                    everything to help you thrive in the AI era. Join us—let’s shape the future together.
                </Text>
                <Button size={'3'}>
                    Book A Consultation Call
                </Button>
            </Flex>
        </motion.div>
    );
};

export default AIAgentBookConsultationBlock;