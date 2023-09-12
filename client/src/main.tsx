import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from './features/core/store.ts';
import Root from './features/core/routes/root.tsx';
import ListAccount from './features/account/routes/list.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: '/account',
            element: <ListAccount />
          },
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
