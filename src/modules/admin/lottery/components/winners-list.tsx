import { type FC, useEffect, useState } from "react"
import { FaCopy, FaRegCopy } from "react-icons/fa"
import { PiArrowsClockwiseFill } from "react-icons/pi"

const prizesItemRankColor: Record<number, string> = {
  0: "bg-[#FCBE1E]",
  1: "bg-[#C7C7C7]",
  2: "bg-[#E4A84C]",
  // default #E4E4E4
}

const winners = [
  {
    name: "First winner",
    position: 1,
  },
  {
    name: "Second winner",
    position: 2,
  },
  {
    name: "Third winner",
    position: 3,
  },
]

export const WinnersList: FC = () => {
  const [winnerHovered, setWinnerHovered] = useState<number | null>(null)
  const [copied, setCopied] = useState<number | null>(null)
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(null)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div className="flex flex-col gap-4 font-semibold">
      {winners.map((winner, index) => (
        <div
          key={winner.position}
          className="flex items-center gap-4"
          onMouseEnter={() => setWinnerHovered(winner.position)}
        >
          <div
            className={`rounded-lg border-2 border-[#1E1E1E] px-3 py-1 text-[#1E1E1E] ${prizesItemRankColor[index]}`}
          >
            {winner.position}
          </div>
          <p className="text-2xl">{winner.name}</p>
          {winnerHovered === winner.position && (
            <div className="flex items-center">
              <button
                className="mr-2"
                onClick={() => copyToClipboard(winner.name, winner.position)}
              >
                {copied === winner.position ? <FaCopy size={24} /> : <FaRegCopy size={24} />}
              </button>
              <button>
                <PiArrowsClockwiseFill size={24} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
