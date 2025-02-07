'use client';

import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import Image from 'next/image';
import FooterBg from '@/public/images/FooterBg.png';
import WhiteLogo from '@/public/images/WhiteLogo.png';
import XIcon from '@/public/images/XWhiteLogo.png';
import LinkedInLogo from '@/public/images/LinkedInLogo.png';
import YoutubeLogo from '@/public/images/YoutubeLogo.png';

const FooterArea = () => {
    return (
        <Flex
            style={{
                backgroundImage: `url(${FooterBg.src})`,
                height: '598px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // justifyContent: 'space-between',
                // alignItems: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            px={'138px'}
            direction={{
                md: 'row',
                xl: 'column'
            }}
            justify={'between'}
            align={'center'}
            className="md:flex-row items-center text-center md:text-left md: pb-10"
        >
            <Flex
                gap={'8'}
                direction={'column'}
                className="w-full md:w-auto items-center md:items-start xl:items-center"
            >
                <Image src={WhiteLogo} alt="WhiteLogo" width={200} height={200} />
                <Text className="text-white text-sm md:text-base">Headquartered in Sydney, Australia</Text>
            </Flex>

            <Flex
                gap={'5'}
                className="mt-6 md:mt-0 flex-wrap justify-center md:justify-start"
            >
                <Image className="hover:cursor-pointer w-[50px] md:w-[100px]" src={XIcon} alt="XIcon" width={100} height={100} />
                <Image className="hover:cursor-pointer w-[50px] md:w-[100px]" src={LinkedInLogo} alt="LinkedInLogo" width={100} height={100} />
                <Image className="hover:cursor-pointer w-[50px] md:w-[100px]" src={YoutubeLogo} alt="YoutubeLogo" width={100} height={100} />
            </Flex>
        </Flex>
    );
};

export default FooterArea;