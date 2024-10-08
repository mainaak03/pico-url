import React from 'react';
import DarkmodeToggle from './DarkmodeToggle';

const Navbar = () => {
  return (
    <div className='mx-80 my-2 flex items-center justify-between p-2'>
      <div className='text-3xl font-bold'>pico.url</div>
      <div>
        <DarkmodeToggle />
      </div>
    </div>
  );
};

export default Navbar;
