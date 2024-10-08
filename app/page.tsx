import React from 'react';
import Navbar from './components/Navbar';
import MainCard from './components/MainCard';

const Home = () => {
  return (
    <div className='flex h-screen flex-col font-sans'>
      <Navbar />
      <MainCard />
    </div>
  );
};

export default Home;
