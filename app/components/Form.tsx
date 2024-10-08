'use client';

import { useFormState } from 'react-dom';
import { createShortUrl } from '../actions';

const initialState = {
  message: '',
};

const Form = () => {
  const [state, formAction] = useFormState(createShortUrl, initialState);

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
          type='text'
          id='original_url'
          name='original_url'
          aria-describedby='helper-text-explanation'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-gray-200 dark:text-darkBackground'
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
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-gray-200 dark:text-darkBackground'
          placeholder='very-secure-password'
          // required
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
        <p className='my-2 text-xs font-semibold text-red-500'>
          {state?.message}
        </p>

        <div className='cf-turnstile flex justify-center items-center my-4' data-sitekey={process.env.TURNSTILE_SITE_KEY}></div>

        <button
          type='submit'
          className='mx-auto me-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl'
        >
          Pico-fy!
        </button>
      </form>
    </div>
  );
};

export default Form;
