import { useEffect, useState } from "react"

import { type Lottery } from "@/modules/admin/lottery/interfaces"

import { useGetLotteryQuery } from "@/modules/admin/lottery/services/rtkq/lottery"

export default function useLottery(slug: string) {
  const [lottery, setLottery] = useState<Lottery>({} as Lottery)

  const { data, isFetching, isError } = useGetLotteryQuery(slug)

  useEffect(() => {
    if (!data) return

    console.log("data", data)
    const _lottery = data as Lottery

    setLottery(_lottery || {})

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]) // Update when either data or lotteryQueryParams change

  return {
    lottery,
    isError,
    isFetching,
  }
}
