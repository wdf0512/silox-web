import Image from 'next/image'
import AdVideoBlock from './components/AdVideoBlock'
import ServicesBlock from './components/ServicesBlock'
import { Flex } from '@radix-ui/themes'
import BookConsultationBlock from './components/BookConsultationBlock'
import ScheduleBlock from './components/ScheduleBlock'
import FooterArea from './components/FooterArea'

export default function Home() {
  return (
    <Flex direction={'column'} className='overflow-x-hidden'>
      <AdVideoBlock />
      <ServicesBlock />
      <BookConsultationBlock />
      <ScheduleBlock />
      <FooterArea />
    </Flex>
  )
}
