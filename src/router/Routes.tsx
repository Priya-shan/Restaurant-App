import React from 'react';
import logo from './logo.svg';
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage';
import Restaurant from '../components/Restaurant'
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path:"/restaurant/:id",
    element: <Restaurant/>
  },
  {
    path:"/admin",
    element: <AdminPage/>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/register",
    element: <RegistrationPage/>
  }
  
]);

export default router
