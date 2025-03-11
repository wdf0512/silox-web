import ImageHeadingComb from '@/app/components/ImageHeadingComb'
import copilotExcel from '@/public/images/Copilot-Excel.jpg'
import copilotOutlook from '@/public/images/Copilot-Outlook.jpg'
import copilotPowerPoint from '@/public/images/Copilot-PowerPoint.png'
import copilotWord from '@/public/images/Copilot-Word-30.png'
import { Flex, Grid, Heading } from '@radix-ui/themes'

const YourAIPoweredAssistantAcrossMF365Block = () => {
    return (
        <Flex direction='column'>
            <Flex justify='center' align='center'>
                <Heading size='8'>Your AI-Powered Assistant Across Microsoft 365</Heading>
            </Flex>
            <Grid columns={{
                initial: '1',
                md: '2'
            }} gap={'8'} p={'8'}>
                <ImageHeadingComb imageSrc={copilotWord} alt="copilot word" title='Microsoft Word' />
                <ImageHeadingComb imageSrc={copilotExcel} alt="copilot excel" title='Microsoft Excel' />
                <ImageHeadingComb imageSrc={copilotPowerPoint} alt="copilot powerpoint" title='Microsoft PowerPoint' />
                <ImageHeadingComb imageSrc={copilotOutlook} alt="copilot outlook" title='Microsoft Outlook' />
            </Grid>
        </Flex>
    )
}

export default YourAIPoweredAssistantAcrossMF365Block