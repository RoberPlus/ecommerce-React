import React from 'react';
import MainHeader from '../components/organisms/MainHeader';
import { Outlet } from 'react-router-dom';

function PublicPages() {
  return (
    <div>
      <MainHeader />
      {/* Con outlet, renderizamos todo lo demas */}
      <Outlet />
    </div>
  );
}

export default PublicPages;
