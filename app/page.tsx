import Image from 'next/image'
import AdVideoBlock from './components/AdVideoBlock'
import ServicesBlock from './components/ServicesBlock'
import { Flex } from '@radix-ui/themes'
import BookConsultationBlock from './components/BookConsultationBlock'

export default function Home() {
  return (
    <Flex direction={'column'} className='overflow-x-hidden'>
      <AdVideoBlock />
      <ServicesBlock />
      <BookConsultationBlock />
    </Flex>
  )
}
