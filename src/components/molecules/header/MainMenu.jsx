import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Inicio
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/products">
            Productos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
