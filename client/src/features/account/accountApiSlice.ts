import { apiSlice } from "../api/apiSlice";
import { IAccountResponse } from "./types";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listAccounts: builder.query<IAccountResponse, void>({
      query: () => "/accounts",
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listAccountTypes: builder.query<any, void>({
      // eslint-disable-line @typescript-eslint/no-explicit-any
      query: () => "/account-types",
    }),
  }),
});

export const { useListAccountsQuery, useListAccountTypesQuery } =
  accountApiSlice;
