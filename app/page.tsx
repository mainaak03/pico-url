import React from 'react';
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';

const Home = () => {
  return (
    <div className='relative flex w-screen overflow-hidden h-screen flex-col font-sans text-foreground bg-background'>
      <div className="absolute bottom-3/4 left-1/2 transform -translate-x-1/2 rounded-full opacity-10 bg-secondary w-[4000px] h-[4000px] blur-3xl"></div>
      <Navbar />
      <MainCard />
    </div>
  );
};

export default Home;
