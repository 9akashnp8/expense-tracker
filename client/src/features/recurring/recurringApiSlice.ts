import { apiSlice } from "../api/apiSlice";
import { RecurringConfigListAPIResponse } from "./types";

const recurringApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listConfigs: builder.query<RecurringConfigListAPIResponse, void>({
      query: () => "/recurring",
    }),
    createConfig: builder.mutation({
      query: (payload) => ({
        url: "/recurring",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useListConfigsQuery, useCreateConfigMutation } =
  recurringApiSlice;
