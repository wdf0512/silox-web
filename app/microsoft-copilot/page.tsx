import React from 'react'
import LargeTitle from '../components/LargeTitle/LargeTitle'
import MFHeadingBlock from './components/MFHeadingBlock'
import { Flex } from '@radix-ui/themes'
import MFIntroduceBlock from './components/MFIntroduceBlock'
import MFYourAIAssistantForWorkBlock from './components/MFYourAIAssistantForWorkBlock'
import MFConsultationCallBlock from './components/MFConsultationCallBlock'
import YourAIPoweredAssistantAcrossMF365Block from './components/YourAIPoweredAssistantAcrossMF365Block'
import FooterArea from '../components/FooterArea'
const MicrosoftCopilotPage = () => {
    return (
        <Flex direction={'column'}>
            <Flex gap={'9'} direction={'column'} align={'center'} className='overflow-hidden w-[80vw] mx-auto'>
                <MFHeadingBlock />
                <MFIntroduceBlock />
                <MFYourAIAssistantForWorkBlock />
                <MFConsultationCallBlock />
                <YourAIPoweredAssistantAcrossMF365Block />
            </Flex>
            <FooterArea />
        </Flex>
    )
}

export default MicrosoftCopilotPage