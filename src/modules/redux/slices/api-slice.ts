import { createApi } from "@reduxjs/toolkit/query/react"

import { API_URL } from "@/modules/config/services.routes"
import getBaseQuery from "@/modules/redux/utils/get-base-query"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: getBaseQuery(API_URL),
  endpoints: () => ({}),
})
