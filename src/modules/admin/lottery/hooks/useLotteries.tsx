import { type Lottery } from "@/modules/admin/lottery/interfaces"
import { calculateSecondsFromTodayToDate } from "@/modules/utils/calculate-time-remaining"

import { useGetLotteriesQuery } from "@/modules/admin/lottery/services/rtkq/lottery"

export default function useLotteries() {
  // SERVICES
  const { data, isFetching, isError } = useGetLotteriesQuery()

  // ADAPT DATA for list loterries cards props, can refactor
  const lotteries: Lottery[] =
    data?.data.map((lottery) => {
      // calculate time remaining
      const timeRemaining = calculateSecondsFromTodayToDate(lottery.createdAt)

      return {
        ...lottery,
        time: timeRemaining,
        participants: {
          current: lottery.min_participants,
          max: lottery.max_participants,
        },
      }
    }) ?? []

  return {
    lotteries,
    isError,
    isFetching,
  }
}
