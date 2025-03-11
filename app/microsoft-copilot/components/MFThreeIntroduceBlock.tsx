import Divider from '@/app/components/Divider'
import IntroduceCard from '@/app/components/IntroduceCard'
import { Flex } from '@radix-ui/themes'

const MFThreeIntroduceBlock = () => {
    return (
        <Flex direction={{
            'initial': 'column',
            'sm': 'row'
        }}
            justify={'between'}
            width={'100%'}
            className='gap-8'>
            <IntroduceCard index={'01'} title='Boost Efficiency'>
                Copilot automates repetitive tasks, streamlines workflows, and enhances productivity across Microsoft 365.
            </IntroduceCard>
            <Divider />
            <IntroduceCard index={'02'} title='Enhance Creativity'>
                AI-powered suggestions help generate ideas, refine content, and improve communication effortlessly.
            </IntroduceCard>
            <Divider />
            <IntroduceCard index={'03'} title='Improve Collaboration'>
                Copilot integrates seamlessly with Microsoft tools, enabling teams to work smarter and stay aligned in real time.
            </IntroduceCard>
        </Flex>
    )
}

export default MFThreeIntroduceBlock