import Divider from '@/app/components/Divider'
import IntroduceCard from '@/app/components/IntroduceCard'
import { Flex } from '@radix-ui/themes'
import React from 'react'

const ApplicationLifecycleIntroduceBlock = () => {
    return (
        <Flex direction={{
            'initial': 'column',
            'sm': 'row'
        }}
            justify={'between'}
            width={'100%'}
            className='gap-8'>
            <IntroduceCard index={'01'} title='Tailored Solutions'>
                Leverage our expertise to design and implement Power Platform solutions that align with your business goals and drive success.
            </IntroduceCard>
            <Divider />
            <IntroduceCard index={'02'} title='Custom App Development'>
                Create custom Power Apps, Power Automate workflows, and Power Virtual Agents to automate processes and boost productivity across your organization.
            </IntroduceCard>
            <Divider />
            <IntroduceCard index={'03'} title='Data-Driven Insights'>
                Unlock the full potential of your data with Power BI’s advanced analytics and visualization tools, enabling smarter decision-making and business growth.
            </IntroduceCard>
        </Flex>
    )
}

export default ApplicationLifecycleIntroduceBlock