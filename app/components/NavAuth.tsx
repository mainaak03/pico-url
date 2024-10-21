'use client';

import {
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Link,
} from '@nextui-org/react';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const NavAuth = () => {
  const { user, error, isLoading } = useUser();
  if (error) return <div className=''>Error</div>;
  return (
    <>
      {user ? (
        <Dropdown placement='bottom-end' backdrop='blur'>
          <DropdownTrigger>
            <Avatar
              className='h-6 w-6 text-tiny hover:cursor-pointer'
              isBordered
              radius='sm'
              showFallback
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile actions' variant='flat'>
            <DropdownItem textValue={user.name || ''} key='username'>
              <p>Signed in as</p>
              <p className='font-semibold'>{user.name}</p>
            </DropdownItem>
            <DropdownItem key='logout' as={Link} href='/api/auth/logout' className='text-danger' color='danger'>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Button as={Link} href='/api/auth/login' isLoading={isLoading} color='primary' variant='flat'>
          {!isLoading && "Login"}
        </Button>
      )}
    </>
  );
};

export default NavAuth;
