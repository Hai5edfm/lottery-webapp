import { type LotteryCardProps } from "@/modules/interfaces"
import { calculateSecondsFromTodayToDate } from "@/modules/utils/calculate-time-remaining"

import { useGetLotteriesQuery } from "@/modules/admin/lottery/services/lottery"

export default function useLotteries() {
  // SERVICES
  const { data, isFetching, isError } = useGetLotteriesQuery()

  // ADAPT DATA for list loterries cards props, can refactor
  const lotteriesCardProps: LotteryCardProps[] =
    data?.data.map((lottery) => {
      // calculate time remaining
      const timeRemaining = calculateSecondsFromTodayToDate(lottery.createdAt)

      return {
        name: lottery.lottery_name,
        description: lottery.description,
        time: timeRemaining,
        participants: {
          current: lottery.min_participants,
          max: lottery.max_participants,
        },
        onClick: () => {
          console.log("TODO")
        },
      } as LotteryCardProps
    }) ?? []

  return {
    lotteries: data,
    lotteriesCardProps,
    isError,
    isFetching,
  }
}
