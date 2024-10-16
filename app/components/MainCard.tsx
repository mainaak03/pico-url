import Form from './Form';
import HeroCard from './HeroCard';

const MainCard = () => {
  return (
    <div className='relative z-10 flex w-3/5 items-center justify-center lg:m-auto'>
      <div className='mx-8 h-full lg:w-1/2'>
        <HeroCard />
      </div>
      <div className='mx-8 h-full w-full lg:w-1/2'>
        <Form />
      </div>
    </div>
  );
};

export default MainCard;
