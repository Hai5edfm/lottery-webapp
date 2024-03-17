import { type FC } from "react"

const prizesItemRankColor: Record<number, string> = {
  0: "bg-[#FCBE1E]",
  1: "bg-[#C7C7C7]",
  2: "bg-[#E4A84C]",
  // default #E4E4E4
}

const prizesList = [
  {
    prize: "First prize",
    position: 1,
  },
  {
    prize: "Second prize",
    position: 2,
  },
  {
    prize: "Third prize",
    position: 3,
  },
]

export const PrizesListResults: FC = () => {
  return (
    <div className="font-semibold">
      <p className="text-center">Prizes list</p>

      <div className="flex flex-col gap-4">
        {prizesList.map((prize, index) => (
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
