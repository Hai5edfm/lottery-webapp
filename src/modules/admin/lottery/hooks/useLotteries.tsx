import { useSearchParams } from "next/navigation"

import { calculateSecondsFromTodayToDate } from "@/modules/utils/calculate-time-remaining"
import { LotteriesType } from "@/modules/utils/pagination"

import { useGetLotteriesQuery } from "@/modules/admin/lottery/services/rtkq/lottery"

export default function useLotteries() {
  const queryParams = useSearchParams()
  const offset = queryParams.get("offset") ?? 0
  const limit = queryParams.get("limit") ?? 10
  const type = queryParams.get("type") ?? LotteriesType.ALL

  const { data, isFetching, isError } = useGetLotteriesQuery({
    pagination: {
      limit: Number(limit),
      offset: Number(offset),
      type: type as LotteriesType,
    },
  })

  const lotteries =
    data?.data.map((lottery) => {
      const _timeRemaining = calculateSecondsFromTodayToDate(lottery.end_date)

      return {
        ...lottery,
        time: _timeRemaining,
        participants: {
          current: lottery.ammount_participants,
          max: lottery.max_participants,
        },
      }
    }) ?? []

  return {
    lotteries,
    isError,
    isFetching,
    lotteryType: type,
  }
}
