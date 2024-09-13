import { useState } from 'react';
import axios from 'axios';
import { setToken } from '../../helpers/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginTemplate from '../../templates/LoginTemplate';

function Login() {
  const API_URL = 'https://api-ecommerce.ed.team/api/v1/';
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${API_URL}public/login`, data)
      .then((response) => {
        setToken(response.data.data.token);
        nav('/');
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <LoginTemplate title={'Log In'}>
      <div className="pt-16 max-w-256 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button className="bg-gradient w-full" type="submit">
              Log In
            </button>
            <Link className="text-gray-500" to="/sign-up">
              Sign Up
            </Link>
          </div>
          {error && (
            <p className="text-center p-2 bg-red-100 text-red-800">
              {error?.response?.data?.data}
            </p>
          )}
        </form>
      </div>
    </LoginTemplate>
  );
}

export default Login;
