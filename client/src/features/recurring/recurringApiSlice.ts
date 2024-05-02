import { apiSlice } from "../api/apiSlice";
import { RecurringConfigListAPIResponse } from "./types";

const recurringApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listConfigs: builder.query<RecurringConfigListAPIResponse, void>({
      query: () => "/recurring",
    }),
  }),
});

export const { useListConfigsQuery } = recurringApiSlice;
