'use client'

import { Flex, Grid, Heading } from '@radix-ui/themes';
import { motion } from 'motion/react';
import React from 'react';
import ServicesCard from './ServicesCard';
import AiAgent from '@/public/images/AiAgent.png';
import MicrosoftPilot from '@/public/images/MicrosoftCopilot.png';
import PowerPlatform from '@/public/images/PowerPlatform.png';
import WebDevelopment from '@/public/images/WebDevelopment.png';
import purpleBlueBg from '@/public/images/purpleBlueBg.png';

const eachCardInfo = [
    { title: 'AI Agents & Automation', image: AiAgent, description: 'At SiloX, we empower businesses to streamline operations and scale—without increasing headcount. No AI expertise required—we take care of everything. Stay ahead of the competition, enhance efficiency, and let automation fuel your success.' },
    { title: 'Microsoft Copilot', image: MicrosoftPilot, description: 'Microsoft Copilot enhances productivity, creativity, and collaboration, with true AI transformation requires the right mindset, culture, and training to maximize its impact.' },
    { title: 'Power Platform', image: PowerPlatform, description: 'SiloX, certified with Power Platform Solution Architect, specializes in helping businesses build intelligent, scalable, and automated solutions using Power BI, Power Apps, Power Automate, and Power Virtual Agents.' },
    { title: 'Web Development', image: WebDevelopment, description: 'Whether it’s an accessible, user-centric website or a complex application, our goal is to transform ideas into stunning visuals with seamless functionality across web and mobile platforms. Based in Sydney, Australia, we’re here to help bring your website to life.' },
]

const ServicesBlock: React.FC = () => {
    return (
        <Flex
            direction={'column'}
            align={'center'}
            pt={'2rem'}
            pb={'2rem'}
            gap={'6'}
            style={{
                backgroundImage: `url(${purpleBlueBg.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'start',
            }}
        >
            {/* 添加动画到标题 */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}  // 初始状态：透明度为 0，向上偏移 50px
                whileInView={{ opacity: 1, y: 0 }} // 滚动到视图时：透明度变为 1，回到原位
                transition={{ duration: 0.6, ease: "easeOut" }} // 过渡时间与缓动
                viewport={{ once: false, amount: 0.5 }} // 进入 30% 可见时触发动画
            >
                <Heading size={'8'}>Services</Heading>
            </motion.div>

            <Grid columns={{ xs: '1', md: '2' }} gap='8' justify={'center'} align={'start'} px={'9'}>
                {eachCardInfo.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}  // 初始状态：缩小、透明度为 0，向下偏移 30px
                        whileInView={{ scale: 1, opacity: 1, y: 0 }} // 滚动到可视区域时：放大、透明度变 1，回到原位
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // 过渡时间，每个卡片延迟 0.1s
                        viewport={{ once: false, amount: 0.1 }} // 进入 50% 可见时触发动画
                    >
                        <ServicesCard title={service.title} image={service.image}>
                            {service.description}
                        </ServicesCard>
                    </motion.div>
                ))}
            </Grid>
        </Flex>
    );
};

export default ServicesBlock;