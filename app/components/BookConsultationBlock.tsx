'use client'

import React from 'react';
import { Box, Button, Flex, Heading } from '@radix-ui/themes';

const BookConsultationBlock = () => {
    const handleClick = () => {
        console.log('Consultation button clicked');
        // Add your booking logic here
    };

    return (
        <Box className="w-full">
            <div className="relative w-screen h-[60vh]">
                <video
                    src="/images/Homepage2.mp4"
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-black max-w-[80%] p-4 rounded-lg">
                        <Flex direction="column" gap="9" align="center">
                            <Heading className="text-2xl font-bold">
                                Empowering businesses to achieve efficiency and innovation through AI-driven automation,
                                transforming workflows for a smarter and more sustainable future.
                            </Heading>
                            <Button
                                size="3"
                                // className="hover:bg-blue-600 transition-colors duration-200 px-6 py-2 rounded-lg bg-blue-500 text-white cursor-pointer"
                                onClick={handleClick}
                            >
                                Book A Consultation Call
                            </Button>
                        </Flex>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default BookConsultationBlock;