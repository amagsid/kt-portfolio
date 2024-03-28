import React from 'react';
import Image from 'next/image';
import DynamicBgSphere from '../components/DynamicBgSphere';

const Header = () => {
  return (
    <>
      <div className=' flex flex-row  justify-center items-center'>
        <div
          id='grained'
          className='  h-screen w-full flex flex-col justify-center items-center text-zinc-800  '
        >
          <div>
            {' '}
            <h1 className='text-rose-300  h-[65px] w-full align-left leading-tight text-4xl sm:text-6xl font-normal my-auto mx-0 '>
              Yo yo my dear stranger,
            </h1>
          </div>

          <h1 className=' leading-[60%] text-rose-300  text-4xl sm:text-[13rem] font-extrabold overflow-visible '>
            Karim <br /> youssef
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
