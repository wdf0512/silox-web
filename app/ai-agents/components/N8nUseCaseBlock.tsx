import DevOpsImage from '@/public/images/devops_usecase_2x_e7e2903d5f.png'
import ITOpsImage from '@/public/images/itops_usecase_2x_1fbf6e467c.png'
import SalesImage from '@/public/images/sales_usecase_2x_bc60f04f89.png'
import SecOpsImage from '@/public/images/secops_usecase_2x_a2268c3be2.png'
import { Grid } from '@radix-ui/themes'
import ImageHeadingComb from './ImageHeadingComb'

const N8nUseCaseBlock = () => {
    return (
        <Grid columns={'2'} gap={'8'} p={'8'}>
            <ImageHeadingComb imageSrc={ITOpsImage} alt="ITOps Use Case" title='IT Ops' />
            <ImageHeadingComb imageSrc={DevOpsImage} alt="DevOps Use Case" title='DevOps' />
            <ImageHeadingComb imageSrc={SecOpsImage} alt="SecOps Use Case" title='SecOps' />
            <ImageHeadingComb imageSrc={SalesImage} alt="Sales Use Case" title='Sales' />
        </Grid>
    )
}

export default N8nUseCaseBlock