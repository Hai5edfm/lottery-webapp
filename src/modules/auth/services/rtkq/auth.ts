import { type LoginResponse } from "@/modules/auth/interfaces"
import { type LoginSchemaType } from "@/modules/auth/schemas/login-schema"
import { API_LOGIN_PATH } from "@/modules/config/services.routes"
import { apiSlice } from "@/modules/redux/slices/api-slice"

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // mutations
    login: builder.mutation<LoginResponse, LoginSchemaType>({
      query: (credentials) => ({
        url: API_LOGIN_PATH,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useLoginMutation } = extendedApiSlice
