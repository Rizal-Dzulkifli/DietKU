import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
  },
  {
    path: '/masuk',
    element: <LandingPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
