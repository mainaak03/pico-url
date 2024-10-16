import React from 'react';

const HeroCard = () => {
  return (
    <div className='m-2 flex flex-col p-2'>
      <div className='mb-4 flex'>
        <p className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent'>
          S
        </p>
        <p className='mr-2 text-3xl font-bold'>imple. </p>
        <p className='bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-3xl font-bold text-transparent'>
          F
        </p>
        <p className='mr-2 text-3xl font-bold'>ast. </p>
        <p className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-3xl font-bold text-transparent'>
          E
        </p>
        <p className='mr-2 text-3xl font-bold'>fficient.</p>
      </div>
      <div className='flex flex-wrap text-justify'>
        Transform long, cluttered URLs into sleek, shareable links with
        pico.url. Whether for colleagues, customers, or friends, shorten links
        in seconds and track visits with our intuitive interface. Experience the
        power of pico-fying today!
      </div>
    </div>
  );
};

export default HeroCard;
