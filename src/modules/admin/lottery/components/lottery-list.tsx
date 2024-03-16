import Image from "next/image"

import not_found_icon from "@/assets/images/404.png"
import { LotteryCardsList } from "@/modules/ui/cards/lottery-cards-list"
import ListSkeleton from "@/modules/ui/skeleton/list-skeleton"

import useLotteries from "@/modules/admin/lottery/hooks/useLotteries"

export default function LotteryList() {
  const { lotteriesCardProps, isError, isFetching } = useLotteries()

  const isEmpty = lotteriesCardProps.length <= 0

  if (isFetching) return <ListSkeleton />
  // TODO handle error
  if (isError)
    return <h2 className="text-center text-[#EF5656]">Something went wrong loading lotteries.</h2>

  if (isEmpty)
    return (
      <div className="flex flex-col items-center">
        <div className="relative aspect-[180/161] w-[min(180px,100%)]">
          <Image alt="" src={not_found_icon} fill sizes="(max-width: 768px) 100vw" />
        </div>
        <span className="text-sm font-semibold">No loter added yet</span>
      </div>
    )

  return <LotteryCardsList lotteries={lotteriesCardProps} />
}
