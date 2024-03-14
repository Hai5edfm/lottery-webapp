import { type FC } from "react"
import { FaClock, FaUsers } from "react-icons/fa"

import { type LotteryCardProps } from "@/modules/interfaces"

interface Props {
  lotteryCard: LotteryCardProps
}

export const LotteryCard: FC<Props> = ({ lotteryCard }) => {
  const { name, time, participants } = lotteryCard

  return (
    <article className="h-full min-h-[120px] w-full overflow-hidden rounded-lg bg-[#307EEF]/20 shadow-lg">
      <button className="h-full min-h-[120px] w-full">
        <div className="flex h-full w-full flex-col justify-between px-4 py-3 font-semibold">
          <h2 className="text-left text-sm">{name}</h2>
          <div className="mt-4 flex justify-between">
            <p className="flex items-center gap-2">
              <FaClock size={32} color="#29A5FF" />
              {time}
            </p>
            <p className="flex items-center gap-2">
              <FaUsers size={32} color="#EF5656" />
              <span>
                {participants.current}/{participants.max}
              </span>
            </p>
          </div>
        </div>
      </button>
    </article>
  )
}
