import Image from 'next/image';
import Header from './sections/Header';

export default function Home() {
  return (
    <main className='snap-y snap-mandatory overflow-scroll h-screen bg-zinc-800  w-screen text-white  '>
      <div>heyhey</div>
      <div className='snap-start h-screen w-screen'>
        <Header />
      </div>
      <div className='snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl '>
        Swipe up
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl '>
        or down once
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-300 text-8xl'>
        to replicate
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-200 text-8xl'>
        snappy page
      </div>
      <div className=' snap-start h-screen w-screen flex justify-center items-center font-bold text-pink-100 text-8xl'>
        phone app-like behaviour
      </div>
    </main>
  );
}
