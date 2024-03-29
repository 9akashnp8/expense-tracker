import { apiSlice } from "../api/apiSlice";
import { LabelListAPIResponse } from "./types";

const labelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listLabels: builder.query<LabelListAPIResponse, void>({
      query: () => "http://localhost:3000/label",
    }),
  }),
});

export const { useListLabelsQuery } = labelApiSlice;
