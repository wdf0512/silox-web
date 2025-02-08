import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import AutomateWithoutLimits from '@/public/images/AutomateWithoutLimits.jpeg'
import Image from 'next/image'

const EmpoweringBusinessBlock = () => {
    return (
        <Flex direction={'column'} align={'center'} width={'80%'} mx={'auto'} gap={'5'}>
            <Heading size={'8'} className='py-4 break-all'>Empowering Your Business with AI Automation</Heading>
            <Text
                className='text-center'
                style={{ maxWidth: '100ch', wordWrap: 'break-word' }}
            >
                At SiloX, we empower businesses to streamline operations and scale—without increasing headcount. No AI expertise required—we take care of everything. Stay ahead of the competition, enhance efficiency, and let automation fuel your success.
            </Text>
            <Image src={AutomateWithoutLimits} alt='AutomateWithoutLimits' sizes="(max-width: 480px) 800px, (max-width: 768px) 1000px"
                className='rounded-xl'
            />
        </Flex>
    )
}

export default EmpoweringBusinessBlock