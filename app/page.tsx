import React from 'react';
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';

const Home = () => {
  return (
    <div className='flex h-screen flex-col font-sans'>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-background dark:bg-darkBackground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,140,246,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <MainCard />
    </div>
  );
};

export default Home;
