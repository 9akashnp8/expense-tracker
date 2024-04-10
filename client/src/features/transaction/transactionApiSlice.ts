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
      query: () => "transactions",
    }),
    getCategoryWiseCount: builder.query<TxnCategoryChartAPIRes, void>({
      query: () => "transactions/groupedByCategory",
    }),
    getDatewiseCount: builder.query<TxnDateChartDataAPIRes, void>({
      query: () => "transactions/groupedByDate",
    }),
    getMonthlyTotal: builder.query<TxnMonthlyTotalChartAPIRes, number | string>(
      {
        query: () => "transactions/monthlyTotal",
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
