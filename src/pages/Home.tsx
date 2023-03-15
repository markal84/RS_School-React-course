import SearchBar from '../components/SearchBar';
import React, { FC } from 'react';
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
