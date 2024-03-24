import type { CategoryGroupListAPIRes } from "./types";
import { apiSlice } from "../api/apiSlice";

export const categoryGroupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listCategoryGroups: builder.query<CategoryGroupListAPIRes, void>({
      query: () => "/categoryGroup",
    }),
  }),
});

export const { useListCategoryGroupsQuery } = categoryGroupApiSlice;
