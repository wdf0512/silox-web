import { Flex } from '@radix-ui/themes'
import React from 'react'
import ApplicationLifecycleIntroduceBlock from './ApplicationLifecycleIntroduceBlock'
import ApplicationLifecyclePictureAndTextSection from './ApplicationLifecyclePictureAndTextSection'

const ApplicationLifecycleManagementBlock = () => {
    return (
        <Flex direction={'column'} py={'8'} width={'100%'} gap={'9'} align={'center'}>
            <ApplicationLifecycleIntroduceBlock />
            <ApplicationLifecyclePictureAndTextSection />
        </Flex>
    )
}

export default ApplicationLifecycleManagementBlock