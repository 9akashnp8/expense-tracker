import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3000' // move this to environment

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})