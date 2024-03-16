import { type GetLotteriesResponse } from "@/modules/admin/lottery/interfaces"
import { API_GET_LOTTERIES_PATH } from "@/modules/config/services.routes"
import { apiSlice } from "@/modules/redux/slices/api-slice"

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLotteries: builder.query<GetLotteriesResponse, void>({
      query: () => ({
        url: API_GET_LOTTERIES_PATH,
        method: "GET",
      }),
      // transformResponse: (response: GetLotteriesResponse) =>
      //   adaptLotteries({ response }),
      providesTags: ["lotteryList"],
    }),
  }),
  overrideExisting: true,
})

export const { useGetLotteriesQuery } = extendedApiSlice
