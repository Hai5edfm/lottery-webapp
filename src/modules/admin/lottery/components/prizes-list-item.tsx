import { useState } from "react"
import { type FieldErrors, type UseFormRegister } from "react-hook-form"
import { FaTrash } from "react-icons/fa"
import { MdDragIndicator } from "react-icons/md"

import { type CreateLotterySchemaType } from "@/modules/admin/lottery/schemas/create-lottery-schema"
import Input from "@/modules/ui/input/input"
import { cn } from "@/modules/utils/cn"
const prizesItemRankColor: Record<number, string> = {
  0: "bg-[#FCBE1E]",
  1: "bg-[#C7C7C7]",
  2: "bg-[#E4A84C]",
  // default #E4E4E4
}

interface PrizesListItemProps {
  fieldIndex: number
  onDeleteRow: () => void
  register: UseFormRegister<CreateLotterySchemaType>
  errors: FieldErrors<CreateLotterySchemaType>
  itemId: string
}

export default function PrizesListItem({
  onDeleteRow,
  fieldIndex,
  register,
  errors,
  itemId,
}: PrizesListItemProps) {
  // STATE
  const [isHover, setIsHover] = useState(false)
  // STYLES
  const bgRankItemColor = prizesItemRankColor[fieldIndex] ?? "bg-[#E4E4E4]"
  return (
    <li
      className="flex flex-col gap-1"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-label={itemId}
      key={itemId}
    >
      <div className="flex items-center gap-1">
        <button className={cn("invisible", { visible: isHover })} type="button">
          <MdDragIndicator />
        </button>
        <div
          className={cn(
            "rounded-lg border-2 border-[#1E1E1E] px-3 py-1 font-bold",
            bgRankItemColor
          )}
        >
          {fieldIndex + 1}
        </div>
        <Input
          register={register}
          name={`prizesList.${fieldIndex}.name`}
          className="border-2 border-[#1E1E1E]"
        />
        <button
          className={cn("ml-auto mr-3 text-[#EF5656] invisible ", { visible: isHover })}
          onClick={onDeleteRow}
          type="button"
        >
          <FaTrash />
        </button>
      </div>
      <p className="text-[#EF5656]">{errors?.["prizesList"]?.[fieldIndex]?.name?.message}</p>
    </li>
  )
}
