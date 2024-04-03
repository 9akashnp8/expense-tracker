import { apiSlice } from "../api/apiSlice";
import { TxnListAPIRes, TxnCategoryChartAPIRes } from "./types";

const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listTransactions: builder.query<TxnListAPIRes, void>({
      query: () => "http://localhost:3000/transaction",
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCategoryWiseCount: builder.query<TxnCategoryChartAPIRes, void>({
      query: () => "http://localhost:3000/transaction/groupedByCategory",
    }),
  }),
});

export const { useListTransactionsQuery, useGetCategoryWiseCountQuery } =
  transactionApiSlice;
