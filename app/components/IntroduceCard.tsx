import React, { ReactNode } from 'react'
import { Flex, Heading, Text } from '@radix-ui/themes'

interface Props {
    index: string,
    title: string,
    children: ReactNode
}


const IntroduceCard = ({ index, title, children }: Props) => {
    return (
        <Flex direction={'column'} gap={'2'} className='px-5 text-center items-center sm:text-start sm:items-start'>
            <Heading size={'3'} className='text-[#006CF9]'>{index}</Heading>
            <Heading size={'5'}>{title}</Heading>
            <Text className='mt-5 max-w-[20ch] sm:mt-2'>{children}</Text>
        </Flex>
    )
}

export default IntroduceCard