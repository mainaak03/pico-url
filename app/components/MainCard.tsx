import Form from './Form';
import HeroCard from './HeroCard';

const MainCard = () => {
  return (
    <div className='z-10 flex m-auto flex-col mt-8 lg:flex-row px-6 max-w-[1024px] mx-auto lg:m-auto lg:items-center justify-center'>
      <div className='md:w-1/2 h-full md:m-auto lg:m-auto lg:w-1/2'>
        <HeroCard />
      </div>
      <span className='md:w-12 h-full lg:w-24 w-0'></span>
      <div className='md:w-1/2 md:m-auto lg:m-auto lg:w-1/2'>
        <Form />
      </div>
    </div>
  );
};

export default MainCard;
