import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../types";

interface Response extends IResponse {
  data: string;
}

export const { useGetInsightsQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInsights: builder.query<Response, void>({
      query: () => "/analytics/ai-insights",
    }),
  }),
});
