import { apiSlice } from "../api/apiSlice";
import {
  TxnListAPIRes,
  TxnCategoryChartAPIRes,
  TxnDateChartDataAPIRes,
  TxnMonthlyTotalChartAPIRes,
} from "./types";

const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listTransactions: builder.query<TxnListAPIRes, void>({
      query: () => "http://localhost:3000/transaction",
    }),
    getCategoryWiseCount: builder.query<TxnCategoryChartAPIRes, void>({
      query: () => "http://localhost:3000/transaction/groupedByCategory",
    }),
    getDatewiseCount: builder.query<TxnDateChartDataAPIRes, void>({
      query: () => "http://localhost:3000/transaction/groupedByDate",
    }),
    getMonthlyTotal: builder.query<TxnMonthlyTotalChartAPIRes, number | string>(
      {
        query: () => "http://localhost:3000/transaction/monthlyTotal",
      },
    ),
  }),
});

export const {
  useListTransactionsQuery,
  useGetCategoryWiseCountQuery,
  useGetDatewiseCountQuery,
  useGetMonthlyTotalQuery,
} = transactionApiSlice;
