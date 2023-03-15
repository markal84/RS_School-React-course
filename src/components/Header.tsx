import React, { FC } from 'react';
import Navbar from './Navbar';

const Header: FC = () => {
  const path: string = window.location.pathname;

  return (
    <>
      <div className="Header">Current page: there will be current page name {path} </div>
      <Navbar />
    </>
  );
};

export default Header;
