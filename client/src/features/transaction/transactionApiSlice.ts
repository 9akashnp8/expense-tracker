import { apiSlice } from "../api/apiSlice";
import { TxnListAPIRes } from "./types";

const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listTransactions: builder.query<TxnListAPIRes, void>({
      query: () => "http://localhost:3000/transaction",
    }),
  }),
});

export const { useListTransactionsQuery } = transactionApiSlice;
