import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import Root from './routes/root'
import Transactions, { loader as transactionsLoader } from './routes/transactions'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "transactions",
                element: <Transactions />,
                loader: transactionsLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
