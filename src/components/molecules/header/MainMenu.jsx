import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { deleteToken, token } from '../../../helpers/auth';

function MainMenu() {
  const nav = useNavigate();

  const handleSession = () => {
    deleteToken();
    nav('/');
  };

  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/products">
            Products
          </Link>
        </li>
        {!token() ? (
          <li className="flex items-center">
            <Link className="menu-item" to="/login">
              Log In
            </Link>
          </li>
        ) : (
          <li className="flex items-center">
            <a onClick={handleSession} className="menu-item cursor-pointer">
              Log Out
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MainMenu;
