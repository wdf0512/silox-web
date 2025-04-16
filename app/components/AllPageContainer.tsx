import { Flex } from '@radix-ui/themes'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const AllPageContainer = ({ children }: Props) => {
    return (
        <Flex direction={'column'}>
            <Flex gap={'9'} direction={'column'} align={'center'} className='overflow-hidden w-[80vw] mx-auto'>
                {children}
            </Flex>
        </Flex>
    )
}

export default AllPageContainer