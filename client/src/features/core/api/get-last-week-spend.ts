import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../types";

type Data = {
  txn_date_time: string;
  count: string;
};

interface Response extends IResponse {
  data: Data[];
}

export const { useGetLastWeekSpendQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLastWeekSpend: builder.query<Response, void>({
      query: () => "/analytics/last-week-spend",
    }),
  }),
});
