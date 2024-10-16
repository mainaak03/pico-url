import React from 'react';
import DarkmodeToggle from './DarkmodeToggle';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';
import AnalyticsIcon from '../icons/AnalyticsIcon';

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
            className='mx-4 flex items-center p-2 dark:text-foreground'
          >
            <AnalyticsIcon width={20} height={20} className='text-foreground' />
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
