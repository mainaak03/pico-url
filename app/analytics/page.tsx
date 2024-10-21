import React from 'react';
import Navbar from '../components/Navbar';
import AnalyticsTable from '../components/AnalyticsTable';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Footer from '../components/Footer';

const Analytics = async () => {
  return (
    <div className='relative flex min-h-screen w-screen flex-col overflow-hidden bg-background font-sans text-foreground'>
      <div className='absolute bottom-3/4 left-1/2 h-[4000px] w-[4000px] -translate-x-1/2 transform rounded-full bg-secondary opacity-10 blur-3xl'></div>
        <Navbar />
        <div className='flex-grow overflow-x-auto'>
          <AnalyticsTable />
        </div>
        <Footer />
    </div>
  );
};

export default withPageAuthRequired(Analytics, {
  returnTo: '/api/auth/login',
});
