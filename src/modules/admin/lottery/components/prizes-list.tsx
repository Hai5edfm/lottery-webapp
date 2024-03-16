import { useEffect } from "react"
import Image from "next/image"
import {
  type Control,
  type FieldErrors,
  useFieldArray,
  type UseFormRegister,
  type UseFormSetValue,
} from "react-hook-form"

import not_found_icon from "@/assets/images/404.png"
import PrizesListItem from "@/modules/admin/lottery/components/prizes-list-item"
import {
  type CreateLotterySchemaType,
  type PrizeListItem,
} from "@/modules/admin/lottery/schemas/create-lottery-schema"
import Button from "@/modules/ui/button"
import { animations } from "@formkit/drag-and-drop"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
interface PrizesListProps {
  register: UseFormRegister<CreateLotterySchemaType>
  errors: FieldErrors<CreateLotterySchemaType>
  control: Control<CreateLotterySchemaType>
  setValue: UseFormSetValue<CreateLotterySchemaType>
}

export default function PrizesList({ register, errors, control, setValue }: PrizesListProps) {
  // Control for fieldArrays in RHF
  const { fields, append, remove, swap } = useFieldArray({
    control: control,
    name: "prizesList",
  })

  const [parent, prizeList, dispatchDrag] = useDragAndDrop<HTMLUListElement, PrizeListItem>(
    [...fields],
    {
      plugins: [animations()],
    }
  )

  // SIDE EFFECT: Rerender with new added or removed item
  useEffect(() => {
    if (!setValue) return
    setValue("prizesList", [...fields])
    dispatchDrag([...fields])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields.length, setValue])

  // SIDE EFFECT: make the swap in react hook form after drag and drop
  useEffect(() => {
    prizeList.every((item, index) => {
      const currentField = fields[index]
      if (currentField.prizeId !== item.prizeId) {
        swap(
          index,
          prizeList.findIndex((_item) => _item.prizeId === currentField.prizeId)
        )
        return false
      }
      return true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prizeList])

  return (
    <div className="flex w-full flex-col gap-3">
      <h4 className="text-center font-semibold">
        Prizes list <span className="text-xs font-light">(optional)</span>
      </h4>
      {/* <p className="text-[#EF5656]">{errors.prizesList?.message}</p> */}

      {/* ADD PRIZE */}
      <Button
        type="button"
        className="ml-auto block bg-[#29A5FF] px-4 text-sm"
        onClick={() => {
          append({
            name: "",
            prizeId: crypto.randomUUID(),
          })
        }}
      >
        Add prize
      </Button>

      {/* LIST PRIZE */}
      {prizeList.length > 0 && (
        <ul ref={parent} className="flex flex-col gap-5">
          {prizeList.map((item, index) => {
            return (
              <PrizesListItem
                fieldIndex={index}
                key={item.prizeId}
                data-label={item.prizeId}
                onDeleteRow={() => {
                  remove(prizeList.findIndex((_item) => _item.prizeId === item.prizeId))
                }}
                register={register}
                errors={errors}
                itemId={item.prizeId}
              />
            )
          })}
        </ul>
      )}

      {/* EMPTY LIST */}
      {!prizeList ||
        (prizeList.length <= 0 && (
          <div className="flex flex-col items-center">
            <div className="relative aspect-[180/161] w-[min(180px,100%)]">
              <Image alt="" src={not_found_icon} fill sizes="(max-width: 768px) 100vw" />
            </div>
            <span className="text-sm font-semibold">No prizes added yet</span>
          </div>
        ))}
    </div>
  )
}
