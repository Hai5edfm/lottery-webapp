import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { useAppDispatch, useAppSelector } from "@/modules/redux/redux-hooks"
import { closeModal } from "@/modules/ui/modal/redux/modal-slice"

import JoinLotteryForm from "../join-lottery-form"

export const JoinLotteryModal = () => {
  const type = useAppSelector((state) => state.modal.type)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()

  const isModalOpen = isOpen && type === "join-lottery"

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => dispatch(closeModal())}>
        {/* OVERLAY */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/* CONTENT */}
        <div className="fixed inset-0 overflow-y-auto text-black">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-[min(640px,90%)] transform flex-col gap-10 rounded-2xl bg-[#E4E4E4] px-4  py-10 text-left shadow-xl transition-all md:px-20">
                <Dialog.Title as="h3" className="text-2xl font-semibold leading-9 text-black">
                  Join Lottery
                </Dialog.Title>
                <JoinLotteryForm />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
