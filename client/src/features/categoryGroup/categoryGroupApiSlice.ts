import type {
  CategoryGroupListAPIRes,
  CategoryGroupDetailAPIRes,
} from "./types";
import { apiSlice } from "../api/apiSlice";

export const categoryGroupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listCategoryGroups: builder.query<CategoryGroupListAPIRes, void>({
      query: () => "/categoryGroup",
    }),
    getCategoryGroup: builder.query<CategoryGroupDetailAPIRes, string>({
      query: (id) => `/categoryGroup/${id}`,
    }),
  }),
});

export const { useListCategoryGroupsQuery, useGetCategoryGroupQuery } =
  categoryGroupApiSlice;
