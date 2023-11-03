import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Car from './pages/Car/car';
import Contact from './pages/Contact/contact';

const router = createBrowserRouter ([
  {path: "/", element: <App />},
  {path:"/car", element: <Car />},
  {path:"/contact", element: <Contact/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


