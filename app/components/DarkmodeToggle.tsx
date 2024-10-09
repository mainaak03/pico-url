'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dark_mode from '../icons/dark_mode.svg';
import light_mode from '../icons/light_mode.svg';

const DarkmodeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);

  return (
    <>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? (
          <Image src={light_mode} height={24} width={24} alt='lightmode' />
        ) : (
          <Image src={dark_mode} height={24} width={24} alt='darkmode' />
        )}
      </button>
    </>
  );
};

export default DarkmodeToggle;
