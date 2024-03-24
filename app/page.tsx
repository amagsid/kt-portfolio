import Image from 'next/image';
import Header from './sections/Header';

export default function Home() {
  return (
    <main className=' snap-y snap-mandatory overflow-scroll h-screen  w-screen  '>
      <div className='snap-start h-screen w-screen  bg-zinc-800'>
        <Header />
      </div>
      <div className='snap-start h-screen w-screen bg-purple-500'>2</div>
      <div className=' snap-start h-screen w-screen bg-rose-800'>3</div>
      <div className=' snap-start h-screen w-screen bg-blue-100'>4</div>
    </main>
  );
}
