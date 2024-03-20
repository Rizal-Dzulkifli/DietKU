import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/LandingPage.jsx'

import Navbar from './components/NavBar.jsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Navbar />,
    
  },
  {
    path: "/masuk",
    element: <LandingPage />,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
