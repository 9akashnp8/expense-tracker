import { apiSlice } from "../api/apiSlice";
import { LabelListAPIResponse } from "./types";

const labelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listLabels: builder.query<LabelListAPIResponse, void>({
      query: () => "/labels",
    }),
  }),
});

export const { useListLabelsQuery } = labelApiSlice;
