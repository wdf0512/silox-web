import { Flex } from '@radix-ui/themes'
import React from 'react'
import MFThreeIntroduceBlock from './MFThreeIntroduceBlock'
import MFPictureAndTextSection from './MFPictureAndTextSection'
const MFYourAIAssistantForWorkBlock = () => {
    return (
        <Flex direction={'column'} py={'8'} width={'100%'} gap={'9'} align={'center'}>
            <MFThreeIntroduceBlock />
            <MFPictureAndTextSection />
        </Flex>
    )
}

export default MFYourAIAssistantForWorkBlock