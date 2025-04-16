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
        <>
            <MFHeadingBlock />
            <MFIntroduceBlock />
            <MFYourAIAssistantForWorkBlock />
            <MFConsultationCallBlock />
            <YourAIPoweredAssistantAcrossMF365Block />
        </>
    )
}

export default MicrosoftCopilotPage