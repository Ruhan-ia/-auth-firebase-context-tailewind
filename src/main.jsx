import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProviders from './providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';
import Orders from './component/Orders';
import Profile from './component/Profile';



const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path: '/', 
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: '/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProviders>
  <RouterProvider router ={router}></RouterProvider>
  </AuthProviders>
  </React.StrictMode>,
)
