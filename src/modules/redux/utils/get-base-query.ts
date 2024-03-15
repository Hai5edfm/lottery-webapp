import { type BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query"

const baseQuery = (API: string): BaseQueryFn => {
  return fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
  })
}

const getBaseQuery = (API: string): BaseQueryFn => {
  return baseQuery(API)
}

export default getBaseQuery
