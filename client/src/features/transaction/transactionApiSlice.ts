import { apiSlice } from "../api/apiSlice";
import { TxnListAPIRes } from "./types";

const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listTransactions: builder.query<TxnListAPIRes, void>({
      query: () => "transactions",
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getChartData: builder.query<any, string>({
      query: (chartType) => `transactions/charts?requestFor=${chartType}`,
    }),
  }),
});

export const { useListTransactionsQuery, useGetChartDataQuery } =
  transactionApiSlice;
