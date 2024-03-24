import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-row h-full w-full justify-center items-center'>
      <div className=' flex flex-col'>
        <div>
          {' '}
          <h1>typography</h1>
        </div>
        <div> tagline</div>
      </div>
      <div>
        <h1> visuals</h1>
      </div>
    </div>
  );
};

export default Header;
