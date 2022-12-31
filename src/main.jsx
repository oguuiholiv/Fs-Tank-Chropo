import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




import './global.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Login} from './Pages/Login/index'
import { Forgot } from './Pages/ForgotPass/index';


const router = createBrowserRouter([
  {
    path: "/Fs-Tank-Chropo/",
    element: <Login />,
  },
  {
    path: "/Fs-Tank-Chropo/Forgot",
    element: <Forgot />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
