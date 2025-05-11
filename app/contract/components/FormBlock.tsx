import { Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import FormDetail from './FormDetail'

const FormBlock = () => {
    return (
        <Flex direction={'column'} gap={'5'} align={'center'}>
            <Heading size={'7'}>Let&apos;s work together</Heading>
            <FormDetail />
        </Flex>
    )
}

export default FormBlock