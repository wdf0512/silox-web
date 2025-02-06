import { Button, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import siloxLogo from '@/public/images/X5.png'
import Link from 'next/link'

const NavBar = () => {
    return (
        <Flex p={'10px 30px'} justify={'between'} align={'center'}>
            <Image src={siloxLogo} alt='logo' width={100} height={100} />
            <Flex gap={'40px'} align={'center'}>
                <Link href={'/'} className='hover:text-blue-300 '>Services</Link>
                <Link href={'/'}>Contact</Link>
                <Button size={'3'}>Book a call</Button>
            </Flex>
        </Flex>
    )
}

export default NavBar