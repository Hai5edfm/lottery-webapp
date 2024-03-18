import { type Lottery } from "@/modules/admin/lottery/interfaces"
import { useAppDispatch, useAppSelector } from "@/modules/redux/redux-hooks"
import { openModal } from "@/modules/ui/modal/redux/modal-slice"
import ToggleSwitch from "@/modules/ui/toggle-switch/toggle-switch"

import { PrizesListResults } from "./prizes-list-results"

export default function LotteryDetail() {
  const lottery: Lottery = useAppSelector((state) => state.modal.data)

  const dispatch = useAppDispatch()

  if (!lottery) return null

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="flex w-full">
          <span className="basis-1/4 font-normal">Lottery name:</span>
          <span className="font-semibold">{lottery?.lottery_name}</span>
        </div>
        <div className="flex w-full">
          <span className="basis-1/4 font-normal">Status:</span>
          <span className="font-semibold">{lottery?.finished ? "Finished" : "Active"}</span>
        </div>
        <div className="flex w-full flex-col">
          <span className="basis-1/4 font-normal">Description</span>
          <span className="font-medium">{lottery?.description}</span>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="mb-4 text-center text-2xl font-semibold text-[#2792DF]">Participants</h3>
        <div className="flex w-full">
          <span className="basis-1/4 font-normal">Min:</span>
          <span className="font-semibold">{lottery?.min_participants}</span>
        </div>
        <div className="flex w-full">
          <span className="basis-1/4 font-normal">Max:</span>
          <span className="font-semibold">{lottery?.max_participants}</span>
        </div>
        <div className="mt-5 grid w-1/2 grid-cols-2">
          <p>Public access</p>
          <span>
            <ToggleSwitch checked={lottery?.public_access} disabled />
          </span>
        </div>
        {!lottery.public_access ? (
          <div className="mt-5 flex items-center gap-10">
            <p>Secret code:</p>
            <p className="text-wrap break-all font-semibold">{lottery?.secret_code}</p>
          </div>
        ) : null}

        <div className="mt-10">
          <h3 className="text-center text-2xl font-semibold text-[#2792DF]">Prizes</h3>
          <div className="my-5 grid w-1/2 grid-cols-2">
            <p>Number of winners:</p>
            <span className="font-semibold">{lottery?.number_of_winners}</span>
          </div>
        </div>
        <div>
          <PrizesListResults prizes={lottery?.prizes ?? []} />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => dispatch(openModal({ type: "join-lottery", data: lottery }))}
          className="w-2/3 rounded-md bg-[#7105E2] py-2 font-semibold text-white"
        >
          Join
        </button>
      </div>
    </section>
  )
}
