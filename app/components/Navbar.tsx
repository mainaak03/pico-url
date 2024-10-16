import React from 'react';
import DarkmodeToggle from './DarkmodeToggle';
import Image from 'next/image';
import analytics from '../icons/analytics.svg';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';

const Navbar = () => {
  return (
    <div className='relative z-10 flex flex-col items-center justify-center'>
      <div className='flex w-3/5 flex-row items-center justify-between px-2'>
        <Link href='/' className='mx-8 p-2 text-3xl font-bold'>
          pico.url
        </Link>
        <div className='flex'>
          <Link
            href='/analytics'
            className='mx-4 flex p-2 dark:text-foreground'
          >
            <Image src={analytics} alt='analytics-icon' />
          </Link>
          <div className='mr-8 flex p-2'>
            <DarkmodeToggle />
          </div>
        </div>
      </div>
      <Divider className='h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent opacity-10' />
    </div>
  );
};

export default Navbar;
