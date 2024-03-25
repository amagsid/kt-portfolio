import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-row h-full w-full justify-center items-center'>
      <div
        id='grained'
        className='bg-pink-300 h-4/5 w-4/5 flex justify-center items-center text-zinc-800  '
      >
        <h1 className=' text-9xl font-extrabold '>animated noise </h1>
      </div>
      {/* <div className=' flex flex-col'>
        <div>
          {' '}
          <h1>typography</h1>
        </div>
        <div> tagline</div>
      </div>
      <div>
        <h1> visuals</h1>
      </div> */}
    </div>
  );
};

export default Header;
