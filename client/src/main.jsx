import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import Root from './routes/root'
import ListTransactions, { loader as transactionsLoader } from './routes/transactions/list'
import TransactionForm, { loader as categoryLoader } from './routes/transactions/create.'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "transactions",
                element: <ListTransactions />,
                loader: transactionsLoader
            },
            {
                path: "transactions/create/",
                element: <TransactionForm />,
                loader: categoryLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
