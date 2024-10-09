import Form from './Form';
import HeroCard from './HeroCard';

const MainCard = () => {
  return (
    <div className='m-auto flex items-center justify-center w-3/5'>
      <div className="w-1/2 mx-8 h-full">
        <HeroCard />
      </div>
      <div className="w-1/2 mx-8 h-full">
        <Form />
      </div>
    </div>
  );
};

export default MainCard;
