import { type FC } from "react"
import { FaClock, FaUsers } from "react-icons/fa"

import { type Lottery } from "@/modules/admin/lottery/interfaces"
import { useAppDispatch } from "@/modules/redux/redux-hooks"
import { openModal } from "@/modules/ui/modal/redux/modal-slice"

import useCountDown from "@/modules/utils/hooks/use-count-down"

interface Props {
  lottery: Lottery
}

export const LotteryCard: FC<Props> = ({ lottery }) => {
  const { lottery_name, time, participants } = lottery
  const dispatch = useAppDispatch()

  return (
    <article className="h-full min-h-[120px] w-full overflow-hidden rounded-lg bg-[#307EEF]/20 shadow-lg">
      <button
        className="h-full min-h-[120px] w-full"
        onClick={() => dispatch(openModal({ type: "lottery-detail", data: lottery }))}
      >
        {/* REFACTOR: INCORRECT USE DIV INSIDE BUTTON */}
        <div className="flex h-full w-full flex-col justify-between px-4 py-3 font-semibold">
          <h2 className="text-left text-sm">{lottery_name}</h2>
          <div className="mt-4 flex justify-between">
            <Counter time={time} />
            <p className="flex items-center gap-2">
              <FaUsers size={32} color="#EF5656" />
              <span>
                {participants.current}
                {participants?.max ? `/${participants.max}` : null}
              </span>
            </p>
          </div>
        </div>
      </button>
    </article>
  )
}

const Counter = ({ time }: { time: number }) => {
  const counter = useCountDown(time)

  return (
    <p className="flex items-center gap-2">
      <FaClock size={32} color="#29A5FF" />
      {counter}
    </p>
  )
}
