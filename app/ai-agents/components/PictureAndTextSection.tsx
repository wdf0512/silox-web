import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import n8n from '@/public/images/n8n.jpg'
import Image from 'next/image'

const PictureAndTextSection = () => {
    return (
        <Flex
            gap="8"
            direction={{ initial: 'column', sm: 'row' }}
            align={{ initial: 'center', sm: 'start' }}
        >
            <Image src={n8n} alt="n8n" className="rounded-xl" width={600} height={393} />

            <Flex
                direction="column"
                justify="start"
                gap={{ initial: '4', sm: '9' }}
                align={{ initial: 'center', sm: 'start' }}
            >
                <Heading
                    className="cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out 
                               relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
                               after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Unlock the Power of AI Automation
                </Heading>

                <Text className="max-w-[60ch]">
                    Our AI agents take care of routine tasks—managing emails, scheduling, data entry, and more—so you can focus on what truly matters. Experience the impact of AI and elevate your business effortlessly.
                </Text>
            </Flex>
        </Flex>
    )
}

export default PictureAndTextSection