import type {
  CategoryGroupListAPIRes,
  CategoryGroupDetailAPIRes,
} from "./types";
import { apiSlice } from "../api/apiSlice";

export const categoryGroupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listCategoryGroups: builder.query<CategoryGroupListAPIRes, void>({
      query: () => "/category-groups",
    }),
    getCategoryGroup: builder.query<CategoryGroupDetailAPIRes, string>({
      query: (id) => `/category-groups/${id}`,
    }),
  }),
});

export const { useListCategoryGroupsQuery, useGetCategoryGroupQuery } =
  categoryGroupApiSlice;
