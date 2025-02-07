import siloxLogo from '@/public/images/X5.png'
import { Button, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import ServicesDropdown from './components/ServicesDropdown'

const NavBar = () => {
    return (
        <Flex p="10px 30px" justify="between" align="center" className="relative">
            <Image src={siloxLogo} alt="logo" width={100} height={100} />

            <Flex gap="40px" align="center">
                <ServicesDropdown />

                <Link href="/" className="hover:text-blue-500 transition-all duration-300 font-medium">
                    Contact
                </Link>
                <Button size="3" className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
                    Book a call
                </Button>
            </Flex>
        </Flex>
    )
}

export default NavBar;