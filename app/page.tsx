'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Flex } from '@radix-ui/themes';
import AdVideoBlock from './components/AdVideoBlock';
import ServicesBlock from './components/ServicesBlock';
import BookConsultationBlock from './components/BookConsultationBlock';
import ScheduleBlock from './components/ScheduleBlock';
import FooterArea from './components/FooterArea';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // 定义每个区块的动画
  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div ref={containerRef} className="overflow-y-scroll h-screen overflow-x-hidden">
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [1, 0.9]) }}
      // className="space-y-20"
      >
        <AdVideoBlock />

        <motion.div
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ServicesBlock />
        </motion.div>

        <motion.div
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <BookConsultationBlock />
        </motion.div>

        <motion.div
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ScheduleBlock />
        </motion.div>

        <motion.div
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterArea />
        </motion.div>
      </motion.div>
    </div>
  );
}