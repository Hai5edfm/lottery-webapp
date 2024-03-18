import { type FC, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { FaCopy, FaRegCopy } from "react-icons/fa"
import { PiArrowsClockwiseFill } from "react-icons/pi"

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

export const WinnersList: FC<Props> = ({ prizes }) => {
  const [winnerHovered, setWinnerHovered] = useState<number | null>(null)
  const [copied, setCopied] = useState<number | null>(null)
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
  }
  const isAdmin = !!Cookies.get("auth")

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
      {prizes?.map((prize, index) => (
        <div
          key={prize.position}
          className="flex items-center gap-4"
          onMouseEnter={() => setWinnerHovered(prize.position)}
        >
          <div
            className={`rounded-lg border-2 border-[#1E1E1E] px-3 py-1 text-[#1E1E1E] ${prizesItemRankColor[index]}`}
          >
            {prize.position}
          </div>
          <p className="text-2xl">{prize?.winner ?? "---"}</p>
          {winnerHovered === prize.position && isAdmin && (
            <div className="flex items-center">
              <button
                className="mr-2"
                onClick={() => copyToClipboard(prize?.winner ?? "", prize.position)}
              >
                {copied === prize.position ? <FaCopy size={24} /> : <FaRegCopy size={24} />}
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
