import React from 'react';
import DarkmodeToggle from './DarkmodeToggle';
import Link from 'next/link';
import {
  Divider,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import AnalyticsIcon from '../icons/AnalyticsIcon';

import { Navbar } from '@nextui-org/react';
import NavAuth from './NavAuth';

const NavbarComp = () => {
  return (
    <>
    <Navbar className='bg-transparent'>
      <NavbarBrand>
        <Link href='/' className='text-2xl font-bold'>
          pico.url
        </Link>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Link href='/analytics'>
            <AnalyticsIcon width={20} height={20} className='text-foreground' />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DarkmodeToggle />
        </NavbarItem>
        <NavbarItem>
          <NavAuth />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <Divider className='h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent opacity-10' />
    </>
  );
};

export default NavbarComp;
