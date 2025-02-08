'use client'
import { Flex } from '@radix-ui/themes'
import AIAgentsLargeTitle from './components/AIAgentsLargeTitle'
import EmpoweringBusinessBlock from './components/EmpoweringBusinessBlock'
import UnlockThePowerOfAIAutomationBlock from './components/UnlockThePowerOfAIAutomationBlock'

const AiAgentPage = () => {
    return (
        <Flex direction={'column'} align={'center'} className='overflow-x-hidden w-[80vw] mx-auto'>
            <AIAgentsLargeTitle />
            <EmpoweringBusinessBlock />
            <UnlockThePowerOfAIAutomationBlock />
        </Flex>
    )
}

export default AiAgentPage