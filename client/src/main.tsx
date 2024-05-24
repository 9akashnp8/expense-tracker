import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { Theme } from "@radix-ui/themes";

import { store } from "./features/core/store.ts";
import Root from "./features/core/routes/root.tsx";
import AccountRoot from "./features/account/routes/index.tsx";
import ListAccount from "./features/account/routes/list.tsx";
import CreateAccount from "./features/account/routes/create.tsx";
import CategoryListPage from "./features/category/pages/list.tsx";
import CreateCategoryPage from "./features/category/pages/create.tsx";
import CategoryGroupRoot from "./features/categoryGroup/pages/index.tsx";
import CategoryGroupListPage from "./features/categoryGroup/pages/list.tsx";
import CategoryGroupDetailPage from "./features/categoryGroup/pages/detail.tsx";
import CreateCategoryGroupPage from "./features/categoryGroup/pages/create.tsx";
import LabelRoot from "./features/label/pages/index.tsx";
import LabelListPage from "./features/label/pages/list.tsx";
import HomePage from "./features/core/routes/home.tsx";
import TransactionRoot from "./features/transaction/pages/index.tsx";
import TransactionListPage from "./features/transaction/pages/list.tsx";
import TransactionCreatePage from "./features/transaction/pages/create.tsx";
import RecurringRoot from "./features/recurring/pages/index.tsx";
import RecurringConfigListPage from "./features/recurring/pages/list.tsx";
import CreateRecurringConfig from "./features/recurring/pages/create.tsx";
import CreditCardSettingListPage from "./features/creditCardManager/pages/list.tsx";
import CreditCardManagerDetailPage from "./features/creditCardManager/pages/detail.tsx";
import CreditCardManagerCreatePage from "./features/creditCardManager/pages/create.tsx";
import UpdateCreditCardSettingPage from "./features/creditCardManager/pages/update.tsx";

import "./styles/radix.css";
import "./styles/custom.css";
import "@radix-ui/themes/styles.css";
import CategoryRoot from "./features/category/pages/index.tsx";
import CreateLabelPage from "./features/label/pages/create.tsx";
import CreditCardManagerRoot from "./features/creditCardManager/pages/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/account",
        element: <AccountRoot />,
        children: [
          {
            path: "",
            element: <ListAccount />,
          },
          {
            path: "create",
            element: <CreateAccount />,
          },
        ],
      },
      {
        path: "/category",
        element: <CategoryRoot />,
        children: [
          {
            path: "",
            element: <CategoryListPage />,
          },
          {
            path: "create",
            element: <CreateCategoryPage />,
          },
        ],
      },
      {
        path: "/categoryGroup",
        element: <CategoryGroupRoot />,
        children: [
          {
            path: "",
            element: <CategoryGroupListPage />,
          },
          {
            path: "create",
            element: <CreateCategoryGroupPage />,
          },
          {
            path: ":id",
            element: <CategoryGroupDetailPage />,
          },
        ],
      },
      {
        path: "/label",
        element: <LabelRoot />,
        children: [
          {
            path: "",
            element: <LabelListPage />,
          },
          {
            path: "create",
            element: <CreateLabelPage />,
          },
        ],
      },
      {
        path: "/transaction",
        element: <TransactionRoot />,
        children: [
          {
            path: "",
            element: <TransactionListPage />,
          },
          {
            path: "create",
            element: <TransactionCreatePage />,
          },
        ],
      },
      {
        path: "/recurring",
        element: <RecurringRoot />,
        children: [
          {
            path: "",
            element: <RecurringConfigListPage />,
          },
          {
            path: "create",
            element: <CreateRecurringConfig />,
          },
        ],
      },
      {
        path: "/credit-card-settings",
        element: <CreditCardManagerRoot />,
        children: [
          {
            path: "",
            element: <CreditCardSettingListPage />,
          },
          {
            path: "create",
            element: <CreditCardManagerCreatePage />,
          },
          {
            path: ":id",
            element: <CreditCardManagerDetailPage />,
          },
          {
            path: ":id/update",
            element: <UpdateCreditCardSettingPage />,
          },
          // {
          //   path: "create",
          //   element: <CreateRecurringConfig />,
          // },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <CssBaseline />
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  </React.StrictMode>,
);
