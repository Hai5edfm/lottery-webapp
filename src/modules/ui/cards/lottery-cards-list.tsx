import type React from "react"

import { type Lottery } from "@/modules/admin/lottery/interfaces"

import { LotteryCard } from "./lottery-card"

interface Props {
  lotteries: Lottery[]
}

export const LotteryCardsList: React.FC<Props> = ({ lotteries }) => {
  return <>{lotteries?.map((lottery) => <LotteryCard key={lottery.id} lottery={lottery} />)}</>
}
