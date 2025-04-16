import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import applicationLM from '@/public/images/ALM-pro-dev.png'
import Image from 'next/image'

const ApplicationLifecyclePictureAndTextSection = () => {
    return (
        <Flex
            gap="8"
            direction={{ initial: 'column', lg: 'row' }}
            align={{ initial: 'center', lg: 'start' }}
        >
            <Image src={applicationLM} alt="copilot-service" className="rounded-2xl lg:w-[50%] lg:h-[50%] object-cover" />

            <Flex
                direction="column"
                justify={{ initial: "start", lg: 'center' }}
                gap={{ initial: '4', sm: '9' }}
                align={{ initial: 'center', lg: 'start' }}
            >
                <Heading
                    size={{ initial: '8', lg: '7' }}
                    className="cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out 
                               relative after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
                               after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Application Lifecycle Management
                </Heading>

                <Text className="max-w-[60ch] lg:max-w-[80ch]" size={{ initial: '7', lg: '6' }}>
                    ALM (Application Lifecycle Management) encompasses governance, development, and maintenance, including requirements management, testing, deployment, and release management. ALM tools streamline communication, collaboration, and automation across development, testing, and operations teams to ensure efficient, predictable, and repeatable software delivery.
                </Text>
            </Flex>
        </Flex>
    )
}

export default ApplicationLifecyclePictureAndTextSection