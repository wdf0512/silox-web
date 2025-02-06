import { Flex, Grid, Heading } from '@radix-ui/themes'
import React from 'react'
import ServicesCard from './ServicesCard'
import AiAgent from '@/public/images/AiAgent.png'
import MicrosoftPilot from '@/public/images/MicrosoftCopilot.png'
import PowerPlatform from '@/public/images/PowerPlatform.png'
import WebDevelopment from '@/public/images/WebDevelopment.png'
import purpleBlueBg from '@/public/images/purpleBlueBg.png'

const ServicesBlock = () => {
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
            <Heading size={'8'}>Services</Heading>
            <Grid columns={{ xs: '1', md: '2' }} gap='8' justify={'center'} align={'start'} px={'9'}>
                <ServicesCard title='AI Agents & Automation' image={AiAgent}>
                    At SiloX, we empower businesses to streamline operations and scale—without increasing headcount. No AI expertise required—we take care of everything. Stay ahead of the competition, enhance efficiency, and let automation fuel your success.
                </ServicesCard>
                <ServicesCard title='Microsoft Copilot' image={MicrosoftPilot}>
                    Microsoft Copilot enhances productivity, creativity, and collaboration, with true AI transformation requires the right mindset, culture, and training to maximize its impact.
                </ServicesCard>
                <ServicesCard title='Power Platform' image={PowerPlatform}>
                    SiloX, certified with Power Platform Solution Architect, specializes in helping businesses build intelligent, scalable, and automated solutions using Power BI, Power Apps, Power Automate, and Power Virtual Agents.
                </ServicesCard>
                <ServicesCard title='Web Development' image={WebDevelopment}>
                    Whether it’s an accessible, user-centric website or a complex application, our goal is to transform ideas into stunning visuals with seamless functionality across web and mobile platforms. Based in Sydney, Australia, we’re here to help bring your website to life.
                </ServicesCard>
            </Grid>
        </Flex>
    )
}

export default ServicesBlock