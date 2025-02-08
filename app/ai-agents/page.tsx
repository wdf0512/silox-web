'use client'
import { Flex } from '@radix-ui/themes'
import AIAgentsLargeTitle from './components/AIAgentsLargeTitle'
import EmpoweringBusinessBlock from './components/EmpoweringBusinessBlock'
import UnlockThePowerOfAIAutomationBlock from './components/UnlockThePowerOfAIAutomationBlock'
import BookConsultationBlock from '../components/BookConsultationBlock'
import AIAgentBookConsultationBlock from './components/AIAgentBookConsultationBlock'

const AiAgentPage = () => {
    return (
        <Flex gap={'9'} direction={'column'} align={'center'} className='overflow-hidden w-[80vw] mx-auto'>
            <AIAgentsLargeTitle />
            <EmpoweringBusinessBlock />
            <UnlockThePowerOfAIAutomationBlock />
            <AIAgentBookConsultationBlock />
        </Flex>
    )
}

export default AiAgentPage