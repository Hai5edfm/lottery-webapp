import { type FC } from "react"

import { type Prize } from "../interfaces"

const prizesItemRankColor: Record<number, string> = {
  0: "bg-[#FCBE1E]",
  1: "bg-[#C7C7C7]",
  2: "bg-[#E4A84C]",
  // default #E4E4E4
}

interface Props {
  prizes: Prize[]
}

export const PrizesListResults: FC<Props> = ({ prizes }) => {
  return (
    <div className="font-semibold">
      <p className="text-center">Prizes list</p>

      <div className="flex flex-col gap-4">
        {prizes?.map((prize, index) => (
          <div key={prize.position} className="flex items-center gap-4">
            <div
              className={`rounded-lg border-2 border-[#1E1E1E] px-3 py-1 text-[#1E1E1E] ${prizesItemRankColor[index]}`}
            >
              {prize.position}
            </div>
            <p>{prize.prize}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
