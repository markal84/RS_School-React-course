import SearchBar from '../components/SearchBar';
import { FC } from 'react';
import CardsList from '../components/CardsList';

const Home: FC = () => {
  return (
    <div>
      <SearchBar />
      <CardsList />
    </div>
  );
};

export default Home;
