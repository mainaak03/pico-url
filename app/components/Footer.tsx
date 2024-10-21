import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full rounded-lg bg-background shadow'>
      <div className='mx-auto px-6 max-w-[1024px] w-full p-2 md:py-2'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link
            href='/'
            className='mb-2 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
          >
            <span className='text-3xl font-bold'>P.</span>
          </Link>
          <ul className='mb-2 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <Link href='#' className='me-4 hover:underline md:me-6'>
                About
              </Link>
            </li>
            <li>
              <Link href='#' className='me-4 hover:underline md:me-6'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href='#' className='me-4 hover:underline md:me-6'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-1 border-foreground-300 sm:mx-auto lg:my-2' />
        <span className='block text-sm text-foreground-400 sm:text-center'>
          © {new Date().getFullYear()} {' '}
            pico.url™
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
