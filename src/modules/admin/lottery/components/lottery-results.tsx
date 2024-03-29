import { type FC } from "react"
import { FaClock } from "react-icons/fa"

import { type Lottery } from "@/modules/admin/lottery/interfaces"
import ToggleSwitch from "@/modules/ui/toggle-switch/toggle-switch"

import { PrizesListResults } from "./prizes-list-results"

interface Props {
  lotteryCard: Lottery
}

const LotteryResultsCard: FC<Props> = ({ lotteryCard }) => {
  return (
    <div className="w-full rounded-xl bg-[#307EEF]/30 px-8 py-10">
      <h1 className="mb-14 text-2xl font-semibold">Lottery Results</h1>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <span className="min-w-[60px]">
          <FaClock size={62} color="#53B14A" className="mr-3" />
        </span>
        <span className="text-6xl font-semibold text-[#53B14A]">00:00:00</span>
      </div>
      <div>
        <div className="mt-5 grid grid-cols-10">
          <p>Lottery name:</p>
          <p className="col-span-6 col-end-10 font-semibold">{lotteryCard?.lottery_name}</p>
        </div>
        <div className="mt-5 grid grid-cols-10">
          <p>Status:</p>
          <p className="col-span-6 col-end-10 font-semibold">Finished</p>
        </div>
        <div className="mt-5">
          <p>Description:</p>
          <p className="font-semibold">{lotteryCard?.description}</p>
        </div>
      </div>
      <div>
        <p className="mt-10 text-center text-xl font-semibold">Participants</p>
        <div className="mt-5 grid w-1/4 grid-cols-2">
          <p>Min:</p>
          <p className="font-semibold">{lotteryCard?.min_participants}</p>
        </div>
        <div className="mt-5 grid w-1/4 grid-cols-2">
          <p>Max:</p>
          <p className="font-semibold">{lotteryCard?.max_participants}</p>
        </div>
        <div className="mt-5 grid w-1/2 grid-cols-2">
          <p>Public access</p>
          <span>
            <ToggleSwitch checked disabled />
          </span>
        </div>
        {!lotteryCard.public_access ? (
          <div className="mt-5 flex items-center gap-10">
            <p>Secret code:</p>
            <p className="text-wrap break-all font-semibold">{lotteryCard?.secret_code}</p>
          </div>
        ) : null}

        <div className="mt-10">
          <p className="text-center text-xl font-semibold">Prizes</p>
          <div className="my-5 grid w-3/4 grid-cols-2">
            <p>Number of winners:</p>
            <p className="font-semibold"> {lotteryCard?.number_of_winners}</p>
          </div>
          <PrizesListResults prizes={lotteryCard?.prizes ?? []} />
        </div>
      </div>
    </div>
  )
}

export default LotteryResultsCard
