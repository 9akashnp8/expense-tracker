import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../types";

interface Response extends IResponse {
  data: {
    sum?: string;
  };
}

export const { useGetMonthlySpendQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlySpend: builder.query<Response, void>({
      query: () => "/analytics/monthly-spend",
    }),
  }),
});
