import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../types";

type Data = {
  name: string;
  sum: string;
};

interface Response extends IResponse {
  data: Data[];
}

export const { useGetCateorySpendQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCateorySpend: builder.query<Response, void>({
      query: () => "/analytics/category-spend",
    }),
  }),
});
