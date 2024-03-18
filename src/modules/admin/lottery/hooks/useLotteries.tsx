import { useEffect, useState } from "react"

import { type Lottery } from "@/modules/admin/lottery/interfaces"
import { calculateSecondsFromTodayToDate } from "@/modules/utils/calculate-time-remaining"
import { LotteriesType } from "@/modules/utils/pagination"

import { useGetLotteriesQuery } from "@/modules/admin/lottery/services/rtkq/lottery"

export default function useLotteries() {
  const [lotteries, setLotteries] = useState<Lottery[]>([])
  const [lotteryQueryParams, setLotteryQueryParams] = useState({
    pagination: {
      limit: 10,
      offset: 0,
      type: LotteriesType.ALL,
    },
  })

  const { data, isFetching, isError } = useGetLotteriesQuery(lotteryQueryParams)

  useEffect(() => {
    if (!data) return

    const _lotteries = data?.data.map((lottery) => {
      const _timeRemaining = calculateSecondsFromTodayToDate(lottery.end_date)

      return {
        ...lottery,
        time: _timeRemaining,
        participants: {
          current: lottery.ammount_participants,
          max: lottery.max_participants,
        },
      }
    })

    setLotteries(_lotteries || [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, lotteryQueryParams]) // Update when either data or lotteryQueryParams change

  const changeLotteryType = (type: LotteriesType) => {
    setLotteryQueryParams((prevParams) => ({
      ...prevParams,
      pagination: {
        ...prevParams.pagination,
        type,
      },
    }))
  }

  return {
    lotteries,
    isError,
    isFetching,
    lotteryType: lotteryQueryParams.pagination.type,
    changeLotteryType,
  }
}
