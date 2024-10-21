import React from 'react';
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className='relative flex min-h-screen w-screen flex-col overflow-hidden bg-background font-sans text-foreground'>
      <div className='absolute bottom-3/4 left-1/2 h-[4000px] w-[4000px] -translate-x-1/2 transform rounded-full bg-secondary opacity-10 blur-3xl'></div>
        <Navbar />
        <MainCard />
        <Footer />
    </div>
  );
};

export default Home;
