import Image from 'next/image'
import AdVideoBlock from './components/AdVideoBlock'
import ServicesBlock from './components/ServicesBlock'
import { Flex } from '@radix-ui/themes'

export default function Home() {
  return (
    <Flex direction={'column'}>
      <AdVideoBlock />
      <ServicesBlock />
    </Flex>
  )
}
