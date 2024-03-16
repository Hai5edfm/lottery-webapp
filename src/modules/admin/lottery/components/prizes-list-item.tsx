"use client"
import { useState } from "react"
import { MdDragIndicator } from "react-icons/md"

import { cn } from "@/modules/utils/cn"

const prizesItemRankColor: Record<number, string> = {
  0: "bg-[#FCBE1E]",
  1: "bg-[#C7C7C7]",
  2: "bg-[#E4A84C]",
  // default #E4E4E4
}

interface PrizesListItemProps {
  item: {
    name: string
    number: number
  }
}

export default function PrizesListItem({ item }: PrizesListItemProps) {
  // STATE
  const [isHover, setIsHover] = useState(false)

  const { name, number } = item

  // STYLES
  const bgRankItemColor = prizesItemRankColor[number] ?? "bg-[#E4E4E4]"

  return (
    <li
      className={cn("flex items-center gap-1 pl-5", { "pl-0": isHover })}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <MdDragIndicator />}
      <div
        className={cn("rounded-lg border border-[#1E1E1E] px-3 py-1 font-bold", bgRankItemColor)}
      >
        {number}
      </div>

      <span className="pl-3 font-bold">{name}</span>
    </li>
  )
}
