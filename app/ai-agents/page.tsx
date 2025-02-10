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
        <Flex direction={'column'}>
            <Flex gap={'9'} direction={'column'} align={'center'} className='overflow-hidden w-[80vw] mx-auto'>
                <AIAgentsLargeTitle />
                <EmpoweringBusinessBlock />
                <UnlockThePowerOfAIAutomationBlock />
                <AIAgentBookConsultationBlock />
                <N8nUseCaseBlock />
            </Flex>
            <FooterArea />
        </Flex>
    )
}

export default AiAgentPage