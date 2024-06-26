import type { CategoryListAPIRes } from "./types";
import { apiSlice } from "../api/apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listCategories: builder.query<CategoryListAPIRes, void>({
      query: () => "/categories",
    }),
  }),
});

export const { useListCategoriesQuery } = categoryApiSlice;
