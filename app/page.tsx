'use client';
import Image from 'next/image';
import Header from './sections/Header';
import NavBar from './components/NavBar';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';

export default function Home() {
  return (
    <main className='px-6 sm:px-24 md:px-48 snap-y snap-mandatory overflow-scroll h-screen bg-black  text-white '>
      <NavBar />
      <div
        className=' snap-start h-screen w-screen bg-gradient-to-r bg-black  '
        style={{ overflowY: 'hidden' }}
      >
        <div className='mt-20 '>
          <Header />
        </div>
      </div>
      <div className=' bg-gradient-to-r from-purple-500 to-pink-500 snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl '>
        <h1>swipe up</h1>
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl '>
        or down once
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-300 text-8xl'>
        to see page snap
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl'>
        phone app-like
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl'>
        behaviour
      </div>
    </main>
  );
}
