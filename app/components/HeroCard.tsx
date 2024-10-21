import React from 'react';

const HeroCard = () => {
  return (
    <div className='flex flex-col mb-4 lg:mb-0'>
      <div className='mb-4 flex'>
        <p className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-2xl lg:text-3xl font-bold text-transparent'>
          S
        </p>
        <p className='mr-2 text-2xl lg:text-3xl font-bold'>imple. </p>
        <p className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-2xl lg:text-3xl font-bold text-transparent'>
          F
        </p>
        <p className='mr-2 text-2xl lg:text-3xl font-bold'>ast. </p>
        <p className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-2xl lg:text-3xl font-bold text-transparent'>
          E
        </p>
        <p className='mr-2 text-2xl lg:text-3xl font-bold'>fficient.</p>
      </div>
      <div className='flex flex-wrap text-medium text-justify font-light'>
        Transform long, cluttered URLs into sleek, shareable links with
        pico.url. Whether for colleagues, customers, or friends, shorten links
        in seconds and track visits with our intuitive interface.
        <br/>
        <p className='font-semibold my-2'>
          Experience the power of pico-fying today!
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
