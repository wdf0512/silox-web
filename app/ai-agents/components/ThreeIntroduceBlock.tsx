import { Flex } from '@radix-ui/themes'
import IntroduceCard from '../../components/IntroduceCard'

const ThreeIntroduceBlock = () => {
    return (
        <Flex direction={{
            'initial': 'column',
            'sm': 'row'
        }}
            justify={'between'}
            width={'100%'}
            className='gap-8'>
            <IntroduceCard index={'01'} title='Maximize Productivity'>
                AI agents streamline workflows, getting more done in less time.
            </IntroduceCard>
            <div className="hidden 2xl:block h-[168px] w-[3px] bg-gradient-to-b from-gray-300 to-gray-500" />
            <IntroduceCard index={'02'} title='Cut Costs'>
                Automation reduces overhead and minimizes the need for additional hires.
            </IntroduceCard>
            <div className="hidden 2xl:block h-[168px] w-[3px] bg-gradient-to-b from-gray-300 to-gray-500" />
            <IntroduceCard index={'03'} title='Make Smarter Decisions'>
                AI-powered insights help drive informed and strategic choices.
            </IntroduceCard>
        </Flex>
    )
}

export default ThreeIntroduceBlock