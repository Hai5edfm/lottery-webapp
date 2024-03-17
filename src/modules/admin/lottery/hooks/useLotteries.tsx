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
      // TODO IMPLEMENT with server end_date value instead createdAt
      const _timeRemaining = calculateSecondsFromTodayToDate(lottery.createdAt)

      return {
        ...lottery,
        time: Math.floor(Math.random() * (7000 - 300 + 1)) + 300,
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
