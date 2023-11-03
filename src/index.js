import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Car from './pages/Car/car';
import Contato from './pages/Contato/contato';

const router = createBrowserRouter ([
  {path: "/", element: <App />},
  {path:"/car", element: <Car />},
  {path:"/contato", element: <Contato/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


