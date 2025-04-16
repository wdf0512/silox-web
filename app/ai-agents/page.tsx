'use client'
import { Flex } from '@radix-ui/themes'
import AIAgentBookConsultationBlock from './components/AIAgentBookConsultationBlock'
import AIAgentsLargeTitle from './components/AIAgentsLargeTitle'
import EmpoweringBusinessBlock from './components/EmpoweringBusinessBlock'
import N8nUseCaseBlock from './components/N8nUseCaseBlock'
import UnlockThePowerOfAIAutomationBlock from './components/UnlockThePowerOfAIAutomationBlock'
import FooterArea from '../components/FooterArea'

const AiAgentPage = () => {
    return (
        <>
            <AIAgentsLargeTitle />
            <EmpoweringBusinessBlock />
            <UnlockThePowerOfAIAutomationBlock />
            <AIAgentBookConsultationBlock />
            <N8nUseCaseBlock />
        </>
    )
}

export default AiAgentPage