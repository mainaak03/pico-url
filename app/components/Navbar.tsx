import React from 'react';
import DarkmodeToggle from './DarkmodeToggle';
import Image from 'next/image';
import analytics from '../icons/analytics.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex flex-row px-2 items-center justify-between w-3/5">
        <Link href="/" className='text-3xl mx-8 p-2 font-bold'>pico.url</Link>
        <div className="flex">
          <Link href="/analytics" className="flex mx-4 p-2 dark:text-foreground">
            <Image src={analytics} alt='analytics-icon' />
          </Link>
          <div className='flex mr-8 p-2'>
            <DarkmodeToggle />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-darkForeground to-transparent opacity-20"></div>
    </div>
  );
};

export default Navbar;
