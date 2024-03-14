import type React from "react"

import { type LotteryCardProps } from "@/modules/interfaces"

import { LotteryCard } from "./lottery-card"

interface Props {
  lotteries: LotteryCardProps[]
}

export const LotteryCardsList: React.FC<Props> = ({ lotteries }) => {
  return (
    <>
      {lotteries.map((lotteryCard) => (
        <LotteryCard key={lotteryCard.name} lotteryCard={lotteryCard} />
      ))}
    </>
  )
}
