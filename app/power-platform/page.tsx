import { Flex } from '@radix-ui/themes'
import React from 'react'
import PowerPlatformTitle from './components/PowerPlatformTitle'
import CustomizedSolutionsBlock from './components/CustomizedSolutionBlock'
import ApplicationLifecycleManagementBlock from './components/ApplicationLifecycleManagementBlock'
import UnlockBusinessAgilityWPPSBlock from './components/UnlockBusinessAgilityWPPSBlock'
import EmpowerYourTeamWMPPBlock from './components/EmpowerYourTeamWMPPBlock'

const PowerPlatFormPage = () => {
    return (
        <>
            <PowerPlatformTitle />
            <CustomizedSolutionsBlock />
            <ApplicationLifecycleManagementBlock />
            <UnlockBusinessAgilityWPPSBlock />
            <EmpowerYourTeamWMPPBlock />
        </>
    )
}

export default PowerPlatFormPage