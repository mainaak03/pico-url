import Form from './Form';
import HeroCard from './HeroCard';

const MainCard = () => {
  return (
    <div className='lg:m-auto flex items-center justify-center w-3/5 relative z-10'>
      <div className="lg:w-1/2 mx-8 h-full">
        <HeroCard />
      </div>
      <div className="lg:w-1/2 w-full mx-8 h-full">
        <Form />
      </div>
    </div>
  );
};

export default MainCard;
