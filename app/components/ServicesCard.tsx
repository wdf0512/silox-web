import { Flex, Heading, Text } from '@radix-ui/themes'
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import rightArrow from '@/public/images/output-onlinegiftools.gif'

interface Props {
    title: string
    children: ReactNode
    image: StaticImageData
}

const ServicesCard = ({ title, image, children }: Props) => {
    return (
        <Flex direction={"column"} gap={'6'}>
            <Flex direction={'column'} gap={'3'}>
                <Image
                    src={image}
                    alt={title}
                    className='rounded-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'
                    width={600}
                    height={337}
                />
                <Flex align="center" gap="5">
                    <Heading size={'7'} className='cursor-pointer hover:underline'>{title}</Heading>
                    <Image src={rightArrow} alt="Arrow" width={30} height={30} className='cursor-pointer' />
                </Flex>
            </Flex>
            <Text className='max-w-[600px]'>{children}</Text>
        </Flex>
    )
}

export default ServicesCard