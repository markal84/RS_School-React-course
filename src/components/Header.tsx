import React, { FC } from 'react';
import Navbar from './Navbar';

const Header: FC = () => {
  const path: string = window.location.pathname;

  return (
    <>
      <Navbar />
      <div>Current page: there will be current page name {path} </div>
    </>
  );
};

export default Header;
