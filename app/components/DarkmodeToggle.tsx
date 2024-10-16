'use client';

import React, { useEffect, useState } from 'react';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';
import { useTheme } from 'next-themes';

const DarkmodeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'dark' ? (
        <SunIcon
          onClick={() => setTheme('light')}
          width={20}
          height={20}
          className='text-foreground'
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme('dark')}
          width={20}
          height={20}
          className='text-foreground'
        />
      )}
    </>
  );
};

export default DarkmodeToggle;
