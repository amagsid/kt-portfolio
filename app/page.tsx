'use client';
import Image from 'next/image';
import Header from './sections/Header';
import NavBar from './components/NavBar';

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
      <div className=' bg-gradient-to-r from-purple-500 to-pink-500 snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl '></div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl '>
        to see
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-300 text-8xl'>
        my new
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl'>
        sportfolio
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl'>
        phone app-like behaviour
      </div>
    </main>
  );
}
