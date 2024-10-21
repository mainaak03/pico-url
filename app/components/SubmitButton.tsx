'use client';

import { Button } from '@nextui-org/react'
import React from 'react'
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
    const { pending } = useFormStatus();
  return (
    <Button
            className='w-full'
            color='primary'
            variant='flat'
            type='submit'
            isLoading={pending}
          >
            Pico-fy!
          </Button>
  )
}

export default SubmitButton