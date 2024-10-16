'use client';

import { useFormState } from 'react-dom';
import { createShortUrl } from '../actions';
import open_in_new from '../icons/open_in_new.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button, Input } from '@nextui-org/react';

const initialState = {
  message: '',
};

const Form = () => {
  const [state, formAction] = useFormState(createShortUrl, initialState);

  useEffect(() => {
    if (state.message) {
      const saved_urls = localStorage.getItem('pico');
      if (!saved_urls) {
        localStorage.setItem('pico', JSON.stringify([state.message]));
      } else {
        const urls: string[] = JSON.parse(saved_urls);
        urls.push(state.message);
        localStorage.setItem('pico', JSON.stringify(urls));
      }
    }
  }, [state.message]);

  const handleCopy = () => {
    navigator.clipboard.writeText(state.message || '');
  };

  const handleRedirect = () => {
    if (state.message) {
      window.open(state.message, '_blank');
    }
  };

  return (
    <div className='m-2 mx-auto flex p-2'>
      <form className='mx-auto' action={formAction}>
        <Input
          className='m-2'
          isRequired
          type='url'
          label='Your long URL'
          // placeholder='website.com/so-long'
          isClearable
          errorMessage={state.url_error}
          isInvalid={state.url_error ? true : false}
          id='original_url'
          name='original_url'
        />
        <Input
          className='m-2'
          isRequired
          type='password'
          label='Password for viewing analytics'
          // placeholder='secure-password'
          isClearable
          errorMessage={state.password_error}
          isInvalid={state.password_error ? true : false}
          id='password'
          name='password'
        />

        <p
          id='helper-text-explanation'
          className='m-2 w-full text-xs text-gray-400'
        >
          We’ll never sell your analytics. Read our{' '}
          <a href='#' className='font-medium text-primary hover:underline'>
            Privacy Policy
          </a>
          .
        </p>

        <p className='m-2 text-xs font-semibold text-red-500'>
          {state?.server_error}
        </p>

        {state.message && (
          <>
            <Input
              value={state.message || 'https://pico.url/test-url'}
              type='url'
              className='m-2'
              readOnly
              color='secondary'
              endContent={
                <Image
                  className='hover:cursor-pointer'
                  height={20}
                  width={20}
                  src={open_in_new}
                  alt='open-link-icon'
                  onClick={handleRedirect}
                />
              }
            />
            <div className='m-2 flex w-full items-center justify-between'>
              <Button
                color='primary'
                variant='flat'
                onClick={handleCopy}
                className='mr-1 w-1/2'
              >
                Copy link
              </Button>
              <Button
                type='reset'
                color='primary'
                variant='flat'
                onClick={() => window.location.reload()}
                className='ml-1 w-1/2'
              >
                Shorten another
              </Button>
            </div>
          </>
        )}

        {!state.message && (
          <Button
            className='mx-2 w-full'
            color='primary'
            variant='flat'
            type='submit'
          >
            Pico-fy!
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;
