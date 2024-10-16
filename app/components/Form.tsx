'use client';

import { useFormState } from 'react-dom';
import { createShortUrl } from '../actions';
import { useEffect, useState } from 'react';
import { Button, Input, Tooltip } from '@nextui-org/react';
import OpenLinkIcon from '../icons/OpenLinkIcon';
import VisibleIcon from '../icons/Visible';
import HiddenIcon from '../icons/Hidden';
import SubmitButton from './SubmitButton';

const initialState = {
  message: '',
};

const Form = () => {
  const [state, formAction] = useFormState(createShortUrl, initialState);
  const [tooltipActive, setTooltipActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (state.message) {
      const saved_urls = localStorage.getItem('pico');
      if (!saved_urls) {
        localStorage.setItem('pico', JSON.stringify(["https://" + state.message]));
      } else {
        const urls: string[] = JSON.parse(saved_urls);
        urls.push("https://" + state.message);
        localStorage.setItem('pico', JSON.stringify(urls));
      }
    }
  }, [state.message]);

  const handleCopy = () => {
    navigator.clipboard.writeText(state.message || '');
    setTooltipActive(true);
    setTimeout(() => {
      setTooltipActive(false);
    }, 2000);
  };

  const handleRedirect = () => {
    if (state.message) {
      window.open("https://" + state.message, '_blank');
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
          isClearable
          errorMessage={state.url_error}
          isInvalid={state.url_error ? true : false}
          id='original_url'
          name='original_url'
        />
        <Input
          className='m-2'
          isRequired
          type={hidden?'password':'text'}
          label='Password for viewing analytics'
          errorMessage={state.password_error}
          isInvalid={state.password_error ? true : false}
          id='password'
          name='password'
          endContent={
            hidden?<VisibleIcon height={20} width={20} onClick={() =>setHidden(!hidden)} />:<HiddenIcon height={20} width={20} onClick={() =>setHidden(!hidden)} />
          }
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

        <p className='m-2 text-xs font-semibold text-danger'>
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
                <OpenLinkIcon height={20} width={20} onClick={handleRedirect} />
              }
            />
            <div className='m-2 flex w-full items-center justify-between'>
              <Tooltip
                showArrow
                isOpen={tooltipActive}
                content='Copied to clipboard!'
                className='text-foreground'
                placement='left'
              >
                <Button
                  color='primary'
                  variant='flat'
                  onClick={handleCopy}
                  className='mr-1 w-1/2'
                >
                  Copy link
                </Button>
              </Tooltip>
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

        {!state.message &&
          <SubmitButton />
        }
      </form>
    </div>
  );
};

export default Form;
