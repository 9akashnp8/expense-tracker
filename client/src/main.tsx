import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Root from './features/core/routes/root.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Root />,
        children: []
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
