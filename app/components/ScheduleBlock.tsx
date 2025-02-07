import { Box, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import ScheduleBg from '@/public/images/Homepage4.png'
import ScheduleLeftArea from './ScheduleLeftArea'
import ScheduleRightArea from './ScheduleRightArea'


const ScheduleBlock = () => {
    return (
        <Box
            width={'100%'} height={'902px'}
            style={{
                backgroundImage: `url(${ScheduleBg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Flex justify={'center'} align={'center'} width={'100%'} height={'100%'}>
                <Flex justify={'between'} align={'center'} gap={'9'} width={'50%'}>
                    <ScheduleLeftArea />
                    <ScheduleRightArea />
                </Flex>
            </Flex>
        </Box>
    )
}

export default ScheduleBlock