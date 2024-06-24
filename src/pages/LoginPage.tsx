import React, { useState } from 'react';
import axios from 'axios';
import loginImage from '../images/login.png'; // Ensure you have a login image in your images folder
import { Link,useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
      navigate("/home");
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img src={loginImage} alt="Login" className="w-full h-full" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>New to Foodiee? <Link to="/register" className="text-blue-500">Create a new account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
