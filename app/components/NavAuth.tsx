'use client';

import { Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';

const NavAuth = () => {
    const { user, error, isLoading } = useUser();
    if (error) return <div className="">Error</div>
  return (
    <>
    {
        user?
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
                    <DropdownItem textValue={user.name||""} key='username' >
                    <p>Signed in as</p>
                    <p className="font-semibold">{user.name}</p>
                    </DropdownItem>
                    <DropdownItem key="logout" className='text-danger' color="danger">
                    <a href="/api/auth/logout">Logout</a>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        :
            <Button isLoading={isLoading} color='primary' variant='flat'>
                <a href="/api/auth/login">Login</a>
            </Button>
    }
    </>
  )
}

export default NavAuth