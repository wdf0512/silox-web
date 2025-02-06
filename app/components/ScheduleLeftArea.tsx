import { Flex, Box, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import EmailIcons from '@/public/images/EmailIcons.png'
import Image from 'next/image'

const ScheduleLeftArea = () => {
    return (
        <Flex direction={'column'} gap={'8'}>
            <Box className='break-keep'>
                <Heading size={'8'}>
                    Schedule a quick,
                </Heading>
                <Heading size={'8'}>
                    15minute guided tour
                </Heading>
                <Heading size={'8'}>
                    through Silo X.
                </Heading>
            </Box>
            <Flex justify={'start'} align={'center'} gap={'4'}>
                <Image src={EmailIcons} alt='EmailIcons' width={96} height={96} />
                <Text className='hover:underline' size={'2'} style={{ color: '#006CF9' }}>Prefer to Email?<br />
                    hello@silox.com.au</Text>
            </Flex>
        </Flex>
    )
}

export default ScheduleLeftArea