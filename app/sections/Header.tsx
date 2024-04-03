'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import DynamicBgSphere from '../components/DynamicBgSphere';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';

const Header = () => {
  const scrollTarget = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['end end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log('Value:', value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      // style={{ scale }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className='relative h-screen '
      ref={scrollTarget}
      // style={{ opacity, position: 'relative' }}
    >
      <motion.div className='  flex flex-row  justify-center items-center'>
        <motion.div
          id='grained'
          className='  h-screen w-full flex flex-col justify-center items-center text-zinc-800  '
        >
          <motion.div
            // style={{
            //   translateY: translate,
            // }}
            className=' h-screen  flex flex-col justify-center items-center pointer-events-none'
          >
            {' '}
            <p className='text-rose-300 pb-4 w-full align-left leading-tight text-4xl sm:text-6xl font-normal mx-0 p-0 m-0 '>
              hero sextion shwoing,
            </p>
            <motion.p className='  leading-[60%] text-rose-300  text-4xl sm:text-[13rem] font-extrabold overflow-visible '>
              grained
              <br /> background
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
