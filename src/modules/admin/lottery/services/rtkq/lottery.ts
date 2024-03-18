import {
  type CreateLotteryDTO,
  type CreateLotteryResponse,
  type GetLotteriesResponse,
  type IJoinLottery,
  type LotteryResponse,
} from "@/modules/admin/lottery/interfaces"
import {
  API_CREATE_LOTTERY_PATH,
  API_GET_LOTTERIES_PATH,
  API_JOIN_LOTTERY_PATH,
} from "@/modules/config/services.routes"
import { apiSlice } from "@/modules/redux/slices/api-slice"
import {
  parseLotteriesPaginationObject,
  type QueryLotteriesPaginationProps,
} from "@/modules/utils/pagination"

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // queries
    getLotteries: builder.query<GetLotteriesResponse, QueryLotteriesPaginationProps>({
      query: ({ pagination }: QueryLotteriesPaginationProps) => ({
        url: API_GET_LOTTERIES_PATH + parseLotteriesPaginationObject(pagination),
        method: "GET",
      }),
      // transformResponse: (response: GetLotteriesResponse) =>
      //   adaptLotteries({ response }),
      providesTags: ["lotteryList"],
    }),
    getLottery: builder.query<LotteryResponse, any>({
      query: (slug) => ({
        url: `${API_GET_LOTTERIES_PATH}/${slug}`,
        method: "GET",
      }),
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
    joinLottery: builder.mutation<IJoinLottery, any>({
      query: ({ body, lottery_id }) => ({
        url: API_JOIN_LOTTERY_PATH + lottery_id,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: true,
})

export const {
  useGetLotteriesQuery,
  useGetLotteryQuery,
  useCreateLotteryMutation,
  useJoinLotteryMutation,
} = extendedApiSlice
