import { apiSlice } from "../api/apiSlice";
import {
  RecurringConfigListAPIResponse,
  RecurringStatsAPIResponse,
} from "./types";

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
    getStats: builder.query<RecurringStatsAPIResponse, void>({
      query: () => "/recurring/stats",
    }),
  }),
});

export const {
  useListConfigsQuery,
  useCreateConfigMutation,
  useGetStatsQuery,
} = recurringApiSlice;
