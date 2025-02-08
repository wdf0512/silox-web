import { Flex } from '@radix-ui/themes'
import React from 'react'
import ThreeIntroduceBlock from './ThreeIntroduceBlock'
import PictureAndTextSection from './PictureAndTextSection'

const UnlockThePowerOfAIAutomationBlock = () => {
    return (
        <Flex direction={'column'} py={'8'} width={'100%'} gap={'9'} align={'center'}>
            <ThreeIntroduceBlock />
            <PictureAndTextSection />
        </Flex>
    )
}

export default UnlockThePowerOfAIAutomationBlock