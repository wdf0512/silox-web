import { Flex, Heading, Text } from '@radix-ui/themes'
import LogoCard from './LogoCard'


const logosMapping = {
    'Power BI': {
        src: {
            '48': '/images/icons8-power-bi-2021-windows-11-color/icons8-power-bi-2021-48.svg',
            '96': '/images/icons8-power-bi-2021-windows-11-color/icons8-power-bi-2021-96.svg',
            '240': '/images/icons8-power-bi-2021-windows-11-color/icons8-power-bi-2021-240.svg'
        },
        content: 'The Business Intelligence Solution Visualize data and share insights with powerful business analytics and immersive, interactive dashboards.'
    },
    'Power Apps': {
        src: {
            '48': '/images/icons8-microsoft-power-apps-2020-windows-11-color/icons8-microsoft-power-apps-2020-48.svg',
            '96': '/images/icons8-microsoft-power-apps-2020-windows-11-color/icons8-microsoft-power-apps-2020-96.svg',
            '240': '/images/icons8-microsoft-power-apps-2020-windows-11-color/icons8-microsoft-power-apps-2020-240.svg',
        },
        content: 'Create Business Apps Without Code Develop applications from scratch or using predefined templates, enabling collaboration and innovation.'
    },
    'Power Automate': {
        src: {
            '48': '/images/icons8-microsoft-power-automate-2020-windows-11-color/icons8-microsoft-power-automate-2020-48.svg',
            '96': '/images/icons8-microsoft-power-automate-2020-windows-11-color/icons8-microsoft-power-automate-2020-96.svg',
            '240': '/images/icons8-microsoft-power-automate-2020-windows-11-color/icons8-microsoft-power-automate-2020-240.svg',
        },
        content: 'Reduce complexity in managing your Dynamics 365 implementation, allowing you to focus on driving business outcomes.'
    },
    'Define Workflow Automations': {
        src: {
            '48': '/images/workflow-svgrepo-com.svg',
            '96': '/images/workflow-svgrepo-com.svg',
            '240': '/images/workflow-svgrepo-com.svg',
        },
        content: 'Efficiently automate workflows, connecting to hundreds of popular applications and services.'
    },
    'Power Virtual Agents': {
        src: {
            '48': '/images/icons8-microsoft-bookings-windows-11-color/icons8-microsoft-bookings-48.svg',
            '96': '/images/icons8-microsoft-bookings-windows-11-color/icons8-microsoft-bookings-96.svg',
            '240': '/images/icons8-microsoft-bookings-windows-11-color/icons8-microsoft-bookings-240.svg',
        },
        content: 'Intelligent Chatbots, No Code Required Create conversational experiences （chatbots） without the need for coding, using a guided graphical interface.'
    }
} as const

type LogoKey = keyof typeof logosMapping

const EmpowerYourTeamWMPPBlock = () => {
    return (
        <Flex direction={'column'} justify={'center'} align={'center'} gap={'6'} mb={'8'}>
            <Heading size={{ initial: '8' }}>Empower Your Team with Microsoft Power Platform</Heading>
            <Text size={{ initial: '6', lg: '7' }}>The Microsoft Power Platform is a powerful suite of tools that allows you to create intelligent, scalable, and automated applications with minimal coding. With Power BI, Power Apps, Power Automate, and Power Virtual Agents, you can streamline processes, boost productivity, and enable data-driven decision-making across your organization.</Text>
            <Flex direction={'row'} justify={'center'} align={'center'} gap={'6'} wrap={'wrap'}>
                {(Object.keys(logosMapping) as LogoKey[]).map((logo) => (
                    <Flex key={logo} direction={'column'} align='center' justify='center' gap={'5'} className='p-3 shadow-lg border-4 border-blue-800 w-full sm:w-1/1 md:w-1/3 lg:w-1/6'>
                        <LogoCard logoSrc={logosMapping[logo]} logoName={logo} />
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

export default EmpowerYourTeamWMPPBlock