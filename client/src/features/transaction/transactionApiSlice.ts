import { apiSlice } from "../api/apiSlice";
import {
  TxnListAPIRes,
  TxnCategoryChartAPIRes,
  TxnDateChartDataAPIRes,
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
  }),
});

export const {
  useListTransactionsQuery,
  useGetCategoryWiseCountQuery,
  useGetDatewiseCountQuery,
} = transactionApiSlice;
