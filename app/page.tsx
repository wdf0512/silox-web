import { Flex } from '@radix-ui/themes'
import AdVideoBlock from './components/AdVideoBlock'
import BookConsultationBlock from './components/BookConsultationBlock'
import ScheduleBlock from './components/ScheduleBlock'
import ServicesBlock from './components/ServicesBlock'

export default function Home() {
  return (
    <>
      <AdVideoBlock />
      <ServicesBlock />
      <BookConsultationBlock />
      <ScheduleBlock />
    </>
  )
}
