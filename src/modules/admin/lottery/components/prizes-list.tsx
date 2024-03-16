"use client"
import PrizesListItem from "@/modules/admin/lottery/components/prizes-list-item"
import { animations } from "@formkit/drag-and-drop"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"

export default function PrizesList() {
  const [parent, tapes] = useDragAndDrop<HTMLUListElement, string>(
    [
      "Depeche Mode",
      "Duran Duran",
      "Pet Shop Boys",
      "Kraftwerk",
      "Tears for Fears",
      "Spandau Ballet",
    ],
    {
      plugins: [animations()],
    }
  )

  return (
    <ul ref={parent} className="flex flex-col gap-5">
      {tapes.map((tape, index) => (
        <PrizesListItem item={{ name: tape, number: index }} key={tape} data-label={tape} />
      ))}
    </ul>
  )
}
