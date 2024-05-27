import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './MainRouter/MainRouter.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={MainRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
