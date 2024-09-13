import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
