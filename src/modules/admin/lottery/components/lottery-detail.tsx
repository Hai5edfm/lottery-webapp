import { type Lottery } from "@/modules/admin/lottery/interfaces"
import { useAppSelector } from "@/modules/redux/redux-hooks"

export default function LotteryDetail() {
  const lottery: Lottery = useAppSelector((state) => state.modal.data)

  if (!lottery) return null

  return (
    <section className="flex flex-col gap-10">
      <div className="flex w-full">
        <span className="basis-1/4 font-normal">Lottery name:</span>
        <span className="font-semibold">{lottery.lottery_name}</span>
      </div>
      <div className="flex w-full">
        <span className="basis-1/4 font-normal">Status:</span>
        <span className="font-semibold">{lottery.finished ? "Finished" : "Active"}</span>
      </div>
      <div className="flex w-full flex-col">
        <span className="basis-1/4 font-normal">Description</span>
        <span className="font-medium">{lottery.description}</span>
      </div>
    </section>
  )
}
