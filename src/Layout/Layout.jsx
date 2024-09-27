import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayOut;