import { apiSlice } from "../api/apiSlice";
import { IAccountResponse } from "./types";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listAccounts: builder.query<IAccountResponse, void>({
      query: () => "/accounts",
    }),
  }),
});

export const { useListAccountsQuery } = accountApiSlice;
