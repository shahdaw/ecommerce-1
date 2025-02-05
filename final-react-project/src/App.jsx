import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Register from './pages/user/register/Register';
import Login from "./pages/user/login/Login";


export default function App() {

const router = createBrowserRouter([

{

  path:"/",
  element: <AuthLayout />,
  children: [
    {
      path:"register",
      element: <Register />,
    },

    {
      path:"login",
      element: <Login />,
    },
  ],
},
{
  path:"/dashboard",
  element: <DashboardLayout />,
},

]);

  
  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  );
}
