'use client';

import { useFormState } from 'react-dom';
import { createShortUrl } from '../actions';
import content_copy from '../icons/content_copy.svg';
import refresh_dark from '../icons/refresh_dark.svg';
import Image from 'next/image';
import { useEffect } from 'react';

const initialState = {
  message: '',
};

const Form = () => {
  const [state, formAction] = useFormState(createShortUrl, initialState);

  useEffect(() => {
    if (state.message) {
      const saved_urls = localStorage.getItem("pico");
      if (!saved_urls) {
        localStorage.setItem("pico", JSON.stringify([state.message]));
      }
      else {
        const urls: string[] = JSON.parse(saved_urls);
        urls.push(state.message);
        localStorage.setItem("pico", JSON.stringify(urls));
      }
    }
  }, [state.message]);

  const handleCopy = () => {
    navigator.clipboard.writeText(state.message||"");
  };

  const handleRedirect = () => {
    window.open(state.message, '_blank');
  }

  return (
    <div className='m-2 mx-auto flex p-2'>
      <form className='mx-auto max-w-sm' action={formAction}>
        <label
          htmlFor='original_url'
          className='mb-2 block text-sm font-medium'
        >
          Your long URL
        </label>
        <input
          type='url'
          id='original_url'
          name='original_url'
          aria-describedby='helper-text-explanation'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-gray-900 dark:text-darkBackground'
          placeholder='website.com/so-long'
          required
        ></input>

        <p className='my-2 text-xs font-semibold text-red-500'>
          {state?.url_error}
        </p>

        <label htmlFor='password' className='my-2 block text-sm font-medium'>
          Enter password for viewing analytics
        </label>
        <input
          type='password'
          id='password'
          name='password'
          aria-describedby='helper-text-explanation'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-gray-900 dark:text-darkBackground'
          placeholder='very-secure-password'
          required
        ></input>

        <p className='my-2 text-xs font-semibold text-red-500'>
          {state?.password_error}
        </p>

        <p
          id='helper-text-explanation'
          className='my-4 text-sm text-gray-500 dark:text-gray-400'
        >
          We’ll never sell your analytics. Read our{' '}
          <a
            href='#'
            className='font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            Privacy Policy
          </a>
          .
        </p>

        <p className='my-2 text-xs font-semibold text-red-500'>
          {state?.server_error}
        </p>
        
        {
          state.message
          &&
          <>
          <button
            type='button'
            onClick={handleRedirect}
            className='flex justify-between mx-auto me-2 w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-darkForeground'
          >
            {state.message||"TEST"}
          </button>
            <div className="flex justify-between items-center w-full">
                <span onClick={handleCopy} className='flex justify-center items-center p-2 w-1/2 my-2 mr-1 rounded-lg bg-[#ededed1d] hover:cursor-pointer text-darkForeground'>
                  <p>Copy link</p>
                  <Image className='mx-1' height={20} src={content_copy} alt='copy-icon' />
                </span>
                <span onClick={() => window.location.reload()} className='flex justify-center items-center p-2 w-1/2 my-2 ml-1 rounded-lg bg-[#ededed1d] hover:cursor-pointer text-darkForeground'>
                  <p>Shorten another</p>
                  <Image className='mx-1' height={20} src={refresh_dark} alt='refresh-icon' />
                </span>
            </div>
          </>
        }

        {
          !state.message
          &&
          <button
            type='submit'
            // className='mx-auto me-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl'
            className='mx-auto me-2 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl'
          >
            Pico-fy!
          </button>
        }
      </form>
    </div>
  );
};

export default Form;
