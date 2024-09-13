import React from 'react';
import MainHeader from '../components/organisms/MainHeader';
import { Outlet } from 'react-router-dom';

function PublicPages() {
  return (
    <div>
      <MainHeader />
      <div className="pt-16 max-w-256 m-auto">
        {/* Con outlet, renderizamos todo lo demas */}
        <Outlet />
      </div>
    </div>
  );
}

export default PublicPages;
