'use client';

import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';
import FormDetail from './FormDetail';

const FormBlock = () => {
    return (
        <Flex
            direction="column"
            gap="5"
            align="center"
            className="px-4 md:px-8 lg:px-16 py-8 bg-white/30 backdrop-blur-lg rounded-xl shadow-md"
        >
            <Heading size="7" className="text-center text-2xl md:text-4xl">
                Let&apos;s work together
            </Heading>
            <FormDetail />
        </Flex>
    );
};

export default FormBlock;
