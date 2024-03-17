import {
  type CreateLotteryDTO,
  type CreateLotteryResponse,
  type GetLotteriesResponse,
} from "@/modules/admin/lottery/interfaces"
import { API_CREATE_LOTTERY_PATH, API_GET_LOTTERIES_PATH } from "@/modules/config/services.routes"
import { apiSlice } from "@/modules/redux/slices/api-slice"

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // queries
    getLotteries: builder.query<GetLotteriesResponse, void>({
      query: () => ({
        url: API_GET_LOTTERIES_PATH,
        method: "GET",
      }),
      // transformResponse: (response: GetLotteriesResponse) =>
      //   adaptLotteries({ response }),
      providesTags: ["lotteryList"],
    }),

    // mutations
    createLottery: builder.mutation<CreateLotteryResponse, CreateLotteryDTO>({
      query: (body) => ({
        url: API_CREATE_LOTTERY_PATH,
        method: "POST",
        body,
      }),
      invalidatesTags: ["lotteryList"],
    }),
  }),
  overrideExisting: true,
})

export const { useGetLotteriesQuery, useCreateLotteryMutation } = extendedApiSlice
