import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import copilotService from '@/public/images/copilot-service.png'
import Image from 'next/image'

const MFPictureAndTextSection = () => {
    return (
        <Flex
            gap="8"
            direction={{ initial: 'column', sm: 'row' }}
            align={{ initial: 'center', sm: 'start' }}
        >
            <Image src={copilotService} alt="copilot-service" className="rounded-xl" width={600} height={393} />

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
                    Your AI Assistant for Work.
                </Heading>

                <Text className="max-w-[60ch]">
                    Microsoft Copilot for Microsoft 365 is an AI-powered productivity tool designed to enhance your workflow. Seamlessly integrated into Word, Excel, PowerPoint, Outlook, and Teams, Copilot assists with drafting, summarizing, and creating presentations—helping you work smarter, not harder.
                </Text>
            </Flex>
        </Flex>
    )
}

export default MFPictureAndTextSection