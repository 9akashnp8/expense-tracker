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
import AccountRoot from './features/account/routes/index.tsx';
import ListAccount from './features/account/routes/list.tsx';
import CreateAccount from './features/account/routes/create.tsx';

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
            element: <AccountRoot />,
            children: [
              {
                path: '',
                element: <ListAccount />
              },
              {
                path: 'create',
                element: <CreateAccount />
              }
            ]
          },
        ]
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
