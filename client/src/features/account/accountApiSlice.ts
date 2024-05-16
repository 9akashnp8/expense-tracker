import { apiSlice } from "../api/apiSlice";
import { IAccountResponse, IAccountTypeResponse } from "./types";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listAccounts: builder.query<IAccountResponse, void>({
      query: () => "/accounts",
    }),
    listAccountTypes: builder.query<IAccountTypeResponse, void>({
      query: () => "/account-types",
    }),
  }),
});

export const { useListAccountsQuery, useListAccountTypesQuery } =
  accountApiSlice;
